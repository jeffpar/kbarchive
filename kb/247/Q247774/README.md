---
layout: page
title: "Q247774: XADM: MSExchangeIS (306) Error in Event Log with Antivirus Use"
permalink: kb/247/Q247774/
---

## Q247774: XADM: MSExchangeIS (306) Error in Event Log with Antivirus Use

	Article: Q247774
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an antivirus program on a computer running Microsoft Windows NT
	Server 4.0 Service Pack 3 and Microsoft Exchange Server 5.5, the following error
	message may appear in the application log of Event Viewer:
	
	  Event ID: 0
	  Source: ESE97
	  Category: Performance
	  Description: MSExchangeIS (306) Unexpected Windows NT API error. 0xC000000D
	
	CAUSE
	=====
	
	This behavior can be caused by a virus protection program, especially when it is
	not a program built to recognize Exchange Server processes. The program may
	install a file system filter that prevents a JET engine from addressing database
	files.
	
	RESOLUTION
	==========
	
	To work around this behavior, use one of the two following procedures:
	
	- Remove the antivirus software, and then restart the server. (Disabling the
	  antivirus program is not sufficient.)
	
	  -or-
	
	- Install a Windows NT hotfix that is part of the roll-up hotfixes recommended
	  in the Readme.doc file for Microsoft Exchange Server 5.5. These hotfixes are
	  available at:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postSP3/roll-up/
	
	  NOTE: If you later reinstall Windows NT service packs, you must also reinstall
	  the hotfixes, regardless of your responses to the Overwrite Newer Files
	  prompts during the service pack installation.
	
	MORE INFORMATION
	================
	
	This error can occur when you install Norton NT Tools version 1.0. Disabling the
	Norton program does not work; you must remove it.
	
	Use of Omtool Fax Senior version 2.5 also produces this error, with an internal
	ID of 2030148. The hotfix noted above also corrects this problem.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q174746 XADM: Err Msg: Unexpected NT API Error: 0xC000000D
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
