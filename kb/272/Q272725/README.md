---
layout: page
title: "Q272725: BUG: Playing WMF with a Palette into Another WMF Leaks a Palette"
permalink: /kb/272/Q272725/
---

## Q272725: BUG: Playing WMF with a Palette into Another WMF Leaks a Palette

	Article: Q272725
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGDI kbMetafile kbPalettes kbSDKPlatform kbSDKWin32 kbDSupport kbGrpDSGDI
	Last Modified: 20-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows Metafile (WMF) is created that contains a palette record, and
	that WMF is playing into another WMF, a palette resource is leaked.
	
	RESOLUTION
	==========
	
	To work around this bug, do not play a WMF that contains a palette into another
	WMF. Instead, for example, play the WMF into a bitmap (DIB) and then put the
	bitmap in the target WMF. Note that this method results in a loss of
	scalability.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce this bug, create a WMF with a SelectPalette call in it. Then play
	that WMF into another WMF DC. A palette resource is leaked even if the WMFs are
	deleted afterwards. The resource is regained when the application exits.
	
	Additional query words: palette selectpalette createpalette LOGPALETTE leak resource system GDI
	
	======================================================================
	Keywords          : kbGDI kbMetafile kbPalettes kbSDKPlatform kbSDKWin32 kbDSupport kbGrpDSGDI 
	Technology        : kbWinMEsearch kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWinME kbWin98SE
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
