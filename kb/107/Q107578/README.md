---
layout: page
title: "Q107578: MS-DOS Prompt Can Hang with Full Redirector and Novell Loaded"
permalink: kb/107/Q107578/
---

## Q107578: MS-DOS Prompt Can Hang with Full Redirector and Novell Loaded

	Article: Q107578
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Windows for Workgroups 3.11 with Novell connectivity, an MS-DOS
	virtual machine (VM) may stop responding (hang) if a NET START FULL command is
	issued before opening Windows for Workgroups in enhanced mode.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Do not start the full real-mode redirector at MS-DOS before loading Windows.
	
	  -or-
	
	- Use the NET START command instead.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: 3.11 3rdparty hangs locks logo screen novell network 386 enhanced mode
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
