---
layout: page
title: "Q112090: AWFAX: Err Msg or No Connection with PM14400FXSA Fax Modem"
permalink: /kb/112/Q112090/
---

## Q112090: AWFAX: Err Msg or No Connection with PM14400FXSA Fax Modem

	Article: Q112090
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Practical Peripherals PM14400FXSA fax modem with Microsoft At
	Work PC Fax, you may experience problems establishing a connection, or you may
	receive one of the following error messages:
	
	  Failure during negotiation
	
	-or-
	
	  Line quality is too poor
	
	CAUSE
	=====
	
	The Practical Peripherals PM 14400 FXSA fax modem (the external unit with LCD)
	requires ROM version 1.23 or later.
	
	MORE INFORMATION
	================
	
	To determine the ROM version for the fax modem, check the ModemID= line in the
	[COMx] section of the EFAXPUMP.INI file. This line identifies the modem used on
	the COM port and includes a ROM version number.
	
	STATUS
	======
	
	PM14400FXSA fax modem is manufactured by Practical Peripherals, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.11 error efax pc fax 14400 fx sa pm PM14400FXSA
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
