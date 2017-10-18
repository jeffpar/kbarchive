---
layout: page
title: "Q176828: MSN Sign-In Screen Prompts Repeatedly in Windows NT"
permalink: kb/176/Q176828/
---

## Q176828: MSN Sign-In Screen Prompts Repeatedly in Windows NT

	Article: Q176828
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2.5; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows Messaging, Microsoft Outlook 97, or Microsoft Outlook
	Express in Windows NT to access your Internet e-mail on MSN, The Microsoft
	Network, the MSN Sign-In screen may repeatedly prompt you for your user name and
	password. This prompt may occur even though you are typing the correct sign-in
	information.
	
	CAUSE
	=====
	
	This behavior can occur if you are using a POP3/SMTP Internet e-mail program and
	your MSN e-mail account has not been migrated from the MSN Classic e-mail
	servers to the MSN POP3/SMTP servers.
	
	RESOLUTION
	==========
	
	To work around this behavior, use MSN version 2.5 on a computer running
	Microsoft Windows 95 to migrate your MSN e-mail account to the MSN POP3/SMTP
	servers. After this migration is complete, you can use Windows Messaging,
	Outlook 97, or Outlook Express in Windows NT to access your Internet e-mail on
	the MSN SMTP/POP3 servers.
	
	For additional information about migrating your MSN e-mail account, see the
	following article in the Microsoft Knowledge Base:
	
	ARTICLE-ID: Q176276
	TITLE : Frequently Asked Questions About Mail Migration on MSN
	
	
	MORE INFORMATION
	================
	
	MSN e-mail accounts can be migrated to the MSN POP3/SMTP servers only by using
	MSN version 2.5 or later. MSN requires Windows 95 and is not supported with
	Windows NT. For additional information about support for MSN services on a
	computer running Windows 2000, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q238510 Using MSN Internet Services on Windows 2000
	
	Additional query words: permission denied msnetwork
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINDOWS:2.5; winnt:4.0
	
	=============================================================================
	
