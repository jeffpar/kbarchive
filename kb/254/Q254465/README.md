---
layout: page
title: "Q254465: PRB: Top-Level Form w/Intellimouse Causes Page Fault in Explorer"
permalink: kb/254/Q254465/
---

## Q254465: PRB: Top-Level Form w/Intellimouse Causes Page Fault in Explorer

	Article: Q254465
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbOSWin98 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 24-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Intellimouse with top-level forms, you may receive
	the following error message:
	
	  Explorer has caused an invalid page fault in module
	  <unknown>0000:0c2c9d90
	
	CAUSE
	=====
	
	This occurs with versions of Point32.exe that shipped before IntelliPoint 3.0.
	
	RESOLUTION
	==========
	
	Download the latest versions of the Microsoft Mouse drivers at the following
	Microsoft Web site:
	
	  http://www.microsoft.com/products/hardware/mouse/driver/
	
	NOTE: It appears that this problem can also be resolved by removing the
	Mswheel.exe file on systems with the older software.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce this behavior, you must have Microsoft Windows 98 installed, and a
	version of Point32.exe prior to 3.00.0307. (Note that version 14 is prior to
	3.00.0307.)
	
	1. Create a new project (TopForm.pjx).
	
	2. Paste the following code in a .prg file (TopForm.prg) in TopForm.pjx:
	
	  loForm = CREATEOBJECT("frmTopLevel")
	  loForm.Show()
	  READ EVENTS
	
	  DEFINE CLASS frmTopLevel AS form
	
	     Height = 106
	     Width = 264
	     AutoCenter = .T.
	     Caption = "Top-Level Form"
	     Name = "frmTopLevel"
	     ShowWindow = 2
	
	     ADD OBJECT lblNote AS label WITH ;
	        Caption = "Someone ought to open up a window!", ;
	        Height = 17, ;
	        Left = 36, ;
	        Top = 24, ;
	        Width = 209, ;
	        Name = "lblNote"
	
	     ADD OBJECT cmdExit AS commandbutton WITH ;
	        Top = 60, ;
	        Left = 156, ;
	        Height = 27, ;
	        Width = 84, ;
	        Caption = "Exit", ;
	        Name = "cmdExit"
	
	     PROCEDURE QueryUnload
	        CLEAR EVENTS
	     ENDPROC
	
	     PROCEDURE cmdExit.Click
	        IF ThisForm.QueryUnload()
	           ThisForm.Release()
	        ENDif
	     ENDPROC
	  ENDDEFINE
	
	3. Set TopForm.prg as the Main program, and build an EXE (TopForm.exe).
	
	4. Run TopForm.exe from the Start Menu or Windows Explorer.
	
	You may see the error message mentioned above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbOSWin98 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
