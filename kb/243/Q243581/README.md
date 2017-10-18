---
layout: page
title: "Q243581: XADM: Information Store Uses Large Amount of Processor Time"
permalink: kb/243/Q243581/
---

## Q243581: XADM: Information Store Uses Large Amount of Processor Time

	Article: Q243581
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When information store maintenance runs on an Exchange Server computer, the
	information store (the Store.exe process) uses large amounts of processor time
	(90 to 100 percent). You must restart the server or stop the information store
	process to stop the Store.exe process from using up the processor time.
	
	If you use Windows NT Performance Monitor to monitor the information store
	threads, you notice that two information store threads use between 35 to 65
	percent of the processor time when the problem occurs.
	
	CAUSE
	=====
	
	The following registry values are set to zero:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS
	  \ParametersPublic\Background Cleanup (value in milliseconds)
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\
	  ParametersPrivate\Background Cleanup (value in milliseconds)
	
	RESOLUTION
	==========
	
	Set the registry entries in the "Cause" section of this article to the default
	of 60000 in decimal (EA60 in hexidecimal). To do this, you need to edit the
	registry.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start the Registry Editor (Regedt32.exe).
	
	2. Locate the Background Cleanup value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\
	  ParametersPrivate
	
	3. On the Edit menu, click REG_DWORD, change the value to 60000 in decimal or
	  EA60 in hexidecimal, and then click OK.
	
	4. Locate the Background Cleanup value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\
	  ParametersPublic
	
	5. On the Edit menu, click REG_DWORD, change the value to 60000 decimal or EA60
	  hexidecimal, and then click OK.
	
	6. Quit the Registry Editor.
	
	7. Restart the information store service and any dependent services.
	
	MORE INFORMATION
	================
	
	For additional information about information store maintenance tasks, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q159196 XADM: Tasks Controlled by the IS Maintenance Schedule
	
	  Q159306 XADM: IS Maintenance Tasks Not on IS Schedule
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
