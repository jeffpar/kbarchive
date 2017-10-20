---
layout: page
title: "Q163687: Winsock Applications May Timeout or Fail with an Error"
permalink: /kb/163/Q163687/
---

## Q163687: Winsock Applications May Timeout or Fail with an Error

{% raw %}

	Article: Q163687
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNetkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Winsock applications running on the specified version of Windows NT Server or
	Workstation may fail with timeout errors, report incomplete data received, or
	report some other error. The failures seen include errors indicating that the
	remote system is no longer available or that incorrect results have been
	received from the remote system. This problem has been seen with socket
	applications running on Macintosh client systems connecting to Windows NT Server
	using the AppleTalk protocol.
	
	CAUSE
	=====
	
	When a Winsock application calls one of the Winsock send APIs (Send, WSASend,
	and so on), one of the parameters passed to the API is the amount of data to be
	sent. If for any reason the Winsock driver, Afd.sys, could not send the total
	amount on a nonblocking socket in a single data packet, Afd.sys would
	incorrectly report the total bytes sent to the application. There may be other
	symptoms because an incorrect response will have an undetermined effect on the
	application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 with
	Service Pack 2. This problem was corrected in the latest Microsoft Windows NT
	4.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt notes lotus
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
