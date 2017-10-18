---
layout: page
title: "Q236847: SNACFG Should Allow Configuration of Host Security Domains"
permalink: kb/236/Q236847/
---

## Q236847: SNACFG Should Allow Configuration of Host Security Domains

	Article: Q236847
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fea kbFEA sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Configuring Host Security Domains can only be done using SNA Manager. Customers
	that rely on SNA Server's command line utility (Snacfg.exe) are unable to set
	configurations for Host Security Domains.
	
	SNA Server's command-line interface has been enhanced so it is now possible to
	create, delete, or modify Host Security Domains.
	
	The Host Security Integration feature requires that information about Host
	Security Domains is stored on the Host Security Database hosted on the Windows
	NT primary domain controller. Creating a Host Security domain also creates two
	user groups, one for the Users and one for Proxy. Therefore, this enhancement
	can't really be used offline: the administrator must be logged on to the Windows
	NT domain where the SNA subdomain configuration file will be used.
	
	The syntax of this command is:
	
	  SNACFG HSDOMAIN /LIST
	  SNACFG HSDOMAIN hsdomainname
	  SNACFG HSDOMAIN hsdomainname /PRINT
	  SNACFG HSDOMAIN hsdomainname /ADD [options]
	  SNACFG HSDOMAIN hsdomainname [options]
	  SNACFG HSDOMAIN hsdomainname /DELETE
	
	Available options are:
	
	  /NAMES:{ MAP | REPLICATE }
	  /PASSWORDS:{ MAP | REPLICATE }
	  /OVERRIDE:{ Yes | No }
	  /ENABLEUSER:<text>
	  /DISABLEUSER:<text>
	  /ENABLEPROXY:<text>
	  /DISABLEPROXY:<text>
	  /INSERTCONN:<text>
	  /REMOVECONN:<text>
	
	<Text> implies that a comma separated string is accepted.
	/ENABLEUSER adds the named users to the group created for the host domain.
	/DISABLEUSER removes the named user from the group created for the host domain.
	/ENABLEPROXY adds the named users to the group created for the host domain
	proxy.
	/DISABLEUSER removes the named user from the group created for the host domain
	proxy.
	/INSERTCONN adds the named connections to the host domain. The connection must
	already exist.
	/REMOVECONN removes the named connection from the host domain.
	
	MORE INFORMATION
	================
	
	This feature is available in the latest service pack for SNA Server version 4.0.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	This feature was first included in SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fea kbFEA sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
