---
layout: page
title: "Q171968: 3270 Applet May Stop Responding if Host Sends a Long Message"
permalink: kb/171/Q171968/
---

## Q171968: 3270 Applet May Stop Responding if Host Sends a Long Message

	Article: Q171968
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During Host file transfer, if the Host sends out an unsolicited 3270 display
	message that is longer than 144 characters, the 3270 applet displays an empty
	dialog box. Because the dialog box does not contain OK or Cancel buttons, the
	user must terminate the 3270 applet to close the dialog box.
	
	CAUSE
	=====
	
	The 3270 applet does not format the message correctly if the Host sends out more
	than 144 characters.
	
	RESOLUTION
	==========
	
	A hotfix to SNA Server for Windows NT, version 3.0 (post Service Pack 1) is
	available to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
