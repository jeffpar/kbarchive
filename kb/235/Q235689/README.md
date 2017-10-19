---
layout: page
title: "Q235689: How to Troubleshoot  7062 Errors Logged in DNS Event Log"
permalink: /kb/235/Q235689/
---

## Q235689: How to Troubleshoot  7062 Errors Logged in DNS Event Log

	Article: Q235689
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some useful troubleshooting steps for identifying the
	cause of the 7062 DNS Event ID warning. For review, the error message for Event
	ID warning is shown below:
	
	  EVENT message 7062:
	  DNS Server encountered a packet addressed to itself -- IP address
	  <actual IP address>. The DNS server should never be sending a packet to
	  itself. This situation usually indicates a configuration error.
	  Check the following areas for possible self-send configuration errors:
	
	  1) Forwarders list. (DNS servers should not forward to themselves).
	  2) Master lists of secondary zones.
	  3) Notify lists of primary zones.
	  4) Delegations of subzones. Must not contain NS record for DNS server
	
	As part of your troubleshooting, you may find that you have ruled out each of the
	four steps above because you have checked the forwarders list, the notify list,
	and you have no secondary zones or delegations configured.
	
	However, 7062 Event ID errors may still continue to be displayed. This article
	discusses some other instances when this error message appears.
	
	In step 4 above, you may conclude that the Primary DNS server has to have created
	a delegation of a sub domain in order for this event to be triggered. This may
	be somewhat misleading. Recall that the root servers maintain the "com", "net",
	and so forth, domains and delegate the name space beneath them to other DNS
	servers. So, although you may in fact be the Primary DNS server for
	<sample.com>, you have been delegated that responsibility from the ".com"
	DNS server or servers.
	
	This means that if you have registered a domain with Internic and they delegate
	that domain to your DNS server, it is your responsibility to make sure that your
	DNS server is able to handle requests for the registered domain.
	
	For example, you may have a DNS server at <dns.sample.com> and you have
	recently registered <mycompany.com>. After the Internic delegates the
	mycompany.com domain to your DNS server, you need to have a zone file created
	that can answer queries for it.
	
	Below is a list of the events that can happen if you have not configured your DNS
	servers to maintain zones that have been registered.
	
	1. For example, a client attempts to contact <www.mycompany.com> and sends
	  a query to the root servers for help. The root servers determine that the
	  Start of Authority (SOA) for <mycompany.com> is the DNS server
	  <dns.sample.com> at IP address 10.1.1.1.
	
	2. The client sends its request to 10.1.1.1 for <www.mycompany.com>. Your
	  server (<dns.sample.com>) looks at it's zone files, determines it is
	  not the SOA for the <mycompany.com> domain because it does not have a
	  zone file for it.
	
	3. Your server (dns.sample.com) does an iterative query for
	  <mycompany.com> to the root servers.
	
	4. The root servers respond to your DNS server with the SOA or owner of the
	  domain <mycompany.com>, which is at 10.1.1.1. This means your DNS is
	  supposed to look at itself for the answer, and it does not have one.
	
	5. It is at this point that the DNS server logs the 7062 error.
	
	6. If the Root Hints in Windows2000 are pointing to the same machine this event
	  will be logged. For additional information about replacing the existing root
	  hints with the default root hints, click the article number below to view the
	  article in the Microsoft Knowledge Base:
	
	  Q249868 Replacing Root Hints with the Cache.dns File
	
	MORE INFORMATION
	================
	
	To find the actual requested domains, you must perform a debugging operation on
	the DNS server.
	
	
	After you have created the log file, open it in either Microsoft Word or
	Microsoft Excel, Notepad is not recommended because it does not parse the
	characters in an easily readable format. After you have the log file open,
	search for "7062".
	
	This search should bring you to the first error. After you find the error, scroll
	up. A DNS query log looks similar to the following:
	
	dns_ProcessMessage() for packet at 00A5E524.
	dns_AnswerQuestion() for packet at 00A5E524.
	Node for (3)www(10)mycompany(3)com(0) NOT in database.
	Closest node found"com."
	Encountered non-authoritative node with no matching RRs.
	dns_ProcessMessage() for packet at 00A5EAC4.
	Processing response packet at 00A5EAC4.
	Packet contains RR for authoritative zone node: "dns.hello.com."
		-- ignoring RR.dns_ContinueCurrentLookup() for query at 00A5E524.
	dns_AnswerQuestion() for packet at 00A5E524.
	dns_AnswerQuestionFromDatabase() for query at 00A5E524
		node label = www
		question type = 0x0001
	ERROR:  Self-send to address 10.1.1.1!!!
	Log EVENT message 7062 (80001B96):
	
	The following is a description of what occurs during the important phases of this
	log:
	
	1. The DNS query log begins with dns_ProcessMessage().
	
	2. The node for the request is <www.mycompany.com>.
	
	3. The DNS server cannot handle the request Encountered non-authoritative node.
	
	4. The DNS server sends a dns_Process Message of its own to the root servers.
	
	5. The root servers send a response, Processing response packet, indicating that
	  the DNS server IS the SOA for the mycompany.com domain.
	
	6. The DNS server ignores the response packet, and logs a self-send error.
	
	
	REFERENCES
	==========
	
	For more information, please see the following Microsoft Knowledge Base
	article:
	
	  Q218814 DNS Server Logs Event 7062: DNS Server Encountered a Packet....
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
