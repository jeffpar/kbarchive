---
layout: page
title: "Q112736: WFWG Err Msg on Exit: There Are 1 User(s) Connected to Your..."
permalink: kb/112/Q112736/
---

## Q112736: WFWG Err Msg on Exit: There Are 1 User(s) Connected to Your...

	Article: Q112736
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you quit Windows for Workgroups 3.11, you may receive the following error
	message:
	
	  There are 1 user(s) connected to your computer. Quitting Windows for
	  Workgroups will disconnect them. Do you want to continue?
	
	When you run Net Watcher, you find a connection to your machine, even if you do
	not have any shared resources. The machine name is displayed in the left side of
	the Net Watcher window, but no shares are displayed in the right side of the Net
	Watcher window.
	
	CAUSE
	=====
	
	Such connections are part of the browsing system. The connections typically
	exist only for a few seconds and occur when your machine has been selected as
	the browse master or browser backup. You are more likely to notice this problem
	if you are using a slower 80386 machine.
	
	MORE INFORMATION
	================
	
	Machines appear in Net Watcher when a machine has connected to the IPC$ share,
	which is the share to which browse masters from other domains and browser
	backups connect in order to get the name of browser backups and the current list
	of machines on the workgroup or domain. Although this connection usually lasts
	only second before being terminated, the connection may last longer on very
	large networks.
	
	Additional query words: 3.11 netwatch.exe drive dirves directory directories
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
