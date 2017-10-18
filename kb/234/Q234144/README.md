---
layout: page
title: "Q234144: DNS Boot File Directives and Configuration for Windows NT 4.0"
permalink: kb/234/Q234144/
---

## Q234144: DNS Boot File Directives and Configuration for Windows NT 4.0

	Article: Q234144
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbDNS
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Domain Name System (DNS) supports the directives (or commands)
	listed in this article. You can use these directives in a boot file in the
	%SystemRoot%\System32\DNSfile folder or in the EnableRegistryBoot registry key
	to start DNS with the settings you want. The boot file specifies the startup
	parameters for DNS. Directives must start at the beginning of a line with no
	preceding spaces.
	
	The recognized and supports commands are:
	
	  cache
	  primary
	  secondary
	  forwarders
	  slave
	  options
	
	NOTE: Support for the directory directive was removed after the "DNS and
	Microsoft Windows NT 4.0" white paper was published. This directive is no longer
	supported as referenced by the white paper.
	
	NOTE: Support for the options directive, which is not listed in the "DNS and
	Microsoft Windows NT 4.0" white paper, is available with Service Pack 4 or later
	for Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	Cache
	-----
	
	Specifies a cache file used to help the DNS service contact a name server for the
	ROOT domain. This command and the file it refers to must be present. A cache
	file suitable for use on the Internet is provided with the Windows NT 4.0 DNS
	service.
	
	Syntax: cache . <filename>
	
	Example:
	
	  cache . cache.dns
	
	A cache file contains host information that is needed to resolve names outside
	the authoritative domains and contains names and addresses of root name
	servers.
	
	The Windows NT 4.0 DNS service provides a default cache file containing name
	server information for the ROOT domain on the Internet. By default, this file is
	located in the %SystemRoot%\System32\DNS folder. This is sufficient for users on
	the Internet.
	For installations not connected to the Internet, modify the file to contain the
	name servers authoritative for the root of your private networks.
	
	A current Internet cache file is available at:
	
	  ftp://rs.internic.net/domain/named.cache
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	Primary
	-------
	
	Specifies a domain for which this name server is authoritative and a database
	file that contains the resource records for that domain (that is a zone file).
	Multiple "primary" command records could exist in the boot file.
	
	Syntax: primary <domain><filename>
	
	Examples:
	
	  primary microsoft.com microsoft.com.dns
	  primary PSS.microsoft.com pss.microsoft.com.dns
	
	Secondary
	---------
	
	Specifies a domain for which this name server is authoritative, and a list of
	master server IP addresses from which to attempt downloading the zone
	information, rather than reading it from a file. It also defines the name of the
	local file for caching this zone. Multiple "secondary" command records could
	exist in the boot file.
	
	Syntax: secondary <domain><master-host><local-filename>
	
	Examples:
	
	  secondary BP.microsoft.com 120.120.120.1 bp.microsoft.com.dns
	  secondary BOS.microsoft.com 130.130.130.1 bos.microsoft.com.dns
	
	Forwarders
	----------
	
	Specifies another server that is willing to try resolving recursive queries on
	behalf of the system.
	
	Syntax: forwarders <server-list>
	
	Example:
	
	  forwarders 120.120.120.1 130.130.130.1
	
	Slave
	-----
	
	Specifies that the use of forwarders is the only possible way to resolve queries.
	This can only follow a forwarders directive.
	
	Syntax: slave
	
	Example:
	
	  forwarders 120.120.120.1 130.130.130.1
	  slave
	
	Options
	-------
	
	Specifies optional configuration parameters. Currently, the only "option"
	directive supported with the boot file is: no-recursion. Non-recursion specifies
	that the DNS name server sends non-recursive queries to other name servers.
	
	Syntax: options no-recursion
	
	Example:
	
	  options no-recursion
	
	The Boot File
	-------------
	
	The boot file is a BIND-specific implementation and is not a requirement of the
	IETF RFCs. This feature is provided for easy migration from BIND-based DNS
	servers. For more information about configuring the DNS server to boot from a
	boot file, see the "EnableRegistryBoot" and "BootMethod" sections in the
	following Microsoft Knowledge Base article:
	
	  Q198408 Microsoft DNS Server Registry Parameters, Part 1 of 3
	
	Although the DNS white paper still lists the directory directive, this directive
	is not supported. If you use the directory directive in the boot file, the
	following event is recorded in the Event log, stating that an unsupported
	directory directive was used:
	
	  DNS Parsing Error
	
	REFERENCES
	==========
	
	The "DNS and Microsoft Windows NT 4.0" white paper is available at:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-docs/papers/dnswp.exe
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbDNS 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
