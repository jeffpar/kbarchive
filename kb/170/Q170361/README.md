---
layout: page
title: "Q170361: XADM: Troubleshooting a Rapidly Growing Information Store"
permalink: /kb/170/Q170361/
---

## Q170361: XADM: Troubleshooting a Rapidly Growing Information Store

	Article: Q170361
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article describes the steps you can use to troubleshoot a rapidly growing
	Exchange Server information store (the Priv.edb or Pub.edb files).
	
	In certain cases, the information store can grow to from a few megabytes to
	several gigabytes in a 24-hour period.
	
	CAUSE
	=====
	
	Usually, a looping Inbox Assistant or Public Folder causes this problem.
	Assistant rules that cause a message to be continuously sent and received.
	
	RESOLUTION
	==========
	
	To avoid the problem, set mailbox size limits for all users on a server. This
	prevents the information store from continuously growing.
	
	Set the mailbox size limits in the Exchange Server Administrator program on the
	Advanced tab of the mailbox properties.
	
	MORE INFORMATION
	================
	
	Use the Exchange Server Administrator program to determine which mailbox or
	public folder is causing the problem. To do this, view the mailbox resources in
	the properties of the private information store or the public folder resources
	in the properties of the public information store. Look for mailboxes or public
	folders that have an unusually large number of items or are using an unusually
	large amount of disk space.
	
	After you determine which mailbox or public folder is causing the problem, log on
	to the Microsoft Exchange Client and disable any rules that reply or forward
	messages. Also delete items from the mailbox or public folder.
	
	Deleting messages in the mailbox or public folder does not automatically reduce
	the size of the Priv.edb or Pub.edb files. To recover the disk space, you must
	compact the Priv.edb or Pub.edb files; use the Edbutil.exe utility with the /d
	switch. Note that the Edbutil utility requires disk space in an amount equal to
	twice the size of the database that you want to process. Before you proceed,
	confirm that you have enough disk space available.
	
	To compact the database files, perform the following steps:
	
	1. Stop the information store. Use these steps:
	
	  a. In Control Panel, double-click Services.
	
	  b. In the Service list, click the service that you want to stop.
	
	  c. Click Stop.
	
	  d. Repeat steps b. and c. as necessary to stop other services.
	
	  e. Click Close, and then close Control Panel.
	
	2. At an MS-DOS prompt, change to the Exchsrvr\Bin directory.
	
	3. Type the following command to compact the Priv.edb file:
	
	  "edbutil /d /ispriv" (without the quotation marks)
	
	  Type the following command to compact the Pub.edb file:
	
	  "edbutil /d /ispub" (without the quotation marks)
	
	NOTE: For Microsoft Exchange Server, version 5.5, use the following commands:
	
	  "eseutil /d /ispriv" (without the quotation marks)
	  "eseutil /d /ispub" (without the quotation marks)
	
	NOTE: In Exchange Server version 5.5 Service Pack 3 a rule can start regardless
	of the mailbox or public folder quota limits. This was first changed to correct
	the situation in which meeting requests are not delivered if the recipient
	mailbox is full. For additional information about that situation, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q217139 XADM: Meeting Requests Are Not Delivered if Recipient's Mailbox Has
	  Exceeded the Storage Limit and Has a Delegate Defined
	
	However, you can create the following registry key to troubleshoot a rapidly
	growing information store on an Exchange Server 5.5 Service Pack 3 computer:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\ParametersPrivate
	
	  Value Name: Apply Mailbox Quota to Rules
	  Data Type: Reg_DWORD
	
	If this value is not 0, messages sent by rules still have the mailbox quota
	checked. If the value is not present or is 0 (the default in Service Pack 3),
	messages sent by rules ignore the mailbox quota for sending messages.
	
	IMPORTANT: If you set mailbox quotas to rules, there may be side effects. For
	example, if you set a forward and delete rule, it may result in data loss, and
	if you set meeting requests to go only to the delegate, neither may receive the
	request if the mailbox is over the limit.
	
	Additional query words: tshoot
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
