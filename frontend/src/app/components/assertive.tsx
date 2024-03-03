import "../styles/assertive.css";

export function Assertive() {
    return (
        <div aria-live="assertive" className="pointer-events-none fixed inset-0 z-toast flex items-end p-2 sm:items-start sm:px-6 sm:py-16">
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
            </div>
        </div>
    );
}