---
layout: page
title: "Q64507: FontWare Inserts Incorrect Canon Printer Driver Header Section"
permalink: /kb/064/Q64507/
---

## Q64507: FontWare Inserts Incorrect Canon Printer Driver Header Section

	Article: Q64507
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing soft fonts using the Bitstream FontWare Installation Kit,
	FontWare should create a new printer section, [Canon LBP8 Europe], if you
	install the fonts for the Canon LBP8 or LBP4 printer driver. This does not work
	with the Microsoft Windows 3.0 Canon printer driver.
	
	CAUSE
	=====
	
	The FontWare program looks at the printer driver header information in the
	WIN.INI file to determine where to insert the font information. FontWare is
	looking for a [Canon LBP8 Europe] printer driver section when it reads the
	WIN.INI. The Windows 3.0 Canon driver has changed the header information to
	[canoniii]. Since FontWare can't find the old header section, it creates a new
	one and places all of the font information under that header.
	
	WORKAROUND
	==========
	
	To correct the problem, remove the [Canon LBP8 Europe] section and copy all of
	the font information over to the [canoniii] section in WIN.INI.
	
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
