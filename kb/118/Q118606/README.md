---
layout: page
title: "Q118606: PPT: GP Fault in HPPCL5E2.DLL When Printing"
permalink: /kb/118/Q118606/
---

## Q118606: PPT: GP Fault in HPPCL5E2.DLL When Printing

{% raw %}

	Article: Q118606
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbprint kbdta kbPrintingkbbuglist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing a presentation to a Hewlett-Packard (HP) LaserJet 4 printer, you
	may receive the following error message:
	
	  An error has occurred in your application.
	  If you choose Ignore, you should save your work in a new file.
	  If you choose Close, your application will terminate.
	
	The Ignore button will not work, and when you choose Close, you get the following
	error message:
	
	  PP4 caused a General Protection Fault in module HPPCL5E2.DLL at 0002:0853.
	
	CAUSE
	=====
	
	This problem is caused by a problem in the LaserJet 4 printer driver when
	printing some bitmaps from within PowerPoint.
	
	WORKAROUND
	==========
	
	Try one of the following workarounds:
	
	1. Install and use a LaserJet III printer driver instead. The LaserJet 4 printer
	  can print output from a LaserJet III driver, but only at a maximum resolution
	  of 300 dpi.
	
	2. If your model of LaserJet 4 supports PostScript, install and use the
	  PostScript driver for the LaserJet 4.
	
	3. Locate and remove bitmaps from your presentation until the problem goes away.
	
	4. Convert bitmaps to a different format and then re-import them into your
	  presentation. For example, converting the original bitmap from a *.BMP file
	  format to a *.PCX file format, and then using that *.PCX file instead, has
	  been successful for some files.
	
	Updating your LaserJet 4 driver is currently not a solution because this problem
	has not yet been addressed by any of the available drivers from Hewlett-Packard.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem with the Hewlett-Packard LaserJet 4
	printer drivers when used with PowerPoint versions 3.0 and 4.0 for Windows. When
	a solution to this problem is available from Hewlett-Packard, we will post that
	new information here in the Microsoft Knowledge Base.
	
	The third-party products discussed here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: HPPCL5E HPPCL5E1 HPPCL5E2 HPPCL5E3 winppt 4.00a 4.00c 7.00 ppt95 HPPCL5E4 HPPCL5E0
	
	======================================================================
	Keywords          : kberrmsg kbprint kbdta kbPrinting kbbuglist
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search kbPowerPt400 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
