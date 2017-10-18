---
layout: page
title: "Q165004: NTVDM Support for Compaq Financial Keyboard Scan Codes"
permalink: kb/165/Q165004/
---

## Q165004: NTVDM Support for Compaq Financial Keyboard Scan Codes

	Article: Q165004
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardwarekbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Some of the scan codes on the Compaq financial keyboard do not work in a Windows
	NT virtual machine.
	
	CAUSE
	=====
	
	The numeric keypad of the Compaq financial keyboard is different than the keypad
	on a typical 101 or 102 key enhanced keyboard. For example, the scan code 0x7c
	cannot be used from a terminate and stay resident (TSR) application via
	Interrupt 9. This is because of the way the scan code sets were defined in a
	Windows NT virtual machine.
	
	RESOLUTION
	==========
	
	Obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	  Typical Keypad      Compaq Financial
	  -----------------   --------------------
	  NL  /   *   -       NL   /   *     -
	  7   8   9   +       7    8   9     +
	  4   5   6   +       4    5   6     Nul
	  1   2   3   Enter   1    2   3     Enter
	  0   0   .   Enter   0    00  000   Enter
	
	The differences are:
	
	  Normal Keypad   Compaq Financial   Changes
	  -------------   ----------------   -------
	  "+"             "+"                dimensions
	                  "Nul"              scancode 0x7e
	                  "0"                scancode 0x7c
	  "0/Insert"      "00"               label and dimensions
	  "./Suppr"       "000"              label only
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
