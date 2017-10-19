---
layout: page
title: "Q135236: COM.CFG Does Not Shrink When Configuration Items are Removed"
permalink: /kb/135/Q135236/
---

## Q135236: COM.CFG Does Not Shrink When Configuration Items are Removed

	Article: Q135236
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The file size of the SNA Server configuration file (COM.CFG) does not decrease
	when configuration information is removed from the configuration.
	
	The size of the COM.CFG file depends upon the number of SNA servers in the
	domain, as well as the number of SNA connections, LUs, LU Pools, and SNA Server
	user/groups that are defined in that domain. When the COM.CFG files gets large,
	it takes longer for the SNA Server Admin to open the file when trying to
	administer an SNA Server domain. This is more readily apparent if you are trying
	to administer an SNA Server domain that is on the other side of a slow WAN link
	from the system running SNA Server Admin. For this reason, the COM.CFG file
	should get smaller as information is removed from the configuration.
	
	WORKAROUND
	==========
	
	To shrink the COM.CFG file after removing information from the configuration:
	
	1. Use SNA Server Admin to open the COM.CFG file for the SNA Server domain to be
	  modified.
	
	2. Make any configuration changes that are needed.
	
	3. Save the configuration by selecting Save Configuration from the File menu in
	  SNA Server Admin.
	
	4. Backup the configuration file by selecting Backup from the File menu. For
	  more information on how to backup and restore the COM.CFG file in SNA Server
	  Admin, please see the following article in the Microsoft Knowledge Base:
	
	  Q112636 Backup and Restore of COM.CFG
	
	5. Restore the newly backed up configuration file by selecting Restore from the
	  File menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	and 2.11. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsna 2.00 2.10 2.11 snaadmin administrator
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	
	=============================================================================
	
