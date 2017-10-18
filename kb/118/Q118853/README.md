---
layout: page
title: "Q118853: PC Mac: Incorrect Extended Characters Displayed in Templates"
permalink: kb/118/Q118853/
---

## Q118853: PC Mac: Incorrect Extended Characters Displayed in Templates

	Article: Q118853
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2, on platform(s):
	   - the operating system: Mac OS (ALL) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use extended characters in templates, the Microsoft Mail for PC
	Networks, MS-DOS workstation and Microsoft Mail for Windows will see the correct
	information. However, the Microsoft Mail for PC Networks, Macintosh workstation
	will not see the correct extended characters. The Macintosh workstation should
	convert extended characters between code page 850 and the Macintosh character
	set. The Macintosh is not converting in all cases.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	NOTE: In the following example, "Olander" (and "olander") contains the "O" (or
	"o") with an umlaut.
	
	1. Create a customized template with the field prompt "Olander".
	
	2. Create a user with mailbox "Olander".
	
	3. Enter the field data for the "Olander" field as "Olander".
	
	4. You would see something like the following:
	
	  Mailbox: Olander
	  ...
	  Olander: Olander
	
	  It would be correct in the MS-DOS and Windows clients.
	
	5. The display in the Macintosh client would display:
	
	  Mailbox: Olander
	  ...
	  Olander: olander
	
	6. o (with an umlaut) on the Macintosh has code 153. O (with an umlaut) on the
	  PC has code 153. As a result, there is no conversion.
	
	
	Additional query words: 3.20 diacritical mark diaeresis dieresis
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.2
	
	=============================================================================
	
