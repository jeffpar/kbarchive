---
layout: page
title: "Q222060: Err Msg: &quot;Error 5: Access denied&quot; When Using PPTP with RAS"
permalink: /kb/222/Q222060/
---

## Q222060: Err Msg: &quot;Error 5: Access denied&quot; When Using PPTP with RAS

{% raw %}

	Article: Q222060
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to make a PPTP connection from a Windows NT 4.0 Service Pack 4
	(SP4) client to a Windows NT 4.0 SP4 PPTP server running RAS or Routing and
	Remote Access Service (RRAS), the initial authentication attempt may not work
	and display an "Error 5: Access Denied" error message. This problem can also
	occur if your PPTP client and server are running the post-Service Pack 3
	PPTP3-fix hotfix.
	
	CAUSE
	=====
	
	This problem occurs because there is a timing mismatch during the authentication
	process between the client and server using MSCHAPv2 authentication.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Microsoft Windows NT
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	The hotfix must be applied to the PPTP client computer, installing the hotfix or
	Windows NT 4.0 Service Pack 5 (SP5) to the PPTP server will not fix this
	problem. In the very rare case where the client is another RRAS server, there is
	also a RRAS-specific fix available if you choose to not install SP5.
	
	Additional query words: pptp authentication MSCHAP MSCHAPv2 RRAS RAS
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
