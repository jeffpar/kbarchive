---
layout: page
title: "Q123610: Colored Text Does Not Print in Correct Color"
permalink: /kb/123/Q123610/
---

## Q123610: Colored Text Does Not Print in Correct Color

	Article: Q123610
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print colored text from an application (such as Microsoft Word 6.0 for
	Windows) to a color printer using UNIDRV, you may not get the exact colors as
	shown on the screen. For example, in Word for Windows, dark blue prints as blue.
	
	CAUSE
	=====
	
	UNIDRV.DLL uses DMCOLOR as the color brute library. DMCOLOR uses RGB color
	format and does not dither text colors. As a result, for text, you can print
	only eight colors.
	
	WORKAROUND
	==========
	
	One possible workaround for this problem is to install and use the latest
	printer driver, if one is available.
	
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3rdparty 500c 550c 560c hewlett packard hp deskjet desk jet
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
