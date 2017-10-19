---
layout: page
title: "Q162512: WINSLI Applications Dont Show User Computer in SNA Admin"
permalink: /kb/162/Q162512/
---

## Q162512: WINSLI Applications Dont Show User Computer in SNA Admin

	Article: Q162512
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use
	
	- a 32-bit winsli application
	
	  or
	
	- a 16-bit WINSLI or WINRUI application against the thunking interface on
	  Windows NT,
	
	the User and Computer fields in SNA Server Administrator or Manager for that
	session will display incorrectly. They are displayed as follows:
	
	  User        Computer
	  ====================
	  Unknown     n/a
	
	When using a 32-bit winrui application, the correct User and Computer fields will
	be displayed.
	
	CAUSE
	=====
	
	The application type was not set correctly for SLI applications. This fix also
	includes a small fix to the Wrui3270 (win3x) sample emulator included in the SNA
	Server Software Developer Kit (SDK).
	
	RESOLUTION
	==========
	
	The application type is now set correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	Service Pack 1 (SP1), and 3.0.
	
	
	A supported fix is now available for SNA Server versions 2.11 SP1 and 3.0, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. Unless you are severely impacted by this
	specific problem, Microsoft recommends that you wait for the next Service Pack
	that contains this fix. Contact Microsoft Technical Support for more
	information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
