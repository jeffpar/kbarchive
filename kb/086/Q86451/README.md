---
layout: page
title: "Q86451: Err Msg: &quot;Abnormal Termination&quot; with Adobe TypeAlign"
permalink: kb/086/Q86451/
---

## Q86451: Err Msg: &quot;Abnormal Termination&quot; with Adobe TypeAlign

	Article: Q86451
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run Adobe Systems TypeAlign under Windows version 3.1, the
	following error message may be displayed:
	
	  Application error, application requested abnormal termination.
	  [close]
	
	CAUSE
	=====
	
	This error is a result of having an older version of TypeAlign on your system.
	Windows 3.1 is not compatible with TypeAlign versions earlier than version 2.1.
	
	RESOLUTION
	==========
	
	To run Windows 3.1 with an older version of TypeAlign on your system, you must
	temporarily disable TypeAlign by removing the following line from the [windows]
	section of your WIN.INI file:
	
	     load=talgndll.exe
	
	To obtain an updated version of TypeAlign, contact Adobe Systems Inc.
	
	The product included here, TypeAlign, is manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	REFERENCES
	==========
	
	Windows version 3.1 APPS.HLP file
	
	Additional query words: 3.10 3.11 err msg 3rdparty reported Type Align type-align
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
