---
layout: page
title: "Q125865: Creative Writer: Canon BubbleJet Prints Borders Incorrectly"
permalink: /kb/125/Q125865/
---

## Q125865: Creative Writer: Canon BubbleJet Prints Borders Incorrectly

	Article: Q125865
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,1.1a
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbprint kbimu kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a Creative Writer document with a border (such as houses,
	umbrellas, lady bugs, or clocks) to a Canon BubbleJet BJC 600C printer, the
	border may not be printed correctly. The border may appear as a solid black line
	around the entire page, or it may not appear at all.
	
	CAUSE
	=====
	
	This behavior can occur if you use version 5.0 of the Canon BJC 600C printer
	driver or version 1.0d of the BJC 4000 printer driver.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method for your operating system.
	
	Microsoft Windows 95
	--------------------
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. In the Printers window, right-click the printer driver you are using, and
	  then click Properties.
	
	3. Click the Graphics tab.
	
	4. Under Dithering, click Error Diffusion, and then click OK.
	
	Microsoft Windows 3.x
	---------------------
	
	1. In the Printers Control Panel, verify that the Canon BubbleJet is the default
	  printer.
	
	  For more information about how to perform this task in Windows, see your
	  Windows printed documentation or online Help.
	
	2. If the Printers Setup dialog box appears, click Setup. Otherwise, proceed to
	  step 3.
	
	3. Click Options.
	
	4. Under Halftone, click Diffusion.
	
	You should now be able to print borders correctly from Creative Writer.
	
	MORE INFORMATION
	================
	
	If you receive the following error message
	
	  The page size and orientation settings for your printer do not match the page
	  size settings for your document.
	
	you may need to set the Halftone option to Pattern.
	
	NOTE: This issue does not occur in Microsoft Windows 98.
	
	The third-party products mentioned in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 1.10 mskids cw bubble jet bjc600 bjc4000
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbprint kbimu kbPrinting 
	Technology        : kbHomeProdSearch kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a
	Version           : WINDOWS:1.0,1.1,1.1a
	Issue type        : kbprb
	
	=============================================================================
	
