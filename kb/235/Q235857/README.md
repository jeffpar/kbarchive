---
layout: page
title: "Q235857: The First TN3270 Client on an OnDemand Connection Fails"
permalink: /kb/235/Q235857/
---

## Q235857: The First TN3270 Client on an OnDemand Connection Fails

{% raw %}

	Article: Q235857
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna400sp2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you apply SNA Server 4.0 Service Pack 2 (SP2), TN3270 users may experience
	one of the following problems:
	
	- The first TN3270 client that connects to an OnDemand connection fails. The
	  connection is brought up, but the client remains in a not responding state,
	  and the LU shows in SSCP state. This only affects the first client; all
	  subsequent clients connect successfully. If the connection is set to Server
	  Startup, everything works fine.
	
	- If the host uses DDDLUs, TN3270 clients may display the following error
	  message when they start a host session through the SNA Server TN3270 server:
	
	  TN3270E Service Message 525
	
	  The PU is active for LU <LU name>.
	
	  You may continue to wait, or terminate your session.
	
	  After the error message appears, the user may be able to obtain a host session
	  by disconnecting and then reconnecting the session from within the TN3270
	  emulator.
	
	  For additional information about SNA Server's DDDLU support for 3270 and LUA
	  LUs, please see the following articles in the Microsoft Knowledge Base:
	
	  Q161492 LU Session Activation Using Dynamically Defined Dependent LUs
	
	  Q164592 Dynamically Defined Dependent LU Support for LUA LUs
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	service pack 2. This problem was first corrected in SNA Server version 4.0
	Service Pack 3.
	
	Additional query words: snatn3270
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
