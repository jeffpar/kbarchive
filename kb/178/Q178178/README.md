---
layout: page
title: "Q178178: Error Message: Error SU995034 -- Invalid INF file (0x13aa)"
permalink: /kb/178/Q178178/
---

## Q178178: Error Message: Error SU995034 -- Invalid INF file (0x13aa)

	Article: Q178178
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbsetup win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are performing a server-based Setup (SBS) of Windows 95, after you
	accept the End User License Agreement you may receive the following error
	message:
	
	  Error SU995034 -- Invalid INF file (0x13aa)
	
	CAUSE
	=====
	
	This behavior can occur if Setup attempts to place temporary files into an
	invalid temporary folder.
	
	RESOLUTION
	==========
	
	To work around this behavior, specify the temporary folder for Setup to use
	during the SBS. To do so, use the following command
	
	  setup <drive>:\<filename.inf> /t:<path>\<folder>
	
	where <drive> is the location of the .inf file that may, or may not be in
	the same location as Setup.exe, <filename.inf> is the batch file generated
	by the Batch.exe program, and <path> and <folder> specify the path
	to and name of the temporary folder for Windows 95 to use during Setup.
	
	For example, you might use a command similar to:
	
	  setup c:\msbatch.inf /t:c:\temp
	
	MORE INFORMATION
	================
	
	For additional information about switches you can use with the Windows 95 Setup
	program, please see the following article in the Microsoft Knowledge Base:
	
	  Q128400 Windows 95 Setup Switches
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
