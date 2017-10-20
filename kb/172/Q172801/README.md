---
layout: page
title: "Q172801: TN3270 Client Session Lost Using PF Keys to Toggle Screens"
permalink: /kb/172/Q172801/
---

## Q172801: TN3270 Client Session Lost Using PF Keys to Toggle Screens

{% raw %}

	Article: Q172801
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you rapidly press the PF2 and PF12 keys to toggle between host screens from
	a TN3270 client, the client's session is lost and the following error message is
	displayed:
	
	  TN3270E Service Error 505
	  SNA API verb READ failed. Failure described as:
	
	  RUI read verb has completed with primary rc of Negative Response and
	  secondary rc of OK
	
	Within an SNA Server TN3270 internal trace, the RUI_READ request is failing with
	primary_rc = 0018 (LUA_NEGATIVE_RESPONSE), followed by the TN3270 server calling
	RUI_TERM to terminate the session.
	
	CAUSE
	=====
	
	Quick toggling of the PF keys causes a race condition, which results in TN3270
	Service receiving LUA_NEGATIVE_RESPONSE error from an RUI function call. The
	TN3270 server treats this error as a fatal condition, causing the TN3270 Server
	to close the session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	Service Pack 1 (SP1), and 2.11 SP2. A supported fix is now available, but has
	not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. Unless you are severely impacted by this
	specific problem, Microsoft recommends that you wait for the next Service Pack
	that contains this fix. Contact Microsoft Technical Support for more
	information.
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the TN3270 Server treats this error as a non-fatal
	condition and keeps the session active.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
