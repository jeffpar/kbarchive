---
layout: page
title: "Q287716: SMS: Error Messages Are Logged in Site Component Manager"
permalink: /kb/287/Q287716/
---

## Q287716: SMS: Error Messages Are Logged in Site Component Manager

	Article: Q287716
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsetup kbServer kbsms200 kbSiteComp
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The following error message may be logged in a variety of log files on your
	server:
	
	  Polling component server DELLSERVER...
	  Installing server...
	  Attempting to obtain an INetworkObject interface from NAL for this server...
	  NAL[4] - Call to the Abnetwork DLL's DllGetClassObject function succeeded.
	  NAL[4] - Provider list is not initialized, initializing...
	  NAL[2] - The 'Active Order' value is not present
	  NAL[4] - Provider 'ABEXPRT' inserted into list.
	  NAL[4] - Attempting to create path for MSWNET:\\DELLSERVER\.
	  NAL[2] - CreatePath, wrong provider: ABEXPRT. Trying next provider... NAL[1] -
	  ERROR: could not create the path.
	  ERROR: NAL failed to access NAL path "MSWNET:\\DELLSERVER\", NAL
	  IAbstractNetwork::CreatePath() returned 0x80004005: The operation completed
	  successfully.
	  NAL[4] - CAbstractNetwork::FinalRelease, deleting providers from provider
	  list...
	  Server installation failed and will be retried in the next polling cycle.
	
	The preceding error message is a small section of a log that is generated when
	Network Abstraction Layer logging is enabled. For additional information about
	enabling Network Abstraction Layer logging, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q243385 SMS: Enabling Network Abstraction Layer Logging and Setting Logging
	  Levels
	
	NOTE: The log entry that is logged on your computer may vary slightly from the
	error message that is described in this section.
	
	CAUSE
	=====
	
	This issue can occur if the following key is either corrupted or missing from
	the registry in the Systems Management Server (SMS) site computer or server
	computer:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\NAL\SERVER
	
	WORKAROUND
	==========
	
	To work around this issue, use any of the workarounds described in this section.
	Try these workarounds in the order in which they are listed in this article.
	
	Workaround One
	--------------
	
	Reapply the SMS service pack that you are currently running to the site server
	again. When you do so, the corrupted or missing registry key is re-created.
	
	Workaround Two
	--------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Manually recreate the registry key:
	
	1. Stop the sms_site_component_manager and sms_executive services.
	
	2. Add a REG_MULTI_SZ value named "Active Order" to the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Nal\Server\Providers
	
	  NOTE: This value must have the following string values:
	
	   - LOCAL
	   - MSWNET
	   - NWNDS
	   - NWBIND
	
	3. Run the regsvr32 -u command on the following files to unregister the current
	  dynamic-link library (DLL) files.
	
	   - Abnwsvr.dll
	   - Falsvrn.dll
	   - Mslmsvrn.dll
	   - Ndssvrn.dll
	   - Bindsvrn.dll
	
	4. Run the regsv32 command on the following files in the order they are listed
	  to reregister the DLL files.
	
	   - Abnwsvr.dll
	   - Falsvrn.dll
	   - Mslmsvrn.dll
	   - Ndssvrn.dll
	   - Bindsvrn.dll
	
	  NOTE: These DLL files are located in the Sms\Bin\<Platform> folder,
	  where <Platform> is either Alpha or I386. Reregister all the DLL files.
	  The NetWare DLL files are not invoked if NetWare redirectors do not exist on
	  the computer.
	
	5. Restart the sms_site_component_manager and the sms_executive services.
	
	Workaround Three
	----------------
	
	Rebuild the site server or site system that is experiencing the issue.
	
	Additional query words: prodsms nal
	
	======================================================================
	Keywords          : kbsetup kbServer kbsms200 kbSiteComp 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
