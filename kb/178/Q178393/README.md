---
layout: page
title: "Q178393: SQL Server Hangs When Sending a Message Using SQLMail"
permalink: /kb/178/Q178393/
---

## Q178393: SQL Server Hangs When Sending a Message Using SQLMail

{% raw %}

	Article: Q178393
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:4.0,6.5
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 4.0 
	- Microsoft SQL Server version 6.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer running Windows NT Server 4.0 with Service Pack 3 (SP3) and
	Microsoft SQL Server 6.5 installed, when you send a message using xp_sendmail,
	SQLMail and the SQL Server service may stop responding (hang). You cannot stop
	the SQL Server service using SQL Enterprise Manager, SQL Service Manager, or the
	NET STOP MSSQLSERVER command.
	
	CAUSE
	=====
	
	This problem, originating in the Windows NT SP3 build of Mapi32.dll, is known to
	occur when your Windows Messaging mail profile is configured to connect to the
	Internet (for example, a POP3 mail server) and the SQL Server "priority boost"
	configuration parameter is set to 1. This may not occur with the first message
	sent, but may occur on subsequent attempts to send a message.
	
	
	RESOLUTION
	==========
	
	To workaround this problem, set the SQL Server "priority boost" configuration
	parameter to 0.
	
	If, for other reasons, you require this configuration parameter to be set to 1,
	obtain the latest service pack for Windows NT version 4.0.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: Returning to the previous build of Mapi32.dll (which is the base build of
	this file, installed with Windows NT 4.0) is not recommended, because fixes were
	made to this file for Windows NT SP3 to correct other SQLMail problems. Please
	see the following Microsoft Knowledge Base article for more information:
	
	  Q159425 PRB: Messages Blocked with SQLMail and Exchange Client
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: sqlmapi mapi
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbSQLServSearch kbAudDeveloper kbOSWinSearch kbOSWinNT400 kbSQLServ650 kbOSWinNTSearch
	Version           : winnt:4.0,6.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
