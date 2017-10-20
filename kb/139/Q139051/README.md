---
layout: page
title: "Q139051: HOWTO: Select Cells in Excel by Using OLE Automation"
permalink: /kb/139/Q139051/
---

## Q139051: HOWTO: Select Cells in Excel by Using OLE Automation

{% raw %}

	Article: Q139051
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbAutomation kbvfp300 kbvfp500 kbvfp600
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to use OLE Automation programmatically to
	create a Microsoft Excel worksheet, and select a range of cells.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. In Visual FoxPro, create and run a program (.prg file) that contains the
	  following code:
	
	        * Start of program code
	        *
	        MyF3 = ON("KEY","F3")
	        ON KEY LABEL F3 DO getout
	        
	        oleWorkBook = getobject("C:\BOOK1.XLS")
	        WITH oleWorkBook.Application
	           .Visible = .t.
	        
	           .Windows(1).Visible = .t.
	           *Selects cells A1:D5, then makes cell D1 the active cell.
	           .ActiveSheet.Range("A1:D5").Select
	        ENDWITH
	        READ EVENTS
	        
	        PROCEDURE getout
	        Clear EVENTS
	        oleExcel.Quit
	        ON KEY LABEL F3 &MyF3
	        
	        * End of program code
	
	2. After Microsoft Excel starts, cells A1 through D5 should be selected.
	
	3. Switch back to Visual FoxPro, and press the F3 key to terminate Microsoft
	  Excel.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbinterop kbAutomation kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
