---
layout: page
title: "Q165912: 3270 Applet Resets Session and Returns to Host Signon Screen"
permalink: kb/165/Q165912/
---

## Q165912: 3270 Applet Resets Session and Returns to Host Signon Screen

	Article: Q165912
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After connecting to a specific host application, the 3270 applet resets the
	session and returns to the host logon screen. When this occurs, the 3270 applet
	reports sense code 0813 (Bracket Bid Reject), followed by sense code 1003
	(Function Not Supported).
	
	CAUSE
	=====
	
	The host sends data to the 3270 applet after the user has started typing. The
	applet correctly rejects the data with sense code 0813. The host continues to
	send after SNA Server has sent the negative response. instead of passing the
	second set of data up to the applet, SNA Server converts it into an exception
	response (EXR) message with the sense code 2003 (Bracket Error).
	
	The applet should be responding with the same sense code (0813), however, the
	applet is incorrectly treating the EXR message as a normal request, causing the
	applet to incorrectly respond with sense code 1003. This causes the session to
	end.
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available to correct this problem. To resolve
	this problem, obtain the hotfix mentioned below.
	
	
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
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
