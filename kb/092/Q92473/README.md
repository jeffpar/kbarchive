---
layout: page
title: "Q92473: PPT: Text Shadows Don't Print Properly to PCL Printers"
permalink: /kb/092/Q92473/
---

## Q92473: PPT: Text Shadows Don't Print Properly to PCL Printers

	Article: Q92473
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,4.0,7.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you print shadowed text from PowerPoint to a Hewlett-Packard (HP) LaserJet II
	series (or another PCL level 4 printer), it is not printed as expected. Both the
	text and the text shadow are printed in black, causing the text to appear
	double. You see this if you use either a shadowed text style or apply an object
	shadow to text.
	
	CAUSE
	=====
	
	The printer control language (PCL) of Hewlett-Packard LaserJet series printers
	does not support printing text in any shade of gray. The LaserJet Series III
	uses PCL level 5, which does support printing text as white, but does not print
	text in any shade of gray.
	
	The LaserJet series printer drivers that are included with Windows 3.1 and
	Windows 95 have an option to Print TrueType As Graphics. This option allows text
	formatted as white to be printed in white, but it does not enable a PCL printer
	to print gray text.
	
	WORKAROUND
	==========
	
	Method 1. Change the Slide Background
	-------------------------------------
	
	One way to create text with a drop shadow and print it correctly to a LaserJet
	class of printer is to give your PowerPoint slide a gray or colored background
	and format the shadowed text so that either the text or the text shadow is
	white. In addition, if you are using a LaserJet II-class printer, you must
	follow these steps:
	
	1. On the File menu, click Print Setup.
	
	2. Select your LaserJet II-class printer driver as a specific printer for either
	  your Slides or your Notes, Handouts, and Outline pages. Click Setup.
	
	3. In the Setup dialog box, choose Options.
	
	4. Select the check box labeled Print TrueType As Graphic. Click OK.
	
	5. Click OK in the Setup dialog box. Then click OK in the Print Setup dialog box
	  to return to the PowerPoint presentation.
	
	The shadowed text in this one special instance prints as desired.
	
	Method 2 Create a Text Effect
	-----------------------------
	
	Create the text using WordArt.
	
	Additional query words: grey letters shadow overlap double ppt30 ppt40 powerpt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search kbPowerPt400 kbPowerPt300
	Version           : WINDOWS:3.0,4.0,7.0
	
	=============================================================================
	
