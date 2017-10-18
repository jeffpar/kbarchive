---
layout: page
title: "Q109555: Virtual Circuit Error 3193"
permalink: kb/109/Q109555/
---

## Q109555: Virtual Circuit Error 3193

	Article: Q109555
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	In a mixed Microsoft NT Advanced Server environment with LAN Manager 2.x
	and OS/2 1.3, where LAN Manager is the Backup Domain Controller to an
	Advanced Server Primary Domain Controller, the following error message
	appears in the error log of the Backup Domain Controller:
	
	  WORKSTATION         3193                11-30-93 08:59pm
	  NET3193:  A virtual circuit error occurred on the session to NTSERVER
	
	    The NCB command and return code is the data.
	      96 18
	
	This is caused by the Advanced Server parameter Autodisconnect. When an
	Advanced Server machine Autodisconnects a session, it sends an NBFP
	Session.End frame with the DATA2 flag (termination indicator) set to 0001
	(abnormal) rather than 0000 (normal).
	
	This problem does not occur on LAN Manager OS/2 Primary Domain Controllers.
	The LAN Manager OS/2 Primary Domain Controller sends a Session.End frame
	with DATA2 set to 0000.
	
	
	This Session.End frame is transmitted as a result of a HANG.UP command, a
	SEND command that timed out, or some abnormal condition.
	
	DATA2 contains the Termination indicator. This two-byte field is used to
	indicate the type of termination, where X'0000' indicates a normal session
	end (as a result of a HANG.UP command) and X'0001' indicates an abnormal
	session end (typically a SEND command has timed out).
	
	The following is an example of an Autodisconnect from an Advanced Server
	machine disconnecting a session created on the OS/2 BDC.
	
	Frame   Time          MAC Source    MAC Dest Protocol Description
	58      321.045       LCSCOTTSU3    FATMON   NETBIOS  Session End (0x18)
	
	+ ETHERNET: 802.3 Length = 60
	+ LLC: C I-FRAME N(S) = 0x04, N(R) = 0x0E POLL
	 NETBIOS: Session End (0x18)
	
	     NETBIOS: Length = 14 (0x000E)
	     NETBIOS: Signature = 0xEFFF
	     NETBIOS: Command = Session End (0x18)
	     NETBIOS: Data2 = 0x0001 (abnormal<<<This is the Termination
	     Indicator.
	     NETBIOS: Destination Number = 0x21
	     NETBIOS: Source Number = 0x03
	     NETBIOS: NetBIOS Data: Number of data bytes remaining = 28 (0x001C)
	
	00000:  00 DD 01 0F C3 C8 00 DD 01 0F C2 DA 00 12 F0 F0   ................
	00010:  08 1D 0E 00 FF EF 18 00 01 00 00 00 00 00 21 03   ..............!.
	00020:  53 52 56 30 31 20 20 20 20 20 20 20 00 4C 43 53   SRV01       .LCS
	00030:  43 4F 54 54 53 55 33 20 20 20 20 20               COTTSU3
	
	For more information, see pages 5-31 of the IBM "Local Area Network
	Technical Reference."
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
