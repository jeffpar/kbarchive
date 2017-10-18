---
layout: page
title: "Q134709: Slow Performance with Single-Speed CD-ROM Drive"
permalink: kb/134/Q134709/
---

## Q134709: Slow Performance with Single-Speed CD-ROM Drive

	Article: Q134709
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
	
	When you are using a single-speed CD-ROM drive that is connected to a SCSI
	controller, video performance in CD-ROM-based programs may be poor. This poor
	performance may be more pronounced on computers with slower processors.
	Performance in these programs may appear to be worse than it is in earlier
	versions of Windows.
	
	This problem is known to occur with the following SCSI controllers:
	
	- Future Domain TMC-850
	
	
	CAUSE
	=====
	
	The Windows 95 protected-mode CD-ROM drivers are not completely compatible with
	single-speed CD-ROM drives.
	
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following methods:
	
	- Contact the hardware manufacturer to inquire about protected-mode drivers for
	  your CD-ROM drive for use with Windows 95.
	
	- You may be able to improve performance somewhat by disabling the Windows 95
	  protected-mode drivers for your CD-ROM drive, and using the real-mode drivers
	  that came with the drive instead. For information on how to do so, contact
	  the hardware manufacturer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
