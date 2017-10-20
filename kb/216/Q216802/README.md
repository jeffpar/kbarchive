---
layout: page
title: "Q216802: Internet Services Manager Fails to Show Installed Proxy Services"
permalink: /kb/216/Q216802/
---

## Q216802: Internet Services Manager Fails to Show Installed Proxy Services

{% raw %}

	Article: Q216802
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to administer the Proxy Server 1.0 or 2.0 services through the
	Internet Services Manager, the following services are missing:
	
	- Web Proxy
	
	- Winsock Proxy
	
	- Socks Proxy (only for Proxy 2.0)
	
	CAUSE
	=====
	
	This problem can be caused by any of the following:
	
	- Proxy Server 1.0 or 2.0 has been removed from the server.
	
	- The services have become unbound from the Internet Services Manager because
	  of missing entries in the registry.
	
	- Internet Information Server was uninstalled and reinstalled since Proxy
	  Server was last installed.
	
	RESOLUTION
	==========
	
	The following solutions can be used to repair the Proxy Server installation.
	
	Option 1
	--------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Run either Regedit.exe or Regedt32.exe.
	
	2. Open the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\INetMgr\Parameters\AddOnServices
	
	3. If there is no listing for Web Proxy, WinSock Proxy, or Socks Proxy (only for
	  Proxy 2.0), these will need to be manually added:
	
	  a. Create a new string value and label it Web Proxy.
	
	  b. Have the Value Data point to
	     <Drive>\Winnt\System32\Inetsrv\W3pcfg.dll
	
	     NOTE: For Small Business Server, the directory will be
	     <Drive>\Winnt.sbs\System32\Inetsrv.
	
	  c. Create a new string value and label it WinSock Proxy.
	
	  d. Have the Value Data point to
	     <Drive>\Winnt\System32\Inetsrv\Wspcfg.dll
	
	  e. Create a new string value and label it Socks Proxy (only for Proxy 2.0).
	
	  f. Have the Value Data point to
	     <Drive>\Winnt\System32\Inetsrv\Sockscfg.dll
	
	Option 2
	--------
	
	To reinstall Proxy Server 1.0, perform the following steps:
	
	1. Insert Disc 1 of the Small Business Server 4.0 installation compact discs.
	
	2. Go to the Proxy directory on the root of Disc 1.
	
	3. From the Proxy directory, run Setup.exe.
	
	4. Use the wizard for configuring Proxy Server.
	
	5. When the installation completes, the Internet Services Manager should now
	  list the Proxy services.
	
	To reinstall Proxy Server 2.0, perform the following steps:
	
	1. If this is the first time that Proxy 2.0 has been installed, you will need to
	  follow the instructions in the following white paper:
	
	  Installing Windows NT Option Pack and Microsoft Proxy Server 2.0 on Microsoft
	  BackOffice Small Business Server 4.0a
	  (http://www.microsoft.com/backofficesmallbiz/guide/installp.asp)
	
	2. Run the Proxy Pre-Installation Wizard.
	
	3. Insert the Proxy 2.0 installation compact disc.
	
	4. Go to the MSPROXY directory on the root of the compact disc.
	
	5. Run Setup.exe from the MSPROXY directory
	
	6. Use the wizard for configuring Proxy Server.
	
	7. When the installation completes, the Internet Services Manager should now
	  list the Proxy services.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : winnt:4.0,4.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
