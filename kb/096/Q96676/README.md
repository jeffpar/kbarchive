---
layout: page
title: "Q96676: Font: Fonts Appear Similar in System 7 Font Sample Window"
permalink: kb/096/Q96676/
---

## Q96676: Font: Fonts Appear Similar in System 7 Font Sample Window

	Article: Q96676
	Product(s): Microsoft Press
	Version(s): 1.0,7.0,7.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TrueType Master Set, version 1.0 
	- Macintosh System Software, versions 7.0, 7.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft TrueType Master Set for the Macintosh, fonts may all look the
	same when you preview them using the System 7 Font Sample feature.
	
	This similarity in appearance occurs because Font Sample uses "sfont" ID numbers
	to determine which font to use to display the sample. TrueType Master Set
	identifies these sfont ID numbers the same for each suitcase, which causes one
	font sample to appear the same as another.
	
	MORE INFORMATION
	================
	
	To use the System 7 Font Sample feature, double-click a font suitcase and then
	double-click a font name to view a sample of the font.
	
	This problem does not occur if you install the fonts into the System or if you
	move the fonts into the same suitcase. In both situations, the System reassigns
	a unique sfont ID value to each font in the suitcase.
	
	
	Additional query words: 1.00 cache fontpack pack reorder assign 7.00 7.0 7.0.1 7.01 7.1 identical unexpected
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC _IKkbbogus kbMSNonProductSearch kbTTFontSearch kbTTFontMSet
	Version           : :1.0,7.0,7.1
	
	=============================================================================
	
