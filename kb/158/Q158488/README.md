---
layout: page
title: "Q158488: XCON: Event Log: Queue-Desc-Object (ID 1) Not Found . . ."
permalink: /kb/158/Q158488/
---

## Q158488: XCON: Event Log: Queue-Desc-Object (ID 1) Not Found . . .

{% raw %}

	Article: Q158488
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After restoring an optimized computer running Microsoft Exchange Server, it may
	give false indications of a message transfer agent (MTA) failure if the registry
	settings were not properly restored.
	
	The typical scenario is as follows: the MTA will not start and the following stop
	error message is generated:
	
	  Could not start the Microsoft Exchange Message Transfer Agent service on
	  \\<server name>>.
	
	  Error 2140: An internal Windows NT error.
	
	In the event log the following error is found:
	
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Queue-Desc-Object (ID 1) not found {BASE MAIN BASE] (16).
	
	If you run MTA check, the following error message appears:
	
	  Error in Queue-Desc-Object (ID 1) initialization . Database contains serious
	  errors and cannot be automatically repaired.
	
	MORE INFORMATION
	================
	
	Restoring the computer running Microsoft Exchange Server or Windows NT Server
	after optimization has occurred may result in its not properly pointing to the
	location of the MTADATA subdirectory. Check the registry to ensure that the
	registry key MTA database path is correct and points to the location of the log
	files.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, check the following subkey:
	
	     System\CurrentControSet\Services\MSExchangeMTA\Parameters
	
	3. If necessary, modify this key so that it points to the location of the log
	  files.
	
	4. Quit registry Editor.
	
	Additional query words: Performance Optimizer
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
