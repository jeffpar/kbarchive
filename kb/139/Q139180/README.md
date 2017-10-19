---
layout: page
title: "Q139180: &quot;Data or No Disc Loaded&quot; with Sony CDU-541 SCSI CD-ROM Drive"
permalink: /kb/139/Q139180/
---

## Q139180: &quot;Data or No Disc Loaded&quot; with Sony CDU-541 SCSI CD-ROM Drive

	Article: Q139180
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
	
	When you try to play an audio CD using a Sony CDU-541 CD-ROM drive connected to
	an Adaptec 1520 SCSI controller, you may receive the following error message:
	
	  Data or no disc loaded
	
	CAUSE
	=====
	
	The Sparrow.mpd driver that you are using may not work correctly with the Sony
	CDU-541 CD-ROM drive.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Rename the Sparrow.mpd file in the Windows\System\Iosubsys folder.
	
	2. Copy the updated Sparrow.mpd file from the Drivers\Storage\Adaptec folder on
	  the Windows 95 CD-ROM to the Windows\System\Iosubsys folder on the hard disk.
	
	3. Shut down and restart Windows 95.
	
	MORE INFORMATION
	================
	
	When you are using the original Sparrow.mpd driver, the CD Player tool may
	recognize that there is an audio CD in the CD-ROM drive, but be unable to play
	the CD.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
