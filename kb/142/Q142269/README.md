---
layout: page
title: "Q142269: Garbled Graphics Output on Shared PostScript Printer"
permalink: /kb/142/Q142269/
---

## Q142269: Garbled Graphics Output on Shared PostScript Printer

{% raw %}

	Article: Q142269
	Product(s): Microsoft Windows NT
	Version(s): 3.11,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a graphics print job to a shared postscript printer on a Windows
	NT Server from a Windows for Workgroups 3.11 computer using the IPX/SPX
	compatible transport protocol (NWLink), the first page of the output is garbled.
	
	CAUSE
	=====
	
	This problem occurs when the Windows for Workgroups 3.11 computer sends the
	print job to the Windows NT Server using direct hosting over IPX. Direct hosting
	allows the Server Message Block (SMB) file sharing protocol to be used over a
	connectionless datagram transport such as IPX. This bypasses the NetBIOS layer
	and sends the data in blocks, which are re- assembled at the server. These
	blocks are not re-assembled correctly.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use another protocol such as TCP/IP or NetBEUI on
	both the Windows for Workgroups 3.11 computer and Windows NT Server. Make sure
	you disable the binding of Server and NWLink on the Windows NT Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.50 3.51 directhosting
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : :3.11,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
