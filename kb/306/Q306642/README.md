---
layout: page
title: "Q306642: SMS: Permissions Assigned to Default Domain Local or Local Group"
permalink: kb/306/Q306642/
---

## Q306642: SMS: Permissions Assigned to Default Domain Local or Local Group

	Article: Q306642
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 18-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply the hotfix that is described in Microsoft Knowledge Base article
	Q266712 on your Systems Management Server (SMS) 2.0 primary site server, users
	of the SMS Administrator console may be unable to enumerate SMS objects such as
	collections.
	
	This problem can occur regardless of whether the SMS provider (either on the SMS
	site server or on Microsoft SQL Server) is installed on a member server or a
	domain controller. Before you applied the hotfix, users could successfully
	inherit permissions that were assigned to the default domain local or default
	local computer groups. Examples of the default local groups involved include the
	Administrators and Power Users groups.
	
	For additional information about the hotfix in Q266712, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q266712 SMS: Security Based on Global Groups Fails in Windows 2000 Domains
	
	
	CAUSE
	=====
	
	When the SMS provider enumerates a user's group membership, it returns the
	default groups as "BUILTIN." For example, if you assign permissions to the
	Domain1\Administrators group in SMS Security and then log on as a member of that
	group, the SMS provider interprets the group membership as
	BUILTIN\Administrators; you would not receive the assigned permissions.
	
	Note that custom user groups that are created by the administrator are not
	"BUILTIN," and do not experience this problem.
	
	WORKAROUND
	==========
	
	When you define permissions for default (built-in) local groups in the SMS
	Administrator console, specify "BUILTIN" instead of the domain or computer name.
	For example, specify "BUILTIN\Administrators" in the SMS User Wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
