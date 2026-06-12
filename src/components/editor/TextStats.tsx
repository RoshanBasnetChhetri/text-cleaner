import { Card, CardContent } from "../ui/card";

type TextStatsProps = {
    characterCount:number;
    wordCount:number;
}

export function TextStats({characterCount,wordCount}:TextStatsProps){
 return(
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardContent className="pt-6">
      <p className="text-sm text-muted-foreground">Characters: </p>
      <h2 className="text-3xl font-bold">{characterCount}</h2>
      </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
           <p className="text-sm text-muted-foreground">Words: </p>
           <h2 className="text-3xl font-bold">{wordCount}</h2>
        </CardContent>
     
      </Card>
      
      
    </div>
 )
}