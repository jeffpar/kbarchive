---
layout: page
title: "Q92939: Halftone Frequency Problem in PostScript Driver 3.53"
permalink: kb/092/Q92939/
---

## Q92939: Halftone Frequency Problem in PostScript Driver 3.53

	Article: Q92939
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31kbbuglist
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft PostScript Printer Driver version 3.53 with some
	PostScript printers, changing the Halftone Frequency setting does not affect the
	output of the printer. The Halftone Frequency setting is accessible through the
	Advanced Options of Printer Setup for a PostScript printer.
	
	CAUSE
	=====
	
	The Halftone Frequency setting controls the number of lines per inch used in
	producing halftone screens of gray scale images. On some PostScript printers,
	including the IBM 4029 and the Linotronic 100, changing this setting from its
	default of 60 does not change the output of the printer. This problem only
	occurs when using Microsoft PostScript Driver version 3.53.
	
	WORKAROUND
	==========
	
	The only workaround is to revert to the PostScript Driver version 3.5, which
	ships with Microsoft Windows operating system version 3.1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the PostScript Printer Driver
	version 3.53. We are researching this problem and will post new information here
	as it becomes available.
	
	
	Additional query words: 3.10 3.11 post script drivers pscript lino ps LP1 LPI
	
	======================================================================
	Keywords          : win31 kbbuglist
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
