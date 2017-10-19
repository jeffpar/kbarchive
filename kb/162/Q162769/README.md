---
layout: page
title: "Q162769: Wrong CNAME RR Causes DNS Startup and Zone Transfer Failure"
permalink: /kb/162/Q162769/
---

## Q162769: Wrong CNAME RR Causes DNS Startup and Zone Transfer Failure

	Article: Q162769
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.00 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Windows NT 4.0 DNS server contains an invalid CNAME RR record (see RFC
	1034), the following two problems may occur:
	
	- On a computer running Windows NT 4.0, you receive the following error when
	  you attempt to use a "net start DNS" command:
	
	  System error 13 has occurred. The data is invalid.
	
	- BIND to a Windows NT zone transfer does not complete. The event log only
	  shows the following message:
	
	     Zone transfer is in progress.
	
	CAUSE
	=====
	
	This problem is caused by the following invalid Resource Record that is
	originally coming from a Digital UNIX server running BIND DNS 4.9.4-P1:
	
	  name     IN A  x.x.x.x
	           IN CNAME name-xxx.xxx.xx.xxx.xxxxxx.xxx
	
	RESOLUTION
	==========
	
	Remove the invalid CNAME RR.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	While Windows NT shows the invalid entry by line number (DNS event ID 203: DNS
	server could not parse database file x line number y), BIND to Windows NT zone
	transfer does not generate an error, but does not complete either. In a network
	trace, you see Windows NT TCP resetting the connection during zone transfer.
	
	BIND to BIND zone transfer reports this CNAME record as invalid, but still
	completes the zone transfer.
	
	See RFC 1034 for more information about CNAME Resource Records. The following is
	an excerpt from RFC 1034:
	
	  The domain system provides such a feature using the canonical name (CNAME)
	  RR. A CNAME RR identifies its owner name as an alias, and specifies the
	  corresponding canonical name in the RDATA section of the RR. If a CNAME RR is
	  present at a node, no other data should be present; this ensures that the
	  data for a canonical name and its aliases cannot be different. This rule also
	  insures that a cached CNAME can be used without checking with an
	  authoritative server for other RR types.
	
	Additional query words: domain name system request comments comment
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
