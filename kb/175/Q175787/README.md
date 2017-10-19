---
layout: page
title: "Q175787: Stop 0x7F Caused by DigiBoard Driver"
permalink: /kb/175/Q175787/
---

## Q175787: Stop 0x7F Caused by DigiBoard Driver

	Article: Q175787
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT 4.0 Server with a DigiBoard version 2.1.0
	installed may Blue Screen with the following error.
	
	  Stop 0x0000007F(0x00000008, 0x00000000, 0x00000000, 0x00000000)
	
	NOTE: The first parameter will always be 0x0000008 (Double Fault)
	
	CAUSE
	=====
	
	The driver has caused the thread's memory stack to overrun, causing the Stop
	0x7f error. The driver for the DigiBoard version 2.1.0 is named Digifep5.sys,
	located in the %SystemRoot%\System32\Drivers directory.
	
	
	RESOLUTION
	==========
	
	The driver should be updated with the Digifep5.sys that comes with Windows NT
	4.0, or go to Digiboard's FTP site for the latest driver.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbprb
	
	=============================================================================
	
