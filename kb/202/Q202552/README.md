---
layout: page
title: "Q202552: SMS: Time Synchronizing an SMS Site Server with SQL Server"
permalink: /kb/202/Q202552/
---

## Q202552: SMS: Time Synchronizing an SMS Site Server with SQL Server

{% raw %}

	Article: Q202552
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200
	Last Modified: 12-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the system time on the Systems Management Server (SMS) Site Server and the
	Microsoft SQL Server become different, SMS may begin to experience operational
	problems such as difficulties distributing software.
	
	CAUSE
	=====
	
	This issue can occur because SMS does not provide any checks that confirm that
	accuracy of the time on the SMS site server in relation to a time server or a
	SQL server.
	
	WORKAROUND
	==========
	
	To work around this issue, the Microsoft Windows NT Resource Kit includes a tool
	that can install a "time service" to synchronize the time on the server, even if
	no one is logged in, or ever logs in. Please view the Windows NT Resource Kit
	documentation for installation and configuration instructions for the
	Timeserv.exe tool. Administrators could use the Timeserv.exe tool to synchronize
	the servers automatically. For additional information about how to set up a
	Windows NT Server as a Time server, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q131715 How to Set Up And Synchronize with Domain Time Source Servers
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
