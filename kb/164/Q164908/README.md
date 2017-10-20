---
layout: page
title: "Q164908: Removing Host Security Causes Error &quot;Snarpc.dll Not Found&quot;"
permalink: /kb/164/Q164908/
---

## Q164908: Removing Host Security Causes Error &quot;Snarpc.dll Not Found&quot;

{% raw %}

	Article: Q164908
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you remove the Host Security Integration service (by using the SNA Server
	Setup program), the SNA Server service fails to start, and you receive the
	following error message:
	
	  SNARPC.DLL Not Found
	
	CAUSE
	=====
	
	The Host Security Integration service removal program causes the Snarpc.dll file
	to be removed. This file is used by other SNA Server services that fail to start
	if the file is not found.
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available to correct this problem. The updated
	module is:
	
	  <Snaroot>\Snafile.stf
	
	Snafile.stf is a script file that is used by the SNA Server Setup program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
