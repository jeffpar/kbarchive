---
layout: page
title: "Q239573: WD97: Changes Not Applied to Merged Cell"
permalink: kb/239/Q239573/
---

## Q239573: WD97: Changes Not Applied to Merged Cell

	Article: Q239573
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set more than one property of a merged cell within a Word table through
	a Range object of a Cell object, none of the changes is applied to the merged
	cell.
	
	
	WORKAROUND
	==========
	
	To work around this problem, refresh the Cell object and Range object references
	between the setting of a single property on a cell within a table with merged
	cells. As illustrated in the following example code:
	
	  Sub BuildTable()
	    ' Create the table with merged cell
	    ActiveDocument.Tables.Add Range:=Selection.Range, NumRows:=4, NumColumns:=4
	    With ActiveDocument.Tables(1)
	          .Cell(Row:=1, Column:=3).Merge _
	          MergeTo:=.Cell(Row:=2, Column:=3)
	         .Cell(Row:=2, Column:=1).Merge _
	          MergeTo:=.Cell(Row:=4, Column:=2)
	    End With
	    shadecell
	  End Sub
	
	  Sub shadecell()
	    Dim i As Integer
	    Dim mycellrange As Range
	    Dim startrange As Range
	      For i = 1 To ActiveDocument.Tables(1).Range.Cells.Count
	          Set mycellrange = ActiveDocument.Tables(1).Range.Cells(i).Range
	          Set startrange = ActiveDocument.Range(Start:=mycellrange.Start, _
	            End:=mycellrange.Start)
	          With startrange.Cells.Shading
	            .BackgroundPatternColorIndex = wdBrightGreen
	          End With
	          'MsgBox "cell = " & i
	      Next i
	      For i = 1 To ActiveDocument.Tables(1).Range.Cells.Count
	          Set mycellrange = ActiveDocument.Tables(1).Range.Cells(i).Range
	          Set startrange = ActiveDocument.Range(Start:=mycellrange.Start, _
	            End:=mycellrange.Start)
	          With startrange.Cells.Shading
	            .Texture = wdTexture25Percent
	          End With
	      Next i
	      For i = 1 To ActiveDocument.Tables(1).Range.Cells.Count
	          Set mycellrange = ActiveDocument.Tables(1).Range.Cells(i).Range
	          Set startrange = ActiveDocument.Range(Start:=mycellrange.Start, _
	            End:=mycellrange.Start)
	          With startrange.Cells.Shading
	            .ForegroundPatternColorIndex = wdAuto
	          End With
	      Next i
	  End Sub
	
	RESOLUTION
	==========
	
	To resolve the problem described in this article, obtain and install the latest
	Microsoft Word 97 update from the following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/Wd97mcrs.aspx
	
	IMPORTANT NOTE: Microsoft Word 97 post-service release fixes are cumulative. The
	latest update contains all of the fixes since Service Release 2. If you install
	the latest update for Word 97, you do not need to install any other updates
	after Service Release 2.
	
	For additional information about the fixes included in the latest update for Word
	97, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q265374 WD97: Post Service Release Fixes for Word 97
	
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
