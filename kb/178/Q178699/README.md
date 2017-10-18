---
layout: page
title: "Q178699: XADM: Delegates Unable to View New Messages After Move Mailbox"
permalink: kb/178/Q178699/
---

## Q178699: XADM: Delegates Unable to View New Messages After Move Mailbox

	Article: Q178699
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you use the Move Mailbox feature, mailboxes on the new server will not be
	able to view new messages with delegate permissions.
	
	You will notice, however, the message count will always reflect the correct
	number of messages in the delegate's Inbox. This specific feature is by design
	for View/Searches.
	
	CAUSE
	=====
	
	Using the Move Mailbox feature of Microsoft Exchange Server corrupts certain
	properties on search folders. This does not cause any corruption in messages or
	in the database but does change certain properties on search folders. A search
	folder is a View/Sort/Filter of any kind. It does not contain messages but,
	instead, contains pointers to messages.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To work around this problem, perform the following steps:
	
	1. Open the Exchange Administrator program and connect to the server affected by
	  this problem.
	
	2. Set information store maintenance to Always. This can be set from the IS
	  Maintenance tab on the Properties page for the affected server. NOTE: If IS
	  Maintenance is not set to Always, you will delay the deletion of the
	  restrictions on views until normal maintenance is scheduled.
	
	3. From the server's Properties page, select the Diagnostics Logging tab. From
	  MSExchangeIS, then Private, set Views to MAXIMUM.
	
	4. Create the following registry value:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS
	     \ParametersPrivate
	     Value Name: Reset Views
	     Data Type: REG_WORD
	     Value: 1
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	5. Stop and restart the information store service. This can be done by going to
	  Control Panel and choosing Services.
	
	In about 15 minutes or less, the Maintenance Thread will execute, and you will
	notice the Reset Views registry value has been set to 0. This tells Exchange it
	is time to delete the cached restrictions/views, no matter how old they are.
	Normally, IS Maintenance will delete a cached restriction after 8 days of
	non-use.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	After you perform the above workaround, it is important to note that the client
	application may appear slow the first time a user views a mailbox with delegate
	permissions. This is normal, because the View/Restriction must be recreated for
	the client.
	
	After the information store service has been running for a while (about one
	hour), check the Application Event log for the following event:
	
	  Event ID: 1175
	  Source: MSExchangeISPrivate
	  Description: Deleted 4458 unused restricted views.
	
	After this process has been completed, the registry value (specified in step 4
	above) will be set to 0. Then you should undo the changes made in steps 2 and 3
	above (that is, reset the information store maintenance schedule and set
	Diagnostics Logging to NONE).
	
	At this point, the delegates should be able to see all messages except Private
	messages.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
