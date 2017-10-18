---
layout: page
title: "Q134520: Phone Dialer Does Not Report a Busy Signal"
permalink: kb/134/Q134520/
---

## Q134520: Phone Dialer Does Not Report a Busy Signal

	Article: Q134520
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Phone Dialer, you may not receive notification that the line you
	are calling is busy.
	
	CAUSE
	=====
	
	Depending on the modem and driver being used, Phone Dialer may not detect the
	busy signal. This occurs because the drivers for certain modems have been
	designed to not establish a data connection, when calling from Phone Dialer,
	even if the number called is another modem. In order to prevent the data
	connection, Phone Dialer loses the ability to detect a busy signal.
	
	RESOLUTION
	==========
	
	Install a standard modem driver for the modem. This will cause Phone Dialer to
	detect a busy signal, but may also cause Phone Dialer to establish a connection
	if you call another modem.
	
	Additional query words: dialer.exe
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
