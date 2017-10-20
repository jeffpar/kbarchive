---
layout: page
title: "Q124293: HP JetDirect Firmware Versions and Windows NT Protocol Support"
permalink: /kb/124/Q124293/
---

## Q124293: HP JetDirect Firmware Versions and Windows NT Protocol Support

{% raw %}

	Article: Q124293
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	Windows NT can print to most Hewlett-Packard (HP) JetDirect network printer
	cards using either the data link control (DLC) protocol or the TCP/IP
	protocol using Line Printer Remote (LPR)/Line Printer Daemon (LPD).
	However, not all JetDirect cards support all protocols. The firmware
	revision of a JetDirect card determines its ability to work with Windows NT
	network printing protocols.
	
	The following list outlines the Windows NT protocols and capabilities
	supported by the different HP JetDirect firmware revisions.
	
	Version         Description
	--------        -----------------------------------------------------------
	
	A.03.03         Fully supports LPD for TCP/IP printing and DLC with
	or later        automatic protocol switching in any HP printer that
	               supports the card.
	
	
	A.03.00 -       Fully supports DLC with protocol switching in any HP
	 A.03.02       printer that supports the card. This firmware
	               revision does not support LPD. Therefore, even though it
	               does support TCP/IP, it does not work with the Windows NT
	               LPR TCP/IP printing client.
	
	A.02.0x         Supports DLC, but can only use protocol switching on
	               an HP 4Si. If you are using another printer, the other
	               protocols must be disabled for Windows NT DLC to work
	               properly. This firmware revision does not support LPD.
	               Therefore, even though it does support TCP/IP, it will not
	               work with Windows NT's LPR TCP/IP printing client.
	
	A.01.0x         Supports DLC, but all other protocols must be disabled.
	               There is no protocol switching support with this firmware
	               revision on any HP printer.
	
	
	A.00.0x         No DLC support, will not work with Windows NT.
	
	The firmware revision of an HP JetDirect card can normally be found by
	printing the printer self-test page on a printer with the card installed.
	The revision number is preceded by:
	
	  FIRMWARE REVISION:
	
	For additional information, contact Hewlett-Packard Technical Support at
	(208) 323-2551.
	
	The HP JetDirect network printer card is manufactured by Hewlett-Packard
	Company, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this products' performance or reliability.
	
	Additional query words: prodnt tcpip
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
