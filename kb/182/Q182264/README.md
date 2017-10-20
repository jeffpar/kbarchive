---
layout: page
title: "Q182264: 5250 or 3270 Applet Will Hang When Started"
permalink: /kb/182/Q182264/
---

## Q182264: 5250 or 3270 Applet Will Hang When Started

{% raw %}

	Article: Q182264
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 5250 or 3270 applet will hang when started. The Windows NT Task Manager's
	Application tab will not show the applet; however, the Process tab will show it.
	
	CAUSE
	=====
	
	The applet is trying to add a font to the system using the following call:
	
	     ::SendMessage(HWND_BROADCAST, WM_FONTCHANGE, 0, 0L);
	
	For the font to be recognized, this call needs to be processed by all windows on
	the system, visible or not. The applet will continue to wait until a response is
	received from each window. If an application is too busy to respond, the applet
	will hang indefinitely.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest Microsoft SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, start the 3270 or 5250 applet before the non-
	responsive application becomes too busy.
	
	Note: This behavior was observed with a large SQL query.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 SP2 and
	SNA Server version 4.0 SP1. This problem was first corrected in SNA Server 3.0
	Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
