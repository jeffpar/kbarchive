---
layout: page
title: "Q122959: Bus-Mastering SCSI Controller Problem with Etherlink 16/16TP"
permalink: /kb/122/Q122959/
---

## Q122959: Bus-Mastering SCSI Controller Problem with Etherlink 16/16TP

	Article: Q122959
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a 3Com EtherLink 16 (3C507) or EtherLink l6 TP (3C507TP)
	network adapter, one or more of the following problems may occur:
	
	- Windows for Workgroups stops responding (hangs) when you try to quit Windows.
	
	- Your machine displays time-out errors or hangs during the LOGON process.
	
	- Large file transfers to and from the servers result in data corruption.
	
	CAUSE
	=====
	
	The 3Com EtherLink 16 (3C507) and EtherLink l6 TP (3C507TP) adapters are
	incompatible with bus-mastering SCSI hard disk controllers in Intel EISA- based
	personal computers.
	
	RESOLUTION
	==========
	
	3Com has created a hardware upgrade to correct this problem. The upgrade
	requires replacing the programmable array logic (PAL) chip on the 3C507 adapter.
	This upgrade lengthens the amount of time the network adapter waits for a signal
	from the bus. Contact 3Com for information about obtaining this upgrade.
	
	MORE INFORMATION
	================
	
	When a bus-mastering device takes over the PC bus, it may hold the bus for an
	indefinite period of time, causing the 3C507 to experience a time-out.
	
	The 3C507 adapter relies heavily on the PC bus for timing information.
	
	The 3C507 network interface card is manufactured by 3Com, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3rdparty 3.11 fix netcard nic interface adaptec bustek scsi controller 1740 1742 2740 2742
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
