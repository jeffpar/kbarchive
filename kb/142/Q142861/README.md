---
layout: page
title: "Q142861: Racal ES3210 NIC Support in Windows NT 3.51"
permalink: kb/142/Q142861/
---

## Q142861: Racal ES3210 NIC Support in Windows NT 3.51

	Article: Q142861
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Racal ES3210 Ethernet network interface card (NIC) driver
	in Windows NT, it cannot communicate with other computers in the network. No
	error messages or event logs appear regarding the problem.
	
	CAUSE
	=====
	
	This problem occurs when you are using the Racal ES3210 NIC with Revision AA
	firmware. To check the firmware revision, look at the component side of the NIC.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	  - Using the EISA Configuration utility of the computer, disable DMA
	    and Memory Map for the NIC. Disabling the memory map of the NIC may
	    slow down the performance of the NIC.
	
	  -or-
	
	  - Contact Racal Technical Support at (800) 722-2555.
	
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.50 prodnt nic mac
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
