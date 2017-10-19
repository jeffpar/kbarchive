---
layout: page
title: "Q226497: Static Mappings Not Replaced if Migrate ON/OFF Enabled"
permalink: /kb/226/Q226497/
---

## Q226497: Static Mappings Not Replaced if Migrate ON/OFF Enabled

	Article: Q226497
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Windows Internet Name Service (WINS) database on a WINS server contains a
	unique static mapping for the WINS server's own name and you enable the Migrate
	ON/OFF switch in the server's configuration, the server is not permitted to
	overwrite static mapping for its name with dynamic name registration.
	
	RESOLUTION
	==========
	
	To resolve this problem, manually delete the static mapping using one of the
	following methods:
	
	- Delete any mappings in the Mappings/Static Mappings dialog box in WINS
	  Manager.
	
	- Run Winscl.exe from the Windows NT resource kit to delete any mappings. For
	  additional information about Winscl.exe, please see the following article in
	  the Microsoft Knowledge Base:
	
	  Q137582 Using Winscl.exe
	
	- If your WINS server is running Microsoft Windows NT 4.0 Service Pack 4 (SP4)
	  or later, you can use the Delete Record feature in the Mappings/Show Database
	  dialog box to delete the record.
	
	After you delete the static mapping, restart the WINS server to register its
	names. If SP4 is installed, you can use the NBTSTAT -RR command on the WINS
	server to re-register it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Server 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
