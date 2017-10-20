---
layout: page
title: "Q296159: Setting Permissions on Packages Using MOF Files May Not Work"
permalink: /kb/296/Q296159/
---

## Q296159: Setting Permissions on Packages Using MOF Files May Not Work

{% raw %}

	Article: Q296159
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
	
	Setting permissions on packages that are created by using MOF files with the
	SMS_PackageAccessByUsers class does not work. The following sample MOF file
	section illustrates how to use the SMS_PackageAccessByUsers class to ensure that
	Guests users have no access to a package:
	
	  instance of SMS_PackageAccessByUsers
	  {
	  PackageID = $pID;
	  UserName = "[\"Display=Guests\"]GENERIC:GROUP=Guests";
	  Access = 0;
	  };
	
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
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
