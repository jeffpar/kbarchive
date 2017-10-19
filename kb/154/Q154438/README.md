---
layout: page
title: "Q154438: Koi and Bunyan: Ejecting CD During Setup Causes Error Message"
permalink: /kb/154/Q154438/
---

## Q154438: Koi and Bunyan: Ejecting CD During Setup Causes Error Message

	Article: Q154438
	Product(s): Microsoft Home Kids Products
	Version(s): 1.0,3.1
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft P.J.'s Reading Adventures: Microsoft Koi and the Kola Nuts, version 1.0 
	- Microsoft P.J.'s Reading Adventures: Microsoft Paul Bunyan, version 1.0 
	- the operating system: Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you eject the compact disc during setup of the 16-bit version of Paul Bunyan
	or Koi and the Kola Nuts, a cryptic error message appears. This behavior occurs
	under Windows 3.1 and Windows for Workgroups 3.11.
	
	RESOLUTION
	==========
	
	To resolve this problem, don't eject the compact disc during setup.
	
	STEPS TO REPRODUCE
	------------------
	
	1. Run setup.
	
	2. Click Next.
	
	3. When setup reaches the next screen, eject the compact disc from the CD-ROM
	  drive.
	
	4. Click Next.
	
	You receive the following error message box:
	
	  "FSetRestartDir Failed"
	
	When you click OK, you receive the following message
	
	  Could not open the file named: 'D:\bunyan\app\bunyan.exe.'
	
	-or-
	
	  Could not open the file named: 'D:\koi\app\koi.exe.'
	
	followed by Retry and Cancel buttons.
	
	If you click Cancel, you receive the following message:
	
	  Setup is not yet complete.
	  If you quit now, this product will not be correctly installed.
	  You'll need to resolve the problem and run Setup again.
	  Quit setup?
	
	Followed by Yes and No buttons.
	
	Additional query words: kids mskids multimedia multi-media multi media kbmm 1.00 leo pj bunny paul eject cdrom cd-rom
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbOSWinSearch _IKkbbogus kbZNotKeyword6 kbKidsSearch kbPJPaulBunyan kbPJKoi kbOSWin310
	Version           : :1.0,3.1
	Issue type        : kbprb
	
	=============================================================================
	
