---
layout: page
title: "Q89075: Using IRMA Workstation for Windows with Windows 3.1"
permalink: /kb/089/Q89075/
---

## Q89075: Using IRMA Workstation for Windows with Windows 3.1

	Article: Q89075
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing or running Digital Communications Associates' (DCA) IRMA
	Workstation for Windows, your computer may lock or freeze. This usually occurs
	when running the IRMA COMMCHK program and when:
	
	- The IRMA card is not found
	
	- There is a hardware conflict with the IRMA card
	
	CAUSE
	=====
	
	The IRMA Card Is Not Found
	--------------------------
	
	The DCA IRMA Workstation for Windows may not recognize or detect your IRMA card
	on an IBM 40 PS/2 with Microsoft Windows operating system version 3.1.
	
	If this problem occurs, you need to obtain the Configuration Diagnostic Disk
	version 2.1 from DCA.
	
	There Is a Hardware Conflict with the IRMA Card
	-----------------------------------------------
	
	The IRMA card needs a unique Base I/O Address, UMA address, and IRQ. If there is
	another card attempting to use these areas, then the IRMA card will not function
	properly.
	
	DCA IRMA Workstations for Windows is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 lockup lock up freeze hang crash stop 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
