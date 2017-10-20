---
layout: page
title: "Q125756: Cannot Reconnect With Same IP Address to SLIP Server"
permalink: /kb/125/Q125756/
---

## Q125756: Cannot Reconnect With Same IP Address to SLIP Server

{% raw %}

	Article: Q125756
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Remote Access Service (RAS) utility, Remote Access, in Windows NT version
	3.5 supports connections to servers that use Serial Line Internet Protocol
	(SLIP). If a RAS client makes and breaks a connection to a SLIP server, it can
	no longer use the same IP address to reconnect to the SLIP server.
	
	MORE INFORMATION
	================
	
	Unlike PPP, you are unable to configure Windows NT 3.5 RAS to use a specific IP
	address from the SLIP server being dialed. The SLIP server will assign the
	Windows NT 3.5 RAS client an IP address. Therefore, the RAS client does not have
	the capacity to reuse the previous IP address when it attempts to reconnect to
	the SLIP server after the initial connection is broken.
	
	Other design constraints involving RAS connections to SLIP servers include the
	fact that a terminal interface window will always appear first during the logon
	process to the SLIP server. There is no way to disable this feature.
	Additionally, the RAS client will not disconnect from the SLIP server until the
	SLIP server drops the Data Carrier Detect (DCD) signal. If the modem through
	which RAS is making the SLIP connection does not drop the DCD signal, the RAS
	client will not hang up.
	
	Additional query words: point-to-point prodnt tcp/ip
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	

{% endraw %}
