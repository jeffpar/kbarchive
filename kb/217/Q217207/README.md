---
layout: page
title: "Q217207: Type of Service Octet in IP Header Not Initialized on Alpha"
permalink: kb/217/Q217207/
---

## Q217207: Type of Service Octet in IP Header Not Initialized on Alpha

	Article: Q217207
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp5fix
	Last Modified: 04-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Type of Service (TOS) octet is not initialized to zero for Windows NT 4.0
	Service Pack 4 and later builds on the Alpha and x86 platforms. This results in
	a random value for the Precedence field in the TOS octet. Some third-party
	vendor's TCP/IP stacks may require that the Precedence field be set to zero, and
	they will send a reset to any host that does not meet this requirement, thus
	causing sessions between Windows NT and such hosts to fail unless the Precedence
	field happens to get randomly initialized to zero on Windows NT.
	
	RESOLUTION
	==========
	
	To work around this problem, statically start the TOS octet by setting the
	DefaultTOS value in the registry to some non-zero value. For additional
	information about how to modify the DefaultTOS value, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  Q120642 TCP/IP and NBT Configuration Parameters for Windows 2000 or Windows
	  NT
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Window NT 4.0. This problem was
	first corrected in Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	IBM mainframe hosts are IP hosts that are known to have this problem. The IP
	stack configuration on IBM mainframes can be configured to accept nonzero values
	in the Precedence field. Please see your IBM operating system documentation for
	information on how to make the necessary changes.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	REFERENCES
	==========
	
	Additional information is available in the following RFCs:
	
	- RFC 791, Internet Protocol -- DARPA Internet Program Protocol Specification
	
	- RFC 1349, Type of Service in the Internet Protocol Suite
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : :4.0 SP4
	Issue type        : kbbug
	
	=============================================================================
	
