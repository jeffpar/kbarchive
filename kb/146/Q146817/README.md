---
layout: page
title: "Q146817: Buslogic BT-930 Flashpoint LT SCSI Controller Needs OEM Driver"
permalink: kb/146/Q146817/
---

## Q146817: Buslogic BT-930 Flashpoint LT SCSI Controller Needs OEM Driver

	Article: Q146817
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Buslogic Flashpoint LT PCI SCSI controllers require an OEM (Original Equipment
	Manufacturer) driver to work properly under Windows NT. If you are installing
	Windows NT on a system that contains the Buslogic Flashpoint LT SCSI controller
	you must use the OEM driver disk during Windows NT Setup to recognize attached
	hard disks and CD-ROMs.
	
	NOTE: Only the flashpoint LT controller driver dated 12-07-95 or later works
	correctly.
	
	If you do not specify the OEM driver you may experience the following STOP
	message:
	
	  STOP 0x0000007B INACCESSIBLE_BOOT_DEVICE
	
	
	MORE INFORMATION
	================
	
	This driver can be downloaded by contacting Buslogic.
	
	- Buslogic technical support: (408) 970-1414
	
	- Buslogic BBS: (408)492-1984
	
	- Buslogic World Wide Web: http://www.buslogic.com
	
	The Flashpoint LT PCI SCSI controller discussed here is manufactured by and
	Buslogic, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding the products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: prodnt 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
