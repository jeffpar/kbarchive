---
layout: page
title: "Q201767: SMS: How to Add a NDS Volume to be CAP  of a SMS 2.0 Site"
permalink: /kb/201/Q201767/
---

## Q201767: SMS: How to Add a NDS Volume to be CAP  of a SMS 2.0 Site

{% raw %}

	Article: Q201767
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbBindery kbCAP kbNDS kbOSNovell
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For a site server to have the ability to install a client access point (CAP) to
	a NetWare Directory Services (NDS) volume, the site server must have the
	Intranetware 4.30.410 or later redirector installed with Internetwork Packet
	Exchange (IPX). TCP/IP only configurations are not valid.
	
	It does not matter if the redirector was not installed when SMS was originally
	installed on the site server. However, the redirector must be installed PRIOR to
	adding any NDS functionality in the Administrator User Interface (UI).
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. There must be an account in the NDS tree that has Supervisor rights to the
	  volume that will house the CAP and Logon Point.
	
	2. In the SMS Administrator UI, expand the Site Database, Site Hierarchy , and
	  SiteCode of the site to add an NDS volume to Site Settings, Connection
	  Accounts, Site System. Right-click Site system and then select New Netware
	  NDS. When the window opens, click Set, then supply the tree and the FULL path
	  of the user object as illustrated by this example:
	
	  .smsadmin.sms.ncsms.microsoft
	
	  For example:
	
	   .user.container.parentcontainer.organization
	
	3. In the SMS Administrator UI, expand Site Database, Site Hierarchy, SiteCode
	  of the site. To add a NDS volume to Site Settings, Site System, right-click
	  Site system and then choose NEW - Netware NDS VOLUME. Provide the Tree name
	  and FULL path of the volume object. For example:
	
	  .volume.container.parentcontainer.ogranization
	
	  as illustrated by this example:
	
	  .sms_nw4x_vol1.sms.ncsms.microsoft
	
	4. Click Client Access Point and enable 'Use this site system as a client access
	  point'.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbBindery kbCAP kbNDS kbOSNovell 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
