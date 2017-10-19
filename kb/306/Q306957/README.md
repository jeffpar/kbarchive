---
layout: page
title: "Q306957: XADM: Mail Sent to Exchange Server with CDONTS ASP Not Delivered"
permalink: /kb/306/Q306957/
---

## Q306957: XADM: Mail Sent to Exchange Server with CDONTS ASP Not Delivered

	Article: Q306957
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbIIS exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	In Microsoft Exchange Server, when you attempt to send Simple Mail Transport
	Protocol (SMTP) mail by using Collaborative Data Objects for NTS (CDONTS) with
	Active Server Pages (ASP), the mail may remain in the Exchange Server or
	Internet Information Server (IIS) pickup folder instead of being delivered.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this behavior, check the values of the relevant registry settings, and
	then make sure that your anonymous Web account on the Imcdata folder has Add
	permissions. Follow these steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Active Messaging Use Exchange value under the following key in the
	  registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Active Messaging Use Exchange
	  = 0x00000001 (1)
	
	This key indicates that Active Messaging programs should use Exchange Server.
	
	3. Make sure that the data for this value is as shown. If it does not, correct
	  the data.
	
	4. Locate the RootDir value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters\RootDir
	  = C:\exchsrvr\imcdata
	
	This key shows the location of the Exchange Server IMC Pickup folder. This value
	depends on the specific configuration.
	
	5. Write down the location of the Imcdata folder.
	
	6. Quit Registry Editor.
	
	7. In Windows Explorer, go to the \Exchsrvr\Imcdata\Pickup folder.
	
	8. Right-click the folder, and then click Properties.
	
	9. Click the Security tab, and then click Permissions.
	
	10. In the Directory Permissions dialog box, add your anonymous Web account if
	  it is not already listed. Unless you configure it otherwise, this account is
	  listed as <ComputerName\IUSR_ComputerName>.
	
	11. Give the anonymous Web account Add permissions
	
	Additional query words:
	
	======================================================================
	Keywords          : kbIIS exc5 exc55 
	Technology        : kbiisSearch kbExchangeSearch kbExchange500 kbExchange550 kbiis500 kbiis400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
