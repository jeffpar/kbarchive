---
layout: page
title: "Q103583: Screen Fonts Varying in Size When in Different Resolution"
permalink: /kb/103/Q103583/
---

## Q103583: Screen Fonts Varying in Size When in Different Resolution

	Article: Q103583
	Product(s): Microsoft FoxPro
	Version(s): 2.5x 2.60 2.60a 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	You may note that items carefully sized in the Screen Builder for one
	resolution do not exactly match in another resolution. This behavior is the
	result of the Windows font mapper being unable to exactly match the font in
	the new resolution.
	
	The font mapper attempts to match the many characteristics of the named
	font with the fonts available in the new resolution. It matches size,
	style, family, and a number of other characteristics to determine the best
	match. If no exact match is found, the nearest possible match is chosen.
	
	This varying font selection can become a problem when the font that is
	chosen as the screen font for a screen (see the Screen Layout dialog box)
	cannot be matched on the destination resolution. Since the screen font is
	used to size and position all the items on the screen, sizing and
	positioning can vary significantly if the font cannot be exactly matched,
	which results in Windows selecting a "best fit" match.
	
	To mitigate the effects of this problem, do the following:
	
	1. Follow Windows dialog box design practice and design screens with a lot of
	  space around individual items. This type of design allows items to "float"
	  when varying resolutions and screen fonts are used.
	
	2. Design screens with a TrueType screen font. Because the various sizes of each
	  TrueType font are derived programmatically for each resolution and size
	  combination, TrueType fonts are available in virtually any size, which means
	  that the font mapper never has to settle for second best.
	
	3. Make sure that the chosen design font is available on the destination
	  machines--for example, TrueType fonts are not available in Windows 3.0. Also
	  make sure you don't use a font that wasn't shipped with Windows because that
	  font may not be installed on the destination machines.
	
	  If the destination machines are running Windows 3.1, it is best to use the
	  TrueType fonts that are shipped with Windows 3.1 (for example, Arial, Times
	  New Roman, and so on).
	
	  If the destination machines may be running Windows 3.0 instead of 3.1, use the
	  fonts shipped with Windows 3.0 (such as Courier, Helv, or Tms Rmn).
	
	Additional query words: VFoxWin FoxWin 2.50 2.50a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : 2.5x 2.60 2.60a 3.00
	
	=============================================================================
	
