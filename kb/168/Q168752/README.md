---
layout: page
title: "Q168752: SNA Windows 95 3.0 SP1 3270 Applet Print Option Doesn't Print"
permalink: /kb/168/Q168752/
---

## Q168752: SNA Windows 95 3.0 SP1 3270 Applet Print Option Doesn't Print

	Article: Q168752
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server Windows 95 client, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The 3270 applet included with the SNA Server Windows 95 client version 3.0
	Service Pack 1 does not correctly perform a print screen when you click Print on
	the File menu. This only occurs when the client is installed on Windows 95
	systems. If the SNA Server 3.0 Service Pack 1 Windows 95 client is installed on
	a Windows NT system, the print screen function prints correctly.
	
	The print output is a blank page or a page containing part of the data contained
	on the 3270 screen.
	
	CAUSE
	=====
	
	The StartPage printer API resets some of the printer settings in Windows 95,
	which causes the print screen to fail.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Use the 3270 applet included with the SNA Server Windows 95 client version
	  3.0 (without SP1).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows 95 SNA Server client
	version 3.0 Service Pack 1. This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300Win95SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
