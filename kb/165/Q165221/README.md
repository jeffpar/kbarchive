---
layout: page
title: "Q165221: 3270 Applet Displays a Message if Preferred LU Not Available"
permalink: /kb/165/Q165221/
---

## Q165221: 3270 Applet Displays a Message if Preferred LU Not Available

{% raw %}

	Article: Q165221
	Product(s): Microsoft SNA Server
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the last used LU or LU Pool is no longer available, the 3270 applet
	displays a message stating that the preferred LU is not available, and that
	another LU will be used.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	The problem has been corrected by eliminating the message when the last used LU
	or LU Pool is no longer available. The SNA Server clients for Windows 95,
	Windows NT and Windows 3.x have been updated to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300NT
	Version           : winnt:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
