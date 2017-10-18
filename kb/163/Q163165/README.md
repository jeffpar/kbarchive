---
layout: page
title: "Q163165: DNS Name Resolution May Not Work On Diskless Workstation"
permalink: kb/163/Q163165/
---

## Q163165: DNS Name Resolution May Not Work On Diskless Workstation

	Article: Q163165
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you use the TCP/IP protocol with a server-based installation of Windows 95,
	32-bit programs may be unable to resolve TCP/IP names using a DNS server. In
	some circumstances, it may be possible to resolve NetBIOS names or host names on
	the local DNS domain, but it may not be possible to resolve fully qualified
	domain names (such as "yourhost.yourdomain.dom").
	
	CAUSE
	=====
	
	Windows 95 may not be able locate the Wsock32.dll file when installed as a
	server-based installation. If this file is not found in the expected location,
	or if more than one copy of this file is found in the search path, DNS name
	resolution does not succeed.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	To work around this problem, follow these steps:
	
	1. Create a System folder in the workstation's Windows folder, and then copy the
	  Wsock32.dll file to the System folder. Repeat this step for each computer
	  running a shared copy of Windows 95 on the network.
	
	2. Add an entry for the System folder (from step 1) to the PATH statement in the
	  Autoexec.bat file.
	
	3. Rename or delete the Wsock32.dll file in the shared System folder, and in
	  every other folder listed in the PATH statement. (You may want to remove
	  unnecessary entries from the PATH statement.)
	
	4. Make sure the following registry values point to the Wsock32.dll file in the
	  System folder created in step 1:
	
	     Hkey_Local_Machine\System\CurrentControlSet\Services\VxD\Mstcp\ 
	        Parameters\Winsock\HelperDllName
	
	     Hkey_Local_Machine\System\CurrentControlSet\Services\VxD\Mstcp\ 
	        ServiceProvider\ProviderPath
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For additional information about a related issue, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q139060 Cannot Resolve TCP/IP Names with 32-Bit Programs
	
	The workarounds documented in the above article may resolve some TCP/IP name
	resolution problems, but do not resolve the problem documented in this article.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
