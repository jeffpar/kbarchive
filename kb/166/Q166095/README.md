---
layout: page
title: "Q166095: BUG: Win95 Arc() Does Not Draw an Ellipse on HP LJ 4"
permalink: /kb/166/Q166095/
---

## Q166095: BUG: Win95 Arc() Does Not Draw an Ellipse on HP LJ 4

	Article: Q166095
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95
	Operating System(s): 
	Keyword(s): kbgraphic kbOSWin95 kbSDKWin16kbbuglist
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The documentation for and expected behavior of the Arc() API is to draw an
	entire ellipse if the start and end points are the same. However, when you do
	this in Windows 95 with the Hewlett Packard LaserJet 4 printer driver, the
	result is no output at all.
	
	RESOLUTION
	==========
	
	To workaround this, you can:
	
	Specify "Use Raster Graphics" in the "Graphics" page of the printer's properties
	dialog box.
	
	-or-
	
	Have the application detect the ellipse case and call Ellipse() instead of Arc().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: Arc Ellipse circle
	
	======================================================================
	Keywords          : kbgraphic kbOSWin95 kbSDKWin16 kbbuglist
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbSDKSearch kbZNotKeyword3 kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,95
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
