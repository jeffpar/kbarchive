---
layout: page
title: "Q156161: PPT7: How To Print Shadowed Text to PCL Printers"
permalink: kb/156/Q156161/
---

## Q156161: PPT7: How To Print Shadowed Text to PCL Printers

	Article: Q156161
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbprint kbdta kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print shadowed text to any of the following Windows 95 PCL
	printer drivers, you do not get the desired results:
	
	  Hewlett-Packard LaserJet Series II and compatible printers
	  Hewlett-Packard LaserJet Series III and compatible printers
	  Hewlett-Packard LaserJet 4 and compatible printers
	  Hewlett-Packard LaserJet 5 and compatible printers
	  Okidata OL Laserjet Printers
	
	
	CAUSE
	=====
	
	In order to print shadowed text correctly, a printer driver must support
	printing text in shades of gray. The Windows 95 drivers for these printers do
	not support printing gray text. Earlier Windows 3.x versions of the LaserJet 4
	printer drivers do print shadowed text properly. Although you can use these
	drivers to print in Windows 95, you may encounter other printing problems.
	
	RESOLUTION
	==========
	
	You can use one of the following methods to print the effect of shadowed text to
	LaserJet-type printers:
	
	Method 1: Create the shadowed text using Microsoft WordArt
	----------------------------------------------------------
	
	Method 2: Convert the shadowed text to a bitmap
	-----------------------------------------------
	
	1. Select the text box that contains the shadowed text.
	
	2. On the Edit menu, click Copy.
	
	3. Start Windows Paint.
	
	4. In Paint, click Attributes on the Image menu. Change the Width and Height to
	  1. Click OK.
	
	5. On the Edit menu, click Paste. Paint asks if you want to resize the image.
	  Click Yes.
	
	6. On the Edit menu, click Copy.
	
	7. Switch back to PowerPoint.
	
	8. On the Edit menu, click Paste.
	
	This procedure pastes a bitmap picture of the shadowed text into your PowerPoint
	presentation. When you print the picture, it prints shadowed text as it appears
	on the screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft PCL Printer drivers
	for Windows 95.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q92473 PPT: Text Shadows Don't Print Properly to PCL Printers
	
	  Q139689 PUB: Gray Text Prints as Black to LaserJet 4 with Windows 95
	
	Additional query words: 7.00 shadow powerpt ppt powerpnt ppt7 ppt95 gray grey
	
	======================================================================
	Keywords          : kbprint kbdta kbPrinting 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
