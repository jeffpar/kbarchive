---
layout: page
title: "Q181600: Configuring a Secondary DNS Server with Windows NT"
permalink: /kb/181/Q181600/
---

## Q181600: Configuring a Secondary DNS Server with Windows NT

{% raw %}

	Article: Q181600
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is designed as a supplement to the following article in the
	Microsoft Knowledge base:
	
	  ARTICLE-ID: Q172953
	  TITLE : How to Install and Configure Microsoft DNS Server
	
	This guide will take you through the steps needed to configure a secondary Domain
	Name Service (DNS) server on your Windows NT Server. For additional information
	on Domain Name Service, please see the following white paper available on the
	Microsoft anonymous ftp server:
	
	  File Name: Dnswp.exe Location :
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-docs/papers/ Title : "DNS and
	  Microsoft Windows NT 4.0"
	
	MORE INFORMATION
	================
	
	You may want to have a secondary DNS server to provide redundancy throughout
	your network for host name resolution. A secondary DNS server will keep a copy
	of the zone files for name resolution, but any changes to these files will need
	to be made on the primary DNS server.
	
	NOTE: These changes can be made remotely by using DNS Manager.
	
	The steps below assume that you have already installed Microsoft DNS Server on
	the intended secondary server.
	
	1. Click the Start button, point to Programs, point to Administrative Tools, and
	  then click DNS Manager.
	
	2. From the DNS menu, click New Server.
	
	3. Type the IP address of your secondary DNS server in the Add DNS Server dialog
	  box, and then click OK.
	
	4. Repeat steps 2 and 3 using the IP address of your primary DNS server.
	
	  NOTE: If added successfully, it will expand and you should see the primary
	  zone(s) that exist on that server.
	
	5. Right-click the secondary DNS server and click New Zone.
	
	6. Click Secondary, type the zone name in the Zone field, and type the IP
	  address of the primary DNS server in the Server field.
	
	  NOTE: You can also simply drag the hand icon to the zone beneath the primary
	  DNS server, and DNS Manager will automatically fill in this information for
	  you.
	
	7. Click Next, type the zone name in the Zone name field, type the zone file
	  name in the Zone File field, and click Next.
	
	  NOTE: If you used the hand icon in step 6, this dialog will be automatically
	  entered. Click Next.
	
	8. Type the IP address of the primary DNS server, click Add, and then click
	  Next.
	
	  NOTE: If you used the hand icon in step 6, the IP master will be automatically
	  entered. Click Next.
	
	9. Repeat steps 5 through 8 for the reverse zone.
	
	If all of the above is correct, you should receive one or more of the following
	event messages in Event Viewer on the primary DNS server:
	
	  Event ID   : 731
	  Source     : DNS
	  Description: DNS Server transfer of zone <zone-name> to DNS server at
	               <ip-address>, successfully completed.
	
	-or-
	
	  Event ID   : 850
	  Source     : DNS
	  Description: DNS Server transfer of zone <zone-name> to DNS server at
	               <ip-address>, successfully completed.
	
	-or-
	
	  Event ID   : 6001
	  Source     : DNS
	  Description: DNS Server transfer of zone <zone-name> to DNS server at
	               <ip-address>, successfully completed.
	
	On the secondary DNS server, you should receive one or more of the following
	event messages in Event Viewer:
	
	  Event ID   : 702
	  Source     : DNS
	  Description: New Version <zone file version number> of zone <domain
	               name> found at DNS Server at <ip-address>. Zone transfer is
	               in progress.
	
	-or-
	
	  Event ID   : 3150
	  Source     : DNS
	  Description: DNS Server wrote new version of zone <zone-name> to file
	               <zone-name>.dns. The data is the new version number.
	
	-or-
	
	  Event ID   : 6522
	  Source     : DNS
	  Description: New Version <zone file version number> of zone <zone-name>
	               found at DNS Server at <ip-address>. Zone transfer is in
	               progress.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
