---
layout: page
title: "Q240809: HOWTO: Prevent Switch To or Application Busy Message Using OLE"
permalink: kb/240/Q240809/
---

## Q240809: HOWTO: Prevent Switch To or Application Busy Message Using OLE

	Article: Q240809
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a,6.0
	Operating System(s): 
	Keyword(s): kbole kbAutomation kbOSWinNT kbvfp500a kbvfp600 kbOSWin95 kbOSWin98 kbGrpDSFox kbDSuppo
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using OLE automation with another application, such as Microsoft Word, you may
	receive the following error message if you are using Microsoft Windows NT 4.0:
	
	  This action cannot be completed because the other application is busy. Choose
	  'Switch To' to activate the busy application and correct the problem.
	
	If you are using Windows 95 and 98, the error message will appear as follows:
	
	  This action could not be completed because the other program is busy. Click
	  the appropriate button on the taskbar to activate the program and correct the
	  problem.
	
	MORE INFORMATION
	================
	
	This error message usually occurs because the OLE activated application has an
	open dialog box and is expecting user input. This error message can be
	eliminated by using the property OLERequestPendingTimeout. This property
	specifies the amount of time after an Automation request is made before a busy
	message is displayed. The default is five seconds and is specified in
	milliseconds. By setting the timeout to 0, Microsoft Visual FoxPro will wait
	indefinitely for the other application. The busy message will not be displayed
	whether the Automation request is pending or if a mouse or keyboard event
	occurs.
	
	1. Create a program and enter the following code.
	
	  oWord=CREATEOBJECT("Word.Application")
	  APPLICATION.OLERequestPendingTimeout = 0   && 0 means no busy error message
	  WITH oword                                 && Change to 100 to see busy
	                                             && message
	     .Documents.ADD
	     .Dialogs(88).SHOW                       && Open the Word Print dialog
	     .APPLICATION.QUIT(0)                    && Quit and don't save changes
	  ENDWITH
	
	2. Run the program and click on the Microsoft Visual FoxPro window after the
	  Word Print dialog box appears. You will not see the error messages mentioned
	  prior.
	
	3. To see the error message, change the OLERequestPendingTimeout to a relatively
	  low number, like 100.
	
	4. Run the code again and click the Microsoft Visual FoxPro window after the
	  Microsoft Word Print dialog box displays. Now one of the messages listed in
	  the SUMMARY section appears.
	
	REFERENCES
	==========
	
	Visual FoxPro Online Help, version 6.0; Search on "OLERequestPendingTimeout"
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbole kbAutomation kbOSWinNT kbvfp500a kbvfp600 kbOSWin95 kbOSWin98 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
