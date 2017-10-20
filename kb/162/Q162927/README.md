---
layout: page
title: "Q162927: Telnetting to Port 53 May Crash DNS Service"
permalink: /kb/162/Q162927/
---

## Q162927: Telnetting to Port 53 May Crash DNS Service

{% raw %}

	Article: Q162927
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Windows NT 4.0 Domain Name Service (DNS) server produces the following event
	error 454:
	
	  DNS Server select() Function failed. The data is the error.
	
	Besides the event error, CPU usage is high, the DNS server is unstable, and it
	sometimes crashes.
	
	CAUSE
	=====
	
	The possible cause of this problem is when an unknown user telnets to the DNS
	server port 53. When this is done, and a few characters are typed, the above
	behavior is seen on the Windows NT 4.0 DNS server.
	
	RESOLUTION
	==========
	
	Obtain the following fix, or wait for the next Windows NT service pack.
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP2/dns-fix
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Article-ID: Q169461
	  TITLE: Access Violation in DNS.EXE Caused by Malicious Telnet Attack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: dns prodnt telnet denial of service
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
