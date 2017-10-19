---
layout: page
title: "Q103290: PC Forms: Error Copying Files in Setup"
permalink: /kb/103/Q103290/
---

## Q103290: PC Forms: Error Copying Files in Setup

	Article: Q103290
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup program (SETUP.EXE) to install version 1.0 of Microsoft
	Electronic Forms Designer, you may receive one or both of the following error
	messages:
	
	  Error copying file VBRUN200.DLL to C:\WINDOWS
	
	  THREED.VBX could not be installed
	
	These errors can occur if newer versions of the above files exist in the
	WINDOWS\SYSTEM directory.
	
	CAUSE
	=====
	
	The Electronic Forms Designer uses the Microsoft Visual Basic Setup program to
	install its components. There is a problem with the Microsoft Visual Basic Setup
	stub that displays the above messages when you try to install over a newer
	version of a particular file.
	
	In addition, the error dialog box for VBRUN200.DLL has the path C:\WINDOWS
	hard-coded into it. This is incorrect--the files are installed in the
	WINDOWS\SYSTEM directory and not all systems have a specific WINDOWS
	subdirectory (for example, WIN31).
	
	RESOLUTION
	==========
	
	To install the Electronic Forms Designer after receiving one of the above error
	messages, perform the following steps:
	
	1. Rename the offending file in the WINDOWS\SYSTEM subdirectory by changing the
	  extension from .VBX to .OLD (for example, VBRUN200.OLD or THREED.OLD).
	
	2. Run Setup to install the Electronic Forms Designer.
	
	3. Replace the file installed by the E-forms Setup program with the .OLD file
	  created in step 1 by renaming it to the appropriate filename.
	
	STATUS
	======
	
	Microsoft has confirmed this to be problem in version 1.0 of Microsoft
	Electronic Forms Designer. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
