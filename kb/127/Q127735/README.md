---
layout: page
title: "Q127735: PC Win: Err Msg: File Manager Cannot Find Specified File..."
permalink: /kb/127/Q127735/
---

## Q127735: PC Win: Err Msg: File Manager Cannot Find Specified File...

{% raw %}

	Article: Q127735
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Setup program for version 3.2 of Microsoft Mail for Windows
	from File Manager, you may receive the following error prior to the display of
	the Welcome to Microsoft Mail for Windows dialog box:
	
	  File Manager cannot find the specified file (or one of its components).
	
	  Make sure the path and file names are correct and that all required libraries
	  are available.
	
	CAUSE
	=====
	
	This error is caused by a missing dynamic-link library (DLL) needed for the
	Setup program.
	
	RESOLUTION
	==========
	
	1. Determine if the following files are present in the shared client
	  installation directory, and replace any missing files:
	
	  MSCOMSTF.DLL
	  MSSHLSTF.DLL
	  MSUILSTF.DLL
	  MSINSSTF.DLL
	  MSDETSTF.DLL
	  MSCPYDIS.DLL
	  CUISTF.DLL
	
	2. Run the client Setup program, SETUP.EXE, from Program Manager from the File
	  menu, choose Run. You will receive a dialog box with the name of the missing
	  file.
	
	  NOTE: The Windows session may hang with this method.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
