---
layout: page
title: "Q162618: Trap in Snalink.exe( _bm_rel@04 ) with DCA ISCA X.25 Adapter"
permalink: /kb/162/Q162618/
---

## Q162618: Trap in Snalink.exe( _bm_rel@04 ) with DCA ISCA X.25 Adapter

{% raw %}

	Article: Q162618
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you run SNA Server version 2.11 Service Pack 1 (SP1) on Windows NT 3.5
	(without any Windows NT service packs), you may experience a trap in Snalink.exe
	(in function _bm_rel@04) when using a DCA ISCA X.25 adapter.
	
	The problem may be encountered if a TP fails to start because it hits a time out
	condition while waiting for a response from the network. If the administrator
	then shuts down the computer running SNA Server in an attempt to reinitialize
	the system, SNA Server may return Event ID 624, indicating that a software
	component has trapped.
	
	CAUSE
	=====
	
	The X25 link service was trapping on termination because the code was attempting
	to free a buffer twice.
	
	
	RESOLUTION
	==========
	
	Apply the fix referenced below. The updated module is Ibmx25.dll.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 Service
	Pack 1 (SP1).
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. The fix is
	already included in SNA 3.0. Unless you are severely impacted by this specific
	problem, Microsoft recommends that you wait for the next Service Pack that
	contains this fix. Contact Microsoft Technical Support for more information.
	
	
	Additional query words: prodsna SNALINK.EXE _bm_rel@04 DCA ISCA
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1
	
	=============================================================================
	

{% endraw %}
