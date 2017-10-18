---
layout: page
title: "Q305332: SMS: Permissions Assigned to Domain Local Groups Do Not Work"
permalink: kb/305/Q305332/
---

## Q305332: SMS: Permissions Assigned to Domain Local Groups Do Not Work

	Article: Q305332
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200preSP4fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply the post Systems Management Server 2.0 (SMS) Service Pack 3
	(SP3) hotfix for Q266712 or SMS 2.0 Service Pack 4 (SP4) or later on your SMS
	2.0 primary site, users of the SMS Administrator console may be unable to
	enumerate SMS objects such as collections. Prior to the application of the
	hotfix, users were able to inherit permissions that were assigned to domain
	local groups.
	
	CAUSE
	=====
	
	The fix that is included with Q266712 contains a change in how a user's groups
	are enumerated by the SMS provider. Because of this change, using domain local
	groups to assign permissions is no longer possible on member servers. Note that
	domain local groups still work when the SMS provider resides on a domain
	controller (DC).
	
	WORKAROUND
	==========
	
	To work around this issue, use any of the following methods individually:
	
	- Use domain global groups to grant access and assign permissions to SMS object
	  classes and instances.
	
	- Use machine local groups to grant access and assign permissions to SMS object
	  classes and instances.
	
	- Use individual user accounts to grant access and assign permissions to SMS
	  object classes and instances.
	
	MORE INFORMATION
	================
	
	To experience the issue that is described in this article, the SMS provider
	(either on the SMS site server or SQL server) must be installed on a member
	server.
	
	For additional information about the fix that is included in Q266712, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q266712 Security Based on Global Groups Fails in Win 2000 Domains
	
	For additional information about troubleshooting general SMS Administrator
	console connectivity, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q201126 SMS: Troubleshooting Connectivity to the SMS Site Database
	
	For general information about SMS security, please view the following SMS
	Security Essentials Whitepaper:
	
	  http://www.microsoft.com/smsmgmt/techdetails/secessentials.asp
	
	Additional query words: prodsms smssecurity smsprov
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
