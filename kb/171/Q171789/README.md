---
layout: page
title: "Q171789: PTR Record for DNS Server Is Not Automatically Created"
permalink: /kb/171/Q171789/
---

## Q171789: PTR Record for DNS Server Is Not Automatically Created

	Article: Q171789
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Nslookup from a command prompt on your Microsoft Windows NT 4.0
	Domain Name Service (DNS) server, you receive the following error message:
	
	  **** Can't find server name for address x.x.x.x: Non-existent domain
	  **** Default server is not available
	  Default Server: UnKnown
	  Address: x.x.x.x
	
	Where x.x.x.x is the IP address of your DNS server.
	
	NOTE: This problem may occur with other applications as well.
	
	CAUSE
	=====
	
	There is a missing or mis-configured PTR record for your DNS server in your
	reverse lookup zone. The DNS Manager does not automatically create a PTR record
	for your DNS server, even though it may automatically create an "A" record in
	your forward zone.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. From DNS Manager, open your forward zone.
	
	2. Right-click on the "A" record for your DNS server, and then click Delete
	  Record.
	
	3. Click Yes to confirm the deletion of the "A" record.
	
	4. Right-click on the forward zone, and then click New Host.
	
	5. Type the host name of your DNS server and the IP address.
	
	6. Select the Create Associated PTR Record check box.
	
	7. Click Add Host, and then click Done.
	
	If you receive an error when you click Add Host, then you may be having a problem
	with your reverse lookup zone.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q166753 Microsoft DNS Server Reverse Lookup Error Adding Host Record
	
	  Q162842 DNS with "WINS Reverse Lookup" Fails with Multiple IP Addresses
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	You can view the properties of an "A" record by right-clicking on it and then
	clicking Properties. When the above problem is encountered, the "A" record
	properties will have a check in Update Associated PTR Record. This seems to
	indicate that the PTR record has been created and is active, however, it is not
	true.
	
	The reverse lookup zone is a database file that is used to allow a client, or
	resolver, to provide an IP address and request a matching host name. This file
	contains an SOA record and NS records similar to other DNS database zone files.
	It also contains pointer records.
	
	This DNS reverse lookup capability is important because some applications provide
	these capabilities to implement security based on the connecting host names.
	Nslookup is one of these utilities.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
