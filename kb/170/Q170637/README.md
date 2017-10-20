---
layout: page
title: "Q170637: XCLN: Error Message: Unable to Open Your Default Mail Folder"
permalink: /kb/170/Q170637/
---

## Q170637: XCLN: Error Message: Unable to Open Your Default Mail Folder

{% raw %}

	Article: Q170637
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.01,8.02,8.03,8.04
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 24-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.01, 8.02, 8.03, 8.04 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting the Microsoft Exchange Client or Microsoft Outlook, the following
	message may be displayed:
	
	  Unable to open your default mail folders. You do not have permission to log
	  on.
	
	  [OK]
	
	Outlook will also display the following message:
	
	  Would you like to open your default File System folder instead?
	
	  [Yes] [No]
	
	Clicking OK in the Exchange Client or OK and No in Outlook will return you to the
	desktop. Clicking OK and Yes in Outlook will open empty system mail folders.
	
	CAUSE
	=====
	
	The logon credentials of the Exchange Client or Outlook are different from the
	logon credentials of the user logged into the workstation.
	
	RESOLUTION
	==========
	
	Log off of the workstation and log back on with the same user credentials as the
	Exchange Client or Outlook.
	
	-OR-
	
	1. Remove Named Pipes from the Exchange binding order. See the following
	  Knowledge Base article for more information on this topic.
	
	  Q163576 XGEN: Changing the RPC Binding Order
	
	  -AND-
	
	2. After removing Named Pipes from the Exchange binding order, from Control
	  Panel, double-click Mail. On the Services tab, click Show Profiles, then
	  click Properties for the profile, then Properties for Exchange Server
	  service. On the Advanced tab, clear the Use Network Security during Logon
	  option. This will prevent the Exchange Client from using the cached
	  credentials used to log into the workstation initially.
	
	NOTE: If Named Pipes is listed in the Exchange Client binding order as the
	primary protocol, the logon credentials will be used regardless of the Use
	Network Security setting. This is documented in the following Knowledge Base
	article:
	
	  Q146188 XCLN: Use Network Security Option Not Working as Expected
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          : win95 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbOutlook804 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.01,8.02,8.03,8.04
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
