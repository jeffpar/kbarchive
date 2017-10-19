---
layout: page
title: "Q177120: Boot Method Option Does Not Exist as Stated in DNS Manager Help"
permalink: /kb/177/Q177120/
---

## Q177120: Boot Method Option Does Not Exist as Stated in DNS Manager Help

	Article: Q177120
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbinfo kbArtTypeINF
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	The online help in Domain Name Service (DNS) Manager states the following:
	
	To specify a boot method for a DNS server
	
	1. In the Server List, right click the server icon.
	
	2. Click Properties.
	
	3. Click the Boot Method tab.
	
	4. In Boot Method, click either Boot From Registry or Boot From BootFile.
	
	However, there is no Boot from Registry or Boot From BootFile option in the Boot
	Method tab of Server Properties.
	
	WORKAROUND
	==========
	
	Your Microsoft Windows NT DNS Server can be configured to boot either from the
	registry or from a boot file. But, to change the default behavior, you must edit
	the registry. Initially, DNS will boot from the boot file. But as soon as you
	use DNS Manager to create or modify a zone, DNS will automatically be configured
	to boot from the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedit.exe or Regedt32.exe).
	
	2. Go to the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNS\Parameters
	
	3. If EnableRegistryBoot does not exist, you may need to create it using the
	  following data:
	
	  Value Name: EnableRegistryBoot
	  Value Type: REG_DWORD
	  Data      : 1 or 0  (1 for registry boot, 0 for boot file)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: config settings start-up
	======================================================================
	Keywords          : kbinfo kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
