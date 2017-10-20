---
layout: page
title: "Q191985: How to Configure DNS for Terminal Server Browsing"
permalink: /kb/191/Q191985/
---

## Q191985: How to Configure DNS for Terminal Server Browsing

{% raw %}

	Article: Q191985
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Terminal Server clients can be configured to use DNS to get a list of Terminal
	Server computers to which they can attach.
	
	1. Create a BrowseDNSDomain entry (REG_SZ) on the Windows 95, Windows 98, or
	  Windows NT client computer under the following registry key:
	
	     HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client\Default
	
	  The value for this will be the DNS group name you create for your Terminal
	  Servers. For Windows for Workgroups clients, the value will go in the
	  Mstsc.ini file.
	
	2. On the DNS server, create a CNAME record using the group name configured in
	  the client registry as the Alias and a fully qualified hostname as the host.
	  Note that the hostname you use cannot be the group name or the hostname of
	  any of your Terminal Servers.
	
	3. Create an "A" record for each Terminal Server's IP address using the hostname
	  you used to create the CNAME record in step 2. Be sure NOT to select the
	  Create Associated PTR Record check box.
	
	4. Create an "A" record for each Terminal Server using its hostname and IP
	  address. Be sure to select the Create Associated PTR Record check box.
	
	When the Terminal Server Client is started, it will query the DNS server for the
	group name. The DNS server will return the CNAME record along with the "A"
	records from each Host.
	
	The client will then send a reverse lookup to DNS for each of the "A" records it
	received and will display each Terminal Server's hostname in the Available
	Servers window. If the address cannot be resolved, the IP address is displayed.
	
	MORE INFORMATION
	================
	
	Sample DNS zone file:
	
	Database file sam.ple.dns for sam.ple zone.
	
	  ;      Zone version:  7l
	
	  @                       IN   SOA   sam.ple.bar admin@sam.ple   (
	                          7           ; serial number
	                          3600        ; refresh
	                          600         ; retry
	                          86400       ; expire
	                          3600      ) ; minimum TTL
	  @                       IN   NS   dns.sam.ple.
	  dns                     IN   A   172.64.4.1
	  WTS1                    IN   A   172.64.4.10
	  WTS2                    IN   A   172.64.4.4
	  WTS                     IN   CNAME   TS
	  TS                      IN   A   172.64.4.4
	                          IN   A   172.64.4.10
	
	Sample DNS reverse lookup zone file:
	
	  Database file 64.172.in-addr.arpa.dns for 64.172.in-addr.arpa zone.
	  ;      Zone version:  2l
	  @                       IN   SOA   dns.sam.ple.   admin.sam.ple.   (
	                          2           ; serial number
	                          3600        ; refresh
	                          600         ; retry
	                          86400       ; expire
	                          3600      ) ; minimum TTL
	
	  @                       IN   NS   dns.sam.ple.
	  1.4                     IN   PTR   dns.sam.ple.
	  10.4                    IN   PTR   WTS1.sam.ple.
	  4.4                     IN   PTR   WTS2.sam.ple.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
