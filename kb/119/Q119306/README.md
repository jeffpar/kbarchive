---
layout: page
title: "Q119306: PROFS: Host Access INSTALL Failure with CLRSCRN Module"
permalink: kb/119/Q119306/
---

## Q119306: PROFS: Host Access INSTALL Failure with CLRSCRN Module

	Article: Q119306
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Gateway to PROFS/OfficeVision host access component Install
	program may generate an IBM operation exception error similar to this:
	
	  INSTALL
	  DMSACC7241 193 replaces F(193)
	  DMSITP141T Operation exception occurred at 0000E0F0 in routine CLRSCRN
	  CMS
	
	CAUSE
	=====
	
	The Install program did not pick up the CLRSCRN module on the system disks.
	
	RESOLUTION
	==========
	
	If the host access VM ID has the CLRSCRN module on the disks and it merely is
	not being picked up, rename CLRSCRN MODULE F to CLRSCRN BACKUP F. The Install
	program will now be able to pick it up.
	
	Additional query words: 3.20 kberrmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320
	Version           : :3.2
	
	=============================================================================
	
