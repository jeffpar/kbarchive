---
layout: page
title: "Q58295: Printing Is Slow with PaintJet Driver"
permalink: /kb/058/Q58295/
---

## Q58295: Printing Is Slow with PaintJet Driver

{% raw %}

	Article: Q58295
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-MAY-2001
	
	3.00 3.00a
	WINDOWS
	kbprint
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Printing from the Microsoft Windows 3.0 PaintJet driver may be fairly slow. The
	slowness occurs because the driver is designed to rasterize a metafile, which
	produces a very large amount of data. The data is then sent to the Print
	Manager, which needs to write this to a temporary file (this could be more than
	a megabyte of data).
	
	MORE INFORMATION
	================
	
	The best PaintJet print speed can be obtained by checking the "High Speed Direct
	LPT" option in the driver. This bypasses the Print Manager and improves print
	speed, although it may take longer to regain control of your Windows
	application.
	
	This behavior is by design of the HP PaintJet driver option "High- Speed Direct
	LPT." With this option turned on, Print Manager is not used, regardless of
	whether it is selected in the Control Panel.
	
	If this option is turned off, Print Manager should appear as expected.
	
	KBCategory: kbprint
	KBSubcategory: win30
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : :3.0,3.0a
	
	=============================================================================
	

{% endraw %}
