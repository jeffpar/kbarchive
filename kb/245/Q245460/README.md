---
layout: page
title: "Q245460: 5250 Numeric Keypad ENTER Key Produces Space Character"
permalink: /kb/245/Q245460/
---

## Q245460: 5250 Numeric Keypad ENTER Key Produces Space Character

	Article: Q245460
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pressing the ENTER key on the numeric keypad while using the 5250 applet
	generates a SPACE character instead of the desired ENTER.
	
	CAUSE
	=====
	
	The default keyboard mapping does not map the numeric ENTER key to the ENTER
	key; instead, it maps it to the SPACE key.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this problem, create a custom keyboard map by editing the
	5250.kbd file supplied with SNA Server. Add the following line to the file and
	save it as Keyboard.map in the same directory where the Win5250.exe program
	resides.
	
	  NumEnter: ENTER
	
	For additional information about creating a custom keyboard map, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q159453 SNA Server 3.0 5250 Applet Numeric Pad Function Keys Don't Work
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server, versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Clients may have multiple preferences for the functions numeric keypad keys
	perform. For example, they may want to map the numeric 9 key to function as a
	PageUp key or the numeric 3 key to function as a PageDn key. This and other
	limited functionality can be obtained by following the steps outlined in
	Q159453. However, the numeric keypad ENTER key generally has only one desired
	function, and the default keyboard map has been changed to reflect this.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
