---
layout: page
title: "Q205247: Overriding Automatic WINS and DNS Server Assignment for RAS/DUN"
permalink: kb/205/Q205247/
---

## Q205247: Overriding Automatic WINS and DNS Server Assignment for RAS/DUN

	Article: Q205247
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	By default, a client dialing into a RAS server uses the WINS/DNS servers defined
	in the RAS server's configuration. You can override these settings by modifying
	registry values.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The following parameters appear in the registry only during an active connection
	to a RAS server.
	
	Change this parameter to override the primary WINS server assigned by RAS to
	clients:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\adaptername\
	  ParametersRemoteAccess\Parameters\IP
	
	  Value Name: WINSNameServer Value Type: REG_SZ (number string)
	  Valid Range: <valid IP address> (for example, 192.168.20.30)
	  Default: Blank
	  Description: This parameter controls whether Windows NT assigns an alternate
	  primary WINS server to DUN/RAS clients.
	  This parameter defaults to 0.0.0.0 or false.
	
	Change this parameter to override the secondary WINS server assigned by RAS to
	clients:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\adaptername
	  \ParametersRemoteAccess\Parameters\IP
	
	  Value Name: WINSNameServerBackup
	  Value Type: REG_SZ (number string)
	  Valid Range: <valid IP address> (for example, 192.168.50.40)
	  Default: Blank
	  Description: This parameter controls whether Windows NT assigns an alternate
	  secondary WINS server to DUN/RAS clients.
	  This parameter defaults to 0.0.0.0 or false.
	
	Change this parameter to override the DNS server(s) assigned by RAS to clients:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\adaptername\
	  ParametersRemoteAccess\Parameters\IP
	
	  Value Name: DNSNameServers
	  Value Type: REG_MULTI_SZ (multiple number string)
	  Valid Range: <valid IP address> (for example, 192.168.60.41
	  192.168.70.44)
	  Default: Blank
	  Description: This parameter controls whether Windows NT assigns an alternate
	  DNS server to DUN/RAS clients.
	  This parameter defaults to 0.0.0.0 or false.
	
	REFERENCES
	==========
	
	For additional information, please click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q160699 Understanding DHCP IP Address Assignment for RAS Clients
	
	  Q200211 DUN Clients Do Not Receive DNS Domain Name over RAS/RRAS
	
	For more information, please see the "Windows NT Networking Supplement," Appendix
	A, page 315 on IP parameters. This is included as part of the original
	documentation for Windows NT 4.0.
	
	Additional query words: wins RAS
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
