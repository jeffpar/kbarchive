---
layout: page
title: "Q242093: Windows 95 Clients Cannot Run Logon Scripts Consistently"
permalink: /kb/242/Q242093/
---

## Q242093: Windows 95 Clients Cannot Run Logon Scripts Consistently

	Article: Q242093
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to a Microsoft Windows NT 4.0-based network from a
	Microsoft Windows 95-based client computer, the client computer may receive and
	run logon scripts inconsistently from the domain controllers.
	
	CAUSE
	=====
	
	This behavior can occur if the logon script is not replicated to the backup
	domain controller (BDC), or if the logon script name is incorrect in a relevant
	location.
	
	RESOLUTION
	==========
	
	To resolve this issue, make sure that the name and location of the logon script
	are correct in the relevant files and folders:
	
	1. For each user account, follow these steps:
	
	  a. At the primary domain controller (PDC), start User Manager for Domains,
	     and then double-click the user name.
	
	  b. Click Profile, note the file name listed in the Logon Script Name box, and
	     then click OK.
	
	2. Check the Netlogon shares for the correct spelling and location of the
	  scripts:
	
	  a. Make sure the logon script names that you noted in the user accounts match
	     the script names listed in the %SystemRoot%\System32\Repl\Export\Scripts
	     folder on the PDC.
	
	  b. If you use directory replication to synchronize the PDC with the BDCs,
	     make sure that the script name on the PDC is in the
	     %SystemRoot%\System32\Repl\Export\Scripts folder on the exporting server.
	     This ensures that all domain controllers receive the scripts. If you
	     change the contents of this folder, force the replication.
	
	  c. If you do not use directory replication to synchronize the domain
	     controllers, make sure that the script file is present in all the Netlogon
	     shares on each domain controller.
	
	MORE INFORMATION
	================
	
	You can also:
	
	- Map a drive directly to the domain controller's Netlogon share and run the
	  script manually.
	
	- Create a shortcut to the logon script and place the shortcut in the StartUp
	  folder on the client computer.
	
	For more information about how to determine whether the script file is in the
	correct location, and about how to identify the server that validates a Windows
	95-based client and set the client to automatically show which domain controller
	validated the logon, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q150898 How to Display Domain Logon Confirmation in Windows
	
	Additional query words: profile netlogon import
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
