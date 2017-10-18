---
layout: page
title: "Q82339: DEC Pathworks and Print Manager Net Error"
permalink: kb/082/Q82339/
---

## Q82339: DEC Pathworks and Print Manager Net Error

	Article: Q82339
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using a Digital Equipment Corporation (DEC) Pathworks driver and
	Windows version 3.1, you may receive the following error message when you try to
	print:
	
	  <printer name> on \\SERVER\PRINTER [NETWORK_ERROR]
	
	where <printer name> is the installed network printer.
	
	The problem occurs when the network printer is attached to another workstation or
	not directly connected to the server.
	
	CAUSE
	=====
	
	There is a problem with the interface between the Windows Print Manager and the
	DEC Pathworks driver. Print Manager thinks that there is some sort of network
	error, but the printer is online and the printer receives print jobs correctly
	from Windows 3.1.
	
	WORKAROUND
	==========
	
	No corrective action is necessary. Print Manager is displaying the wrong
	message. The printer functions properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	The DEC product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.1 Digital Equipment winfest 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
