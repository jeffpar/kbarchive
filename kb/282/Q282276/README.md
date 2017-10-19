---
layout: page
title: "Q282276: SMS: Deleting Numerous Ads Causes Delay in Offer Mgr Processing"
permalink: /kb/282/Q282276/
---

## Q282276: SMS: Deleting Numerous Ads Causes Delay in Offer Mgr Processing

	Article: Q282276
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbMMC kbsms200 kbsms200bug kbAdvertisement kbSoftwareDist
	Last Modified: 13-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you delete a large number of advertisements, subsequent offers of new
	advertisements may be slow. In addition, new computers may be slow to receive
	advertisements after joining a collection if the previous advertisement was
	deleted.
	
	CAUSE
	=====
	
	When you delete advertisements, Offer Manager creates a .del file for each
	advertisement to be deleted. When processing a .del file, Offer Manager opens
	and possibly modifies all .ins files on the site. Given a large site with many
	clients, and many .ins files, this process can cause a lot of disk input/output,
	and Offer Manager may be very slow to process the changes.
	
	WORKAROUND
	==========
	
	To work around this issue, delete only a small number of advertisements at a
	time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbMMC kbsms200 kbsms200bug kbAdvertisement kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
