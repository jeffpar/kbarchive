---
layout: page
title: "Q207729: SMS: Excluding Computers from Windows NT Remote Client Install"
permalink: kb/207/Q207729/
---

## Q207729: SMS: Excluding Computers from Windows NT Remote Client Install

	Article: Q207729
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbDiscovery
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Following is an explanation of how an administrator specifies computers to be
	excluded from discovery and installation by the Windows NT Remote Client
	Installation service. In addition, you may want to exclude specific workstations
	and/or servers that reside within site boundaries from becoming Systems
	Management Server 2.0 clients.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To exclude servers and workstations from being discovered and installed as
	Systems Management Server 2.0 clients, perform the following steps on the site
	server:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Components
	
	3. On the Edit menu, click New, then select Key. Type
	  "SMS_DISCOVERY_DATA_MANAGER" (without the quotation marks) for the new key.
	
	4. With the new key selected, on the Edit menu, click Add Value, and then add
	  the following:
	
	  Value Name: ExcludeServers
	  Data Type:  REG_MULTI_SZ
	  Value:    <computer names to exclude>  
	
	5. Modify the value to add or remove the Windows NT computer names that you want
	  to exclude from receiving Systems Management Server 2.0 Client Components
	  installed on them. Delineate multiple entries with a <Return> tag to
	  place them on separate lines.
	
	6. Click OK when finished and close the Registry Editor.
	
	Note that after the system is discovered, and in the discovery database, removing
	the server name from the ExcludeServers list will not cause the computer to
	install. The client can be installed on this computer if either Logon Discovery
	method or Logon Installation method is enabled and Smsman.exe is run on the
	client. SMSMAN can be distributed with software distribution to the target
	server.
	
	
	Additional query words: prodsms smssetup machine machines
	
	======================================================================
	Keywords          : kbsms200 kbDiscovery 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
