---
layout: page
title: "Q137310: Audio CD Not Recognized in IDE CD-ROM Drive"
permalink: /kb/137/Q137310/
---

## Q137310: Audio CD Not Recognized in IDE CD-ROM Drive

	Article: Q137310
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a particular audio CD in the CD-ROM drive, it may not be
	recognized and CD Player may not be started automatically, even if the Auto
	Insert Notification option is turned on.
	
	If you start CD Player manually, the CD-ROM drive light may flash continuously,
	and you may receive the following message:
	
	  Data or no disc loaded
	  Please insert an audio compact disc.
	
	Most other audio CDs are recognized automatically.
	
	CAUSE
	=====
	
	Your IDE CD-ROM drive is not fully compatible with the ATAPI 1.2 specification
	for IDE CD-ROM drives.
	
	RESOLUTION
	==========
	
	Contact the manufacturer of the CD-ROM drive about obtaining a firmware update
	to bring the drive into compliance with the ATAPI 1.2 specification.
	
	This issue is resolved by the following updated file(s) for Windows 95, and later
	versions of these file(s):
	
	  SCSI1HLP.VXD version 4.00.951 dated 9/5/95 19,189 bytes
	
	
	A version of this file which resolves this issue is available from the following
	sources:
	
	1. As part of the CD Changer update. See the following article in the Microsoft
	  Knowledge Base:
	
	  Q140510 Not All CD-ROM Changer Drives Visible in Windows 95
	
	2. In the Microsoft Windows 95 Service Pack 1. See the following article in the
	  Microsoft Knowledge Base:
	
	  Q142794 Availability of Microsoft Windows 95 Service Pack 1
	
	STATUS
	======
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	The following IDE CD-ROM drives are known to exhibit the behavior described in
	this article:
	
	  Manufacturer           Model    Firmware revision
	  -------------------------------------------------
	  Panasonic/Matsushita   CR-581   Earlier than 1.04
	  NEC                    273      Earlier than 4.21
	
	
	This behavior occurs with a few audio CDs that are mastered in an unusual manner.
	Normally, track 1 begins at the 2-second mark on the disc. On the audio CDs that
	trigger this behavior, track 1 does not begin at the 2- second mark. When the
	Windows 95 CD-ROM driver attempts to locate track 1, the drive reports a status
	that is not expected under the ATAPI 1.2 specification. Based on the status
	returned from the drive, the Windows 95 CD-ROM driver tries to find track 1
	continuously, never receiving the expected result code from the drive.
	
	The following audio CDs are known to cause this behavior:
	
	  Title            Artist   Publisher
	  -----------------------------------------
	  Shepherd Moons   Enya     Reprise Records
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
