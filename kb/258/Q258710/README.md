---
layout: page
title: "Q258710: World Atlas Err Msg: ...Invalid Page Fault in Kernel32.dll..."
permalink: /kb/258/Q258710/
---

## Q258710: World Atlas Err Msg: ...Invalid Page Fault in Kernel32.dll...

	Article: Q258710
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu
	Last Modified: 19-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Reference Suite 2000 
	- Microsoft Encarta Interactive World Atlas 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Encarta World Atlas 2000, you may receive
	the following error message:
	
	  Msworld5 caused an invalid page fault in module Kernel32.dll.
	
	
	CAUSE
	=====
	
	This behavior can occur if the CD-ROM or DVD-ROM drive is unable to read the
	Encarta World Atlas 2000 CD-ROM correctly.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Inspect and Clean the CD-ROM
	----------------------------
	
	To clean the Encarta World Atlas 2000 CD-ROM, use a CD-ROM cleaning kit, or
	gently wipe the silver side of the CD-ROM with a soft, lint-free cotton cloth.
	Do not use paper cloth which can scratch the plastic and leave streaks. When you
	clean the CD-ROM, wipe from the center of the disc outward. Do not use a
	circular motion.
	
	If the issue continues to occur, clean the CD-ROM with a damp cloth or a
	commercial CD cleaning solution. Dry the CD-ROM thoroughly before you insert it
	into the CD-ROM drive.
	
	If the issue continues to occur, proceed to the next method.
	
	Make Sure You Are Using Protected Mode CD-ROM Drivers
	-----------------------------------------------------
	
	To make sure you are using protected mode (32-bit) drivers for your CD-ROM
	drive:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then confirm that the File System entry is
	  32-bit. If the File System entry is "Some drives are using MS-DOS
	  compatibility", you may be using real mode (16-bit) CD-ROM drivers. If this
	  is the case, you may not be able to read certain files on the CD-ROM.
	
	  Contact the manufacturer of your CD-ROM drive to inquire about how to obtain
	  and install the latest version of the protected mode CD-ROM driver for your
	  CD-ROM drive.
	
	4. Click OK, and then close Control Panel.
	
	If the issue continues to occur, proceed to the next method.
	
	Reduce CD-ROM Drive Caching
	---------------------------
	
	To reduce CD-ROM drive caching:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then click File System.
	
	4. Click the CD-ROM tab.
	
	5. Move the "Supplemental cache size" slider to the Small position.
	
	6. In the "Optimize access pattern for" box, click "No read-ahead".
	
	7. Click OK, and then click Close.
	
	8. When you are prompted to restart your computer, click Yes.
	
	
	MORE INFORMATION
	================
	
	If the issue continues to occur, please click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q218617 How to Troubleshoot CD-ROM Read Issues
	
	Additional query words: multi multi-media media mm ewa2k ipf gpf
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaReference2000 kbEncartaWorldAtlas2000
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
