---
layout: page
title: "Q134834: PRB: SourceSafe Fails with Norton Desktop Version 3.0"
permalink: /kb/134/Q134834/
---

## Q134834: PRB: SourceSafe Fails with Norton Desktop Version 3.0

	Article: Q134834
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose the Add command from SourceSafe's SourceSafe menu, or press the
	CTRL+Y key combination to add a file to a project, SourceSafe may close
	unexpectedly without generating any error messages.
	
	CAUSE
	=====
	
	These symptoms may occur if you are running Norton Desktop version 3.0.
	
	RESOLUTION
	==========
	
	There are two alternates: disable Norton Desktop for Windows by:
	
	1. Using any ASCII text editor such as Microsoft Notepad, open the SYSTEM.INI
	  file located in the Windows directory.
	
	2. Locate the SHELL = NDW.EXE line and turn it into a comment by inserting a
	  semicolon as the first character of the line.
	
	3. Insert a new line immediately following the SHELL = NDW.EXE line that reads
	  SHELL = PROGMAN.EXE.
	
	4. Close and save the new SYSTEM.INI file. Restart Windows.
	
	As an alternative, you can search for all copies of CTL3DV2.DLL and keep only the
	version that ships with SourceSafe 3.0. The conflict is with the newer
	CTL3DV2.DLL v 2.29.0.0 and Norton Desktop.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	NOTE: Norton Desktop is manufactured by Symantec, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: ss3 vbwin 3.00
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword3 kbSSafe310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
