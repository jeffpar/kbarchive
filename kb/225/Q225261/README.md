---
layout: page
title: "Q225261: Error Line Number Returned By Snacfg.exe May Be Incorrect"
permalink: /kb/225/Q225261/
---

## Q225261: Error Line Number Returned By Snacfg.exe May Be Incorrect

{% raw %}

	Article: Q225261
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using the offline administrative tool Snacfg.exe to import a script file
	that contains more than 65,535 lines into a Com.cfg file, if an error occurs,
	the line number displayed may be incorrect.
	
	CAUSE
	=====
	
	The internal counter used by Snacfg.exe was defined as a short, limiting it to
	65,535. This has been changed to a long value, which will allow the counter
	value to be extended to 2,147,483,647.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0, 4.0SP1, 4.0SP2. This problem was first corrected in SNA Server version 4.0
	Service Pack 3.
	
	MORE INFORMATION
	================
	
	In addition to correcting the line number problem, a new /count parameter was
	added to Snacfg so that the number of objects in a Com.cfg file can be counted
	using the tool.
	
	
	Also, performance enhancements were done at this time to improve the performance
	of Snacfg.exe when parsing large configurations.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
