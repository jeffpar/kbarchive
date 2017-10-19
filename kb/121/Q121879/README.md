---
layout: page
title: "Q121879: ISDN Server Does Not Answer Incoming Calls"
permalink: /kb/121/Q121879/
---

## Q121879: ISDN Server Does Not Answer Incoming Calls

	Article: Q121879
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 3.5 Remote Access Services (RAS) doesn't answer incoming ISDN calls.
	
	CAUSE
	=====
	
	This problem occurs when the phone number (in the Network portion of Control
	Panel for the ISDN adapter) contains non-numeral characters (for example, a dash
	"-").
	
	The ISDN driver does not parse non-numeral characters out of the phone number
	string correctly. This causes incoming calls to be ignored by the adapter.
	
	WORKAROUND
	==========
	
	Don't use non-numeral characters in the phone number.
	
	NOTE: When you try to change or remove the phone number, the ISDN setup program
	does not delete the phone number correctly. If this happens, use one of the
	following procedures:
	
	Remove and Reinstall the ISDN Adapter Driver
	--------------------------------------------
	
	1. Remove the ISDN adapter driver from the Network portion of Control Panel.
	
	2. Shutdown and restart your computer.
	
	3. In Control Panel, add the ISDN driver back without entering a phone number.
	
	4. Reconfigure RAS and restart your computer again.
	
	Edit the Registry
	-----------------
	
	1. Start Registry Editor.
	
	2. In the HKEY_LOCAL_MACHINE subtree go to the following sub-key:
	
	  SYSTEM\CurrentControlSet\Services\Pcimac#
	
	  where # is the network adapter number of the PCIMAC that has been installed.
	
	3. Under this key there is a Paramters key with the following value(s):
	
	  Line#.LTerm#.Address
	
	  Delete all of the Line#.LTerm#.Address values.
	
	  NOTE: Line# is the line number and LTerm# is the logical terminal number. The
	  PCIMAC - ISA adapter which supports only one ISDN line will only have Line0.
	  The PCIMAC/4 adapter with 4 ISDN lines will have lines numbered from 0 to 3.
	
	4. Restart your computer.
	
	STATUS
	======
	
	Microsoft and Digiboard International are aware of the problems and are working
	on a revised driver. We will post more information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	
