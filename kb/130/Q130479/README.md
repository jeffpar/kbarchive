---
layout: page
title: "Q130479: FTP OnNet PPP Connection to Windows NT 3.5 RAS Server Fails"
permalink: kb/130/Q130479/
---

## Q130479: FTP OnNet PPP Connection to Windows NT 3.5 RAS Server Fails

	Article: Q130479
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run FTP OnNet 1.1 under Windows for Workgroups 3.11 as a dial-in PPP
	client and connect to a Windows NT 3.5 Remote Access Service (RAS) server, the
	connection fails during the PPP negotiation phase.
	
	RESOLUTION
	==========
	
	To correct this problem, enable the Password Authentication Protocol (PAP) and
	Challenge-Handshake Authentication Protocol (CHAP) on the PPP client. To do
	this, edit the AUTOEXEC.BAT file on the client computer and add the following:
	
	  ppp16550 -K
	
	NOTE: The letter K must be in uppercase. The FTP OnNet PPP client software uses
	PPP16550 to enable the PPP client functionality.
	
	OnNet is manufactured by FTP, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: wfw wfwg prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	
