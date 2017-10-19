---
layout: page
title: "Q245429: Win5250 Problem Exiting AS/400 Screen With Function Key"
permalink: /kb/245/Q245429/
---

## Q245429: Win5250 Problem Exiting AS/400 Screen With Function Key

	Article: Q245429
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an AS/400 application screen contains an input field that requires certain
	values, the Win5250 applet prevents the user from exiting the screen using a
	function key unless a valid value is entered in the field.
	
	This problem can be observed by attempting to exit the AS/400 change password
	screen without updating the user password:
	
	1. Logon to the AS/400.
	
	2. Select 1 "User Tasks".
	
	3. Select 8 "Change Password".
	
	4. At this screen, it's not possible to choose F3 or F12 to cancel.
	
	In this case, the 5250 applet is requiring a valid user input for a new password
	and fails to send the function key.
	
	CAUSE
	=====
	
	The 5250 applet was incorrectly processing the input field(s) prior to the
	handling of function keys.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 3.0
	(including SP1-SP4) and 4.0 (including SP1-SP3).
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
