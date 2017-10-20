---
layout: page
title: "Q174740: XFOR: Error When Migrating Version 6 cc:Mail Post Office"
permalink: /kb/174/Q174740/
---

## Q174740: XFOR: Error When Migrating Version 6 cc:Mail Post Office

{% raw %}

	Article: Q174740
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Exchange cc:Mail Migration Wizard to migrate a
	Version 6 (DB8) cc:Mail post office, the following error message may appear:
	
	  cc: Mail Utility Error
	  Incorrect version of Export/Import.exe
	  cc: Mail Export.exe, Import.exe and IE.RI version 8.00 to 8.X must be
	  in the search path for executables files.
	
	When you view the cc:Mail connector properties, on the General tab, in
	Import/Export version, the only versions listed are:
	
	  Import 5.15/Export 5.14
	  Import 6.0/Export 6.0
	
	CAUSE
	=====
	
	The migration of cc:Mail post offices version 6 or later (DB8) requires version
	8 of Import/Export.exe and IE.RI. The migration of cc:Mail post offices version
	5 or earlier (DB6) requires Import/Export.exe version 5.x.
	
	RESOLUTION
	==========
	
	Copy version 8.x of Import.exe/Export.exe and IE.RI files to the
	<Drive>:\Exchsrvr\Bin subdirectory. Ensure these files are not located in
	the Winnt subdirectory.
	
	MORE INFORMATION
	================
	
	When the Migration Wizard is started and cc:Mail migration is selected, it will
	check the current directory \exchsrvr\bin before going to the search path to
	find the Import/Export files. Currently, the following Import/Export versions
	are supported for the Exchange cc:Mail connector:
	
	  cc:Mail PO's ver. 6 (DB8): Import/Export and IE.RI version 6
	  cc:Mail PO's ver. 5 (DB6): Import 5.15/Export 5.14
	
	Additional query words: cc: mail lotus
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
