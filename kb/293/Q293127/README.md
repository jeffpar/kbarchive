---
layout: page
title: "Q293127: Net Logon of an NT 4 BDC Fails in Windows 2000 Domain"
permalink: /kb/293/Q293127/
---

## Q293127: Net Logon of an NT 4 BDC Fails in Windows 2000 Domain

	Article: Q293127
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	In a Windows 2000 domain with an NT 4.0 backup domain controller (BDC), the
	Windows NT 4.0 BDC cannot perform the following functions:
	
	- Find the Windows 2000 domain controller.
	- Synchronize the Security Accounts Manager (SAM) database.
	- Start the Net Logon service.
	- Obtain a list of backup browsers.
	
	When you restart the BDC, the following events are logged:
	
	  Event Type: Error
	  Event Source: NETLOGON
	  Event Category: None
	  Event ID: 3210
	  Description:
	  Failed to authenticate with \\Wn2kDC, a Windows NT or Windows 2000
	  domain controller for domain <domain name>.
	
	  Event Type: Error
	  Event Source: Service Control Manager
	  Event Category: None
	  Event ID: 7023
	  Description:
	  The Net Logon service terminated with the following error: Access
	  is denied
	
	  Event Type: Error
	  Event Source: BROWSER
	  Event Category: None
	  Event ID: 8032
	  Description:
	  The browser service has failed to retrieve the backup list too many
	  times on transport \Device\<devicename>.
	  The backup browser is stopping.
	
	If you attempt to reset the secure channel of the BDC by using the netdom
	command, you receive the following error message:
	
	  The interface is unknown.
	
	If you attempt to reset the secure channel of the BDC by using the nltest
	command, you receive the following error message:
	
	  RPC_S_Unknown_IF
	
	CAUSE
	=====
	
	This behavior can occur if you set the RestrictAnonymous registry value to 2,
	which can occur by editing the registry directly or by applying the Hisecdc.inf
	security template.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this behavior, change the setting for the RestrictAnonymous value from
	2 to a "0" (without the quotation marks) on the Windows 2000 domain controller
	that hosts the primary domain controller (PDC) emulator operations master role.
	
	To determine who hosts the PDC emulator operations master role:
	
	1. Click Start, click Run, type "dsa.msc" (without the quotation marks), and
	  then click OK.
	
	2. Right-click the domain name, and then click Operations Masters.
	
	3. Click the PDC tab to view the server that holds the PDC master role.
	
	To change the value of RestrictAnonymous:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the RestrictAnonymous value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Lsa\restrictanonymous
	
	3. On the Edit menu, click DWORD, type "0" (without the quotation marks) in the
	  data field, and then click OK.
	
	4. Quit Registry Editor.
	
	Restart the Windows 2000 domain controller.
	
	MORE INFORMATION
	================
	
	RestrictAnonymous is used to prevent anonymous logon access to resources,
	excluding resources to which the anonymous user has explicitly been given
	access. For additional information, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q246261 How to Use the RestrictAnonymous Registry Value in Windows 2000
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
