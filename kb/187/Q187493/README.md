---
layout: page
title: "Q187493: Some Netscape Client Certificates Rejected by IIS"
permalink: /kb/187/Q187493/
---

## Q187493: Some Netscape Client Certificates Rejected by IIS

{% raw %}

	Article: Q187493
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On some Netscape client certificates, Internet Information Server (IIS) may
	return the following message:
	
	  HTTP/1.1 403 Access Forbidden, This Virtual Directory requires a browser
	  that supports the configured encryption options.
	
	NOTE: Other certificates from Netscape clients work fine.
	
	CAUSE
	=====
	
	IIS will sometime detect a certificate that is verifiable as unverified, but
	does not cause an unverifiable certificate to be verified.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	
	Additional query words: Verisign client certificates ca SSL
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
