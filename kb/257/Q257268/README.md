---
layout: page
title: "Q257268: SMS: Group Members Cannot Advertise to New Collections"
permalink: /kb/257/Q257268/
---

## Q257268: SMS: Group Members Cannot Advertise to New Collections

{% raw %}

	Article: Q257268
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbConfig kbMMC kbSecurity kbsms200 kbsms200bug kbAdvertisement kbCollections kbPackage
	Last Modified: 21-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a Microsoft Windows NT user group and you give it the rights to
	advertise software distributions to collections, the user group may not have
	appropriate rights even if the new collection is created by a member of the
	group.
	
	CAUSE
	=====
	
	When a member of a Windows NT user group creates a new collection, they are
	granted Read, Modify and Delete rights, by default. The members of the Windows
	NT user group are not able to advertise to this newly created collection unless
	a Systems Management Server (SMS) administrator who has appropriate rights gives
	the user group Advertise rights on the new collection.
	
	Each time a new collection is created, the Windows NT user group must be granted
	Advertise, Read Resource and Modify Resource rights before they can advertise to
	this collection.
	
	WORKAROUND
	==========
	
	To work around this problem, give the Windows NT user group Advertise, Read,
	Read Resource and Modify Resource rights at the Collection Class object level.
	When the user group has these rights, the group can advertise to any resource in
	any collection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms helpdesk software distribution
	
	======================================================================
	Keywords          : kbConfig kbMMC kbSecurity kbsms200 kbsms200bug kbAdvertisement kbCollections kbPackage kbsmsAdmin kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
