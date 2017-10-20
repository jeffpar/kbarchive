---
layout: page
title: "Q114778: Windows NT Terminal Supports XModem-1K Protocol"
permalink: /kb/114/Q114778/
---

## Q114778: Windows NT Terminal Supports XModem-1K Protocol

{% raw %}

	Article: Q114778
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows Terminal program (TERMINAL.EXE) included with Microsoft Windows,
	Windows for Workgroups, and Windows NT supports the XModem-1K binary file
	transfer protocol for faster and more efficient file transfers.
	
	MORE INFORMATION
	================
	
	Windows Terminal supports the Kermit and XModem/cyclic redundancy check (CRC)
	error-correcting file-transfer protocols. These protocols are used to transfer
	binary files, such as executable programs (.COM and .EXE files) and other files
	including ASCII text. These protocols have the ability to detect and correct
	errors.
	
	Files transferred with the XModem/CRC protocol are divided into packets
	(sometimes referred to as blocks) and then a mathematical computation is
	performed to create a signature number. This signature number is sent with the
	packet to be checked on the receiving end. If the numbers do not match, an error
	is detected and the packet is retransmitted.
	
	The XModem/CRC protocol supplied with Terminal defaults to a 128-byte packet
	(block) size. The signature number is added to each 128 bytes transferred.
	Because of the small size of the packets, the signature number increases the
	overall amount of data transferred significantly.
	
	The XModem-1K protocol increases the packet size to 1024 bytes (1 kilobyte). This
	allows for faster transfers than 128-byte packets because the signature number
	is only added for every 1024 bytes transferred.
	
	Using XModem-1K is eight times more efficient than the default (XModem/CRC) with
	128-byte packets.
	
	Many bulletin board systems (BBSs) support XModem-1K. Additionally, many
	commercial dial-up services, including CompuServe, support the XModem-1K
	protocol.
	
	To enable XModem-1K in Terminal, select Binary Transfers from the Settings menu
	and choose XModem/CRC. Then choose XModem-1K, if available, when downloading.
	Terminal automatically adjusts to the 1K-packet size when you select XModem-1K
	on the BBS or service from which you are downloading.
	
	REFERENCES
	==========
	
	Phil Becker, "Introduction to PC Communications," pages 62-63, QUE, 1992.
	
	Additional query words: wfw wfwg prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTS310search kbAudDeveloper kbWin3xSearch kbWinNT310Search kbWinNTW310Search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : :3.1,3.11
	
	=============================================================================
	

{% endraw %}
