import { useEffect, useState } from 'react';

const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

const PROJECTS_TABLE = "Projects";
const ASSETS_TABLE = "Assets";
const SKILLS_TABLE = "Skills";

function fetchTable(tableName) {
  return fetch(`https://api.airtable.com/v0/${BASE_ID}/${tableName}?sort[0][field]=order&sort[0][direction]=desc`, {
    headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` }
  }).then(res => res.json());
}

let cachedData = null;
let fetchPromise = null;

function loadAllData() {
    if (cachedData) return Promise.resolve(cachedData);
    if (fetchPromise) return fetchPromise;

    fetchPromise = Promise.all([
        fetchTable(PROJECTS_TABLE),
        fetchTable(ASSETS_TABLE),
        fetchTable(SKILLS_TABLE)
    ]).then(([projectsData, assetsData, skillsData]) => {
        const workList = projectsData.records.map(record => ({ ...record.fields }));

        const assets = {};
        assetsData.records.forEach(record => {
            assets[record.fields.id] = record.fields.img?.[0]?.url ?? null;
        });

        const skills = {};
        skillsData.records.forEach(record => {
            skills[record.fields.skill] = record.fields.img?.[0]?.url ?? null;
        });

        cachedData = { workList, assets, skills };
        return cachedData;
    });

    return fetchPromise;
}


export function useWorkList() {
    const [data, setData] = useState(cachedData); // instant if already loaded
    const [loading, setLoading] = useState(!cachedData);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (cachedData) return; // already have it, nothing to do

        loadAllData()
            .then(setData)
            .catch(err => {
                console.error('Error loading Airtable:', err);
                setError(err);
            })
            .finally(() => setLoading(false));
    }, []);

    return {
        workList: data?.workList ?? [],
        assets: data?.assets ?? {},
        skills: data?.skills ?? {},
        loading,
        error
    };
}