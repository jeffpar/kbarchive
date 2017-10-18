---
layout: page
title: "Q142678: Cannot Print Envelopes with Envelope Feeder"
permalink: kb/142/Q142678/
---

## Q142678: Cannot Print Envelopes with Envelope Feeder

	Article: Q142678
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print envelopes to a Hewlett-Packard (HP) 4/4M Plus printer
	under Windows NT 4.0 using the 4/4M Plus Post Script drivers that ship with
	Windows NT 4.0 and an HP envelope feeder unit, you receive the following error
	message:
	
	  ME feed COMM 10.
	
	This means that the printer driver does not see that there is an envelope feeder
	attached to the printer. Below is a list of the printer driver versions involved
	with this problem:
	
	  Driver Name:    Pscript.dll
	  Data file:      Hp4plus6.ppd
	  Config file:    Pscrptui.dll
	  Driver version: 4.01
	  Environment:    Windows NT x86
	
	RESOLUTION
	==========
	
	Remove the envelope feeder and feed the envelopes manually.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: Hewlett Packard 4/4M Plus envelope
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
