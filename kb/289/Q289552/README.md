---
layout: page
title: "Q289552: SMS: Hardware Inventory Agent Causes SMS Client to Hang"
permalink: /kb/289/Q289552/
---

## Q289552: SMS: Hardware Inventory Agent Causes SMS Client to Hang

	Article: Q289552
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbClient kbsms200bug kbAdvertisement kbInventory kbsms200preSP4fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When the Hardware Inventory Agent is verified on the 30-day Systems Management
	Server (SMS) verification cycle, some of the client components may be adversely
	affected:
	
	- One or more SMS client components may go into a "Repair Pending" state.
	
	- Components may log time-out error messages or other error messages in the
	  components' respective logs.
	
	- Software distribution advertisements may not run on the client.
	
	- The Hardware Inventory Agent service stops responding (hangs) when it starts.
	
	CAUSE
	=====
	
	This problem can occur if you run the Hardware Inventory Agent installation
	program (InHinv32.exe) on a system by using the /verify switch; InHinv32.exe
	with the /verify switch does not correctly set some of the registry settings
	that the Hardware Inventory Agent uses.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	You can use the following methods to work around this problem.
	
	Disable the Hardware Inventory Client Agent
	-------------------------------------------
	
	To disable the Hardware Inventory Client Agent:
	
	1. Start the SMS Administrator console, expand Site Settings, expand Client
	  Agents, and then open the Hardware Inventory Client Agent properties.
	
	2. Click to clear the "Enable hardware inventory on clients" check box.
	
	3. Click OK.
	
	When the SMS clients next perform a client maintenance cycle (which occurs every
	23 hours), the Hardware Inventory Agent is uninstalled.
	
	Disable the Client Verification Process
	---------------------------------------
	
	To disable the client verification process:
	
	1. Obtain the Cliverify utility that is described in the following Microsoft
	  Knowledge Base article:
	
	  Q246040 SMS: How to Configure the Client Verify Cycle for Systems Management
	  Server 2.0 Clients
	
	2. Follow the directions in that Knowledge Base article to disable the client
	  verify cycle.
	
	Both of these methods stop the Client Component Installation Manager (CCIM) from
	running InHinv32.exe with the /verify switch on the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	This problem occurs on computers that run Microsoft Windows NT 4.0 or Windows
	2000. However, not all such computers are affected the same way.
	
	Client Error Conditions
	-----------------------
	
	When this problem occurs, the Hardware Inventory installation script incorrectly
	sets the Init registry value under the following registry key in the system in
	which the SMS client is installed:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client\Configuration\Client
	  Application Launchers\Hardware Inventory Agent
	
	When this registry value is equal to 0x79726f74, this client begins to experience
	the symptoms that are described in this article. Generally, this value is set to
	0x14 (20 decimal).
	
	As a result of the abnormally large value, the SMS client service logs the
	following error message in the Clisvc.log file:
	
	  Hardware Inventory Agent - Waiting 2037542772 seconds for application
	  initialisation
	
	
	This causes the SMS client service to maintain ownership of the application
	launch data mutex. This mutex is used to allow several client components to
	coordinate access to parts of the registry. When the mutex is not released in a
	timely manner, additional error messages may be logged in the SMS client logs.
	
	The following error messages may be logged in the Hinv32.log file:
	
	  UnRegister Hardware Inventory Agent - Event Driven
	  ERROR 1018 - Cannot UnRegister Inventory Agent On Event
	  UnRegister Hardware Inventory Agent - Restart Driven
	  ERROR 1018 - Cannot UnRegister Inventory Agent On Restart
	
	The following error messages may be logged in the Smsapm32.log file:
	
	  SERVICE : Waiting for application launch data mutex (max wait = 180
	  seconds).
	  SERVICE : ** Mutex timeout.
	  SERVICE : Unable to signal Client Service to restart this application.
	
	The following error messages may be logged in the Smsclreg.log file:
	
	  AppRegisterI returned error 1058 for component Hardware Inventory Agent
	  AppStopAndUnRegisterI returned error 1053 for component SMS Available Programs
	  Manager
	  AppRegisterI returned error 1010 for component Program Execution Agent
	
	The following error messages may be logged in the Launch32.log file:
	
	  Waiting for application launch data mutex...
	  ***** MUTEX TIMEOUT
	  Waiting for application launch data mutex...
	  ***** MUTEX TIMEOUT
	  **** Couldn't get mutex (1460)
	
	Recovering Client Systems
	-------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	When this problem occurs on a client, you can return the client to normal
	operation by using the following procedure on the system where the SMS client is
	installed:
	
	1. Stop the SMS client service. If the Hardware Inventory Agent service is
	  running, you need to either wait 20 minutes for the Hardware Inventory Agent
	  service to stop or use the Kill.exe utility to stop the Hinv32.exe process.
	
	2. Delete the following registry keys:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client\Configuration\Client
	  Application Launchers\Hardware Inventory Agent
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client\Client Components\Hardware
	  Inventory Agent
	
	3. Start the SMS client service.
	
	After you complete these steps, the SMS client reinstalls the Hardware Inventory
	Agent on this client. In rare cases, you may need to remove and re-install the
	entire SMS client to return the client to normal operation.
	
	Additional query words: prodsms lock freeze
	
	======================================================================
	Keywords          : kbClient kbsms200bug kbAdvertisement kbInventory kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
