---
layout: page
title: "Q94226: Remote Boot Machines Format 3.5-inch Disks for 720K Only"
permalink: kb/094/Q94226/
---

## Q94226: Remote Boot Machines Format 3.5-inch Disks for 720K Only

	Article: Q94226
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	Disk drives on remote boot machines refuse to format 3.5-inch disks to any size
	other than 720K.
	
	RESOLUTION
	==========
	
	Add this line to the CONFIG.SYS file:
	
	  DRIVPARM=/D:1 /F:7
	
	Additional query words: prodlm 2.00 2.10 2.10a 2.20 rpl
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
