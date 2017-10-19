---
layout: page
title: "Q200988: XCLN: Netscape No Longer Default Browser After Installing 98 ODK"
permalink: /kb/200/Q200988/
---

## Q200988: XCLN: Netscape No Longer Default Browser After Installing 98 ODK

	Article: Q200988
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	On client systems with Netscape 4.05 installed as the default browser, the
	Outlook 98 Deployment Kit (ODK) installs the Internet Explorer as the default
	browser after the system is rebooted and Internet Explorer configures itself.
	
	WORKAROUND
	==========
	
	To work around this behavior, make the following registry changes in the systems
	registry. Afterwards, the system will not check to see which application is the
	default browser.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\Main
	
	  Check_Associations=No
	
	Additional query words: ODK, OL98, Netscape
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : WINDOWS:98
	Issue type        : kbprb
	
	=============================================================================
	
