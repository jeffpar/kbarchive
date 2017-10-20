---
layout: page
title: "Q263063: Site Component Manager May Attempt to Install Components"
permalink: /kb/263/Q263063/
---

## Q263063: Site Component Manager May Attempt to Install Components

{% raw %}

	Article: Q263063
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbConfig kbMMC kbServer kbsms200 kbsms200bug kbCAP kbsmsAdminkbbuglist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Systems Management Server (SMS) administrator from an SMS site (for
	example, AAA) attempts to create a client access point (CAP) or secondary site
	on a computer that is already a site that has the SMS Executive service
	installed, but this computer belongs to a different SMS site (for example, BBB),
	the Site Component Manager from site AAA is unsuccessful. The Site Component
	Manager, however, does not remove the entry from the control file of site AAA
	and continues to attempt to install the CAP on site BBB.
	
	Errors may be logged in the Sitecomp.log file on every processing cycle. The
	Sitecomp.log file may have a "The computer <xxx> is already a site system
	in site BBB" entry and the log file creates an error status for that component.
	
	CAUSE
	=====
	
	This problem can occur because a CAP has a thread of the SMS Executive service
	called the SMS Inbox Manager Assistant. The SMS Executive service may only be
	controlled by a single SMS site and only a single instance of the SMS Executive
	service may be present on a computer.
	
	The Site Component Manager component of the SMS site can install the SMS
	Executive service on a computer that has been selected to be a CAP, unless an
	existing instance of the SMS Executive service already exists from another site.
	
	WORKAROUND
	==========
	
	To work around this problem, do not enumerate any servers (that already exist as
	a site in another SMS site) as a CAP or secondary site in a SMS version 2.0
	site. To recover from an unsuccessful attempt to install a CAP or secondary site
	on a server which is a site in another SMS site, remove the computer from the
	server which has been incorrectly selected from the list of sites (for example,
	site BBB).
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbMMC kbServer kbsms200 kbsms200bug kbCAP kbsmsAdmin kbbuglist
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
