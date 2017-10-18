---
layout: page
title: "Q88455: Terminal Settings for Popular Online Services"
permalink: kb/088/Q88455/
---

## Q88455: Terminal Settings for Popular Online Services

	Article: Q88455
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article documents the correct settings for Terminal to properly communicate
	with the following online services:
	
	- CompuServe
	
	- BIX
	
	- GEnie
	
	- TymNet
	
	- Most bulletin board services (BBSs)
	
	MORE INFORMATION
	================
	
	CompuServe
	----------
	
	To log on to CompuServe, do the following:
	
	1. From the Settings menu, choose Terminal Emulation.
	
	2. Choose DEC VT-100 (ANSI) and choose OK.
	
	3. From the Settings menu, choose Communications.
	
	4. Choose 7 Data Bits, Even Parity, and 1 Stop Bit. Choose OK.
	
	NOTE: CompuServe defaults to 7 data bits, which is not compatible with XModem
	file transfers. For this reason, you cannot use Terminal's XModem protocol to
	transfer files with CompuServe set at 7 data bits. After you set CompuServe to
	use 8 data bits, you can set up Terminal to use 8 data bits and no parity. With
	this setting, you can use XModem to transfer files with CompuServe. For
	information on how to set up CompuServe to use 8 data bits, contact CompuServe
	support (type go help at the CompuServe prompt).
	
	BIX ("BYTE" Magazine's Online Information eXchange Service)
	-----------------------------------------------------------
	
	To log on to BIX, do the following:
	
	1. From the Settings menu, choose Terminal Emulation.
	
	2. Choose DEC VT-100 (ANSI) and choose OK.
	
	3. From the Settings menu, choose Communications.
	
	4. Choose 7 Data Bits, Even Parity, and 1 Stop Bit. Choose OK.
	
	GEnie (General Electric Network for Information Exchange)
	---------------------------------------------------------
	
	To log on to GEnie, do the following:
	
	1. From the Settings menu, choose Terminal Emulation.
	
	2. Choose DEC VT-100 (ANSI) and choose OK.
	
	3. From the Settings menu, choose Communications.
	
	4. Choose 8 Data Bits, None Parity, 1 Stop Bit, Local Echo (from Terminal
	  Preferences menu), and choose OK.
	
	TymNet
	------
	
	TymNet is a modem dial-in that provides access to Bank of America's Home Banking
	Service and other host services.
	
	To log on to TymNet, do the following:
	
	1. From the Settings menu, choose Terminal Emulation.
	
	2. Choose DEC VT-100 (ANSI) and choose OK.
	
	3. From the Settings menu, choose Communications.
	
	4. Choose 8 Data Bits, None Parity, 1 Stop Bit.
	
	If connection is established and text is not readable, use step 1 below to clear
	bad characters. If step 1 is not successful, use step 2.
	
	1. After receiving a line of non-readable text, wait three seconds and then type
	  a capital letter "A" (without the quotation marks).
	
	2. Set modem parameters to 7 Data Bits, 1 Stop Bit, and Even Parity.
	
	Most BBSs
	---------
	
	Most computer bulletin board services (BBSs) require communications settings of 8
	data bits, no parity, and one stop bit. The Windows Terminal program defaults to
	these settings when first opened.
	
	Additional query words: 3.10 3.00a 3.00 3.11 timenet win31
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
