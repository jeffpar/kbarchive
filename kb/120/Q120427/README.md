---
layout: page
title: "Q120427: Quattro Pro Prints No Edges or Borders on Postscript Printers"
permalink: kb/120/Q120427/
---

## Q120427: Quattro Pro Prints No Edges or Borders on Postscript Printers

	Article: Q120427
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbprint kb3rdparty kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The edges or hairline borders around charts, graphs or graphic images in Quattro
	Pro spreadsheets do not print on 300 dpi PostScript printers. They may print
	with reduced width on 600 dpi (or better) PostScript printers. Complete images
	print to non-PostScript printers.
	
	CAUSE
	=====
	
	PostScript does not deal with clipping properly in the GDI model. GDI is
	inclusive/exclusive while PostScript is inclusive/inclusive. In a rectangle from
	(1,1) to (2,2), GDI lights the pels at (1,1) only. PostScript would light the
	pels at (1,1), (1,2), (2,1) and (2,2).
	
	Quattro Pro generates a clipping region by creating a very large rectangle,
	intersecting it with the desired drawing area, then using a series of PatBlt's
	to output the edges with very precise coordinates. The difference in clipping
	between GDI and PostScript makes some of the lines (pels) disappear.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
