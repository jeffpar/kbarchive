---
layout: page
title: "Q264494: SMS: The SMS_EXECUTIVE Service Causes an Access Violation"
permalink: /kb/264/Q264494/
---

## Q264494: SMS: The SMS_EXECUTIVE Service Causes an Access Violation

{% raw %}

	Article: Q264494
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbenv kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start or stop the SMS_EXECUTIVE service or when you perform System
	Management Server (SMS) maintenance, a connection to a remote SQL database may
	become interrupted and produce an access violation, and you may receive a Dr.
	Watson error message.
	
	CAUSE
	=====
	
	This problem can occur if the value used to identify a SQL connection becomes
	null.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	
	  Date      Time     Version        Size  File name     Platform
	  --------------------------------------------------------------
	  06/07/00  8:57:33  2.0.1380.1164  80K   Offersum.dll  Intel
	  06/07/00  8:57:24  2.0.1380.1164  126K  Offersum.dll  Alpha
	
	NOTE: Because there are file dependencies, the most recent hotfix or feature that
	contains the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
