---
layout: page
title: "Q111466: WFWG: Racal NI6510 Driver Doesn't Work with Etherblaster NIC"
permalink: /kb/111/Q111466/
---

## Q111466: WFWG: Racal NI6510 Driver Doesn't Work with Etherblaster NIC

	Article: Q111466
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Racal NI6510 network interface card (NIC) driver that ships with
	Windows for Workgroup 3.11 and you have the Racal Etherblaster network card
	installed in your system, you may receive the following error messages after you
	reboot your computer:
	
	  Error 5751: The Network Adapter Could Not Be Found
	
	  -and/or-
	
	  Error 7306: The ILANAT.DOS Driver Failed To Initialize
	
	  -and/or-
	
	  Error 5735: Protocol Manager has reported that a network adapter cannot be
	  found.
	
	CAUSE
	=====
	
	Although Microsoft does not ship an NDIS 3 driver for this card, the NDIS 2
	driver (NI6510.DOS) should work correctly with the Etherblaster. However, Racal
	has confirmed that the driver shipped with Windows for Workgroups 3.11 does not
	work with this NIC.
	
	
	RESOLUTION
	==========
	
	To correct this problem, you must use the NI6510.DOS driver from Racal. If you
	have a modem, you can download this driver from the Racal bulletin board service
	at (508) 264-4345. The file date is 9/17/93 and the file size is 11,124 bytes.
	Racal will have an NDIS 3 driver for this NIC available in the future.
	
	For more information, call Racal Technical Support at (800) 526-8225.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
