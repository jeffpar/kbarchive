---
layout: page
title: "Q120426: GPF When PowerBuilder Watcom Engine Is Run in Separate VDM"
permalink: /kb/120/Q120426/
---

## Q120426: GPF When PowerBuilder Watcom Engine Is Run in Separate VDM

{% raw %}

	Article: Q120426
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kb3rdparty kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the PowerSoft PowerBuilder Watcom database engine DB32W.EXE in a
	separate VDM, a General Protection Fault (GPF) occurs when another application
	tries to access the database through DB32W.EXE. In tests with Microsoft Query,
	the GPF occurred in <unknown> at 00C7:B40A.
	
	CAUSE
	=====
	
	When another application sets up ODBC, PowerBuilder's DB32W.EXE passes it a
	16:16 pointer what is valid only in the VDM where DB32W.EXE is running.
	
	RESOLUTION
	==========
	
	DB32W.EXE will run in a separate VDM if you check the Run In Separate Memory
	Space box in the Program Item Properties dialog box in Program Manager. It will
	also run in a separate VDM if you launch it with the START command. Run the
	querying application and DB32W.EXE in the same VDM.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: prodnt memory violation
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
