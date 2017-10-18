---
layout: page
title: "Q269595: Active Desktop Wallpaper Appears Scrambled"
permalink: kb/269/Q269595/
---

## Q269595: Active Desktop Wallpaper Appears Scrambled

	Article: Q269595
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:4.01 Service Pack 2,4.x,5,5.01,5.01 Service Pack 1,5.5; Win2000:95; Win98:5.01,
	Operating System(s): 
	Keyword(s): kbdisplay win95 msiew95 win98 msiew98 win98se
	Last Modified: 13-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Internet Explorer versions 4.0, 4.01, 4.01 SP1, 4.01 SP2, 4.5, 5, 5.01, 5.01 Service Pack 1, 5.5 for Windows 95 
	- Microsoft Internet Explorer versions 4.01 Service Pack 2, 5, 5.01, 5.01 Service Pack 1, 5.5 for Windows 98 
	- Microsoft Internet Explorer versions 5.01, 5.01 Service Pack 1, 5.5 for Windows 98 Second Edition 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Active Desktop is enabled on your computer, some wallpaper bitmaps may
	not display correctly if the wallpaper display mode is set to "Stretch". In
	addition to multiple horizontal bands of distorted desktop background, dragging
	or resizing windows can result in additional erratic scrambling. Note that this
	problem is only likely to occur at higher screen resolutions when you are using
	the "Blue Rivets" or "Triangle" wallpaper bitmaps (both of these are 16 x 16
	bitmaps). Note that if the Active Desktop is disabled, the desktop does not
	attempt to display the affected stretched bitmaps.
	
	CAUSE
	=====
	
	This problem can occur because the Active Desktop Web content display
	(Mshtml.dll) fails to properly handle an unexpected error from the Graphics
	Device Interface (GDI) function "StretchBlt()", and this results in the display
	of improperly-filled bitmaps on the desktop background.
	
	
	RESOLUTION
	==========
	
	To work around this problem, select a different background picture.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about the problem with StretchBlt(), click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q269585 PRB: StretchBlt()/StretchDIBits() Fails When Bitmap Sizes Differ
	  Greatly
	
	Additional query words: display trash
	
	======================================================================
	Keywords          : kbdisplay win95 msiew95 win98 msiew98 win98se 
	Technology        : kbIEsearch kbWin95search kbWin98search kbWin98SEsearch kbIE95Search kbIE500Search kbZNotKeyword3 kbIE98Search kbWin98 kbIE400Win95 kbIE401Win95 kbIE500Win95 kbIE501Win95SP1 kbIE550Win95 kbIE401Win98SP2 kbIE500Win98 kbIE501Win98 kbIE501Win98SP1 kbIE550Win98 kbIE501Win98SE kbIE501Win98SESP1 kbIE550Win98SE kbWin98SE kbIE98SESearch kbIE501Win95 kbIE550Search
	Version           : WINDOWS:4.01 Service Pack 2,4.x,5,5.01,5.01 Service Pack 1,5.5; Win2000:95; Win98:5.01,5.01 Service Pack 1,5.5
	Issue type        : kbprb
	
	=============================================================================
	
