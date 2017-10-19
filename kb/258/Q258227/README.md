---
layout: page
title: "Q258227: SMS: Apostrophe in User Name or Group Name Causes SQL Errors"
permalink: /kb/258/Q258227/
---

## Q258227: SMS: Apostrophe in User Name or Group Name Causes SQL Errors

	Article: Q258227
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kberrmsg kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user name or a user group that a user belongs to contains an apostrophe
	(') and is running as a low rights user, the secure enumeration of objects does
	not work because the instance limiting process includes the user and group names
	in the query and uses apostrophes (single quotes) as a delimiter. The following
	error message is logged in the Smsprov.log:
	
	  E:\OPALSP1\sdk_provider\nt\smsprov\SspCollection.cpp(362) : Error retrieving
	  object CollectionID= SQL Error: Unclosed quotation mark before the character
	  string ')
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, remove the apostrophe from the user's name or from
	the user group's name.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	
	Additional query words: prodsms apostrophe
	
	======================================================================
	Keywords          : kberrmsg kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
