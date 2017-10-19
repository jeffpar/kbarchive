---
layout: page
title: "Q76413: Screen Repainting Problem with Microsoft Mouse Driver"
permalink: /kb/076/Q76413/
---

## Q76413: Screen Repainting Problem with Microsoft Mouse Driver

	Article: Q76413
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	SYMPTOMS
	========
	
	  When LAN Manager version 2.0c is installed on MS-DOS version 5.0, netpopups
	  halt screen repainting until the screen is cleared using CLS. Only then does
	  the screen return to normal.
	
	RESOLUTION
	==========
	
	  Replacing MOUSE.COM with the Microsoft Mouse version 7.04 or 8.0 resolves the
	  netpopup problem. [Note: Microsoft Mouse version 7.0 resolves this problem;
	  however, it is known to produce unrecoverable application errors (UAEs) with
	  Windows.]
	
	Additional query words: 2.00c 5.00 8.00
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
