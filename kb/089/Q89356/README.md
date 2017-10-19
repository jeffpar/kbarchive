---
layout: page
title: "Q89356: Functionality of NET STOP /Y Command in WFWG"
permalink: /kb/089/Q89356/
---

## Q89356: Functionality of NET STOP /Y Command in WFWG

	Article: Q89356
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To unload the real mode redirector, log off from workgroup services, and
	disconnect from the currently connected servers, type the following at the
	MS-DOS command prompt:
	
	  net stop /y
	
	The /Y switch allows you to perform the above functions without having to provide
	any input.
	
	MORE INFORMATION
	================
	
	To connect to available network servers from MS-DOS and load the workgroup
	software for MS-DOS (real mode redirector), type ONE of the following at the
	MS-DOS command prompt:
	
	- net start workstation
	
	- net start basic
	
	- net start full
	
	VSERVER.386 is the server VxD. A computer can still be a server after executing
	the NET START WORKSTATION command in 386 enhanced mode, but it cannot be a
	browse master. Browse service requires the virtual redirector (VREDIR.386) to
	load the browse service (VBROWSE.386).
	
	Typing "net stop" (without the quotation marks) unloads the real-mode redirector
	and the following prompts appear:
	
	  You are currently logged on as <user name>
	  Do you want to log off? (Y/N)[N]:
	
	If you have existing connections and you respond "Y," the following message
	appears:
	
	  Continuing will cancel these connections:
	  "device=\\server\share"
	
	  Do you want to continue this operation? (Y/N)[N]:
	
	If you respond "Y," the following displays:
	
	  <user name> was logged off successfully.
	  Command completed successfully.
	
	If you type "net stop /y" (without the quotation marks), the above two prompts
	default to a response of "Y" and you are not required to respond.
	
	KBCategory: kbnetwork kbusage
	KBSubcategory: wfw wfwg
	
	Additional query words: 3.10 3.11 real mode
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
