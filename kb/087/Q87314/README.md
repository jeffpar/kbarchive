---
layout: page
title: "Q87314: TrueType Problems with PS388 PostScript Board"
permalink: /kb/087/Q87314/
---

## Q87314: TrueType Problems with PS388 PostScript Board

{% raw %}

	Article: Q87314
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Princeton Publishing Labs' PostScript controller board model PS388
	manufactured by Raster Image Processing Systems (RIPS Inc.), TrueType characters
	are clipped when printed.
	
	The characters are most often clipped at point sizes greater than 12 points;
	however, this may happen at any point size.
	
	CAUSE
	=====
	
	This is a problem with the early production RIPS boards.
	
	To identify an earlier board not compatible with TrueType, look at the file date
	of the file that is downloaded to the PostScript board when the system is
	started. If the file date is 1991 or later, the board should not have problems
	with TrueType.
	
	RESOLUTION
	==========
	
	For assistance with this problem, call Raster Image Processing Systems (RIPS,
	Inc.).
	
	MORE INFORMATION
	================
	
	RIPS Inc. indicates the problem is only present in earlier boards based on
	Weitek processors. The newer boards based on Intel processors work correctly.
	
	The PS388 PostScript board was marketed by Princeton Publishing Labs.
	
	The RIPS products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.11 ps pscript interpreter imaging device post script 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
