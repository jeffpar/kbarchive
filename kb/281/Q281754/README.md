---
layout: page
title: "Q281754: SMS: Distribution Points Updated When Opening Package Properties"
permalink: /kb/281/Q281754/
---

## Q281754: SMS: Distribution Points Updated When Opening Package Properties

	Article: Q281754
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbnetwork kbsms200 kbsms200bug kbPackage kbSender kbsmsAdmin kbsms200preSP3fix kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the properties for a package in the Systems Management Server
	(SMS) Administrator console and then click OK or Apply, the package may be
	redistributed to all distribution points in the SMS hierarchy.
	
	This problem can occur even if you do not make any changes to the properties for
	the package.
	
	CAUSE
	=====
	
	This problem occurs because the SMS provider incorrectly detects a change to the
	package source folder after you click OK or Apply in the Properties dialog box
	for the package. When this occurs, the SMS provider sets a flag in the SMS
	database that instructs SMS Distribution Manager to refresh the package on all
	of the distribution points.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	NOTE: Customers requiring this fix should also obtain the fix associated with
	article q299435. Fix q299435 should be applied immediately AFTER applying this
	fix.
	
	WORKAROUND
	==========
	
	To work around this problem, click Cancel to close the Properties dialog box if
	you did not make any changes to the properties for the package.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	This problem can have severe implications for large SMS hierarchies or
	hierarchies that span slow links. If you examine or edit a large number of
	packages, the network links between sites may be overwhelmed.
	
	After Distribution Manager begins to send a package to the local distribution
	points and other sites, it is important to allow the updates to occur. If you
	interrupt the updates, the package version numbers that are used internally to
	track package updates may become unsynchronized. For example, if a secondary
	site determines that a later package source exists for a package and the package
	has not arrived, that package cannot be used with an advertisement until the
	later source arrives.
	
	To avoid overwhelming the network links between the sites, set rate limits or
	configure send schedules on the sender addresses of remote sites. You can do
	this in the SMS Administrator console under Site Settings\Addresses.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsms200 kbsms200bug kbPackage kbSender kbsmsAdmin kbsms200preSP3fix kbsms200preSP4fix kbSMSSender 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
