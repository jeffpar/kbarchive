---
layout: page
title: "Q170825: RAS Auto-Answer Behavior in Windows NT"
permalink: /kb/170/Q170825/
---

## Q170825: RAS Auto-Answer Behavior in Windows NT

{% raw %}

	Article: Q170825
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.50,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the new behavior of Windows NT remote access service (RAS)
	when answering incoming calls, in Windows NT version 4.0. This behavior has
	changed because Unimodem support is included in Windows NT version 4.0, but not
	in version 3.5x.
	
	MORE INFORMATION
	================
	
	In Windows NT 3.5x, RAS initializes analog modems by sending an ATS0=1 command
	to the modem when RAS loads. This instructs the modem to answer incoming calls
	on the first ring. See the following article in the Microsoft Knowledge Base for
	more information about this parameter and how to modify the number of rings
	before answering:
	
	  Q114687 Setting Number of Rings for RAS Server Auto-Answer in NT 3.5x
	
	By default in Windows NT version 4.0, the modem is initialized by Unimodem, which
	sends an ATS0=0 to the modem when RAS loads. When an incoming call is received,
	Unimodem answers the call and passes control to RAS. In this case, the "AA"
	light on an external modem is NOT lit, though RAS answers incoming calls. For
	information about modifying the number of rings for Unimodem to answer a call in
	Windows NT 4.0, see the following article in the Microsoft Knowledge Base:
	
	  Q145879 How to Set the Number of Rings for RAS Auto-Answer in NT 4.0
	
	NOTE: Unimodem can be disabled in Windows NT 4.0, which causes RAS to behave as
	it does in Windows NT 3.5x, as described above. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q150808 Disabling Support for Unimodem Modems in Remote Access
	
	EXAMPLE
	-------
	
	The following is an example of Unimodem initializing or answering the line in
	Windows NT 4.0 (from the modem log):
	
	06-25-1997 17:06:20.113 - Hayes Accura 288 V.FC + FAX in use.
	06-25-1997 17:06:20.143 - Modem type: Hayes Accura 288 V.FC + FAX
	06-25-1997 17:06:20.143 - Modem inf path: mdmhayes.inf
	06-25-1997 17:06:20.143 - Modem inf section: M1846
	06-25-1997 17:06:20.143 - 115200,N,8,1
	06-25-1997 17:06:20.143 - 115200,N,8,1
	06-25-1997 17:06:20.173 - Initializing modem.
	06-25-1997 17:06:20.173 - Send: AT<cr>
	06-25-1997 17:06:20.193 - Recv: AT<cr>
	06-25-1997 17:06:20.423 - Recv: <cr><lf>OK<cr><lf>
	06-25-1997 17:06:20.423 - Interpreted response: OK
	06-25-1997 17:06:20.423 - Send: AT&FE0V0W1&C1&D2S95=47<cr>
	06-25-1997 17:06:20.534 - Recv: AT&FE0V0W1&C1&D2S95=47<cr>
	06-25-1997 17:06:21.064 - Recv: 0<cr>
	06-25-1997 17:06:21.064 - Interpreted response: OK
	06-25-1997 17:06:21.064 - Send: ATS7=60S30=0L0M1&Q5S36=7S48=7S46=138&K3<cr>
	06-25-1997 17:06:21.485 - Recv: 0<cr>
	06-25-1997 17:06:21.485 - Interpreted response: OK
	06-25-1997 17:06:21.485 - Send: ATB0N1X4<cr>
	06-25-1997 17:06:21.685 - Recv: 0<cr>
	06-25-1997 17:06:21.685 - Interpreted response: OK
	06-25-1997 17:06:21.685 - Waiting for a call.
	06-25-1997 17:06:21.685 - Send: ATS0=0<cr>
	***(tells the modem not to answer the line when a call comes in; this lets
	Unimodem do it)***
	
	06-25-1997 17:06:21.876 - Recv: 0<cr>
	06-25-1997 17:06:21.876 - Interpreted response: OK
	06-25-1997 17:07:15.703 - Recv: 2<cr>
	***(this is the ring coming in on the modem)***
	
	06-25-1997 17:07:15.713 - Interpreted response: Ring
	06-25-1997 17:07:15.743 - Answering the call.
	06-25-1997 17:07:15.743 - Send: ATA<cr>
	***(this is Unimodem telling the modem to answer the call)***
	
	06-25-1997 17:07:27.009 - Recv: 55<cr>
	06-25-1997 17:07:27.009 - Interpreted response: Informative
	06-25-1997 17:07:27.610 - Recv: 77<cr>
	06-25-1997 17:07:27.610 - Interpreted response: Informative
	06-25-1997 17:07:27.610 - Recv: 67<cr>
	06-25-1997 17:07:27.610 - Interpreted response: Informative
	06-25-1997 17:07:27.610 - Recv: 15<cr>
	06-25-1997 17:07:27.610 - Interpreted response: Connect
	06-25-1997 17:07:27.620 - Connection established at 28800bps.
	06-25-1997 17:07:27.620 - Error-control on.
	06-25-1997 17:07:27.620 - Data compression on.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.50,3.51,4.0
	
	=============================================================================
	

{% endraw %}
