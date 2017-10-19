---
layout: page
title: "Q134969: Faxing from 16-bit Program Using Separate Memory Space Fails"
permalink: /kb/134/Q134969/
---

## Q134969: Faxing from 16-bit Program Using Separate Memory Space Fails

	Article: Q134969
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you load a copy of Winfax and try to print to the fax driver from your
	16-bit Windows program that is configured to run in its own memory space,
	another copy of Winfax is loaded and the following error message appears:
	
	  MOD / An error has occurred in your application.
	
	  <Ignore> <Cancel>
	
	Regardless of which option you choose you are unable to get Winfax to work and
	your system becomes unstable.
	
	However, if the Winfax software is not set to auto-answer the modem, you may run
	another serial program without a problem as the port is not in use by Winfax.
	For example, if you run Windows Terminal and then to print to Winfax from
	Windows WRITE.EXE, Winfax generates a "port in use" message as expected.
	
	
	CAUSE
	=====
	
	This problem occurs when the Winfax driver selected in your program tries to
	access the serial port and gets confused about which copy of the loaded Winfax
	software to use.
	
	The confusion occurs because your program is configured to run in its own memory
	space causing the Winfax printer driver to load Winfax because it is unaware of
	the Winfax copy that is already loaded.
	
	This problem is unique to Winfax because if you select the Winfax printer driver
	in a program and choose to print from that program, the Winfax printer driver
	loads Winfax to complete the fax transmission.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Log off and on.
	
	2. In Program Manager, select the program icon of the program you want to fax
	  from and press ALT+ENTER.
	
	  The Program Item Properties dialog box appears.
	
	3. Clear the Run In Separate Memory Space check box and choose OK.
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
