---
layout: page
title: "Q90330: WFWG May Momentarily Stop the Computer with Workgroup Mail"
permalink: /kb/090/Q90330/
---

## Q90330: WFWG May Momentarily Stop the Computer with Workgroup Mail

	Article: Q90330
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the same computer is operating as both the postoffice server and the browse
	master for a workgroup, the system may appear to stop responding (hang) when
	Workgroup Mail is active.
	
	You may have to wait for as long as three to four minutes for the system to
	return to your control.
	
	CAUSE
	=====
	
	Windows for Workgroups dynamically elects a computer in a workgroup to act as
	the browse master for a period of time. If this computer happens to be the same
	computer that is acting as the postoffice server, performance may drop
	significantly when Mail is active.
	
	WORKAROUND
	==========
	
	If your computer is acting as the postoffice server and you are experiencing
	severe performance problems, add the following line to the [Network] section of
	the SYSTEM.INI file:
	
	     MaintainServerList=no
	
	This setting prevents your computer from ever becoming the browse master. Note
	that this setting should only be used in extreme cases.
	
	Additional query words: 3.10 3.11 lockup stop crash freeze up
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
