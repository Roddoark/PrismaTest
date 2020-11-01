import React from 'react'
import Label from '../components/Label/Label'
import Select from '../components/Select/Select'

export default function MoviesList() {
    return (
        <section className="container">
            <h2 className="section-title">Tous les films</h2>
            <div className="d-flex">
                <div className="mr-50">
                    <Label htmlFor="alphabeticalOrder">Trier par</Label>
                    <Select id="alphabeticalOrder" defaultSelect="Ordre alphabétique" />
                </div>
                <div>
                    <Label htmlFor="gender">Filtrer par</Label>
                    <Select id="gender" defaultSelect="Genre" />
                    <Select className="ml-10" id="gender" defaultSelect="Année" />
                </div>
            </div>
        </section>
    )
}
