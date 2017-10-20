---
layout: page
title: "Q186407: SMS: Access Violation When RAW Files Are Larger Than 48 KB"
permalink: /kb/186/Q186407/
---

## Q186407: SMS: Access Violation When RAW Files Are Larger Than 48 KB

{% raw %}

	Article: Q186407
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	RAWCHECK generates one of the following errors when it processes a .raw file
	with a NOIDMIF section whose length is greater than 48 KB.
	
	In regular mode:
	
	  Error 998 - 'Invalid Access to Memory Location'
	
	In verbose mode:
	
	  Error 998 - an 'Access Violation'
	
	CAUSE
	=====
	
	The tempbuf variable in RAWCHECK is statically allocated at 48 KB. If the
	NOIDMIF section in the RAW file is greater than 48 KB, it is too large for
	RAWCHECK to process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
