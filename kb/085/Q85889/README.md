---
layout: page
title: "Q85889: PRB: &quot;Unrecognized Linker Switch /NOP&quot; Linking Setup Toolkit"
permalink: /kb/085/Q85889/
---

## Q85889: PRB: &quot;Unrecognized Linker Switch /NOP&quot; Linking Setup Toolkit

	Article: Q85889
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Building the Setup Toolkit for Windows provided with version 3.1 of the
	Microsoft Windows Software Development Kit (SDK) causes the following error
	message when the application is linked:
	
	  LINK: Fatal error L1001: NOP : option name ambiguous
	
	  -or-
	
	  Unrecognized Linker Switch /NOP
	
	CAUSE
	=====
	
	The Setup Toolkit is built with the Microsoft C/C++ compiler version 7.0. The
	Setup Toolkit files are designed for use with Microsoft C version 6.0.
	
	RESOLUTION
	==========
	
	Modify the CUISTF.LNK and CUISTFD.LNK files in the Setup Toolkit BLDCUI
	directory (by default, C:\WINDEV\MSSETUP\BLDCUI) to replace the /NOP switch in
	the first line with the /NOPACKC switch. The first line of the corrected files
	is as follows:
	
	  /NOL /NOPACKC /align:16 libentry dlgprocs
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
