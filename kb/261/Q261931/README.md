---
layout: page
title: "Q261931: SMS: Required Hotfixes Before Installing SMS 2.0 SP2"
permalink: kb/261/Q261931/
---

## Q261931: SMS: Required Hotfixes Before Installing SMS 2.0 SP2

	Article: Q261931
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 22-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you prepare your Systems Management Server (SMS) 2.0 hierarchy for an
	upgrade to SMS 2.0 Service Pack 2 (SP2), you may need to apply two specific
	updates to every SMS 2.0 site server in your existing hierarchy. Please review
	this article thoroughly to determine which updates you need to apply to your
	hierarchy.
	
	There are separate versions of these updates based on the version of SMS 2.0 that
	each site is currently running. There are two updates for SMS 2.0 (build 1239),
	and two updates for SMS 2.0 Service Pack 1 (build 1380) sites. These updates are
	included on the SP2 CD-ROM in the Smsqfe folder. The updates are also included
	in the Web patch download, and are available as separate downloads as noted in
	the Knowledge Base articles that are referenced in the "More Information"
	section of this article.
	
	NOTE: You can obtain SMS 2.0 SP2 at the following Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt
	
	MORE INFORMATION
	================
	
	You need to apply these hotfixes to your SMS hierarchy if your hierarchy
	consists of multiple sites managing logon points in the same domain. You must
	implement these hotfixes before upgrading any of your sites to SP2. Note that
	there are two sets of hotfixes. There is one set for sites that are running SMS
	2.0 (build 1239), and one set for sites that are running SMS 2.0 SP1 (build
	1380).
	
	If you do not apply these updates, SMS clients may not function properly because
	of different versions of the client components. This condition may cause a
	situation in which the base components are installed by SP2 while the optional
	components are still at an SP1 level. This may cause the client to enter an
	unmanageable state. If this occurs, you may have to reinstall the SMS client
	software on the affected computers to correct this condition.
	
	NOTE: After you apply either the Q251070 (release) or Q249077 (SP1) update, you
	must wait until the Copylog.tcf file is updated on each Logon Point before
	installing SP2. This file is located in the Smslogon\Config folder on each
	domain controller. The Senior Site configured in the hierarchy should update
	this file on an all shared Logon Points. For a description of the Senior Site
	concept, please review the following Microsoft Knowledge Base article:
	
	  Q235726 SMS: Specifying Senior Site for WinNT Logon Point Management
	
	SMS 2.0
	-------
	
	If the site is running SMS 2.0 without SP1 (build 1239), view the following
	Microsoft Knowledge Base articles:
	
	  Q251070 Copylog.tcf Does Not Reflect Site Which Site Last Updated the Logon
	  Point
	
	  Q252718 CCM Avoids Installation Attempts on SP2 Clients
	
	SMS 2.0 SP1
	-----------
	
	If the site is running SMS 2.0 with SP1 (build 1380), view the following
	Microsoft Knowledge Base articles:
	
	  Q249077 SP1: Copylog.tcf Does Not Reflect Which Site Last Updated the Logon
	  Point
	
	  Q252717 SP1: CCM Avoids Installation Attempts on SP2 Clients
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
