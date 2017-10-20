---
layout: page
title: "Q279868: Using Reserved Names as the Site Code in SMS 2.0"
permalink: /kb/279/Q279868/
---

## Q279868: Using Reserved Names as the Site Code in SMS 2.0

{% raw %}

	Article: Q279868
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 19-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Systems Management Server (SMS) 2.0, you can use the following
	names as your site code:
	
	  AUX
	  CON
	  NUL
	  PRN
	
	However, these names are reserved in Microsoft Windows NT; using them causes
	functionality problems in SMS 2.0. For example, you may not be able to set up
	SMS logon servers correctly because the site folder cannot be created properly.
	
	
	CAUSE
	=====
	
	Because AUX, CON, NUL, and PRN are reserved names in Windows NT, you cannot
	create folders with these names.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q120716 How to Remove Files with Reserved Names in Windows NT
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
