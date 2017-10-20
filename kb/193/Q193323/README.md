---
layout: page
title: "Q193323: XCON: Eicon X.25 Limited to Control Block Value of 32"
permalink: /kb/193/Q193323/
---

## Q193323: XCON: Eicon X.25 Limited to Control Block Value of 32

{% raw %}

	Article: Q193323
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Customers may report that their X.25 connection is no longer working. Symptoms
	of this behavior can be tracked down with Event Viewer by setting the logging
	for the diagnostic option "X.400 service" to Medium. This should produce the
	following event:
	
	 Event Id: 252
	 Source: MSExchangeMTA
	 Description: An internal MTA error has occurred.  No supporting stack
	              configured for OSI entity : %1\n
	
	Logging will also register another event:
	
	 Event Id: 9106
	 Source: MSExchangeMTA
	 Description: An internal MTA error occurred. The X.25 interface
	              failed to initialize. Check to make sure the X.25 card
	              is started.
	
	When you use Eicon's diagnostics ECMODULE, STATUS X25 shows no "x25listen"
	application. An Eicon Trace shows only incoming calls, which will be refused
	right away with Clear code 40 (Call set up, clearing, or registration problem).
	
	CAUSE
	=====
	
	Microsoft Exchange Server configured with the Eicon X.25 stack may be set to an
	incorrect number of control blocks or virtual circuits.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the "Eicon X.25 Connections" value under the following key in the
	  registry:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeMTA
	     \Parameters
	    
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Verify that this value (DWORD) has NOT been configured for a value greater
	  than 32 decimal. If it has, change the setting to less than 32 decimal. See
	  the More Information section below.
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server configured with the Eicon X.25 stack can only support
	up to 32 control blocks or virtual circuits. If any more than 32 control blocks
	are configured, error 9106 will be logged at initialization, and no X.25
	functions will be available.
	
	Additional query words: X.25, Eicon, X25
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
