---
layout: page
title: "Q68401: PC Setup: Server Update Copies Over DEFAULT.SCR"
permalink: kb/068/Q68401/
---

## Q68401: PC Setup: Server Update Copies Over DEFAULT.SCR

	Article: Q68401
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Update program on Server Installation Disk 1 replaces the DEFAULT.SCR script
	file during the update process. If you make any modifications to this file
	before you complete the update process, the changes will be lost.
	
	NOTE: If you rename your script files to DEFAULT.SCR to get around using the -t
	External command-line parameter, you need to be aware that when you update an
	existing postoffice and select Update Modem and Script Files under Server
	Programs, the DEFAULT.SCR file is overwritten.
	
	The only workaround is to make a backup of the customized files before the update
	program is run.
	
	MORE INFORMATION
	================
	
	The DEFAULT.SCR script file is automatically loaded by the External Mail program
	when a modem is used. This file controls modem operations and it can be
	customized. For more information about script files, see Appendix N of the
	Microsoft Mail "Administrator's Guide."
	
	The Update program replaces all existing script files, executable files, and any
	other file that interacts with the database. These files are updated to ensure
	that all programs are in sync with the database.
	
	Additional query words: 2.10e 3.00 3.00b 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN300b kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.0b,3.2,3.2a
	
	=============================================================================
	
