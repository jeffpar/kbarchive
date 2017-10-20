---
layout: page
title: "Q248081: XWEB: Suddenly and Permanently Unable to Reach Inbox Using OWA"
permalink: /kb/248/Q248081/
---

## Q248081: XWEB: Suddenly and Permanently Unable to Reach Inbox Using OWA

{% raw %}

	Article: Q248081
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Some users may be unable to log on to their mailboxes by using Microsoft Outlook
	Web Access (OWA) if they use their SMTP addresses, and the following error
	message may be displayed:
	
	  OWA was unable to get to your inbox.
	
	This problem occurs suddenly, and it is permanent. In some cases, the users can
	log on to their mailboxes by using their aliases or their first and last names.
	
	This problem does not occur if the users log on by using a MAPI client, such as
	Microsoft Outlook.
	
	CAUSE
	=====
	
	This problem occurs when the maximum size limit for user profiles is reached,
	which is 0x2000 (in hexadecimal) by default.
	
	RESOLUTION
	==========
	
	To resolve this problem, an administrator can increase the profile limit by
	changing the setting in the registry on the Internet Information Service (IIS)
	server.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the ProfileMemMaxSize value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Window
	  MessagingSubSystem\Application\Inetinfo
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click DWORD, type "0x4000 " (without the quotation marks),
	  and then click OK.
	
	4. Quit Registry Editor.
	
	5. Stop and restart the IIS.
	
	After an administrator performs these steps, the users are able to access their
	mailboxes by using their SMTP addresses again.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	- An administrator can re-create the entry in the directory by moving the
	  mailbox to another server or by using the Exmerge utility, and then deleting
	  or re-creating the mailbox on the same server (many sites have only one
	  server).
	
	- Users can use their aliases or their first and last names to log on to their
	  mailboxes when they use OWA.
	
	MORE INFORMATION
	================
	
	With a modified version of the Logon.inc file, the following error message is
	logged:
	
	  Error Number: -2147024882
	  Error Description: There is not enough memory available to perform the
	  operation.
	  [Microsoft Exchange Server Information Store - [E_OUTOFMEMORY(8007000E)]]
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q189654 XWEB: Failed To Get Inbox Error May Occur If Name Is Ambiguous
	
	  Q175122 XWEB: Error Msg: Failed to Get Inbox in Outlook Web Access
	
	  Q173470 XCLN: Troubleshooting Failed to get Inbox Error Message
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
