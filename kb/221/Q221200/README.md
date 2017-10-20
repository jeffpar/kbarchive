---
layout: page
title: "Q221200: AddPrinter() API Call Allows Invalid Data Type"
permalink: /kb/221/Q221200/
---

## Q221200: AddPrinter() API Call Allows Invalid Data Type

{% raw %}

	Article: Q221200
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbProgramming kbprint
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the AddPrinter() API call to create printers programmatically,
	custom settings that you specify may not be used.
	
	CAUSE
	=====
	
	This behavior can occur if you add a data type that is not valid with other
	settings. For example, the EMF and Direct Printing settings are not compatible
	with each other. The validity of the API call is not checked by the operating
	system.
	
	RESOLUTION
	==========
	
	To verify settings that are valid for any data type:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Create a new printer, or right-click a printer and then click Properties.
	
	3. Configure all the settings that you want to program and verify that the
	  settings are available for the data type (such as RAW or EMF).
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
