---
layout: page
title: "Q239617: Encarta World Atlas 2000: Installation Is Very Slow"
permalink: /kb/239/Q239617/
---

## Q239617: Encarta World Atlas 2000: Installation Is Very Slow

	Article: Q239617
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbimu kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Interactive World Atlas 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Encarta World Atlas 2000, Setup may take a very long
	time to finish.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions is true:
	
	- A real mode (16-bit) CD-ROM driver is installed on your computer.
	
	- Your CD-ROM drive is operating in MS-DOS Compatibility mode.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact your hardware manufacturer to inquire about how
	to obtain and install a protected mode (32-bit) CD-ROM driver for your CD-ROM
	drive.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Encarta World Atlas
	2000.
	
	MORE INFORMATION
	================
	
	To determine if your CD-ROM drive is using a protected mode driver:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then verify that the File System entry is
	  32-bit.
	
	  If the File System entry is "Some drives are using MS-DOS compatibility," your
	  CD-ROM drive may be using a real mode CD-ROM driver. If this is the case, you
	  may not be able to read certain files on the CD-ROM.
	
	4. Click OK, and then close Control Panel.
	
	Additional query words: multi multi-media media mm ewa2k installs slowly
	
	======================================================================
	Keywords          : kbhw kbsetup kbimu kbHardware 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaWorldAtlas2000
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
