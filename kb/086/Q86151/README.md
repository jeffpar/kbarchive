---
layout: page
title: "Q86151: PROFS: Consequences of XEDITing a Config File"
permalink: /kb/086/Q86151/
---

## Q86151: PROFS: Consequences of XEDITing a Config File

	Article: Q86151
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using XEDIT to edit any of the Microsoft Mail gateway's configuration files
	should not cause any problems, because it is not possible to edit the files
	while the gateway is running.
	
	Once the gateway VM ID is logged on and running the gateway program, you cannot
	logon again to the same VM ID. The VM administrator can also ensure that no
	other VM ID has the ability to link to the disks that contain the gateway's
	configuration files. The combination of these two factors effectively prevents
	anybody from XEDITing the files while the gateway is running.
	
	Additional query words: 3.20 pcmail profsvm XEDIT
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320
	Version           : :3.2
	
	=============================================================================
	
