---
layout: page
title: "Q176566: XADM: Service Is Hung, Need to Set to Manual in Registry"
permalink: /kb/176/Q176566/
---

## Q176566: XADM: Service Is Hung, Need to Set to Manual in Registry

{% raw %}

	Article: Q176566
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 25-MAR-2000
	
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
	
	A Microsoft Exchange Service may stop responding and the Service Control Manager
	reports an error when it tries to modify that service's state. If you cannot use
	the Services (in Control Panel) to stop the service and are unable to change the
	Startup Type of the service, you can change how that service starts by editing
	the registry. All Exchange services should be set to manual until you determine
	the cause of the hung state.
	
	RESOLUTION
	==========
	
	To change the Startup Type of a service in this condition you can modify the
	registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Start Registry Editor (Regedt32.exe). Select each of the following subkeys that
	your computer has and modify them one at a time.
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \MSExchangeCCMC
	  \MSExchangeDS
	  \MSExchangeDX
	  \MSExchangeFB
	  \MSExchangeIMC
	  \MSExchangeINS
	  \MSExchangeIS
	  \MSExchangeMSMI
	  \MSExchangeMTA
	  \MSExchangePCMTA
	  \MSExchangeSA
	  \MSExchangeWEB
	
	Change the following in the right pane:
	
	  Value Name: Start
	  Data Type: REG_DWORD
	  Data: 3 (Default: 2)
	
	Data values are as follows:
	
	  0 = Boot
	  1 = System
	  2 = Automatic
	  3 = Manual
	  4 = Disabled
	
	After the value for Start has been set to Manual, you can shut down the computer.
	This will stop the service that was not responding and allow you to troubleshoot
	the cause of the problem.
	
	Additional query words: hang hung crash disable
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
