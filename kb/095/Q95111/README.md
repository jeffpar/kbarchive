---
layout: page
title: "Q95111: Aldus Network Setup Program May Not Operate with WFWG"
permalink: kb/095/Q95111/
---

## Q95111: Aldus Network Setup Program May Not Operate with WFWG

	Article: Q95111
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The network setup program included with Aldus applications, such as PageMaker
	4.0, may not operate correctly with Windows for Workgroups in enhanced mode
	using the virtual redirector.
	
	If the Aldus network setup program is used with Windows for Workgroups in
	enhanced mode and it installs without error messages, but there may be file
	corruption and the Aldus application may not run or may cause other Windows
	errors.
	
	WORKAROUND
	==========
	
	- Start the real mode redirector by typing "NET START WORKSTATION" (without the
	  quotation marks) at the command prompt before starting Windows for
	  Workgroups.
	
	  -or-
	
	- Run setup for the Aldus application from the original floppy disks.
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
