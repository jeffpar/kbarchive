---
layout: page
title: "Q159908: &quot;Net print&quot; Command May Print One Print Job as Two"
permalink: kb/159/Q159908/
---

## Q159908: &quot;Net print&quot; Command May Print One Print Job as Two

	Article: Q159908
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2.2c,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft LAN Manager, version 2.2c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A print job sent by a LAN Manager 2.2c client to a Windows NT print queue may be
	cut into two.
	
	CAUSE
	=====
	
	A Network Monitor trace shows the "net print" command issues a "close spool
	file" with the print job's File ID. This results in a portion of the job that
	has already been spooled being printed then the rest of the job starts as a new
	print job.
	
	RESOLUTION
	==========
	
	To check print queue status, use Print Manager instead of "net print" on LAN
	Manager client computers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LAN Manager 2.2c.
	
	MORE INFORMATION
	================
	
	After the client sends a print job and during the job spooling process, if you
	check the print queue status using the "net print" command from an MS- DOS
	command prompt, you will see multiple entries for one LAN Manager print job in
	the print queue. You must be using Print Manager on a computer running Windows
	NT to see these multiple entries.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbAudDeveloper kbLanManSearch kbLanMan220c
	Version           : :2.2c,3.51,4.0
	
	=============================================================================
	
