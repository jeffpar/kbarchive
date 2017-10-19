---
layout: page
title: "Q168109: XFOR: POP3 Clients and Mail Conversion Failures"
permalink: /kb/168/Q168109/
---

## Q168109: XFOR: POP3 Clients and Mail Conversion Failures

	Article: Q168109
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	During the course of normal use, Microsoft Exchange Server may accept a
	corrupted incoming mail message from an outside source (another Exchange Server
	computer, a client, an NNTP newsfeed, and so on).
	
	When POP3 clients download these messages from the Microsoft Exchange Server
	computer, a content conversion failure may occur. If a content conversion
	failure occurs, Microsoft Exchange Server returns an error message to the client
	and marks the failed message as non-downloadable. The failed message and all
	other messages in the user's Inbox cannot be downloaded. However, the message
	may still be readable by Microsoft Exchange Client, so an administrator can use
	Microsoft Exchange Client to recover the message for the POP3 user.
	
	If a POP3 user receives a content conversion error, administrators are encouraged
	to send the failed message to Microsoft Technical Support. If content conversion
	failures occur frequently, administrators can also edit the registry so POP3
	users can continue to download messages after a content conversion error is
	returned. Any failed messages are hidden from POP3 clients, but still exist in
	the user's Inbox, so they can be downloaded using Microsoft Exchange Client.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To modify the registry setting:
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe as appropriate for your
	  version of Windows NT).
	
	2. Go to the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	     \MSExchangeIS\ParametersSystem
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	     Value Name: POP3 Performance
	     Data Type:  REG_DWORD
	     Value:      2
	
	4. Exit Registry Editor.
	
	In all cases it is advisable to call Microsoft Technical Support for assistance
	because corrupted messages and content conversion failures may indicate a more
	serious problem.
	
	Additional query words: hang crash
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	
	=============================================================================
	
