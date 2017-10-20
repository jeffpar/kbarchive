---
layout: page
title: "Q149525: Poor Performance May Occur During FTP File Transfers"
permalink: /kb/149/Q149525/
---

## Q149525: Poor Performance May Occur During FTP File Transfers

{% raw %}

	Article: Q149525
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft FTP client you may notice delays of up to 5 seconds
	between 4096-byte data transmissions to an FTP server.
	
	CAUSE
	=====
	
	The retail Windows NT FTP client has a hard-coded send size of 4096 bytes.
	Because 4096 may not be evenly divisible by the maximum segment size (MSS) for
	that network interface, the last transmit in every FTP send will not fill the
	space available in the TCP packet. For example, if the TCP/IP MSS is 536 bytes,
	FTP sends are not evenly divisible by the MSS, ensuring that the last segment
	sent will always be less than one MSS.
	
	If a send request occurs that is less than one segment, Silly Window Syndrome
	(SWS) can occur. To avoid SWS, the TCP/IP stack will hold the send for 5
	seconds, or until there is enough data queued to send a full segment.
	
	Note: For more information on SWS, please refer to Internet RFC 813. For more
	information on MSS, please refer to Internet RFC 879.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	To correct this problem, apply the fix mentioned below. The following new switch
	can now be used with the fix:
	
	  -w:buffersize
	
	This switch overrides the default transfer buffer size of 4096. The switch has
	been added to FTP to allow the send size to be configurable. This will allow FTP
	users to ensure that the send size is always evenly divisible by the MSS on the
	network interface being used, thus preventing SWS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation version
	3.51 and Windows NT Server version 3.51. This problem was corrected in the
	latest U.S. Service Pack for Windows NT Workstation or Server version 3.51. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
