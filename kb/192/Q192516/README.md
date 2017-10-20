---
layout: page
title: "Q192516: XFOR: T-shooting cc:Mail Connector Mail Conversion Problems"
permalink: /kb/192/Q192516/
---

## Q192516: XFOR: T-shooting cc:Mail Connector Mail Conversion Problems

{% raw %}

	Article: Q192516
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	As a result of conversion problems, Microsoft Exchange Connector to Lotus
	cc:Mail (CCMC) may hang, produce a Dr. Watson error, or produce mail messages
	with incorrect information. This article explains how to identify the message
	that is having conversion problems, and to troubleshoot the CCMC.
	
	CAUSE
	=====
	
	Problems encountered during message conversion are the cause of these symptoms
	of hanging, Dr. Watson, or producing messages with incorrect information.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Troubleshooting Steps
	---------------------
	
	1. Reduce the number of messages that the Exchange Connector to Lotus cc:Mail is
	  converting. To do this:
	
	  a. Start the Registry Editor (Regedt32.exe), and locate the following
	     registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeCCMC
	  \Parameters
	
	  b. Change these values:
	
	  Maximum Number of Messages to Export <set to 0x00000001(1)>
	  Default Setting 0X00000010(16)
	  Maximum Number of Messages to Import <set to 0x00000001(1)>
	  Default Setting 0X00000005(5)
	
	2. Capture messages coming across the Exchange Connector to Lotus cc:Mail. If
	  the message is being sent from cc:Mail, the message will be saved before
	  conversion takes place. If the message is being sent from Exchange Server,
	  the message will be saved after conversion has taken place. The saved
	  messages can be viewed using Notepad in the Exchsrvr\Ccmcdata\Export.bak or
	  Import.bak directories. The name of the saved messages will be Msgxxxx.ccm,
	  where X is a random hexadecimal number. To capture the above-mentioned
	  messages:
	
	  a. Start the Registry Editor (Regedt32.exe), and locate the following
	     registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeCCMC
	  \Parameters
	
	  b. Change these values:
	
	  Save a copy of the Exported files <set to 0X00000001(1)>
	  Save a copy of the Imported files <set to 0X00000001(1)>
	  Valid settings 0X00000000(0) and 0X00000001(1)
	
	NOTE: After you change the above registry setting, the Microsoft Exchange
	Connector for Lotus cc:Mail service should restart successfully.
	
	After capturing and reviewing the converted messages, please contact Microsoft
	Product Support Services.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
