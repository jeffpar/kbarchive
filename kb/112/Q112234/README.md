---
layout: page
title: "Q112234: FaxDrv: Improper Scaling with Excel 4.0"
permalink: /kb/112/Q112234/
---

## Q112234: FaxDrv: Improper Scaling with Excel 4.0

	Article: Q112234
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0a; WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0a 
	- Microsoft Excel for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Gateway to FAX, FAX Printer Driver (FPD) may exhibit scaling
	problems with Excel version 4.0.
	
	CAUSE
	=====
	
	Printer drivers do not control how the image is scaled. Scaling is left to the
	application.
	
	RESOLUTION
	==========
	
	Select the Print Preview command before printing the image. If it is not scaled
	the way you want it, correct it before printing.
	
	This problem does not occur if you connect the Microsoft FAX driver to Port
	rather than LPT1.
	
	
	Additional query words: 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbExcelSearch kbMailSearch kbMailGateSearch kbZNotKeyword3 kbExcel400 kbMailGateFax300a
	Version           : MS-DOS:3.0a; WINDOWS:4.0
	
	=============================================================================
	
