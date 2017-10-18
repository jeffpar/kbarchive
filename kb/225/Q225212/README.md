---
layout: page
title: "Q225212: Err Msg: STOP 0x0000000a Caused by Tcpip.sys on SP4 Computer"
permalink: kb/225/Q225212/
---

## Q225212: Err Msg: STOP 0x0000000a Caused by Tcpip.sys on SP4 Computer

	Article: Q225212
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fixkbfixlist
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer running Windows NT 4.0 Service Pack 4 may stop responding (hang)
	and display the following STOP error message on a blue screen:
	
	  STOP 0x0000000a (0x00000006, 0x00000002, 0x00000000, 0xf1e63c2e)
	  IRQL_NOT_LESS_OR_EQUAL
	
	NOTE: The fourth parameter may be different depending on your computer's
	configuration.
	
	CAUSE
	=====
	
	This problem occurs because TCP is sending 1 byte more than AFD is sending,
	which causes the error message to be displayed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
