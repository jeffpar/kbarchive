---
layout: page
title: "Q187800: NSLOOKUP Fails to Return DomainName Option for DHCP Client"
permalink: /kb/187/Q187800/
---

## Q187800: NSLOOKUP Fails to Return DomainName Option for DHCP Client

{% raw %}

	Article: Q187800
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Nslookup may not append your Domain Name System (DNS) domain name to queries on
	your Dynamic Host Configuration Protocol (DHCP) client. Similarly, when the Set
	All command is used from Nslookup, the correct DomainName option is not returned
	when the client receives this option from DHCP.
	
	CAUSE
	=====
	
	Your DHCP client is being assigned its DNS domain name (DHCP Option 15) by a
	DHCP Server.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Technical Support to obtain the
	following fix, or wait for the next Windows NT service pack.
	
	  03/03/98  04:50p               168,720 Dns.exe (Intel)
	  03/03/98  05:53p                55,568 Nslookup.exe (Intel)
	
	  03/03/98  04:45p               281,872 Dns.exe(Alpha)
	  03/03/98  05:49p                83,216 Nslookup.exe(Alpha)
	
	NOTE: Nslookup.exe is a client-side utility for Windows NT.
	
	A workaround to this problem would be to manually specify the domain name under
	the DNS properties page for the TCP/IP protocol on the client.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
