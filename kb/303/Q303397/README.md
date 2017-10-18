---
layout: page
title: "Q303397: Cannot View Subcollections on Child Sites"
permalink: kb/303/Q303397/
---

## Q303397: Cannot View Subcollections on Child Sites

	Article: Q303397
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui kbsms200preSP4fix
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view subcollections on child sites, some subcollections may be shown in
	the Systems Management Server (SMS) Administrator console, and others may not
	appear. For example, one child site may have a specific subcollection, while
	another child site does not. Note that the missing subcollections are the
	subcollections that are created from a parent site, not those that are created
	locally to the child site.
	
	CAUSE
	=====
	
	The SMS Administrator console only presents collections that are defined both in
	the Collections and Collection_SubCollections SQL tables. Because of timing
	issues, SMS Collection Evaluator and SQL Monitor may not correctly update both
	tables.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	The hotfix that was originally provided for the problem described in this
	Microsoft Knowledge Base article is no longer available. The hotfix that is
	described in the following Knowledge Base article now supercedes it:
	
	  Q324204 Collections Based on Complex Queries May Fail to Update
	
	To resolve the problem described in this article, install the hotfix that is
	described in this Microsoft Knowledge Base article (Q324204).
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	the Systems Management Server 2.0 Service Pack 4 Hotfix Rollup Package (HRP).
	
	For additional information about the SMS 2.0 SP4 HRP, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q323206 SMS: List of Bugs Fixed in the Systems Management Server 2.0 SP4 HRP
	
	MORE INFORMATION
	================
	
	One method you can use to recover from a situation where subcollections are
	missing at a child site is to manually update the collection from the site in
	which it was created. This sends the collection-to-subcollection information
	back down the hierarchy.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbui kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
