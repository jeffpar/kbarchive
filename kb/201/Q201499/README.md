---
layout: page
title: "Q201499: PRB: NSLOOKUP Shows No IP Address for a Domain Name"
permalink: /kb/201/Q201499/
---

## Q201499: PRB: NSLOOKUP Shows No IP Address for a Domain Name

	Article: Q201499
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use NSLOOKUP to get information about a domain name, you only get the
	domain name back and no IP address.
	
	CAUSE
	=====
	
	This problem occurs because there is usually no IP address associated directly
	to a domain name. IP addresses are usually associated to hosts inside the
	domain.
	
	RESOLUTION
	==========
	
	You can do the following to work around this problem:
	
	Contact the administrator of the DNS server responsible for the domain in
	question. Ask them to add an "A" record for the domain name to that domain's
	zone file.
	
	If the DNS server is a computer running Windows NT Server, simply create an "A"
	record in the appropriate zone, leaving the Host Name edit box empty while
	providing an appropriate IP address.
	
	To create an "A" record in the appropriate zone, follow these steps:
	
	1. Start Domain Name Service Manager.
	
	2. Right-click your domain name, and then click New Record.
	
	3. In the Record Type list, click A Record.
	
	4. Leave the Host Name box blank.
	
	5. Type the IP address you want to associate with the domain name.
	
	6. Click OK.
	
	NOTE: You cannot add this record if you right-click the domain name and then
	click New Host. You must click New Record.
	
	You will now see an entry in the zone file with the name of the domain in the
	(Host) Name column and the specified IP address in the Data column.
	
	At the NSLOOKUP prompt, typing the zone name will now list the IP address along
	with the domain name.
	
	Example (at the NSLOOKUP Prompt):
	
	>Khalsa.example.microsoft.com
	
	Default Server: MyServer.example.microsoft.com
	
	Address: 10.0.0.2
	
	Name: Khalsa.example.microsoft.com
	
	Address: 192.168.111.1
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbBackOfficeSearch kbSBServSearch kbBackOfficeServ400 kbSBServ400 kbSBServ400a kbSBServ450
	Version           : :4.0,4.0a,4.5
	Issue type        : kbprb
	
	=============================================================================
	
