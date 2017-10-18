---
layout: page
title: "Q90922: Net Watcher Requires Enhanced Mode in Windows for Workgroups"
permalink: kb/090/Q90922/
---

## Q90922: Net Watcher Requires Enhanced Mode in Windows for Workgroups

	Article: Q90922
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Net Watcher is loaded on a workstation running Windows for Workgroups in
	standard mode, the following error message appears:
	
	  Net Watcher requires VSERVER.386 in order to run. Make sure that you are
	  running Windows in 386 enhanced mode and that sharing is enabled in the
	  Control Panel Network option.
	
	CAUSE
	=====
	
	The Net Watcher utility (NETWATCH.EXE) may be started while running Windows for
	Workgroups in standard mode, even though it is designed for enhanced mode. In
	standard mode, Net Watcher may exhibit unexpected behavior or cause the
	workstation to exhibit unexpected behavior.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1. This problem does not occur in later versions of the product.
	
	MORE INFORMATION
	================
	
	The Net Watcher utility is provided with Windows for Workgroups to monitor the
	properties and activities of active connections to a Windows for Workgroups
	server. Because a Windows for Workgroups machine must be running in enhanced
	mode to be a server, Net Watcher was only intended to be run in enhanced mode.
	
	However, if you ignore the error message and choose the OK button, and Net
	Watcher is loaded, it may produce erroneous information (extended characters in
	non-existent machine names, and so on) about connections to the machine.
	
	Additional query words: 3.10 s.1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
