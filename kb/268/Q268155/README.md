---
layout: page
title: "Q268155: NetBIOS Name Resolution May Be Slow or Stop Working"
permalink: /kb/268/Q268155/
---

## Q268155: NetBIOS Name Resolution May Be Slow or Stop Working

	Article: Q268155
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1,2.5
	Operating System(s): 
	Keyword(s): osr2 kbWinsock kbWin95
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a NetBIOS name query on a computer, the query may be slow or
	may not work. This may cause you program or session to time out on the client
	computer.
	
	CAUSE
	=====
	
	This issue can occur if the following conditions exist:
	
	- You are trying to resolve a NetBIOS name.
	
	- The name exists in a different domain that the domain in which the querying
	  computer is located.
	
	- Multiple domain-suffix search-order entries are specified in TCP/IP
	  properties.
	
	For example, assume that you are trying to ping a computer named Remote in the
	<Name1>.com domain and that your computer is located in the
	<Name2>.com domain. Windows attempts to resolve the NetBIOS name in the
	<Name2>.com domain only. Windows may then later be able to resolve the
	name when it queries the <Name1>.com domain by using the fully qualified
	domain name (FQDN); this may occur up to a few minutes after you start the
	query.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the Winsock 2 update for Windows 95.
	For additional information about how to download and install this update, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q182108 Availability of Windows Sockets 2.0 for Windows 95
	
	Additional query words: DNS
	
	======================================================================
	Keywords          : osr2 kbWinsock kbWin95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR25 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	
