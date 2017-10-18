---
layout: page
title: "Q152605: RAS Error 720 When Dialing Out"
permalink: kb/152/Q152605/
---

## Q152605: RAS Error 720 When Dialing Out

	Article: Q152605
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to dial out using Remote Access Service (RAS) or Dial-Up Networking
	(DUN), the following error message may appear:
	
	  Cannot connect the phonebook entry. Error 720: No PPP control protocols
	  configured.
	
	You may also receive one of the following errors when you try to add a protocol
	to a phonebook entry:
	
	  The <Protocol Name> protocol cannot be selected because it is not
	  installed or is disabled for Remote Access. To change this, start the Control
	  Panel Network applet, choose Configure Remote Access, and press the Network
	  button.
	
	  -or-
	
	  The <Protocol Name> protocol cannot be selected because it is not
	  installed or is disabled for Remote Access. To change, in Control Panel start
	  Network, choose Services page, Remote Access Properties, and press the
	  Network button.
	
	CAUSE
	=====
	
	This problem can occur if RAS is configured to receive calls only. To use RAS or
	DUN to dial out, RAS must be configured to either dial out only or dial out and
	receive calls.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the appropriate method below:
	
	Windows NT versions 3.1, 3.5, and 3.51
	--------------------------------------
	
	1. Double-click the Control Panel icon in the Main group, and then double-click
	  the Network icon.
	
	2. Under Installed Network Software, click Remote Access Service, click
	  Configure, and then click Configure again.
	
	3. Under Port Usage, click either Dial Out Only or Dial Out And Receive Calls.
	
	4. Click OK, click Continue, click OK, and then click Restart Now to restart
	  your computer when you are prompted.
	
	Windows NT version 4.0
	----------------------
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. On the Services tab, click Remote Access Service, and then click Properties.
	
	3. Click Configure, and then click either Dial Out Only or Dial Out And Receive
	  Calls.
	
	4. Click OK, click Continue, click Close, and then click Yes to restart your
	  computer when you are prompted.
	
	MORE INFORMATION
	================
	
	For more information on RAS Error 720, please see the following articles in the
	Microsoft Knowledge base:
	
	Q123298 RAS Errors 611 and 720 With PPP or SLIP
	
	Q122748 Err Msg: Error 720: No PPP Control Protocols Configured
	
	Additional query words: prodnt 3.10 netbeui tcp/ip ipx
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5,3.51,4.0
	
	=============================================================================
	
