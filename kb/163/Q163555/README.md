---
layout: page
title: "Q163555: Admin Displays LU as Available When It Really Is Not"
permalink: /kb/163/Q163555/
---

## Q163555: Admin Displays LU as Available When It Really Is Not

{% raw %}

	Article: Q163555
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a user closes an emulator session, the SNA Server Admin shows the logical
	unit (LU) to be "Available" when it should show "SSCP" (in use).
	
	CAUSE
	=====
	
	When the emulator unbinds the LU-LU session, SNA Server solicits an UNBIND from
	the host. The host can send an UNBIND (Bind Forthcoming - Byte1 of BIND = '02'),
	promising that it will send a BIND in the future. SNA Server responds positively
	to this, and waits for the BIND. However, the host never sends a BIND as it had
	promised, so SNA Server marks this LU as on- hold so that no unaccredited user
	can gain control of the LU in this window of time. The status of the LU in the
	SNA Server Admin is SSCP. This is normal.
	
	However, if the emulator then terminates the SSCP-LU session by issuing a Close
	SSCP request, SNA Server Admin then displays the LU as Available and never sends
	a NOTIFY SLU disabled telling the host to disable the LU. The user then
	considers the LU to be Available for use, when in fact it is not, because SNA
	Server is still waiting for the BIND.
	
	This problem is considered a host bug because it does not send the BIND after
	promising to do so. However, SNA Server should handle this special case.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. In the hotfix, SNA
	Server sends a NOTIFY SLU disabled, and displays SSCP in the SNA Server Admin in
	this special condition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.11 and 2.11 Service Pack 1.
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: sp1 prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
