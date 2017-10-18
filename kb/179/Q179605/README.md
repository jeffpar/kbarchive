---
layout: page
title: "Q179605: PRB: Cannot Quit VFP When Previewing Report in a DESKTOP Window"
permalink: kb/179/Q179605/
---

## Q179605: PRB: Cannot Quit VFP When Previewing Report in a DESKTOP Window

	Article: Q179605
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a report preview to a window defined with the DESKTOP clause that
	is larger than the FoxPro desktop, the preview data does not appear and you are
	unable to quit Visual FoxPro.
	
	RESOLUTION
	==========
	
	If the contents of a preview must be sent to a defined window, do not use the
	DESKTOP clause when creating the window.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	WARNING: After running this code you will be unable to close Visual FoxPro
	through normal means. Use Task Manager in Windows NT or the Close Program dialog
	box in Windows 95 to close Visual FoxPro. Before running this code, close all
	running applications and save your data. To close all open applications, press
	the CTRL+ALT+Delete keys to open the Windows Task Manager or Close Program
	dialog box, and then close all the other applications you have running. Note
	that following the steps below may produce lost allocation units, lost clusters,
	or cross-linked files.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a quick report named Ztest based on any table.
	
	2. Create a program called Zprevtest that contains the following code:
	
	        MODIFY WINDOW SCREEN FROM 0,0 TO 35, 110 FONT "Arial", 14
	        DEFINE WINDOW Ztest IN DESKTOP FROM 0,0 TO 35, 138 FONT "Arial", ;
	        14 TITLE "On Top"
	        ACTIVATE WINDOW Ztest
	        REPORT FORM Ztest.frx PREVIEW WINDOW Ztest
	        RELEASE WINDOW Ztest
	
	3. Run the program. The window on top now takes up the entire Visual FoxPro
	  desktop and the report preview never appears. Note that there is no way to
	  close the screen. Invoke the Close Program dialog box in Windows 95 or the
	  Task Manager in Windows NT 4.0 and select End Task.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
