---
layout: page
title: "Q72910: Proteon Network Drivers Required for Windows 3.0"
permalink: /kb/072/Q72910/
---

## Q72910: Proteon Network Drivers Required for Windows 3.0

	Article: Q72910
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Below are the drivers required for Proteon Token Ring network cards to be used
	with Windows 3.0.
	
	MORE INFORMATION
	================
	
	  Card                Minimum Version
	  (Series)               Required
	  --------            ---------------
	
	  Pro Net 4                3.0
	  Pro Net 10               4.0
	  1390                     4.01
	  1990                     4.02
	  1890                     1.0
	
	If you are using Proteon's "Extended User Interface" (Emulates IBM Token Ring
	cards), then the following drivers need to be included in the CONFIG.SYS. (This
	interface allows direct connections to IBM's AS/400 and other mini's and
	mainframes.)
	
	{path} refers to the users path and drive to access the driver. Do not enter the
	version information; it's just for your reference.
	
	The following is the 416 line of cards:
	
	     DEVICE={path}\PRO16EUI.SYS  version 2.13c or later
	     DEVICE={path}\PROLOC.OUT    version 1.0 or later
	
	The 1390 card requires the 417 line drivers above and the driver:
	
	  DEVICE={path}\CFGP1390.SYS   version 1.3 or later
	
	The 1890 card (Microchannel) requires the 416 line drivers in addition to the
	following driver:
	
	  DEVICE={path}\CFGP1890.SYS   version 1.3 or greater
	
	The 1990 card requires the 416 line drivers in addition to the following driver:
	DEVICE={path}\CFGP1990.SYS version 1.3 or greater
	
	Network Compatibility Summary
	-----------------------------
	
	Proteon network cards do not currently support LAN Manager networks; the only
	card supported with Banyan Vines networks is the 1390 card.
	
	If you have any further questions concerning Proteon network cards or drivers,
	please contact Proteon Technical Support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these product's performance
	or reliability.
	
	Additional query words: 3.00 win30 3rdparty Novell 3Com Lantastic
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
