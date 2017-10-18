---
layout: page
title: "Q141379: Using SCSI CD-ROM Recorders with Windows NT"
permalink: kb/141/Q141379/
---

## Q141379: Using SCSI CD-ROM Recorders with Windows NT

	Article: Q141379
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a writable CD-ROM drive is attached to a system running Windows NT, the
	device may not be recognized. This holds true not only for the ability to write
	to the device, but reading from it may also not be possible.
	
	MORE INFORMATION
	================
	
	A writable CD-ROM device can present itself to the SCSI adapter in one of 2
	ways:
	
	The device may present itself as a WORM (Write Once Read Many) device. Many
	writable CD-ROM devices uses this means of identification to the SCSI host
	adapter. Unfortunately, since Windows NT does not support WORM devices, this
	means of identification prevents Windows NT from being able to access the
	device.
	
	More recently, writable CD-ROM devices have become available that present
	themselves to the SCSI host adapter as a standard CD-ROM device. Such units are
	likely to be compatible with Windows NT. Although compatibility of every such
	device cannot be guaranteed, this manner of identification to the SCSI adapter
	is one prerequisite that a writable CD-ROM device must meet. Assuming that the
	device then behaves as does a standard CD-ROM drive, Windows NT should be able
	to read from the CD-ROM drive as it would from any ordinary CD-ROM drive.
	
	In order to write to the CD-ROM drive in the Windows NT environment, a CD-ROM
	mastering package compatible with Windows NT should be obtained.
	
	
	Additional query words: 3.10 3.50 3.51 prodnt nthw
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	
