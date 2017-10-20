---
layout: page
title: "Q184052: XFOR: Reply Address Wrong in cc:Mail ADE Relationship"
permalink: /kb/184/Q184052/
---

## Q184052: XFOR: Reply Address Wrong in cc:Mail ADE Relationship

{% raw %}

	Article: Q184052
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	In the following setup, an Exchange Server computer is connected to a HUB PO1
	(via the Exchange Connector for Lotus cc:Mail), which has child postoffices
	linked to it via the Automatic Directory Exchange (ADE) relationships. A HUB PO2
	is connected (via ADE) to HUB PO1; HUB PO2 also has child post offices. The
	problem is as follows:
	
	When you send from a postoffice under HUB PO1, everything works fine. But when
	you send from a postoffice under HUB PO2, the reply address is wrong, resulting
	in Exchange users not being able to reply to cc:Mail messages that originated
	from child postoffices connected to HUB PO2.
	
	CAUSE
	=====
	
	An Exchange Connector for Lotus cc:Mail that is connected to either HUB of the
	enterprise boundary only recognizes the true address of users belonging to the
	same side. However, messages relayed to Exchange from the opposite side of the
	boundary carry their true downstream address in the sender field.
	
	For example, to reproduce this behavior, do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run the Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	   SYSTEM\Current ControlSet\Services\MSExchangeCCMC\Parameters
	
	3. Set the "Save a copy of the imported files" registry key to 1.
	
	4. Send a message from Exchange to cc:Mail.
	
	5. In the file in the \exchsrvr\ccmcdata\import.bak directory, you should see
	  something like the following:
	
	     Message:
	     179
	     From: Grewal, Jeff at Hub
	     Date: 6/2/98 8:39
	     To: Admin at HUBPO2
	     Subject: Another message
	     Contents:
	     58
	     Text item:
	     32
	     This is the message body
	
	The issue is that the To: line contains the recipient address with the "at
	HUBPO2". This causes the cc:Mail postoffice that is connected to the Exchange
	Connector for Lotus cc:Mail to reject the message with recipient unknown,
	because addresses here are of the form "at HUBPO1".
	
	WORKAROUND
	==========
	
	To work around this problem, add all downstream postoffices of HUB PO2 into HUB
	PO1.
	
	RESOLUTION
	==========
	
	A fix has been coded to have the Exchange Connector for Lotus cc:Mail recognize
	a registry setting that turns off sending the "at PO" information on imported
	messages to cc:Mail. This way, the process uses cc:Mail Automatic Name
	Resolution (ANR) to resolve the name to an entry in the "directory" for cc:Mail,
	thus making the message deliverable across the ADE relationship.
	
	Note that this is a registry-based behavior with the default=OFF.
	
	After applying the hotfix detailed below, make the following registry changes:
	
	To turn on the new behavior (that is, make the Exchange Connector for Lotus
	cc:Mail use cc:Mail Automatic Name Resolution), you must add the DWORD registry
	value:
	
	1. Run the Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	   SYSTEM\Current ControlSet\Services\MSExchangeCCMC\Parameters\Use ANR
	
	3. Set "Use ANR" registry key to 1.
	
	For example, to reproduce this new behavior, do the following:
	
	1. Run the Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	   SYSTEM\Current ControlSet\Services\MSExchangeCCMC\Parameters
	
	3. Set "Save a copy of the imported files" registry key to 1.
	
	4. Send a message from Exchange to cc:Mail.
	
	5. In the file in the \exchsrvr\ccmcdata\import.bak directory, you should see
	  something like the following:
	
	     Message:
	     179
	     From: Grewal, Jeff at Hub
	     Date: 6/2/98 8:39
	     To: Admin
	     Subject: Another message
	     Contents:
	     58
	     Text item:
	     32
	     This is the message body
	
	Note that the postoffice name is omitted from the To: line.
	
	NOTE: After enabling the "Use ANR" feature, it is recommended that you do a
	dirsync. Otherwise, the addresses may be in an encapsulated format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This hotfix has been posted to the following Internet location as Psp2ccma.exe
	and Psp2ccmi.exe:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-CCM
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : 5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
