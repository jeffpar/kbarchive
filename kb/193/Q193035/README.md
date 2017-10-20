---
layout: page
title: "Q193035: XFOR: Ability to Restrict Size of Headers Contained in Message"
permalink: /kb/193/Q193035/
---

## Q193035: XFOR: Ability to Restrict Size of Headers Contained in Message

{% raw %}

	Article: Q193035
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Messages sent from a Microsoft Exchange Server computer (originating from an
	Exchange client or through an external gateway) with a large number of
	recipients may prevent the Microsoft Mail for PC Networks client from
	downloading new messages. This problem occurs if the messages are directed to
	one or more recipients on a Microsoft Mail for PC Networks postoffice.
	
	CAUSE
	=====
	
	The Microsoft Mail for PC Networks client has a limitation in the size of header
	that can exist within a message. If a header is larger than 32 KB (or 64 KB with
	a later fix), the above symptoms will occur. More information about this
	limitation can be found in the following Knowledge Base article:
	
	  Q147040 PC Win: Large Recipient List Stops Download of New Mail
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Microsoft Mail Connector Interchange
	
	  File Name   Version
	  ----------------------
	  Mt.exe      5.5.2365.0
	  Mtmsg.dll   5.5.2365.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	MORE INFORMATION
	================
	
	To work around this limitation, obtain the latest release of the Microsoft Mail
	Connector Interchange software as indicated above. There is a new registry key
	called "Message Header Size Limit".
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Log on to the Microsoft Exchange Server computer where the Microsoft Mail
	  Connector is installed.
	
	2. Start Registry Editor (Regedt32.exe) and go to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMSMI
	  \Parameters
	
	3. On the Edit menu, click Add Value.
	
	4. Enter the following:
	
	  Value Name: Message Header Size Limit
	  Data Type:  REG_DWORD
	  Value:      <see below>
	
	5. Click OK and quit Registry Editor.
	
	If this registry value is present and set to a positive number, that is the size
	limit in bytes of the header portion of the MAI file for all outgoing messages
	from the Microsoft Mail Connector (MSMI). Incoming messages are not affected by
	this setting. If this registry value is not present or the size limit is set to
	0, the MSMI will work as before, that is, no size limits will be imposed.
	
	If this registry value is being used, then a message with a header size that is
	larger than the header size limit will be returned to the sender. An error
	message is logged in the event log with event ID 2604. This event message gives
	the address of the sender and the MsgID of the returned message.
	
	Additional query words: msmi header msmail ndr
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
