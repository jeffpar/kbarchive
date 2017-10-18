---
layout: page
title: "Q63585: Everex 1200 and 2400 BPS Modems and Windows Terminal"
permalink: kb/063/Q63585/
---

## Q63585: Everex 1200 and 2400 BPS Modems and Windows Terminal

	Article: Q63585
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Everex 1200 and 2400 bits-per-second (BPS) Modems require adjustments to the
	Modem Commands section of the Terminal program included with Microsoft Windows.
	
	MORE INFORMATION
	================
	
	To dial properly, you should perform the following steps:
	
	1. Select Settings.
	
	2. Choose Modem Commands.
	
	3. Set Modem Defaults to None.
	
	4. Set Dial Prefix to ATDT.
	
	5. Set Hangup Prefix to +++.
	
	6. Set Hangup Suffix to ATH.
	
	7. (Windows 3.0 only) Set Answer to ATQ1E0S0=1.
	
	8. Set Originate to ATQ1.
	
	9. Choose OK.
	
	
	Additional query words: 3.1 3.10 3.0 3.00 3.11 Wincomm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
