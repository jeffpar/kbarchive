---
layout: page
title: "Q178698: XADM: Calendar Reminders Not Functioning After Move Mailbox"
permalink: kb/178/Q178698/
---

## Q178698: XADM: Calendar Reminders Not Functioning After Move Mailbox

	Article: Q178698
	Product(s): Microsoft Exchange
	Version(s): 4.0
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
	
	After you use the Move Mailbox command in the Microsoft Exchange Administrator
	program, the Reminders dialog box for scheduled appointments fails to display
	using Outlook 97 clients.
	
	CAUSE
	=====
	
	Outlook 97 introduced some new MAPI properties. These properties were not being
	correctly mapped to the older properties that actually contained the Reminder
	information after the mailbox was moved to the new server.
	
	
	WORKAROUND
	==========
	
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
	
	To clean your reminders so they are displayed when they normally should be,
	follow these steps:
	
	1. Apply the latest service pack for Microsoft Exchange Server version 5.0 on an
	  Exchange Server 5.0 computer. For information on obtaining the service pack,
	  query on the following word in the Microsoft Knowledge Base (without the
	  spaces):
	
	  S E R V P A C K
	
	  NOTE: The fix that allows you to clean your reminders has been implemented
	  only in the Administrator program for Exchange Server 5.0. However, the
	  Exchange Server 5.0 Administrator program can be used to clean your reminders
	  on an Exchange Server 4.0 computer.
	
	
	
	2. Start the Registry Editor (Regedt32.exe).
	
	3. Locate the following key in the registry:
	
	     HKEY_CURRENT_USER\Software\Microsoft\Exchange\MSExchangeAdminCommon
	
	4. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	     Value name: CleanReminders
	     Value type: REG_DWORD
	     Value data: 1
	
	5. Quit the Registry Editor.
	
	6. Start the Administrator program. To do so, click Start, point to Programs,
	  point to Microsoft Exchange, and then click Microsoft Exchange Administrator.
	
	7. In the left pane, select the appropriate Recipients object. In the right
	  pane, select the desired mailboxes.
	
	  NOTE: The users should not be logged on to the server when you perform these
	  steps.
	
	8. On the Tools menu, click Clean Mailbox. Click OK, and then click OK again.
	
	9. When Clean Mailbox finishes, start Outlook and log on to the server using the
	  mailbox that was experiencing this problem. When you do so, the Reminders
	  folder is rebuilt and your reminders should be displayed.
	
	NOTE: When the CleanReminders registry value is set to 1, the Clean Mailbox
	command only cleans the Reminders folder for the selected mailboxes. The Clean
	Mailbox command does not delete any messages.
	
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
	
	To cause the Clean Mailbox command to return to its normal behavior, you must do
	one of the following:
	
	- Set the CleanReminders registry value to 0.
	
	  -OR-
	
	- Delete the CleanReminders registry value.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
