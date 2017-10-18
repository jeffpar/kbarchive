---
layout: page
title: "Q262122: XIMS: Internet Mail Service Extension Message Journaling"
permalink: kb/262/Q262122/
---

## Q262122: XIMS: Internet Mail Service Extension Message Journaling

	Article: Q262122
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
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
	covers the message journaling capabilities of this dynamic-link library (DLL).
	The append and prepend text capability is not included in this article. Append
	and prepend text capability is covered in the following Microsoft Knowledge Base
	Article:
	
	  Q262097 XIMS: Internet Mail Service Extension Message Text Append and Prepend
	
	MORE INFORMATION
	================
	
	Installing Internet Mail Service Extension
	------------------------------------------
	
	To install Internet Mail Service Extension (Imsext.dll):
	
	1. To copy Internet Mail Service Extension to your server, do one of the
	  following:
	
	   - Locate the Internet Mail Service in the following folder:
	
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
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
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
	
	Internet Mail Service Extension Message Journaling Capabilities
	---------------------------------------------------------------
	
	The Internet Mail Service Extension supports the following message journaling
	capabilities:
	
	- Inbound journaling
	
	- Outbound journaling
	
	- Per-recipient journaling
	
	Inbound Journaling:
	
	To journal inbound Simple Mail Transfer Protocol (SMTP) e-mail:
	
	1. Create an InboundJournal registry value:
	
	  a. Start Registry Editor (Regedt32.exe).
	
	  b. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters\Extension
	
	  c. On the Edit menu, click Add Value, and then add the following registry
	     value:
	
	  Value Name: InboundJournal
	  Data Type: REG_SZ
	  String Value: The e-mail address to which you want the journal e-mail
	  delivered.
	
	2. If you enable inbound journaling, you must also create an InboundJournalNDR
	  registry value:
	
	  a. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters\Extension
	
	  b. On the Edit menu, click Add Value, and then add the following registry
	     value:
	
	  Value Name: InboundJournalNDR
	  Data Type: REG_SZ
	  String Value: The e-mail address to which you want non-delivery reports (NDRs)
	  that are generated by journaled inbound e-mail delivered.
	
	  c. Quit Registry Editor.
	
	3. Remove the SMTP addresses of the e-mail addresses that you used in the
	  InboundJournal and InboundJournalNDR values and hide the objects from the
	  Address Book. If possible, these recipients should be located on the same
	  server that Internet Mail Service Extension is located on.
	
	Outbound Journaling:
	
	To journal outbound Simple Mail Transfer Protocol (SMTP) e-mail:
	
	1. Create an OutboundJournal registry value:
	
	  a. Start Registry Editor (Regedt32.exe).
	
	  b. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters\Extension
	
	  c. On the Edit menu, click Add Value, and then add the following registry
	     value:
	
	  Value Name: OutboundJournal
	  Data Type: REG_SZ
	  String Value: The e-mail address to which you want the journal e-mail
	  delivered.
	
	2. If you enable outbound journaling, you must also create an OutboundJournalNDR
	  registry value:
	
	  a. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters\Extension
	
	  b. On the Edit menu, click Add Value, and then add the following registry
	     value:
	
	  Value Name: OutboundJournalNDR
	  Data Type: REG_SZ
	  String Value: The e-mail address to which you want NDRs that are generated by
	  journaled outbound e-mail delivered.
	
	  c. Quit Registry Editor.
	
	3. Remove the SMTP addresses of the e-mail addresses that you used in the
	  OutboundJournal and OutboundJournalNDR values and hide the objects from the
	  Address Book. If possible, these recipients should be located on the same
	  server that Internet Mail Service Extension is located on.
	
	Per-Recipient Journaling:
	
	If you enable inbound journaling and outbound journaling, all inbound and
	outbound e-mail messages are journaled, respectively. If you want to journal
	based on recipient, you can enable per-recipient journaling. This allows you to
	specify the journal address on a per-recipient basis. For example, this feature
	is useful when you send a copy of a user's SMTP e-mail to the user's branch
	manager. As with inbound journaling and outbound journaling, you can set
	per-recipient journaling for each direction: inbound and outbound.
	
	To enable per-recipient journaling:
	
	1. Specify a property on the recipient that contains the journal address. You
	  can use the Custom Attributes property page of the recipient to do this. As
	  with the InboundJournal and OutboundJournal values, Microsoft recommends that
	  you set the recipient's custom attribute to a distribution list.
	
	2. Secure the mailboxes that are contained in that distribution list (as well as
	  the distribution list itself) by removing the SMTP address and hiding the
	  objects from the Address Book.
	
	3. After you decide the recipient property that you want to use to store the
	  journal address, create a registry value:
	
	  a. Start Registry Editor (Regedt32.exe).
	
	  b. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters\Extension
	
	  c. On the Edit menu, click Add Value, and then add the following registry
	     value:
	
	  Value Name: InboundRecipJournalProp (or OutboundRecipJournalProp for outbound
	  journaling)
	  Data Type: REG_DWORD
	  Radix: Hexadecimal
	  Value: The property that you chose.
	
	  For example, custom attribute 10 is value 0x8036. This must be specified as
	  the high word of the InboundRecipJournalProp value with a low word of 0.
	  Therefore, the value of the InboundRecipJournalProp value in this example is
	  0x80360000. You can find the values of the custom attributes in the
	  Emsabtag.h file in the VC\Include folder.
	
	4. If you enable per-recipient inbound journaling (or per-recipient outbound
	  journaling), you must also create an InboundJournalNDR registry value (or an
	  OutboundJournalNDR value for per-recipient outbound journaling):
	
	  a. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters\Extension
	
	  b. On the Edit menu, click Add Value, and then add the following registry
	     value:
	
	  Value Name: InboundJournalNDR (or OutboundJournalNDR, as applicable)
	  Data Type: REG_SZ
	  String Value: The e-mail address to which you want NDRs that are generated by
	  journaled inbound mail (or outbound mail for per-recipient outbound
	  journaling) delivered.
	
	  c. Quit Registry Editor.
	
	5. Remove the SMTP addresses of the e-mail addresses that you used in the
	  InboundRecipJournalProp and InboundJournalNDR values (or the
	  OutboundRecipJournalProp and OutoundJournalNDR values, as applicable) and
	  hide the objects from the Address Book. If possible, these recipients should
	  be located on the same server that Internet Mail Service Extension is located
	  on.
	
	Journaling Tips
	---------------
	
	Microsoft recommends that you use a distribution list as the e-mail address that
	you enter in the registry. This allows you to add multiple recipients to the
	journal and makes it easy to modify the recipients. Also remove the SMTP
	address, so that the mailbox cannot be attacked from outside your system, and
	hide the address from the Address Book so that the address is difficult to
	attack from inside your system. Then you can set the address to the X.500
	address of the distribution list.
	
	You can set the InboundJournal and OutboundJournal values to the same value. If
	you do this, all inbound and outbound SMTP e-mail journal mail is delivered to
	the same location.
	
	You can also use per-recipient journaling in conjunction with inbound journaling
	and outbound journaling. You can also set the InboundRecipJournalProp and
	OutboundRecipJournalProp values to the same value. If you do this, both inbound
	and outbound per-recipient journal mail is delivered to the same location.
	
	Additional query words: DL
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
