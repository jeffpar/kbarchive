---
layout: page
title: "Q130281: RAS Does Not Autodetect Hayes Ultra 14.4 Modem"
permalink: /kb/130/Q130281/
---

## Q130281: RAS Does Not Autodetect Hayes Ultra 14.4 Modem

	Article: Q130281
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Hayes Ultra 14400 modem is not detected properly by the modem autodetection
	feature of Windows NT Remote Access Service (RAS).
	
	CAUSE
	=====
	
	The Hayes Ultra 14400 section of the MODEM.INF file does not include a
	DETECT_STRING or a DETECT_RESPONSE command. These commands are required for RAS
	to autodetect a modem.
	
	RESOLUTION
	==========
	
	Do one of the following to configure your Hayes Ultra 14400 modem for RAS:
	
	- Skip the RAS modem autodetection feature and manually select the Hayes Ultra
	  14400 modem from the list of supported modems.
	
	  -or-
	
	- Use the RAS modem autodetection feature and select the Hayes Optima 14400
	  modem from the list of modems returned by the autodetection. The Hayes Ultra
	  14400 uses the same section of the MODEM.INF as the Hayes Optima 14400.
	
	  -or-
	
	- Add the following two lines to the [Hayes Ultra 14400] section of the
	  %systemroot%\SYSTEM32\RAS\MODEM.INF file:
	
	        DETECT_STRING=ATI0
	        DETECT_RESPONSE=14400
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	The Ultra 14.4 modem is manufactured by Hayes, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
