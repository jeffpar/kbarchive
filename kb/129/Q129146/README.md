---
layout: page
title: "Q129146: Sony CDU-31a CD-ROM on Fusion 16 Sound Card Not Detected"
permalink: kb/129/Q129146/
---

## Q129146: Sony CDU-31a CD-ROM on Fusion 16 Sound Card Not Detected

	Article: Q129146
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
	
	When you run Setup, the Sony CDU-31a CD-ROM drive that is attached to the Media
	Vision Fusion 16 sound card in your computer is not detected. The Add New
	Hardware Wizard also does not detect this CD-ROM drive.
	
	CAUSE
	=====
	
	When it is attached to a Media Vision Fusion 16 sound card, the Sony CDU-31a
	CD-ROM drive is accessed using a non-standard I/O address. Windows 95 detects
	installed hardware by querying specific I/O addresses, and does not detect
	hardware that is located at a non-standard address.
	
	RESOLUTION
	==========
	
	To set up the Sony CDU-31a CD-ROM drive for use in Windows 95, follow these
	steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Add New Hardware icon, then click Next.
	
	3. When you are prompted "Do you want Windows to search for your new hardware?"
	  click No, then click Next.
	
	4. In the Hardware Types box, click CD-ROM Controllers, then click Next.
	
	5. In the Manufacturer box, click Sony Corp., then click Next.
	
	6. Click Next, then click Finish.
	
	7. When you are prompted to let Windows 95 restart your computer, click No.
	
	8. In Control Panel, double-click the System icon.
	
	9. On the Device Manager tab, double-click CD-ROM Controllers, then double-click
	  Sony Proprietary Controller.
	
	10. Click the Resources tab.
	
	11. In the Setting Based On box, click Basic Configuration 0.
	
	12. Click the IRQ setting, then click Change Setting. Change the IRQ setting to
	  5.
	
	13. Click the Input/Output Range setting, then click Change Setting. Change the
	  setting to 1F88-1F8B.
	
	14. Click OK and let Windows 95 restart your computer.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
