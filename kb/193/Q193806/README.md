---
layout: page
title: "Q193806: CSNW Error 85, Local Device Already in Use"
permalink: /kb/193/Q193806/
---

## Q193806: CSNW Error 85, Local Device Already in Use

{% raw %}

	Article: Q193806
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the following configuration, after you log on and log off several consecutive
	times, the network client receives an access denied error message to one or more
	network drives located on the NetWare server. Also, the NET USE command fails
	with the following error message:
	
	  Error 85, Local device already in use
	
	This error message is followed by an access denied error message.
	
	The problem can be cleared on the Windows NT Workstation client by restarting
	Client Services for NetWare (CSNW).
	
	Configuration:
	
	- Windows NT primary domain controller (PDC) running Windows NT Server 4.0 with
	  Gateway Services for NetWare (GSNW)
	
	- Novell NetWare 3.12 server
	
	- Client running Windows NT Workstation 4.0 with Client Services for NetWare
	  CSNW and:
	
	   - Logon script located on the PDC
	
	   - Desktop icons stored on the NetWare server (M: drive below)
	
	The Windows NT logon script maps several network drives on the NetWare server.
	For example:
	
	     net use M: /delete > NUL      followed by,
	     net use M: \\NWserver\share > NUL
	
	NOTE: The same behavior is obtained using a NET USE command with the
	/persistent:no switch.
	
	CAUSE
	=====
	
	The problem affects one or more drives and the drive where the desktop icons are
	located is always affected. The problem is intermittent and is easier to
	reproduce when using higher speed processors (200 MHz and more).
	
	RESOLUTION
	==========
	
	The solution consists of removing a race condition that potentially exists,
	especially when using high speed processors, between process cleanup and
	WINLOGON deleting network connections.
	
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words: 4.00 error85
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
