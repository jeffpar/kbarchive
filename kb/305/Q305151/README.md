---
layout: page
title: "Q305151: SMS: Cannot Create Collection Based on Direct Rule Membership"
permalink: /kb/305/Q305151/
---

## Q305151: SMS: Cannot Create Collection Based on Direct Rule Membership

	Article: Q305151
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) collections that are based on Direct Membership
	rules may lose their members or membership rules during the creation process if
	the SMS permissions that are assigned are based on global groups. This problem
	occurs only if the SMS provider and Microsoft SQL Server are installed on a
	separate member server from the SMS site server.
	
	This problem occurs when you are creating a new collection by using the Direct
	Membership Rule Wizard (after you browse an existing collection and select the
	resources that are required for the new collection). If you click Apply in the
	final wizard dialog box, the collection members are lost. If you click OK in the
	final wizard dialog box, the collection members and the membership rules are
	lost.
	
	CAUSE
	=====
	
	This problem occurs because the SMS provider tries to use the local
	SMSServer_sitecode account to validate permissions.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
