---
layout: page
title: "Q135601: Farallon Etherwave ISA Network Card Does Not See the Network"
permalink: kb/135/Q135601/
---

## Q135601: Farallon Etherwave ISA Network Card Does Not See the Network

	Article: Q135601
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOM
	-------
	
	After you successfully install the Farallon Etherwave ISA bus network card
	and the corresponding Etherlink III driver under Windows NT, Windows NT
	fails to see network resources.
	
	This symptom occurs even though you set the network card and driver for the
	correct I/O address and interrupt request (IRQ).
	
	Your network card may have worked previously under an MS-DOS based network
	operating system, but after installing the card under Windows NT the card
	does not work under either operating system.
	
	CAUSE
	=====
	
	Your card is set to the 10BaseT media type.
	
	Windows NT Setup correctly detects the 3c509 chipset on the card, however,
	neither Setup nor the Etherlink III driver automatically configure the card for
	the correct I/O address, IRQ, and media type. You must manually change the card
	settings and configure the Etherlink III driver through the driver configuration
	dialog box. If you do not specify a media type, the Etherlink III driver sets
	the card to the 10BaseT media type by default, which is incorrect for the
	Etherwave network card because the Etherwave portion of the card interfaces to
	the AUI media type output of the Etherlink 3c509 chipset.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Select AUI/Thicknet for the media type in the Windows NT Etherlink III driver
	  configuration dialog box.
	
	  -or-
	
	- Run the Farallon Etherwave network card configuration program which
	  automatically sets the media type.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
