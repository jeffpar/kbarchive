---
layout: page
title: "Q185716: Snalink.exe May Trap If the SNA Server Service Is Autostarted"
permalink: /kb/185/Q185716/
---

## Q185716: Snalink.exe May Trap If the SNA Server Service Is Autostarted

{% raw %}

	Article: Q185716
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application exception in Snalink.exe in function strncmp() may be generated
	when restarting an SNA Server system that has the SNA Server service
	(Snaservr.exe) configured for Automatic startup (in Control Panel, double-click
	the Services icon). When this occurs, a Dr. Watson error log may be generated
	that indicates an application exception occurred in Snalink.dbg. In addition,
	the SNA Server computer may log a message similar to the following in the
	Windows NT application event log:
	
	  Event ID: 624
	  Source: <Link service name>
	  Creating dump file <snaroot>\traces\snadump.log for SNALINK.EXE
	
	CAUSE
	=====
	
	The problem occurs because Snalink.exe was making a call to the DMOD resource
	locating code, but DMOD had not been initialized.
	
	WORKAROUND
	==========
	
	To prevent the error from occurring, configure the SNA Server Service to be
	started manually.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The resource locating code now verifies that DMOD has been initialized
	successfully before trying to access the shared memory.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
