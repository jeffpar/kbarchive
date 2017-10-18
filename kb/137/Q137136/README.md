---
layout: page
title: "Q137136: RAS Not Saving Terminal &amp; Script Options for ISDN or X.25 Ports"
permalink: kb/137/Q137136/
---

## Q137136: RAS Not Saving Terminal &amp; Script Options for ISDN or X.25 Ports

	Article: Q137136
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Remote Access Terminal and script features do not work if you use them to
	call a remote access server with your ISDN card (for example, a Digiboard ISDN
	card) or your X.25 card (for example, an Eicon X.25 card). If you select one of
	these features for an item in your list of remote access servers in Remote
	Access, your Terminal or script selection is only saved until you quit Remote
	Access. When you restart Remote Access your Terminal or script selection is
	missing.
	
	NOTE: These features are available with X.25 modem dial-up, because you are using
	a serial port on your computer.
	
	
	WORKAROUND
	==========
	
	To work around this problem, call the remote access server by configuring the
	item on your list of remote access servers to use a serial port on your
	computer, that is, use a null-modem cable or an internal or external modem to
	call the remote access server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
