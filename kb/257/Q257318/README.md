---
layout: page
title: "Q257318: SMS: Advertisement .ofr Files Are Not Deleted on Secondary Site"
permalink: /kb/257/Q257318/
---

## Q257318: SMS: Advertisement .ofr Files Are Not Deleted on Secondary Site

	Article: Q257318
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbAdvertisement kbPackage kbSoftwareDist kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you manually delete a package on a primary site, the associated
	advertisement (.ofr) files are not deleted from the
	<Drive>:\SMS\Inboxes\Offerinf.box folder on the secondary site.
	
	CAUSE
	=====
	
	Distribution Manager and Offer Manager are responsible for deleting all the
	advertisements that are associated with a package. On the primary site, the
	deletion is triggered by SQL triggers or by Distribution Manager. On the
	secondary site, the deletion is triggered only by Distribution Manager, but the
	deletion is not triggered.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	Manually delete the .ofr files on the secondary site server. These files are
	located in the <Drive>:\SMS\Inboxes\Clicfg.src folder.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server version 2.0 Service Pack 2.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbAdvertisement kbPackage kbSoftwareDist kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
