---
layout: page
title: "Q171381: Windows 95 Domain Password Change Doesn't Change Local Password"
permalink: /kb/171/Q171381/
---

## Q171381: Windows 95 Domain Password Change Doesn't Change Local Password

{% raw %}

	Article: Q171381
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Windows 95 system password expires, and you change the password using the
	SNA Server Windows 95 client, the password only changes through the SNA Server
	computer. The next logon attempt will fail because the local system password
	remains the same as the old one.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 Service
	Pack 1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the SNA Server Windows 95 client changes passwords by
	using the Windows 95 password change function instead of relying on the SNA
	Server computer. SNA Server Windows 95 client will automatically start the
	connection with the system password.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
