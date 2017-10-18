---
layout: page
title: "Q104917: PRB: Help Compiler Causes Fatal Exit or Other System Failure"
permalink: kb/104/Q104917/
---

## Q104917: PRB: Help Compiler Causes Fatal Exit or Other System Failure

	Article: Q104917
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running HC31.exe or HCP.exe in Windows 3.1, a dialog box similar to
	one of the following appears:
	
	  A GP fault or exception has occurred.
	
	  -or-
	
	  The System has been violated. Please save your files and close down Windows.
	
	When running under Windows NT, the system hangs or you receive an OS/2
	application faulted at CS = 0x4007.
	
	CAUSE
	=====
	
	There is an internal limit of 32K that is getting processed.
	
	RESOLUTION
	==========
	
	There is an updated version of HCP.EXE (version 3.10.505) that sets the limit to
	64K.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  HC505.exe (http://support.microsoft.com/download/support/mslfiles/HC505.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	HC.exe and HCP.exe versions 3.10.505 correct the following problems:
	
	- Some new RTF items (font header information) that Word for Windows version
	  6.0 generates.
	
	- Increase the number of entries (around 8,000) in the map section and the
	  alias sections in the .HPJ file.
	
	- Increase the number of bitmaps in the .RTF file to around 2,970.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
