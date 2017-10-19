---
layout: page
title: "Q122414: RAS: Error 651 with the Evercom 24E+ Modem"
permalink: /kb/122/Q122414/
---

## Q122414: RAS: Error 651 with the Evercom 24E+ Modem

	Article: Q122414
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to dial using Remote Access Services (RAS) with an Evercom 24E+
	modem, you receive the following error message:
	
	  Error 651: Your modem (or other connecting device) has reported an error.
	
	The problem exists only when you try to dial through RAS. Other communications
	programs may still function without errors.
	
	CAUSE
	=====
	
	This error message occurs when RAS cannot correctly communicate with the modem.
	The COMMAND_INIT string
	
	  AT&F &C1 &D2 Q0 V1 \N1 S0=0 S2=128 S7=55<speaker><cr>
	
	in the MODEM.INF file for the Evercom 24E+ is incorrect.
	
	RESOLUTION
	==========
	
	To correct this problem, use the Hayes Compatible 2400 selection instead of the
	Evercom 24E+ selection in the RAS Setup.
	
	Additional query words: 3rdparty err msg 3.11 311 651
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
