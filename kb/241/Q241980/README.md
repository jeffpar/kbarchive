---
layout: page
title: "Q241980: Description of Valid Labels for Domain Name System"
permalink: /kb/241/Q241980/
---

## Q241980: Description of Valid Labels for Domain Name System

{% raw %}

	Article: Q241980
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes what constitutes a valid label for Domain Name System
	(DNS) resource records, including the associated restrictions for DNS labels.
	
	MORE INFORMATION
	================
	
	Request For Comment (RFC) 1035 and 1123 defined the legal syntax of an Internet
	host name as consisting of the following:
	
	- The letters a-z and A-Z.
	
	- The numbers 0-9.
	
	- The hyphen (-) character.
	
	Host names may begin with a letter or a number and cannot be longer than 63
	characters.
	
	However, RFC 2181 (which updates RFC 1035 and 1123), states that any binary
	string may be used in the label of any resource record. The only restriction is
	the length of the label (63 characters for the label, and 255 characters for the
	full domain name). It also states that the DNS protocols must not place any
	restrictions (other than length) on the labels used for resource records. A DNS
	server must not refuse to service a zone because of labels that may be
	considered questionable or invalid.
	
	Client programs that use the data in the DNS may impose whatever label
	restrictions are deemed necessary or appropriate. However, the client program
	(not the DNS server program) is responsible for ensuring that the data is valid.
	For example, older resolution tools and e-mail protocols may require strict
	adherence to RFC 1123. To ensure compatibility with these programs, Microsoft
	recommends that the DNS administrator use labels that conform to RFC 1123 unless
	a client program requires something different.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
