---
layout: page
title: "Q268496: XFOR: Migration Wizard Dr. Watson Migrating from GroupWise 5.5"
permalink: /kb/268/Q268496/
---

## Q268496: XFOR: Migration Wizard Dr. Watson Migrating from GroupWise 5.5

{% raw %}

	Article: Q268496
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 18-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, versions 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you migrate from Novell GroupWise 5.5 by using the Microsoft Exchange
	Migration Wizard, the Migration Wizard may generate a Dr. Watson event. If you
	are running the Migration Wizard on a Microsoft Windows 2000 Server-based
	computer, the following event may be logged:
	
	  Event Type: Information
	  Event Source: DrWatson
	  Event Category: None
	  Event ID: 4097
	  Description:
	  The application, mailmig.exe, generated an application error. The error
	  occured on MM/DD/YYYY at HH:MM:SS The exception was c0000005 at address
	  672817E5.
	
	This event is generated after you type the path to the Novell GroupWise 5.x
	domain, account name, and password, and then click Next to start the GroupWise
	startup process.
	
	If you run the Migration Wizard on a Windows 2000 Server-based computer, the
	Migration Wizard disappears from the screen and the Dr.Watson event is logged in
	the Windows 2000 Event Viewer. On a Microsoft Windows NT Server version
	4.0-based computer, the Dr. Watson event is displayed on the screen.
	
	CAUSE
	=====
	
	This issue can occur because the GroupWise Client 5.5.3 Gwcmb1.dll file returns
	unexpected results that cause the Migration Wizard to stop working. Although the
	Mailmig.exe file generated an application error, the Mailmig.exe file is not the
	cause of this issue.
	
	RESOLUTION
	==========
	
	To resolve this issue, downgrade the GroupWise Client that is installed on the
	migration server to one of the following versions: 5.5, 5.5.1 or 5.5.2. If there
	are issues when you reply to migrated messages from GroupWise 5.5 it may be
	necessary to use GroupWise Client 5.2.x.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv kbExchange550SP3 kbExchange550SP4
	Version           : :5.5 SP3,5.5 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
