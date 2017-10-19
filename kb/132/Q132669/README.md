---
layout: page
title: "Q132669: Canon Printers Printing Blue Objects as Purple Objects"
permalink: /kb/132/Q132669/
---

## Q132669: Canon Printers Printing Blue Objects as Purple Objects

	Article: Q132669
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kb3rdparty win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Text or brush objects that print as blue on a Canon printer in Windows version
	3.1, print as purple in Windows 95.
	
	CAUSE
	=====
	
	Several models in the Canon Bubble Jet series use CMY inks that, when mixed in
	the conventional proportions (equal parts cyan and magenta) do not produce the
	expected blue color. Instead they produce a definite purple color.
	
	The Canon printer driver that shipped with Windows 3.1 has a special color
	setting (Match Screen Colors) that causes the driver to remap the specified
	color to a new color that, when printed, appears to be more blue. This new color
	uses only 40% magenta instead of the normal 100%. The Canon driver default color
	setting also prints blue text and brushes as purple.
	
	The Unidrv.dll does not currently provide color adjustment functionality.
	
	RESOLUTION
	==========
	
	Contact Canon for an updated printer driver for Windows 95.
	
	
	MORE INFORMATION
	================
	
	Canon printers are manufactured by Canon USA, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
