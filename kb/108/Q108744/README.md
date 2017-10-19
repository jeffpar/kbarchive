---
layout: page
title: "Q108744: Writer: Borders Print Incorrectly with ATI Mach32"
permalink: /kb/108/Q108744/
---

## Q108744: Writer: Borders Print Incorrectly with ATI Mach32

	Article: Q108744
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,1.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a Writing Studio document with a border, you may find that boxes
	print around each of the border pictures. This occurs if you are using version
	2.1 of the ATI Mach32 256-color video driver.
	
	When you print a colored border, it may print with a blue box around each border
	element. When you print a black and white border, it may print with a muddy
	green background behind each border element.
	
	Microsoft has confirmed this to be a problem in Creative Writer version 1.0 and
	1.1. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	This problem does not occur with 256-color video drivers other than the ATI
	Mach32 video driver. If your card supports another 256-color video driver, try
	using it instead. If not, you can eliminate the problem by switching to the
	standard Windows VGA video driver. After changing your video driver, restart
	Windows and try printing the document again.
	
	MORE INFORMATION
	================
	
	This problem has not been found to occur in Windows 95, which ships with updated
	ATI drivers.
	
	Additional query words: 1.00 ugly incorrect edge frame ATI win kids mskids mczee printing borders 1.10 display output printout 1.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a
	Version           : WINDOWS:1.0,1.1,1.1a
	
	=============================================================================
	
