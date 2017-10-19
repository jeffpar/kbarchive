---
layout: page
title: "Q122465: Using the Microcom 14400 Deskporte ES Series with AWFAX"
permalink: /kb/122/Q122465/
---

## Q122465: Using the Microcom 14400 Deskporte ES Series with AWFAX

	Article: Q122465
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive one of the following error messages when you try to use a Microcom
	14400 Deskporte ES Series fax modem with Microsoft At Work PC Fax:
	
	- Too many Serial COM errors. Your COM port does not support this higher baud
	  rate.
	
	  -or-
	
	- General failure in EFAXPUMP.INI.
	
	NOTE: These error messages are returned as a System Administrator messages in
	Microsoft Mail.
	
	CAUSE
	=====
	
	These errors occur when the SetupCommand entry in the EFAXPUMP.INI file is
	incorrect.
	
	RESOLUTION
	==========
	
	The Microcom 14,400 Deskporte ES Series fax modem may function properly with
	Microsoft At Work PC Fax using the following setup command
	
	     SetupCommand = AT&F E0 V1 Q0 &C1 &D3 &D2 &S0=0 S7=255 S8=2 <X>4 &K4
	
	where <X> is the COM port on which the fax modem resides.
	
	Add the above entry to the EFAXPUMP.INI file in the [comx] section.
	
	MORE INFORMATION
	================
	
	The Microcom 14,400 ES Deskporte fax modem is both Class 1 and Class 2
	compatible. Without the above SetupCommand entry, either you cannot send faxes
	at all, or you can send one fax only. This depends on the class to which the fax
	modem is set.
	
	- If the Microcom 14400 is set up to be a Class 1 fax modem, you cannot send
	  any faxes.
	
	- If the Microcom 14400 is set up to be a Class 2 fax modem, you can send one
	  fax only.
	
	To find the class of the fax modem, open the EFAXPUMP.INI file in Microsoft Write
	and choose No Conversion. The fax modem class is designated by the following
	EFAXPUMP.INI entry
	
	  FixModemClass=<y>
	
	where <y> designates the class of the fax modem.
	
	The 14400 Deskporte ES Series fax modem is manufactured by Microcom, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: err msg 3rdparty 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
