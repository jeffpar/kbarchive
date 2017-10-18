---
layout: page
title: "Q101606: PC Adm: Data Disk Not Updated After Regenerate"
permalink: kb/101/Q101606/
---

## Q101606: PC Adm: Data Disk Not Updated After Regenerate

	Article: Q101606
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a remote user data disk with version 3.0 or 3.0a of the
	Administration program for Microsoft Mail for PC Networks, changes in address
	information may not be correctly updated.
	
	If the Administration program is left running after the data disk is first
	generated and until the address information is changed, the regenerated data
	disk does not contain any address changes. The date and time stamps of the files
	on the regenerated remote data disk reflect the date of the regeneration but the
	address information in the RNETWORK.GLB file is left unchanged.
	
	RESOLUTION
	==========
	
	To work around this problem, exit the Administration program after the remote
	user's address information has been changed, then restart the Administration
	program and regenerate the directory view selecting either Update Disk or Init
	Disk. The newly created data disk reflects the correctly updated address
	information selected for the remote user.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.0a of
	Microsoft Mail for PC Networks. This problem was corrected in version 3.2 of
	Microsoft Mail for PC Networks.
	
	
	Additional query words: 3.00 3.00a user name admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300 kbMailPCN300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
