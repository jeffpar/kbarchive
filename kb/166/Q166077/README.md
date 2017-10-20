---
layout: page
title: "Q166077: 3270 Applet Fails to Find SNA Server After Changing Password"
permalink: /kb/166/Q166077/
---

## Q166077: 3270 Applet Fails to Find SNA Server After Changing Password

{% raw %}

	Article: Q166077
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following scenario will inhibit the SNA Server client from discovering a
	Microsoft SNA Server:
	
	1. In User Manager, click to select "The user must change password on next
	  logon" option for UserX.
	
	2. Start the 3270 Applet on a Windows 3.x client.
	
	3. You receive a dialog box asking for Windows NT logon credentials for UserX.
	
	4. The Change Password dialog box appears.
	
	5. The client/server interface connects to an SNA Server successfully.
	
	6. Start the 3270 Applet, and select Connect.
	
	7. The message "No SNA Server can be found in the domain" appears in the status
	  bar.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem. To resolve this problem, obtain the
	hotfix mentioned below.
	
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
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
