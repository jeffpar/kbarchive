---
layout: page
title: "Q123613: FAX: Faxes Print on Every Other Page with Size A4 Paper"
permalink: kb/123/Q123613/
---

## Q123613: FAX: Faxes Print on Every Other Page with Size A4 Paper

	Article: Q123613
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, versions 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An extra sheet of paper is ejected between each page printed when DISPLAY.EXE is
	configured to automatically spool faxes to a printer using European paper size
	(A4).
	
	CAUSE
	=====
	
	The PPB driver that is used to read the printer configuration from the
	DISPLAY.EXE does not correctly read an A4 paper size. Therefore, if the actual
	size of the A4 paper is 247 cm by 246 cm, the extra pages will be printed.
	
	WORKAROUND
	==========
	
	Because the PPB driver is not used by FAXVIEW.EXE, it is possible to turn off
	the automatic spool and let users print their faxes from their own desktop using
	FAXVIEW.EXE. This will allow the faxes to print on a single page.
	
	Additional query words: 3.00 3.00a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300 kbMailGateFax300a kbMailGateFax320
	Version           : MS-DOS:3.0,3.0a,3.2
	
	=============================================================================
	
