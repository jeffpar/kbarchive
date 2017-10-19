---
layout: page
title: "Q279777: BUG: FOR EACH Reference Fails To Release Automation Server"
permalink: /kb/279/Q279777/
---

## Q279777: BUG: FOR EACH Reference Fails To Release Automation Server

	Article: Q279777
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport
	Last Modified: 13-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a FOR EACH loop to iterate through a collection of objects in an
	Automation Server, the server may not release correctly when you release the
	variables.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the CLEAR ALL command to clear all memory,
	including any hidden references. This may not be an optimal solution, however,
	because you may be depending on variables that should remain in memory, such as
	an application object.
	
	Another possible resolution is to find other ways to refer to the collection. For
	example, given the following code, you want to set a value for each cell in a
	range:
	
	  loRange = loWorkbook.ActiveSheet.Range("A1:D4,E5:H8")
	
	  *!* This loop will show the bug.
	  FOR EACH loCell in loRange
	     loCell.Value = "Fred"
	  ENDfor
	        
	  *!* This single command will not.
	  loRange.Value = "Fred"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To see this behavior with Microsoft Excel and Microsoft Windows NT and Microsoft
	Windows 2000, perform the following steps:
	
	1. Open the Task Manager, and confirm that no instance of Excel is currently
	  running.
	
	2. Open Visual FoxPro, and paste the following code into a .prg file:
	
	  LOCAL loExcel, lcFile, loWorkbook, lcRange, loCell, loRange
	
	  lcFile = GETFILE('XLS')
	
	  IF NOT EMPTY(lcFile)
	     loExcel = CREATEOBJECT('Excel.Application')
	     loExcel.Visible = .t.
	
	     loWorkbook = loExcel.Workbooks.Open(lcfile)
	     lcRange = loExcel.Selection.Address(.F., .F., 1)
	     loRange = loWorkbook.ActiveSheet.Range(lcRange)
	
	     FOR EACH loCell IN loRange
	        *!* Empty loop
	     NEXT
	
	     loCell = .NULL.
	     loRange = .NULL.
	
	     loExcel.Quit()
	  ENDif
	
	3. Run the program, and then select an Excel file.
	
	Note that although the Excel window goes away, an instance of Excel.exe is left
	in the Task Manager. If you comment out the FOR EACH loop, the instance releases
	properly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
