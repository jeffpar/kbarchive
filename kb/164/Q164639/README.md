---
layout: page
title: "Q164639: SNA Windows 95 Fails Logon If Password Change Required"
permalink: /kb/164/Q164639/
---

## Q164639: SNA Windows 95 Fails Logon If Password Change Required

{% raw %}

	Article: Q164639
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	If the Windows NT Server 4.0 user account is configured to require the user to
	change the password at the next logon attempt, and the SNA Server Windows 95
	client is configured to use a non-named pipe transport, the SNA Server Windows
	95 client logon will report a logon failure.
	
	CAUSE
	=====
	
	The Windows NT logon security mechanism used by the SNA Server Windows 95 client
	does not support the change password feature.
	
	
	RESOLUTION
	==========
	
	An update to Windows NT Server 4.0 (included in Service Pack 3), adds support
	for Change Password notification. In addition to this change, SNA Server 3.0 and
	the Windows 95 SNA 3.0 client have been modified to use this new notification
	feature.
	
	The following updated SNA Server modules are available:
	
	  SNA Server
	
	    \<snaroot>\System\Snadmod.dll   \<snaroot>\System\Snaevent.dll
	
	  Windows 95 SNA Client
	
	    \<windir>\System\Snakrnl.dll   \<windir>\System\Snabase.exe
	
	NOTE: Windows NT Server 3.51 and SNA Server 2.11 do not support change password
	notification needed by the SNA Server Windows 95 client. The updated version of
	Windows NT Server 4.0 must be used with SNA Server 3.0 (on the server and
	Windows 95 client) in order to support this feature.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
