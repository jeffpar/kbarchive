---
layout: page
title: "Q297265: INFO: All Bound IP Addresses Don't Appear in MMC Drop-Down List"
permalink: kb/297/Q297265/
---

## Q297265: INFO: All Bound IP Addresses Don't Appear in MMC Drop-Down List

	Article: Q297265
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbgrpdsvc
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you administer Internet Information Server (IIS) through the Microsoft
	Management Console (MMC) snap-in, a Web site's IP Address drop-down list box may
	not display all of the IP addresses that are bound to the network interfaces.
	
	MORE INFORMATION
	================
	
	The IIS MMC snap-in uses either the gethostbyname or gethostbyaddr Windows
	Sockets function to obtain the list of IP addresses for a computer, depending on
	whether you specify a server name or server address, respectively. These
	functions use one of several methods (including WINS, DNS, the HOSTS file) to
	retrieve the IP addresses for a computer. For additional information about the
	order in which these methods are used, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q192128 PRB: gethostbyname() Retrieves Only One IP Address from WINS
	
	To ensure that the IP list that is displayed is correct, confirm that all the
	necessary IP addresses are entered correctly for the local HOSTS file or the DNS
	server that is used for name resolution. If WINS is used for resolution, only
	one IP address may be returned. (See Microsoft Knowledge Base article Q192128
	for more information.)
	
	Additional query words: missing
	
	======================================================================
	Keywords          : kbgrpdsvc 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
