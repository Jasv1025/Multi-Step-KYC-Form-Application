type Props = {
    step: number;
    total: number;
};
  
export default function ProgressBar({ step, total }: Props){
    const percent = ((step + 1) / total) * 100;
    return(
      <div className="w-full bg-gray-200 h-2 rounded mb-4">
        <div
          className="h-2 bg-blue-500 rounded transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    );
}  