---
layout: page
title: "Q276036: SNA Server Retrieves Incorrect Net Name from XID"
permalink: /kb/276/Q276036/
---

## Q276036: SNA Server Retrieves Incorrect Net Name from XID

{% raw %}

	Article: Q276036
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, SNA Server needs to retrieve the Network Name from
	the XID frames (sent at connection activation), in order to build a Remote
	Advanced Program-to-Program Communications (APPC) Logical Unit (LU) Definition
	when the Supports Dynamic Remote APPC LU Definition feature is enabled in host
	connection properties.
	
	SNA Server may use an incorrect value as the Network Name, which causes BIND
	requests to be rejected by the Host with an UNBIND (Cleanup).
	
	CAUSE
	=====
	
	SNA Server specifically checks for the first occurrence of a "0E" vector and
	assumes that it is the CPName field ("F4" subvector). A XID frame can include
	several "Network Name" Control Vectors (code 0x0E); the first one usually starts
	at position 0x1D in the frame. For each control vector 0x0E, byte 2 indicates
	the "Network name type;" 0xF1 = PU Name, 0xF4 = CP Name, and 0xF7 = local ALS
	name.
	
	SNA Server assumes that the first 0x0E control vector is the CP name, type 0xF4.
	When this is not the case, SNA Server uses an incorrect value as the Network
	Name.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: Snaservr
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
