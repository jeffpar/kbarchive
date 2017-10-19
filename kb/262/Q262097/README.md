---
layout: page
title: "Q262097: XIMS: Internet Mail Service Extension Messg. Text Append/Prepend"
permalink: /kb/262/Q262097/
---

## Q262097: XIMS: Internet Mail Service Extension Messg. Text Append/Prepend

	Article: Q262097
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Internet Mail Service Extension (Imsext.dll) has several functions. This article
	covers the append and prepend capabilities of this dynamic-link library (DLL).
	Message journaling is also a capability of Internet Mail Service Extension, but
	message journaling is not covered in this article. For additional information
	about message journaling, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q262122 XIMS: Internet Mail Service Extension Message Journaling
	
	MORE INFORMATION
	================
	
	Installing Internet Mail Service Extension
	------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To install Internet Mail Service Extension (Imsext.dll):
	
	1. To copy the Internet Mail Service Extension to your server, do one of the
	  following:
	
	   - Locate the Internet Mail Service Extension in the following folder:
	
	  Exchsrvr\Connect\Msexcimc\Bin
	
	   - Locate the Internet Mail Service Extension included in the BackOffice 4.5
	     Resource Kit.
	
	2. Register Internet Mail Service Extension by typing the following at the
	  command prompt:
	
	  regsvr32 imsext.dll
	
	3. To enable Internet Mail Service Extension in Exchange Server 5.5 Service Pack
	  1 or later without losing routing table capability, you need to create a
	  registry value:
	
	NOTE: Microsoft recommends the following method to enable Internet Mail Service
	Extension.
	
	  a. Start Registry Editor (Regedt32.exe).
	
	  b. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters
	
	  c. On the Edit menu, click Add Value, and then add the following registry
	     value:
	
	  Value Name: NonRoutingExtensionDll
	  Data Type: REG_SZ
	  String Value: The full path of the Internet Mail Service Extension utility DLL
	
	You can also enable Internet Mail Service Extension in the Exchange Server
	Administrator program by opening the Internet Mail Service properties, clicking
	the Routing tab, and then selecting Internet Mail Service Extension as the
	custom routing program. IMPORTANT: Microsoft does not recommend this method. You
	will lose routing table capability.
	4. Create an Extension registry key:
	
	  a. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters
	
	  b. On the Edit menu, click Add Key, and then type "Extension" (without the
	     quotation marks).
	
	  c. Quit Registry Editor.
	
	Inbound SMTP
	------------
	
	To add prepended text to the body of an inbound Simple Mail Transfer Protocol
	(SMTP) message, create an InboundPrepend registry value:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters\Extension
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: InboundPrepend
	  Data Type: REG_SZ
	  String Value: The text that you want to prepend to incoming messages.
	
	4. Quit Registry Editor.
	
	To add appended text to the body of an inbound SMTP message, create an
	InboundAppend registry value:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters\Extension
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: InboundAppend
	  Data Type: REG_SZ
	  String Value: The text that you want to append to incoming messages.
	
	4. Quit Registry Editor.
	
	Outbound SMTP
	-------------
	
	To add prepended text to the body of an outbound SMTP message, create an
	OutboundPrepend registry value:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters\Extension
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: OutboundPrepend
	  Data Type: REG_SZ
	  String Value: The text that you want to prepend to outgoing messages.
	
	4. Quit Registry Editor.
	
	To add appended text to the body of an outbound SMTP message, create an
	OutboundAppend registry value:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters\Extension
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: OutboundAppend
	  Data Type: REG_SZ
	  String Value: The text that you want to append to outgoing messages.
	
	4. Quit Registry Editor.
	
	You must restart the Internet Mail Service for these changes to take effect. You
	must also restart the Internet Mail Service if you change the text string.
	
	Additional query words: disclaimer
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
