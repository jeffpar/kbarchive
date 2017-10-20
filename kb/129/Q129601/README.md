---
layout: page
title: "Q129601: Connection Fails on SNA Server with Two Token Ring NICs"
permalink: /kb/129/Q129601/
---

## Q129601: Connection Fails on SNA Server with Two Token Ring NICs

{% raw %}

	Article: Q129601
	Product(s): Microsoft SNA Server
	Version(s): 3.1; WINDOWS:2.0,2.1; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- the operating system: Microsoft Windows NT 3.5 
	- Microsoft SNA Server, versions 2.0, 2.1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an SNA Server has two token ring network interface cards (NIC) and multiple
	SNA Server link services and connections (PU's) defined over each NIC, one or
	more SNA Server connections may fail to activate when the connections are
	started, if the remote system is located across a source routing bridge.
	
	When an SNA Server connection is activated, SNA Server sends a TEST frame to the
	remote address, specifying the local network first. If no response is received,
	the TEST frame is resent with the "all routes" bit set. However, when this
	problem occurs, the second TEST frame (specifying the source routing bit) is
	never sent for a given connection.
	
	CAUSE
	=====
	
	This problem occurs when the Windows NT DLC protocol does not handle multiple
	token ring NICs properly.
	
	RESOLUTION
	==========
	
	To correct this problem in Windows NT Server version 3.5, apply the fix.
	
	To correct this problem in Windows NT Advanced Server version 3.1, upgrade to
	Windows NT Server version 3.5 and apply the fix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt 3.10 2.00 2.10 dlc sna prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbAudDeveloper kbOSWinSearch kbSNAServSearch kbOSWinNTSearch
	Version           : :3.1; WINDOWS:2.0,2.1; winnt:3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
