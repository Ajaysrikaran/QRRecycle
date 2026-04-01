type DeviceCardProps = {
    name: string;
    materials: string[];
    parts: string[];
    repair: string;
    recycling: string;
};

export default function DeviceCard({
                                       name,
                                       materials,
                                       parts,
                                       repair,
                                       recycling,
                                   }: DeviceCardProps) {
    return (
        <div className="card">
            <h2>Gerät: {name}</h2>

            <p>
                <strong>Materialien:</strong> {materials.join(", ")}
            </p>

            <p>
                <strong>Bauteile:</strong> {parts.join(", ")}
            </p>

            <p>
                <strong>Reparatur:</strong> {repair}
            </p>

            <p>
                <strong>Recycling:</strong> {recycling}
            </p>
        </div>
    );
}