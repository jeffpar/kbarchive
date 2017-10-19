---
layout: page
title: "Q279234: SMS: Case-Sensitive Sort Order May Affect Security Rights"
permalink: /kb/279/Q279234/
---

## Q279234: SMS: Case-Sensitive Sort Order May Affect Security Rights

	Article: Q279234
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kbtool kbConfig kbDatabase kbMMC kbSecurity kbsms200 kbsms200bug kbsms120 kbsms12
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure a Microsoft Systems Management Server (SMS) database with a
	case-sensitive sort order on a Microsoft Windows 2000-based server, problems may
	occur when you attempt to assign security rights. When a new security instance
	is created in the SMS Administrator console, the user account that created this
	instance is given the appropriate class right permissions. However, the account
	is also added with an initial capital letter, and is set to "No Permissions."
	
	Example
	-------
	
	Log on as domain\administrator, and then create a new collection. When you review
	the security rights for the collection after you successfully create it, you see
	the following information:
	
	  Domain\administrator - Full Access (Read, Modify, Delete, Create, Administer,
	  etc)
	  Domain\Administrator - No Permissions
	
	After you quit and then restart the SMS Administrator console, only the
	collection that was previously created is displayed, while none of the SMS
	default collections are listed.
	
	In addition, when you add a new user through the Security Rights node of the SMS
	Administrator console, regardless of which rights you copy, a new user receives
	the following rights:
	
	  Collections - No Permissions
	  Packages - No Permissions
	  Advertisements - No security context added
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, perform the necessary SQL procedures to change the
	sort order so that it is not case sensitive.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	
	
	Additional query words: prodsms case sensitive lower no permission
	
	======================================================================
	Keywords          : kbenv kbtool kbConfig kbDatabase kbMMC kbSecurity kbsms200 kbsms200bug kbsms120 kbsms120bug kbCollections kbsmsAdmin kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
