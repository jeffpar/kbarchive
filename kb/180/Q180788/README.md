---
layout: page
title: "Q180788: Changing User Rights Not Recognized Until Snabase is Restarted"
permalink: /kb/180/Q180788/
---

## Q180788: Changing User Rights Not Recognized Until Snabase is Restarted

{% raw %}

	Article: Q180788
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you move a user from one Windows NT group to another, SNA Server does not
	recognize the change made to the user's group until the SNABase service is
	stopped and restarted. This can cause unexpected user connectivity problems if
	access to SNA Server 3270 or APPC resources are controlled through membership
	within Windows NT user groups.
	
	CAUSE
	=====
	
	SnaBase only maintains SID information for the specific User Account in its
	internal SID Cache within the SnaBase service. The SID Cache does not maintain
	SID information based on groups that users may belong to.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0. This problem was first corrected in SNA Server 3.0
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	The update corrects the problem by allowing the SID Cache to store either the
	User SID or the Group SID.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
