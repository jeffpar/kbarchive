---
layout: page
title: "Q321447: Event ID 201:  No License Was Available"
permalink: /kb/321/Q321447/
---

## Q321447: Event ID 201:  No License Was Available

{% raw %}

	Article: Q321447
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a shared resource on a Microsoft Windows NT 4.0
	Terminal Server, you may receive the following error message:
	
	  No more connections can be made to this remote computer at this time, because
	  there are already as many connections as the computer can accept.
	
	When you view the Application Log in the Event Viewer, you may notice the
	following logged event:
	
	  
	
	  Date:     <date>          Event ID: 201
	  Time:     <time>          Source:   LicenseService 
	  User:     N/A             Type:     Error
	  Computer: <ServerName>    Category: None
	
	  Description:
	  No license was available for user Domain\User using product SMBServer 4.0.
	
	CAUSE
	=====
	
	This behavior may occur if the Windows NT 4.0 Terminal Server is configured to
	use "Per Server" licensing.
	
	RESOLUTION
	==========
	
	To resolve this issue, change the Windows NT licensing mode to "Per Seat", and
	then restart the computer. To do this, follow these steps.
	
	WARNING: Before you change the licensing mode on the server, review your license
	agreement to make sure that you have the correct number of seats, and the
	correct type of licenses. If you are not sure of your license requirements,
	please contact Microsoft. For more information, visit the following Microsoft
	Web site:
	
	  http://www.microsoft.com/licensing/Default.asp
	
	1. Start License Manager. To do this, click Start, point to Programs, point to
	  Administrative Tools (Common), and then click License Manager.
	
	2. Click the Server Browser tab, expand the domain, and then expand the server
	  that you want.
	
	3. Double-click the Windows product that you want.
	
	4. In the Choose Licensing Mode dialog box that appears, click Per Seat. You
	  receive the following message:
	
	  Changing the license mode to Per Seat will result in current Per Server
	  license loss. Press F1 for more help.
	
	  Are you sure you wish to make this change?
	
	5. Click Yes, and then click OK.
	
	6. Read the Client Access License message that appears, click the "I agree that"
	  check box, and then click OK.
	
	7. When you finish configuring Per Seat licensing, restart the computer.
	
	MORE INFORMATION
	================
	
	For additional information about Windows NT 4.0 Terminal Server licensing, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q187629 Terminal Server Licensing
	
	  Q153140 How to Reset License Manager Information
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
