---
layout: page
title: "Q153128: Event IDs 9 and 11: SCSI Controller/Device Errors"
permalink: /kb/153/Q153128/
---

## Q153128: Event IDs 9 and 11: SCSI Controller/Device Errors

	Article: Q153128
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use SCSI controllers based on Peripheral Component Interconnect (PCI)
	and the PCI-based 3Com EtherLink 3c59x network adapter, you may experience
	problems with SCSI device and/or SCSI controller timeouts, failing Windows NT
	fault tolerant disk mirrors, or the system may stop responding or crash. The
	following event messages are examples of what you may find in the event log if
	you are using the Adaptec 2940x SCSI controller or other PCI-based SCSI
	controllers in conjunction with the 3Com 3c59x network adapter:
	
	  Event ID: 11
	  Source: aic78xx
	  Description: The driver detected a controller error on Device\ScsiPortO.
	
	  Event ID: 9
	  Source: aic78xx
	  Description: The device, \Device\ScsiPort0, did not respond within the
	               timeout period.
	
	
	CAUSE
	=====
	
	The 3Com EtherLink 3c590 and 3c595 PCI network adapter driver (El59x.sys) that
	shipped with Windows NT has problems with bus mastering when multiple PCI-based
	controllers are installed.
	
	These error messages can also be caused by poor or incorrect SCSI termination, a
	failing device or controller, inferior SCSI cabling, or a poorly written device
	driver for the SCSI controller.
	
	Additionally, Please reference Knowledge Base article:
	
	Q154690 - How to troubleshoot Event 9 and 11 Error messages.
	
	RESOLUTION
	==========
	
	- Obtain the fix provided by 3Com for the 3C59x driver (version 1.10.00 or
	later).
	
	The new driver, el59x.sys (version 1.10), is available at the following World
	Wide Web location as 3c59xx.exe (a self extracting file):
	
	http://infodeli.3com.com/infodeli/swlib/shipping_adapter_files.htm
	
	The driver is also available from the 3COM Bulletin Board Service (BBS) at (408)
	980-8204.
	
	-OR-
	
	- Sometimes a low-level format performed by the SCSI controller will resolve
	these event messages.
	
	STATUS
	======
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
