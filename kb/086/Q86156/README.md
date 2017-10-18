---
layout: page
title: "Q86156: PROFS: How to Update the Gateway"
permalink: kb/086/Q86156/
---

## Q86156: PROFS: How to Update the Gateway

	Article: Q86156
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Host Access component can be updated if you already have an
	earlier version installed on your system.
	
	For full details on how to update the gateway, see the README.TXT file on the
	Host Access component disks shipped with version 3.2. Make sure the following
	configuration files are backed up before beginning the update:
	
	  HOST_LAN DATA
	  LAN_HOST DATA
	  TO_ASCII DATA
	  TO_EBCD DATA
	  PWACSI DATA
	  PWANODES DATA
	
	All other files are reinstalled during the update process. When the update is
	completed, the above files can be restored to the gateway's 191 A disk.
	
	
	Additional query words: 3.20 pcmail profsvm
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320
	Version           : :3.2
	
	=============================================================================
	
