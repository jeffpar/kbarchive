---
layout: page
title: "Q195999: &#91;MC_&#93;ALLOCATE Contention Winner Request Never Completes"
permalink: /kb/195/Q195999/
---

## Q195999: &#91;MC_&#93;ALLOCATE Contention Winner Request Never Completes

{% raw %}

	Article: Q195999
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an Advanced Program-to-Program Communications (APPC) or Common Programming
	Interface for Communications (CPIC) application attempts to allocate a
	contention winner session (by setting rtn_ctl = AP_WHEN_CONWINNER_ALLOCATED),
	the [MC_]ALLOCATE or CMALLC request never completes. When SNA Server fails to
	negotiate any contention winner sessions with the remote system, the server
	fails to reject the client allocation request.
	
	This problem was found while testing the COM Transaction Integrator (COMTI)
	feature included with SNA Server 4.0 while the SNA Server APPC mode "minimum
	contention winner limit" was set to 0. COMTI allocates contention winner
	sessions, so this mode configuration will not function properly.
	
	CAUSE
	=====
	
	The SNA Server was failing to return an error to a client contention winner
	request when SNA Server had not negotiated any contention winner sessions with
	the remote system.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft SNA
	Server version 3.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	     File Name        Date       Time
	     ----------------------------------
	     Snaservr.exe
	     Trcservr.exe
	
	NOTE: The Date and Time information for the above files will be provided in this
	article as soon as it becomes available.
	
	NOTE: Due to file dependencies, the most recent fix that contains the above files
	may also contain additional files.
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	Configure SNA Server's APPC mode definition so that the minimum contention
	winner limit is greater than 0. This is required in order for APPC or CPIC
	applications to successfully allocate contention winner sessions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft SNA Server
	versions listed above.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
