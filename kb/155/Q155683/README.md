---
layout: page
title: "Q155683: Verification of From Address in SMTP Messages"
permalink: /kb/155/Q155683/
---

## Q155683: Verification of From Address in SMTP Messages

{% raw %}

	Article: Q155683
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry. Before you edit the registry, make sure you understand how to restore the Registry if an issue occurs. For information on how to do this, view the "Restoring the Registry" online Help topic in Regedit.exe or the "Restoring a Registry Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Messages have an address in the From line that is not authentic.
	
	CAUSE
	=====
	
	This is done by using Telnet to connect to the mail host on port 25 and by
	typing RFC-821 SMTP commands to simulate the arrival of a new message. When
	these messages are received by the Microsoft Exchange Server Internet Mail
	Service (or Internet Mail Connector, in version 4.0), the address is compared to
	the Microsoft Exchange Directory. If the address matches a directory entry, the
	address is replaced in the message header. This means that the spoofed messages
	look identical to internally sent Exchange Server messages.
	
	WORKAROUND
	==========
	
	To work around this issue:
	
	- On the File menu, click Properties.
	
	  If a Headers tab is present, the message was not sent by another Microsoft
	  Exchange Server user in your organization.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in Microsoft Exchange Server
	versions 4.0 , 5.0 and 5.5. This issue was corrected in the latest Microsoft
	Exchange Service Packs. For information on obtaining the Service Packs, query on
	the following word in the Microsoft Knowledge Base:
	
	  SERVPACK
	
	MORE INFORMATION
	================
	
	For the Exchange Server administrator to enable either version of Microsoft
	Exchange Server to check the From line, follow these steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious issues that may
	require you to reinstall Windows. Microsoft cannot guarantee that issues that
	result from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit.
	
	1. On the Microsoft Exchange Server computer, start Regedt32.exe.
	
	2. Add two values to the IMC Registry Key, under:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/MSExchangeIMC/Parameters
	
	3. On the Edit/Add value menu, add the following:
	
	     Value Name: TurfDir
	     Data Type: REG_SZ
	
	     C:\Exchsrvr\Imcdata\Turfdir
	
	  This is the directory where matched messages is stored.
	
	4. On the Edit menu, click Add to add the following:
	
	     Value Name: TurfTable
	     Data Type: REG_MULTI_SZ
	
	     user1@site.domain
	     user2@site.domain
	
	The Turf Table contains a list of e-mail addresses used to verify the From
	address on incoming Internet mail. The addresses are not case sensitive and
	should be entered one per line with no extra spaces or delimiters. If a match is
	found, the message is saved to the directory specified in the TURFDIR value. In
	Exchange 5.5 you can add the domain values instead of adding single user names.
	For example, @site.domain.
	
	
	5. Restart the Internet Mail Connector service.
	
	
	Additional query words: XSRVInCon
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
