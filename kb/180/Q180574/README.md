---
layout: page
title: "Q180574: Client Fails if WNAP Started Using /User: and /Pwd: Options"
permalink: /kb/180/Q180574/
---

## Q180574: Client Fails if WNAP Started Using /User: and /Pwd: Options

	Article: Q180574
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows 3.x SNA Server client fails to get an application session if you start
	Wnap.exe with /User: /Pwd: specified on the command line. When this occurs while
	you are using the 3270 Applet included with SNA Server, the following message is
	displayed on the 3270 Applet status bar:
	
	  No SNA Server Found in Domain.
	
	CAUSE
	=====
	
	The Windows 3.x client is not storing the password specified in the /Pwd:
	command line parameter for use after WNAP initializes. Because the password is
	not available when the application session starts, the user account cannot be
	validated by SNA Server. This prevents the application session from opening.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Start Wnap.exe without using the /User and /Pwd: options.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 Service
	Pack 1 (SP1) and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Please refer to the following Microsoft Knowledge Base article for another known
	issue when using the /User: and /Pwd: parameters with Wnap.exe:
	
	  Q171255 WNAP /User: and /Pwd: Parameters Fail In SNA Server 3.0
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
