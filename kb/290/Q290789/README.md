---
layout: page
title: "Q290789: SMS: Dr. Watson Error in Wbemsdk.exe"
permalink: /kb/290/Q290789/
---

## Q290789: SMS: Dr. Watson Error in Wbemsdk.exe

{% raw %}

	Article: Q290789
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200bug kbWEBM kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Wbemsdk.exe may not work correctly and a Dr. Watson log (Drwtsn32.log) file may
	be produced. The log refers to the Wbemupgd.dll file; the exception is access
	violation 0xC0000005.
	
	
	This problem occurs in non-U.S. versions of Microsoft Windows NT if the name
	Administrators and Everyone exist either as users or groups.
	
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
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200bug kbWEBM kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
