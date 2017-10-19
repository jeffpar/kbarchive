---
layout: page
title: "Q146764: XADM: Limiting Logons to the Information Store"
permalink: /kb/146/Q146764/
---

## Q146764: XADM: Limiting Logons to the Information Store

	Article: Q146764
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg exc4 exc5 exc55
	Last Modified: 01-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Exchange Server administrators can limit the users who are allowed to log on to
	the information store. This can be useful when you need to perform maintenance
	or upgrades to the Exchange Server computer and if you need to keep users from
	logging on to Exchange.
	
	MORE INFORMATION
	================
	
	To limit the users who are allowed to log on to the information store you need
	to edit the registry.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To limit allowed users:
	
	1. Stop the Information Store service on the Exchange Server computer.
	
	2. Start Registry Editor (Regedt32.exe).
	
	3. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersSystem
	
	4. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: Logon Only As
	  Data Type: REG_MULTI_SZ
	
	5. Click OK. In the Data box, type the distinguished names of the users that you
	  want to allow to log on to the information store on separate lines, and then
	  click OK. For example:
	
	  /o=microsoft/ou=apps-wga/cn=recipients/cn=user1
	  /o=microsoft/ou=apps-wga/cn=recipients/cn=user2
	
	For additional information about how to prevent problems with the Internet Mail
	Service, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q306308 XFOR: The Internet Mail Service Does Not Start When Limiting Logons
	  to the Information Store
	
	6. Click OK.
	
	7. Quit Registry Editor.
	
	8. Restart the Information Store service.
	
	This procedure allows only those users entered in the registry parameter to log
	on to the information store. Users who are not specified in the registry
	parameter receive the following error message when they try to connect to the
	information store:
	
	  The set of folders could be opened. The attempt to log on to the Microsoft
	  Exchange Server has failed.
	
	NOTES:
	
	- Leaving the registry parameter blank prevents all users from logging on to
	  the information store.
	
	- To allow all users to again log on to the information store, you must remove
	  the registry key. To remove the registry key:
	
	  1. Stop the Information Store service on the Exchange Server computer.
	
	  2. Start Registry Editor (Regedt32.exe).
	
	  3. Locate the Logon Only As value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersSystem
	
	  4. Click the Logon Only As value in the right pane.
	
	  5. On the Edit menu, click Delete.
	
	  6. Quit Registry Editor.
	
	  7. Restart the Information Store Service.
	
	For additional information about how to accomplish this with Exmerge, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q262225 XADM: Unable to Limit Users from Logging on When You Use the Exmerge
	  Utility
	
	
	Additional query words: disable stop limit logons prevent user exch2kp2w exmerge client
	
	======================================================================
	Keywords          : kbenv kberrmsg exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
