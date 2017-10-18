---
layout: page
title: "Q98339: PROFS: How to Check VM Host for Enabled EXITs"
permalink: kb/098/Q98339/
---

## Q98339: PROFS: How to Check VM Host for Enabled EXITs

	Article: Q98339
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.1,3.2,3.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 3.1, 3.2, 3.3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following statement can be used to allow the VM user to check the EXITs that
	are running on an MS-RSCS machine. This ensures that the EXITs used by Host
	Access are properly enabled:
	
	  SM ms-rscs_nodename Q SYS EXIT
	
	The proper system response should be:
	
	  EXIT 2 enabled
	  EXIT 15 enabled
	
	The two exits are used by Host Access to set the To and From fields to show the
	proper send and recipient addresses.
	
	
	Additional query words: 3.10 3.20 3.30
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320 kbMailGateIBMPROFS310 kbMailGateIBMPROFS330
	Version           : :3.1,3.2,3.3
	
	=============================================================================
	
