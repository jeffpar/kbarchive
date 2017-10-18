---
layout: page
title: "Q131337: STOP Msg: 0x0000007B w/ Quantum Empire Drive and Adaptec 2940"
permalink: kb/131/Q131337/
---

## Q131337: STOP Msg: 0x0000007B w/ Quantum Empire Drive and Adaptec 2940

	Article: Q131337
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Installation of Windows NT 3.5 on a Quantum Empire hard drive connected to an
	Adaptec controller fails with the following STOP Message:
	
	  STOP 0x0000007B
	  INACCESSIBLE_BOOT_DEVICE
	
	CAUSE
	=====
	
	The STOP Message occurs because the Adaptec controller is configured for a
	maximum synchronous transfer rate (Max Sync Xfer Rate) of 10 MB (megabytes) per
	second. According to Quantum technical support, the error is due to the clock on
	the Adaptec controller that allows the adapter to negotiate a Max Sync Xfer Rate
	of 10.6 MB/sec. The digital filter on the hard drive returns an error to the
	operating system because it is set for a Max Sync Xfer Rate of 10.2 MB/sec.
	
	
	WORKAROUND
	==========
	
	There is updated firmware for the Quantum Empire drive which fools the SCSI
	controller into a connection of 8 MB/sec. when it is set for 10 MB/sec. The
	firmware upgrade may be obtained from Quantum by calling their technical support
	line at (800) 826-8022.
	
	You can also work around this problem by setting the Max Sync Xfer Rate on the
	Adaptec controller at or below 8 MB/sec. or setting Initiate Sync Negotiation to
	"No."
	
	
	The products included here are manufactured by Adaptec and Quantum, vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these product's performance or reliability.
	
	Additional query words: prodnt 3.5 disk hang complete 2100S
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
