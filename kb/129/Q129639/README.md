---
layout: page
title: "Q129639: Kids: ErrMsg: Insufficient Resources to Run..."
permalink: kb/129/Q129639/
---

## Q129639: Kids: ErrMsg: Insufficient Resources to Run...

	Article: Q129639
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsgkbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, version 1.1 
	- Microsoft Fine Artist for Windows, version 1.1 
	- Microsoft Explorapedia series: World of Nature for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	- Microsoft Explorapedia series: World of People for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run one of the programs listed at the top of this article on a
	computer with 4 MB of installed RAM, the program's logo appears and then you may
	receive the following error message:
	
	  Insufficient resources to run Magic School Bus. Please quit one or more
	  Windows applications and try again. If problem persists, restart Windows and
	  try again.
	
	RESOLUTION
	==========
	
	To resolve this problem, disable Shadow RAM on your computer. For more
	information about how to disable shadow RAM, refer to your computer's user's
	guide, or contact your dealer.
	
	MORE INFORMATION
	================
	
	Additonal troubleshooting steps for Windows 3.x:
	
	1. Open Control Panel (usually located in the Main group).
	
	2. Double-click 386 Enhanced.
	
	3. Click Virtual Memory.
	
	4. Verify that there is a swapfile of at least 6,000 KB. If there is no swapfile
	  or a swapfile less than 6,000 KB, a larger swapfile will need to be created.
	
	  NOTE: For better performance, a permanent swapfile should be created.
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	Additional query words: 1.00 1.10 mskids msb msbss frizz avi doesn't run start splash msb-ss hang hung freeze crash frizzle magicbus magic_bus schoolbus random access memory shadowing insufficient resource win31 errmsg tad wm_writer wm_artist msbhb msb-hb liz can't play xplora mczee maggie max winmsbhuman msbhuman winmsbsolar msbsolar
	
	======================================================================
	Keywords          : kbenv kberrmsg kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbZNotKeyword2 kbKidsSearch kbCreativeWriter110 kbExplorapediaNature100 kbExplorapediaPeople100 kbFineArtist110 kbScholasticHuman kbScholasticSolar kbMSBSearch
	Version           : WINDOWS:1.0,1.1
	Issue type        : kbhowto
	
	=============================================================================
	
