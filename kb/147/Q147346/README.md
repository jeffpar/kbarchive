---
layout: page
title: "Q147346: Event ID 28 from 8042prt on IBM PS/2 and Some PC Servers"
permalink: /kb/147/Q147346/
---

## Q147346: Event ID 28 from 8042prt on IBM PS/2 and Some PC Servers

	Article: Q147346
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT logs the following error in the System Log (as seen in the Event
	Viewer) following a reboot:
	
	  Source: 8042prt
	  Type: Information
	  Category: None
	  Description: Could not successfully write the Controller Command Byte for the
	  i8042.
	
	CAUSE
	=====
	
	The Windows NT initialization routine reads the Controller Command Byte (CCB)
	from the i8042prt, changes some CCB bits, writes it back, then verifies it. If
	the verification does not pass, the error is posted in the System Log. The
	keyboard driver also logs this error when it encounters glitches in operation.
	
	This is by design and a valuable tool to determine problems when the keyboard
	actually stops working.
	
	
	RESOLUTION
	==========
	
	This is an informational message only and not an indication of a problem with
	the keyboard port.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
