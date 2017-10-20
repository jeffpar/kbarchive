---
layout: page
title: "Q130538: DHCP-Enabled MS-DOS Clients Do Not Resolve Host Names"
permalink: /kb/130/Q130538/
---

## Q130538: DHCP-Enabled MS-DOS Clients Do Not Resolve Host Names

{% raw %}

	Article: Q130538
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you ping a host name from a Dynamic Host Configuration Protocol (DHCP)
	enabled LAN Manager for MS-DOS version 2.2c or Network Client for MS-DOS version
	3.0 client computer, the following error message may appear:
	
	  DGN0217: Remote name cannot be resolved
	
	NOTE: IPCONFIG returns the current configuration including the WINS server. If
	you ping a valid IP address, or use the NET VIEW or NET USE command, the
	operation is successful.
	
	CAUSE
	=====
	
	This problem occurs if the entry for the host name does not exist in the HOSTS
	file. LAN Manager for MS-DOS version 2.2c client and Network Client for MS-DOS
	version 3.0 can be WINS-enabled. When you ping a host name from a DHCP-enabled
	client, the order of name resolution should be as follows:
	
	1. Local host name
	
	2. HOSTS file
	
	3. DNS
	
	4. Local NetBIOS cache
	
	5. WINS server
	
	6. Broadcast
	
	However, NMTSR.EXE, which handles ping requests, is only using the HOSTS file. It
	does not check the local host name. A protocol trace may reveal that nothing was
	sent out on the network.
	
	WORKAROUND
	==========
	
	To work around this problem, enter the host names, including the local host
	name, in the HOSTS file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LAN Manager for MS-DOS version
	2.2c and Network Client version 3.0 for MS-DOS.
	
	Additional query words: prodlm 2.20
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbLanManSearch kbNetworkClientSearch kbLanMan220c kbNetworkClient300DOS
	Version           : winnt:3.0
	
	=============================================================================
	

{% endraw %}
