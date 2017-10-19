---
layout: page
title: "Q244169: How to Configure IAS to Deny Access Immediately"
permalink: /kb/244/Q244169/
---

## Q244169: How to Configure IAS to Deny Access Immediately

	Article: Q244169
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6a 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	You can configure the Internet Authentication Service (IAS) to deny access to a
	user immediately (based on the user's name) by using the AutoReject feature.
	
	Page 363 of the Windows 2000 Server Resource Kit, Interoperability Guide contains
	steps to set up a Windows 2000 IAS server to automatically reject specific user
	accounts. These steps, however, are incorrect, so this article describes the
	correct process.
	
	MORE INFORMATION
	================
	
	The AutoReject feature can be helpful to third-party vendors (such as UUnet) who
	send a test packet inside of a Remote Authentication Dial-In User Service
	(RADIUS) ACCESS_REQUEST packet (with a user name such as "Test" or
	"reject_me_please") to verify that the remote server is still online. If a
	response is not received in a timely manner, it may assume the remote server is
	down and stop sending authentication requests to that server. Users would then
	be unable to log on.
	
	Windows NT 4.0 IAS Service
	--------------------------
	
	By default, the Windows NT 4.0 IAS service does not support the AutoReject
	feature. However, it can be used as a RADIUS Proxy to a Windows 2000 IAS server.
	To enable this on the Windows NT 4.0 IAS service, you must create a user account
	in the "users" file of the RADIUS service that matches the user name that is
	sent by way of the ACCESS_REQUEST packet. To do this, perform the following
	steps:
	
	1. Make sure that you have the "commercial" edition of the IAS RADIUS
	  installation. If you do, you should have six tabs in the service: Services,
	  Logging, Clients, Profiles, Authentication Providers, and User
	  Authentication.
	
	  If the last two tabs are absent, you have the "light" version and you need to
	  install the free update from the following Microsoft Web site:
	
	  http://www.microsoft.com/serviceproviders/downloads/default.asp#5
	
	  or see the following article in the Microsoft Knowledge Base:
	
	  Q239864 Availability of Internet Authentication Service SP6 Rollup Hotfix
	
	2. In your text editor, browse to the C:\Program Files\Ias folder and open the
	  "users" file.
	
	3. Under the "Default" settings in this file, add the following to the bottom:
	
	  internal proxy-options =PingName
	
	4. Stop and restart the IAS RADIUS service. In Control Panel, double-click the
	  Services icon, scroll to Internet Authentication Service, and then click Stop
	  Services. Or, you can type the following at the command line:
	
	  "net stop authsrv
	  net start authsrv " (without the quotation marks)
	
	Windows 2000 RADIUS Service
	---------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To configure IAS for the AutoReject feature, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\IAS\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	  Value Name: Ping User-Name
	  Data Type: REG_SZ
	  Value: <User's name> (SAM account)
	
	  Note that Value Name should be domain\username for a domain account or
	  username for a local account.
	
	4. Quit Registry Editor.
	
	5. Restart IAS for the change to take effect. When the request arrives from the
	  third-party vendor, the request is rejected immediately.
	
	Additional query words: radius
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbwin2000ServSearch kbwin2000Search kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0 SP6a
	Issue type        : kbhowto
	
	=============================================================================
	
