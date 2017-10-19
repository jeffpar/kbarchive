---
layout: page
title: "Q153399: Add-in Display Adapters and Motorola Powerstack Computers"
permalink: /kb/153/Q153399/
---

## Q153399: Add-in Display Adapters and Motorola Powerstack Computers

	Article: Q153399
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install an add-in display adapter on a Motorola Powerstack PowerPC
	computer system, the new display adapter is not recognized by the system,
	resulting in no video display.
	
	CAUSE
	=====
	
	A problem exists in an older firmware revision (version 2.06a) that prevents
	many ISA/PCI video cards from working. This firmware has limited support for
	third-party video adapters because it cannot emulate the x86 code found in the
	card's BIOS.
	
	RESOLUTION
	==========
	
	Obtain the latest firmware revision (version 3.03.0x or later) from your
	Motorola vendor or from Motorola directly. You can access the Motorola web page
	on the Internet at http://www.mot.com.
	
	MORE INFORMATION
	================
	
	The specific BIOS revision can be identified by the following behavior:
	
	- Version 2.06a starts with several system tests on a black screen, which
	  transitions to another black screen with white lettering that displays the
	  text "Version 2.06a" and continues with a blue screen and a small set of menu
	  selections in white letters.
	
	- Version 3.03.0x boots to a screen with a bitmap background and two small
	  windows. The upper window gives the version information and the lower window
	  shows a small set of menu selections. This firmware does have x86 emulation,
	  which supports cards that have Intel code in the BIOS.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt motorola ppc
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
