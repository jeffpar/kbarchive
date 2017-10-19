---
layout: page
title: "Q157267: Msbatch.inf Parameters: Inserting TCP/IP Information"
permalink: /kb/157/Q157267/
---

## Q157267: Msbatch.inf Parameters: Inserting TCP/IP Information

	Article: Q157267
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to insert TCP/IP information using the Msbatch.inf
	file for batch installations of Windows 95.
	
	MORE INFORMATION
	================
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	In the Msbatch.inf file, modify the [Network] section to include the following
	line:
	
	  Protocols=MSTCP  ; other protocols can be inserted here also
	
	Also add the following section and parameters as needed:
	
	  [MSTCP]
	  DHCP=value ; 0=disable, 1=enable
	  DNS=value ; 0=disable, 1=enable
	  WINS= ; 0=disable, 1=enable, DHCP=get parameters from DHCP server.
	  Gateways=ip,ip ; Lists the IP gateways (IP routers) and order to be
	     used.
	  IPAddress=IP
	  IPMask=ip ; Sets the subnet mask if DHCP is not enabled.
	  PrimaryWINS=IP
	  SecondaryWINS=IP
	  DNSServers=DNSIPAddress,DNSIPAddress ; Lists DNS server IP addresses
	     and order to try them.
	  DomainOrder=domainname,domainname ; Sets a list of DNS domains and
	     order to try them.
	  Hostname= ; Required when using DNSServers entry. Is usually the same
	     as the computer name.
	  LMHOSTPath=path ; Path and filename to LMHOSTS file.
	  ScopeID=string
	
	NOTE: Some IP settings may not be added properly. An updated file may be required
	for full functionality of some of these switches.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
