---
layout: page
title: "Q222109: Using Persistent Verification, Blank Password Not Sent To Host"
permalink: /kb/222/Q222109/
---

## Q222109: Using Persistent Verification, Blank Password Not Sent To Host

{% raw %}

	Article: Q222109
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna300sp4fix kbsna400sp3fix
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the host indicates support for persistent verification in the LU6.2 BIND
	command, and an APPC or CPIC application attempts to allocate a conversation
	with the password set to spaces (blank), no security vectors are sent in the
	FMH-5 attach request. This could cause the host to reject the FMH-5 attach
	request with the following sense code:
	
	  080F6051 = Access Security Information Invalid
	
	Note that this sense code is normal if an invalid user ID or password is provided
	to the host. However, in this special case (where persistent verification is
	being used), the SNA Server APPC DLL (Wappc32.dll) fails to send any security
	information to the host (for example, the user ID or password).
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 4.0.
	This problem was first corrected in SNA Server version 3.0 Service Pack 4 and
	SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp4fix kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
