---
layout: page
title: "Q302508: Duplicate Queries Appear in the Administrator Console"
permalink: /kb/302/Q302508/
---

## Q302508: Duplicate Queries Appear in the Administrator Console

	Article: Q302508
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Systems Management Server (SMS) Administrator console to view
	available queries, multiple instances of a given query may be displayed. For
	example, the "All Client Systems" query may appear two or more times. Note that
	users that have Class-level rights for queries do not have this problem.
	
	CAUSE
	=====
	
	This problem can be caused by either of the following conditions:
	
	- A user is a member of multiple groups with Read-Instance rights on a given
	  object.
	
	- A user has explicit read instance rights to a given object, and the user is
	  also a member of one or more groups with Read-Instance rights.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, assign class-level Read rights to queries.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
