---
layout: page
title: "Q121737: TCP/IP Printing Supports Only Berkeley Style Daemons (RFC1179)"
permalink: kb/121/Q121737/
---

## Q121737: TCP/IP Printing Supports Only Berkeley Style Daemons (RFC1179)

	Article: Q121737
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.50
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	Windows NT TCP/IP Printing Services are based on the standard defined in
	RFC1179, which contains the communication specification for line printer
	remote (LPR) and line printer daemon (LPD) printing and is based on TCP/IP
	printing with Berkeley versions of Unix. The Line Printer Daemon and its
	components in RFC1179 are known as Berkeley Style Daemons (BSD). Some
	versions of Unix only support System V TCP/IP printing, which is not
	compatible with BSD RFC1179 TCP/IP printing.
	
	In order for Windows NT to be able to print to a Unix server, the Unix
	server must support Berkeley style TCP/IP printing daemons (some Unix
	versions are configurable). The same is also true for Unix clients printing
	to a Windows NT LPD server, the Unix client must support the Berkeley style
	LPR daemon.
	
	
	Reference(s):
	
	For more information on LPR and LPD, see RFC1179. RFCs may be obtained from
	the Internet as follows:
	
	Paper copies of all RFCs are available from the NIC, either individually or
	on a subscription basis (for more information contact NIC@NIC.DDN.MIL).
	Online copies are available from FTP or Kermit from NIC.DDN.MIL as
	RFC/RFC####.TXT or RFC/RFC####.PS (where #### is the RFC number without
	leading zeroes).
	
	
	
	Additional query words: adapter hp ux lpr lpd bsd
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : WinNT:3.50
	
	=============================================================================
	
