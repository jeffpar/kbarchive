---
layout: page
title: "Q127988: Plug and Play NIC Err Msg: Hardware Does Not Respond..."
permalink: kb/127/Q127988/
---

## Q127988: Plug and Play NIC Err Msg: Hardware Does Not Respond...

	Article: Q127988
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbsetup
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Plug and Play NIC, such as the Realtek Longshine NIC, is configured to
	use an NDIS 2 driver, you may receive an error message similar to the following
	when you start your computer:
	
	  \DEV\MS2000$ Error: Hardware does not respond.
	  Error loading device driver NE2000.DOS
	  Error 7306: the driver failed to initialize...
	
	In spite of this error message, full network functionality is available in
	Windows 95.
	
	MORE INFORMATION
	================
	
	A Plug and Play card is disabled until it is turned on either by the BIOS or a
	software driver. In this case, the NDIS 2 driver, NE2000.DOS, does not turn on
	the card. Windows 95 later initializes the NDIS 3 driver, which then activates
	the card, enabling connectivity. The error message is correct at the moment it
	is generated, but another driver subsequently corrects the problem.
	
	This behavior occurs only if the card has been manually configured for a
	real-mode 16-bit NDIS driver with protected-mode protocols only. In a
	configuration with real-mode protocols, such as DLC, the protocols are not
	available.
	
	Note that the error message is ordinarily hidden by the startup screen. To see
	this error message you must press the ESC key or add the line "LOGO=0" in the
	MSDOS.SYS file.
	
	The products discussed here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	REFERENCES
	==========
	
	For more information about the contents of the MSDOS.SYS file, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q118579 Contents of the Windows Msdos.sys File
	
	Additional query words: pnp
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbsetup 
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
