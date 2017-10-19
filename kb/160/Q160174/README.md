---
layout: page
title: "Q160174: DOCERR: Steps to Make PPTP Connection Incomplete in WNTRK 4.0"
permalink: /kb/160/Q160174/
---

## Q160174: DOCERR: Steps to Make PPTP Connection Incomplete in WNTRK 4.0

	Article: Q160174
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0; :
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- MSPRESS Microsoft Windows NT Resource Kit 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Page 336 of the Windows NT Server Networking Guide for Windows NT version 4.0
	does not completely document the process of making a PPTP connection to an
	Internet Service Provider (ISP) in the section titled "Secure Access to
	Corporate Networks over the Internet" that begins on page 335.
	
	On page 336 the text states:
	
	  The client first makes a call to the ISP. After that connection is
	  established, the client makes another call to the RAS server located anywhere
	  on the Internet or the ISP and that establishes the PPTP tunnel.
	
	This section fails to explain that in order to make the second call to complete a
	PPTP connection, you must make special changes to the Phonebook entry in the
	Dial-Up Networking connectoid.
	
	RESOLUTION
	==========
	
	First, rather than entering an actual phone number in the Phone number Dialog
	box, you must enter either the IP address or the name of the remote host.
	
	Also, you must ensure that the Dial using option for this connection specifies a
	RASPPTPM VPN port.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The end of this section also references the two diagrams in the section with the
	labels of Terra Flora and Seville. However, no such labels appear on the
	diagrams.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q154062
	  TITLE : How to Set Up a Windows NT PPTP Client
	
	Also, if you are a TechNet subscriber, see the PPTP white paper for more
	information.
	
	
	Additional query words: Point-to-Point Tunneling Protocol
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : winnt:4.0; :
	
	=============================================================================
	
