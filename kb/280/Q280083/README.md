---
layout: page
title: "Q280083: SMS: Collections May Be Missing, Empty, or Partially Empty"
permalink: kb/280/Q280083/
---

## Q280083: SMS: Collections May Be Missing, Empty, or Partially Empty

	Article: Q280083
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbCollections kbSoftwareDist kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a multiple-tier hierarchy, collections that are created at a parent site may
	become corrupted during replication to child sites. The result is blank
	collections or collections with missing rules at the child sites.
	
	CAUSE
	=====
	
	This issue occurs most commonly on child primary sites; the issue occurs because
	.psd files are processed out of chronological order, causing some of the rules
	to be discarded before the definition that would create the collection is
	processed. The Makecoll.exe tool from the Resource Kit seems to cause the
	problem more often than creating a collection through the Administrator console.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	Note that updating the problem collection by using the Administrator console
	from the parent site may correct the discrepancy, but you may need to repeat
	this process several times for complete success.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	Additional query words: prodsms kbsms200preSP3fix
	
	======================================================================
	Keywords          : kbCollections kbSoftwareDist kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
