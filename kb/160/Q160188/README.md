---
layout: page
title: "Q160188: Misleading Error 692 with RAS if HyperTerminal Owns COM Port"
permalink: /kb/160/Q160188/
---

## Q160188: Misleading Error 692 with RAS if HyperTerminal Owns COM Port

	Article: Q160188
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you invoke a Dial-Up Networking connection on a COM port that HyperTerminal
	already has open, or if you try to open a HyperTerminal session by dialing
	through a port already in use by Dial-Up Networking in Windows NT 4.0, you get
	uninformative and misleading error messages.
	
	
	If HyperTerminal already opened an active session on a serial (COM) port and you
	attempt to open a Dial-Up Networking (DUN) session on the same port, you get the
	following error message in the Windows NT 4.0 graphical interface (GUI):
	
	  Error 692: Hardware failure in port or attached device.
	
	If Dial-Up Networking has already opened an active communications session on a
	given COM port, when you attempt to open a HyperTerminal session on that same
	port you will simply see the word(s):
	
	Disconnected
	
	-or-
	
	No Dialtone
	
	in the HyperTerminal interface.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q126437
	  TITLE : Using Communications Applications When RAS Server is Running.
	
	  ARTICLE-ID: Q122839
	  TITLE : Err Msg: Error 692: Hardware Failure in Port or Attached...
	
	Additional query words: inactive dropped stop bogus
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
