---
layout: page
title: "Q97872: EMS Not Recommended with LAN Man, Windows 386 Enhanced"
permalink: kb/097/Q97872/
---

## Q97872: EMS Not Recommended with LAN Man, Windows 386 Enhanced

	Article: Q97872
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Expanded memory emulators use processes that, under some circumstances, can
	retard or stop system operation.
	
	MORE INFORMATION
	================
	
	Expanded memory managers differ from expanded memory hardware. Software
	emulators each behave with some unique characteristics and may even behave
	differently from version to version. An emulator that breaks in one environment
	may work fine in another.
	
	EMM386 is an emulator type, which depends on protected mode mechanisms. The
	emulation is much slower than hardware and during the switch locks out
	interrupts.
	
	If expanded memory is used too frequently, the system spends too large a portion
	of its bandwidth just switching, and this increases the periods during which
	interrupts are not serviced. Users sometimes hang when interrupts are missed,
	due to driver situations.
	
	One of the most common problems with expanded memory emulators, is dropped
	characters in serial communications applications at high data rates, although
	some applications might be able to hide such troubles under certain conditions.
	Another problem is hanging up an environmental shell, such as Windows.
	
	Recent versions of the NETWORK.WRI file for Windows 3.1 state that if you are
	running Windows in 386 enhanced mode, using expanded memory with LAN Manager is
	not recommended because it may downgrade system activity. (One version said
	downgrade or HALT; this difference is due to the unpredictability of system
	performance factors when expanded memory is involved.)
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
