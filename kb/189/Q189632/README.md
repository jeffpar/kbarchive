---
layout: page
title: "Q189632: BUG: Error in CoolBar Event Can Cause Hanging or Exception"
permalink: kb/189/Q189632/
---

## Q189632: BUG: Error in CoolBar Event Can Cause Hanging or Exception

	Article: Q189632
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp500bug kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a CoolBar control, your compiled application hangs or generates an
	exception error or invalid page fault (IPF.)
	
	CAUSE
	=====
	
	An unhandled error occurred in one of the CoolBar's Events.
	
	RESOLUTION
	==========
	
	Handle the error with an On Error routine.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem only occurs in the compiled application and does not occur from the
	IDE. When an unhandled error occurs in one of the CoolBar's events, it hangs the
	application in Windows 95, but under Windows 2000, Windows NT 4, Windows 98, or
	Windows Me, it may produce an exception or IPF error.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a New Standard EXE project. Form1 is created by default.
	
	2. Choose Components from the Project menu, check "Microsoft Windows Common
	  Controls-3" and click OK.
	
	3. Place a CoolBar control onto the form. CoolBar1 is created by default.
	
	4. Place this code in the form's module:
	
	        Private Sub CoolBar1_Click()
	           Err.Raise 5
	        End Sub
	
	5. Choose Make exe from the File menu, and create an executable file.
	
	6. Run the exe and click on the CoolBar control. (NOTE: You must click on one of
	  the bars that separates the Bands rather than the Bands themselves.)
	
	  You should get a dialog for Run-time error '5': "Invalid procedure call or
	  argument" and the application should end. Instead, the application will
	  either hang or generate an exception error or IPF.
	
	7. Replace the code in the CoolBar's Click Event with this code which contains
	  an error handler:
	
	        Private Sub CoolBar1_Click()
	           On Error Goto CBErr
	           Err.Raise 5
	           Exit Sub
	        CBErr:
	           MsgBox "Error " & Err.Number & ": " & Err.Description
	           Resume Next
	        End Sub
	
	8. Repeat steps 5 and 6. This time you will get an error message, after which
	  the application continues running normally.
	
	Additional query words: freeze lock GPF
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp500bug kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
