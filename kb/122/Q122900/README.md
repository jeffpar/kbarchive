---
layout: page
title: "Q122900: Can't Use Periods in DNS Host Names"
permalink: kb/122/Q122900/
---

## Q122900: Can't Use Periods in DNS Host Names

	Article: Q122900
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:3.5
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Both the Help file and the manual for the TCP/IP Domain Name Server (DNS)
	configuration are incorrect in describing the type of characters that can be
	used in the host name. The documentation says that both the hyphen and period
	can be used. However, attempting to use a period in the host name will result in
	an error message indicating the parameter is incorrect.
	
	The TCP/IP manual says:
	
	  In the DNS Configuration dialog box, you can, optionally, type a name in the
	  Host Name box (usually your computer name):
	
	  The name can be any combination of A-Z letters, 0-9 numerals, and the hyphen
	  (-) plus the period (.) character used as a separator. By default, this value
	  is the Windows NT computer name, but the network administrator can assign
	  another host name without affecting the computer name.
	
	The Help file says:
	
	  Host Name
	
	  Optionally, type a name in the Host Name box (usually your computer name). The
	  name can be any combination of A-Z letters and 0-9 digits, plus the hyphen
	  (-) and period (.) characters.
	
	  Using a period in the host name would be interpreted as a separator, and
	  result in an error message.
	
	RFC 952 says:
	
	  Periods are only allowed when they serve to delimit components of "domain
	  style names".
	
	The Windows 95 Resource Kit states:
	
	To set the host name for DNS
	
	Type a name in the Host Name box.
	
	The name can be any combination of the letters A through Z, the numerals 0
	through 9, and the hyphen (-), plus the period (.) character used as a
	separator. By default, this value is the Microsoft networking computer name, but
	the network administrator can assign another host name without affecting the
	computer name.
	
	Note: Some characters that can be used in computer names, especially the
	underscore, cannot be used in host names.
	
	The Windows 98 Resource Kit states:
	
	Microsoft TCP/IP Protocol
	
	Using DNS for Name Resolution
	
	Configuring DNS
	
	To set the host name for DNS
	
	Type a name in the Host box. The name can be any combination of the letters A
	through Z, the numerals 0 through 9, and the hyphen (-), plus the period (.)
	character used as a separator. By default, this value is the Microsoft
	networking computer name, but the network administrator can assign another host
	name without affecting the computer name.
	
	MORE INFORMATION
	================
	
	Under Windows NT 3.5, the host name is set to the computer name (or NetBIOS
	name) by default. You can change the name used from the Network section of
	Control Panel. Select TCP/IP Protocol, choose Configure, and then choose DNS to
	see the host name. You can specify both the host and domain names.
	
	NOTE: The domain name listed here should not be confused with the term "domain
	name" as it is used in a Windows NT domain. This is the domain name set by the
	TCP/IP DNS.
	
	Reference(s):
	
	More information on DNS can be found in the DNS RFC 1034.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:3.5
	
	=============================================================================
	
