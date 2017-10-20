---
layout: page
title: "Q88776: Using Sigma Video Cards and Displays Windows 3.0 and 3.1"
permalink: /kb/088/Q88776/
---

## Q88776: Using Sigma Video Cards and Displays Windows 3.0 and 3.1

{% raw %}

	Article: Q88776
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sigma has a product line of matched video cards and monitors for desktop
	publishing and computer assisted design (CAD). Sigma has written drivers for
	Windows 3.0, 3.0a, and 3.1.
	
	The latest video drivers are available directly from Sigma technical support.
	Contact Sigma for more information.
	
	This article discusses the following:
	
	- Sigma Models and Specific Model Issues
	
	- Driver Installation
	
	MORE INFORMATION
	================
	
	Sigma Models and Specific Model Issues
	--------------------------------------
	
	LaserView Monochrome or LaserView Classic
	
	This monitor supports 1600 x 1200 pixel resolution. The Windows 3.1 drivers for
	this card may display the Windows 3.0 logo when Windows is started. If this is a
	problem, contact Sigma for updated drivers that correct this problem.
	
	This card uses two upper memory areas (UMA) B000-BFFF and D000-DFFF. The base I/O
	address for this card is located at 249 hexadecimal.
	
	
	PageView and SilverView Monochrome, and VGA Legend
	
	Microsoft has no information about PageView Monochrome and SilverView Monochrome
	having any problems with Windows. However, when running Windows 3.1 in enhanced
	mode with the VGA Legend, black and white rectangles may appear on the screen.
	(Alternative symptoms are brown and tan colored bands obscuring all Windows
	features.)
	
	To resolve this problem, insert the following line in the [386enh] section of the
	SYSTEM.INI:
	
	  sysvmin2ndbank=false
	
	
	Sigma/H
	
	This is an earlier Sigma EGA or VGA card, which is not compatible with Windows.
	Contact Sigma and have your card upgraded to the Sigma Legend.
	
	NOTE: Many Sigma cards come in both Micro channel (MCA) and ISA bus interfaces.
	If you are using the MCA version of the card, make sure you are using the PS/2
	drivers, instead of the Windows 3.0 drivers.
	
	Driver Installation
	-------------------
	
	1. Exit Windows, and change your directory to C:\WINDOWS.
	
	2. Type "setup" (without the quotation marks) and press ENTER.
	
	3. From the hardware options screen, choose Display.
	
	4. Choose Other, and insert the Sigma driver disk.
	
	The Sigma Designs products included here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11 3rdparty laserview laser view lview page silver
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
