---
layout: page
title: "Q296833: PRB: Windows Can't Handle SSL Certificates Contain Odd-Sized Key"
permalink: /kb/296/Q296833/
---

## Q296833: PRB: Windows Can't Handle SSL Certificates Contain Odd-Sized Key

{% raw %}

	Article: Q296833
	Product(s): Microsoft Windows NT
	Version(s): 2000,2000 SP1,4.0
	Operating System(s): 
	Keyword(s): kbgrpdsvc
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows versions 2000, 2000 SP1 Professional 
	- Microsoft Windows versions 2000, 2000 SP1 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Secure Sockets Layer (SSL) connection to connect to a server
	whose server certificate contains odd-sized keys (keys that are not a power of
	2, or 2 ^ n), the connection may fail on Windows NT and Windows 2000. Network
	packets that are captured with Network Monitor show that the connection fails in
	the SSL negotiation stage.
	
	RESOLUTION
	==========
	
	To work around this behavior, use a server certificate that contains
	normal-sized keys (keys that are a power of 2, or 2 ^ n), such as 512-bit keys
	and 1,024-bit keys.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbgrpdsvc 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin2000ProSP1 kbwin2000ServSP1
	Version           : :2000,2000 SP1,4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
