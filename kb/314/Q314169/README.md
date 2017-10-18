---
layout: page
title: "Q314169: SMS: &quot;Connection Failed&quot; Error Message w/Administrator Console"
permalink: kb/314/Q314169/
---

## Q314169: SMS: &quot;Connection Failed&quot; Error Message w/Administrator Console

	Article: Q314169
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbtool kbsms200
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Systems Management Server (SMS) version 2.0 administrator
	console from a Microsoft Windows 2000-based computer, you may receive a
	"Connection Failed" error message instead of being connected to the SMS site
	server. However, Microsoft Windows NT 4.0-based computers that are running the
	console can connect without errors.
	
	CAUSE
	=====
	
	This issue can occur if there is a user account in the domain that has the same
	name as the SMS site server or the remote SQL Server that hosts the SMS
	Provider.
	
	WORKAROUND
	==========
	
	To work around this issue, completely delete the matching user account. Note
	that the console cannot connect even if you disable the account, and it is not
	possible to rename the SMS site server without having to reinstall SMS.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
