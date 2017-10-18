---
layout: page
title: "Q97443: Error Message &quot;Fdisk Unsuccessful&quot; Means .BID Is Missing"
permalink: kb/097/Q97443/
---

## Q97443: Error Message &quot;Fdisk Unsuccessful&quot; Means .BID Is Missing

	Article: Q97443
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The error message "Fdisk Unsuccessful" sometimes appears when you try to install
	OS/2 1.3 on a COMPAQ Prosignia with a 550 MB SCSI-2 hard disk.
	
	The Prosignia line requires a special .BID file, which COMPAQ supplies. If it is
	not on the disks supplied with the computer, order it from COMPAQ. Make a copy
	of your install A disk, delete all the .BID files on it, put the new COMPAQ .BID
	file on the disk, and rename it BOOTBID.BID. Install OS/2 again.
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
