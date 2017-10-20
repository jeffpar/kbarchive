---
layout: page
title: "Q160774: SMS: MIFMAC Cannot Display Extended Characters in a List Field"
permalink: /kb/160/Q160774/
---

## Q160774: SMS: MIFMAC Cannot Display Extended Characters in a List Field

{% raw %}

	Article: Q160774
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbsmsUtil smsutilkbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you view a list field that contains extended international characters in
	the MIFMAC utility, the extended characters are replaced by box characters.
	
	CAUSE
	=====
	
	The MIFMAC utility does not correctly convert ANSI characters to the Macintosh
	character set.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. A supported fix is now available, but has not been
	fully regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	Additional query words: 1.00 1.10 1.20 prodsms noidmif macos mac
	
	======================================================================
	Keywords          : kbnetwork kbtool kbsmsUtil smsutil kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
