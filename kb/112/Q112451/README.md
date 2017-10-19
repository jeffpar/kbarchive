---
layout: page
title: "Q112451: WD97: Gray Drawing Layer Lines Printed in Black on HP LaserJet"
permalink: /kb/112/Q112451/
---

## Q112451: WD97: Gray Drawing Layer Lines Printed in Black on HP LaserJet

	Article: Q112451
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint kbdta winword word97 kbPrinting
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a gray-colored line for a drawing object (using the tools on the
	Drawing toolbar in Word for Windows), the line may be printed in black on
	Hewlett-Packard (HP) LaserJet series printers. This behavior occurs with
	circles, ellipses, squares, arcs, freeform objects and autoshapes.
	
	CAUSE
	=====
	
	Word sends correct gray color instructions to the printer driver, which means
	Word is not responsible for this behavior. Some versions of the HP LaserJet
	Series printer drivers translate gray color formatting to black printer
	instructions for all shapes except the ellipse (except when using the Windows 95
	printer driver).
	
	Specifically, when a non-ellipse is formatted as gray, the printer driver sends a
	NULL brush and solid pen (pen width = 0) instruction, which tells the printer to
	print in black instead of gray. In contrast, for a gray- colored ellipse, the
	printer driver sends a brush instruction that corresponds to the Windows
	Universal Printer Driver (Unidrv.dll) instruction for dithered solid red color,
	which the HP LaserJet printer prints as gray.
	
	This problem may occur with the following printers:
	
	  HP LaserJet
	  HP LaserJet II
	  HP LaserJet IIp+
	  HP LaserJet III
	  HP LaserJet IIIp
	  HP LaserJet IIIsi
	  HP LaserJet 4M/4P (HPPCL5E.DRV version 1.27)
	  HP LaserJet 4si (HPPCL5E.DRV version 1.27)
	  HP LaserJet 4si MX (HPPCL5E.DRV version 1.27)
	  HP LaserJet 4si version 3.78 (Windows 95 printer driver)
	  HP LaserJet 5
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods:
	
	Method 1: Create an Object That Uses a Gray Fill
	------------------------------------------------
	
	Depending on the type of drawing object needed, it may be possible to create the
	object that uses a gray fill, but to which you do not add a line color.
	Gray-colored object fills print correctly. For example, to create a gray-colored
	line, create instead a narrow rectangle that has no lines and uses a gray fill.
	
	Method 2: Use a PostScript Printer Driver
	-----------------------------------------
	
	If your printer supports PostScript, use a PostScript printer driver.
	
	Method 3: Change the Graphics Mode from Vector to Raster
	--------------------------------------------------------
	
	To change the graphics mode from vector to raster, follow these steps:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the printer icon for your particular printer driver and click
	  Properties.
	
	3. Click the Graphics tab.
	
	4. Under Graphics mode, select Use Raster Graphics, click Apply, and then click
	  OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: grey watermark water mark
	
	======================================================================
	Keywords          : kb3rdparty kbprint kbdta winword word97 kbPrinting 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
