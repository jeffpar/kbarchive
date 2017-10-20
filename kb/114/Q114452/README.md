---
layout: page
title: "Q114452: Terminal Err Msg: Cannot Create Specified File. Make Sure..."
permalink: /kb/114/Q114452/
---

## Q114452: Terminal Err Msg: Cannot Create Specified File. Make Sure...

{% raw %}

	Article: Q114452
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error when receiving a file using Windows Terminal:
	
	  Cannot create specified file. Make sure that:
	
	  You have enough disk space.
	  The file is not read-only.
	  The filename is valid.
	
	You may receive this error when you are using either the Receive Text File or
	Receive Binary File command on the Transfers menu in Terminal.
	
	CAUSE
	=====
	
	Any of the following conditions can cause this error message:
	
	- There is not enough free disk space for the downloaded file.
	
	- The file to be downloaded is read only.
	
	- The filename is invalid. The filename is not valid if an extension for the
	  filename was not supplied. Any three-character extension is accepted. In
	  versions of Windows earlier than 3.1, an extension was not required.
	
	- The FileAssist feature of Norton Desktop for Windows 3.0 is being used.
	
	RESOLUTION
	==========
	
	Make sure sufficient disk space exists on the destination drive for the file to
	be downloaded. Also, make sure that a valid filename (including an extension) is
	being used for the file to be downloaded and that the file is not marked read
	only.
	
	If you are using Norton Desktop for Windows, disable the FileAssist feature for
	Terminal with the following steps:
	
	1. From the File menu, choose Save As.
	
	2. In the FileAssist File Save As dialog box, choose Config.
	
	3. Clear the "FileAssist Enabled for Terminal" check box.
	
	4. Choose OK. (FileAssist warns you that it will be disabled for Terminal.)
	
	5. Choose Yes to continue.
	
	6. Choose Cancel to close the File Save As dialog box.
	
	FileAssist is disabled for Terminal only after you have closed the dialog box.
	
	NOTE: FileAssist can be re-enabled from Norton Desktop's Control Center
	application. If you need assistance in disabling FileAssist for Terminal or any
	other application, contact Symantec Technical Support.
	
	STATUS
	======
	
	Symantec has confirmed this to be a problem in FileAssist for Norton Desktop for
	Windows. For more information, contact Symantec Technical Support at (541)
	465-8600 or through its CompuServe support forum (type "go symantec" (without
	the quotation marks) at the $ prompt).
	
	MORE INFORMATION
	================
	
	FileAssist is a Common Dialog replacement that adds "on-the-fly" features to the
	Open, Save, and Save As dialog boxes. FileAssist features include View File,
	File Search, Create Directory, Rename File, and Delete File. FileAssist replaces
	the standard common dialog boxes for most Windows 3.1- based applications.
	
	Norton Desktop for Windows (NDW.EXE) must be installed and active as the shell
	for FileAssist to operate. FileAssist contains the following files:
	
	  NDW.EXE
	  FASSIST1.DLL
	  FASSIST.EXE
	
	These files typically reside in the NDW subdirectory on a standard Norton Desktop
	for Windows installation.
	
	The Norton Desktop for Windows products included here are manufactured by
	Symantec Corporation, a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding this products' performance or reliability.
	
	REFERENCES
	==========
	
	Symantec's "The Norton Desktop User's Guide," pages 2-11 through 2-13 and 7-10.
	
	Additional query words: 3.1 3.11 3.10
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
