---
layout: page
title: "Q163306: WD97: Squares Not Symbols in Insert Symbol Dialog Box"
permalink: /kb/163/Q163306/
---

## Q163306: WD97: Squares Not Symbols in Insert Symbol Dialog Box

	Article: Q163306
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Symbol on the Insert menu, the symbols in the dialog box appear
	as square boxes rather than symbols, although the symbols seem to function
	correctly and they can be seen in WordPad.
	
	CAUSE
	=====
	
	This problem may occur with any of the following video drivers:
	
	  Advanced Logic 2301 PCI
	  Alliance Semiconductor V4.1.19
	  ATI Tech Enhanced Mach 64 Rage Pro 5.24-c38c
	  Chips and Technology 4.0
	  Cirrus Logic 1748 1.33 PCI
	  Cirrus Logic 7548 1.30 PCI
	  Cirrus Logic 7548 1.32a PCI v.4.0
	  Cirrus Logic 7548 1.35
	  Cirrus Logic 7548 1.40
	  Cirrus Logic 7543 2.3 PCI v.4.0
	  Diamond Stealth 3D 2000 series v4.02.020
	  Diamond Stealth 3D 3000
	  IBM Think Pad 760C, 365ED
	  Matrox Millennium
	  Neomagic Magicgraph 128 PCI
	  S3 64 PCI
	  S3 86CM65 4.0
	  S3 Aurora 64v+ 4.3.0.2105
	  S3 Trio
	  S3 Trio 64V Plus
	  STB Vision
	  Trident 9660/9680/938X Linear Acceleration PCI 3.01.09
	  Trident CXI/TGUI 9440
	  Trident TGUI9400
	  Viper VLB
	  Western Digital 4.0
	  WindPortrait Cirrus Logic Driver 4.0
	  Compaq Deskpro 2000 using S3 V2 /GX PCI
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods:
	
	- Switch to the standard VGA or super VGA driver.
	
	  -or-
	
	- Change the resolution or number of display colors.
	
	  -or-
	
	- Contact the manufacturer for an updated driver.
	
	  -or-
	
	- Use the following steps to change the Hardware Acceleration option to None
	  (NOTE: Microsoft has not tested the following workaround and therefore cannot
	  guarantee its results):
	
	Microsoft Windows 95 and Microsoft Windows 98
	
	  1. On the Windows Start menu, point to Settings, and then click Control
	     Panel.
	
	  2. Double-click the System icon.
	
	  3. Click the Performance tab.
	
	  4. Click Graphics.
	
	  5. Change Hardware Acceleration to None, and then click OK.
	
	  6. Click OK to close the System Properties dialog box.
	
	Microsoft Windows 2000
	
	  1. On the Windows Start menu, point to Settings, and then click Control
	     Panel.
	
	  2. Double-click the Display icon. (The Display Properties dialog box
	     appears.)
	
	  3. Click Settings.
	
	  4. Click Advanced.
	
	  5. Click Troubleshooting.
	
	  6. Change Hardware Acceleration to None, and then click OK.
	
	  7. Click OK twice to close the Display Properties dialog box.
	
	
	Additional query words: box blank missing bullet bullets rectangle rectangles gone fonts
	
	======================================================================
	Keywords          : word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
