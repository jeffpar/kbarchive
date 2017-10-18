---
layout: page
title: "Q186820: DNS Server Returns Wrong Response When WINS Lookup Is Enabled"
permalink: kb/186/Q186820/
---

## Q186820: DNS Server Returns Wrong Response When WINS Lookup Is Enabled

	Article: Q186820
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	With WINS lookup enabled, a Microsoft DNS server returns RCODE=3 when a name
	exists but the requested type of resource record (RR) is not available.
	
	CAUSE
	=====
	
	The Microsoft DNS server is returning RCODE=3, which, according to RFC 1035,
	means:
	
	  Name Error - Meaningful only for responses from an authoritative name
	  server, this code signifies that the domain name referenced in the query
	  does not exist.
	
	This only occurs when WINS lookup is enabled and the Microsoft DNS server has
	received a response from WINS that states Name Not Found. This is passed back in
	error to the original requester as rcode-3 (nxdomain).
	
	BIND 4.9.x and 8.1.x name servers cache the fact that the name does not exist so
	subsequent queries for other record types that do exist (such as, QTYPE="MX")
	fail.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	Section 4.1, Domain Implementation and Specification, of RFC 1035 states:
	
	The last three sections have the same format: a possibly empty list of
	concatenated resource records (RRs). The answer section contains RRs that answer
	the question; the authority section contains RRs that point toward an
	authoritative name server; the additional records section contains RRs which
	relate to the query, but are not strictly answers for the question.
	
	RFC 1034 indicates:
	
	When the resolver performs the indicated function, it usually has one of the
	following results to pass back to the client:
	
	- One or more RRs giving the requested data. In this case the resolver returns
	  the answer in the appropriate format.
	
	- A name error (NE). This happens when the referenced name does not exist. For
	  example, a user may have mistyped a host name.
	
	- A data not found error. This happens when the referenced name exists, but
	  data of the appropriate type does not.
	
	RFC 1035 includes the following:
	
	RCODE Response code - this 4 bit field is set as part of responses. The values
	have the following interpretation:
	
	  0 No error condition
	
	  1 Format error - The name server was unable to interpret the query.
	
	  2 Server failure - The name server was unable to process this query due to a
	  problem with the name server.
	
	  3 Name Error - Meaningful only for responses from an authoritative name
	  server, this code signifies that the domain name referenced in the query does
	  not exist.
	
	  4 Not Implemented - The name server does not support the requested kind of
	  query.
	
	  5 Refused - The name server refuses to perform the specified operation for
	  policy reasons. For example, a name server may not wish to provide the
	  information to the particular requester, or a name server may not wish to
	  perform a particular operation (for example, zoneMockapetris [Page 27]
	  transfer) for particular data.
	
	  6-15 Reserved for future use.
	
	The algorithm for operation of a name server specified in RFC 1034, is as
	follows:
	
	  3. Start matching down, label by label, in the zone. The matching process can
	  terminate several ways:
	
	  a. If the whole of QNAME is matched, we have found the node.
	
	  If the data at the node is a CNAME, and QTYPE doesn't match CNAME, copy the
	  CNAME RR into the answer section of the response, change QNAME to the
	  canonical name in the CNAME RR, and go back to step 1.
	
	  Otherwise, copy all RRs which match QTYPE into the answer section and go to
	  step 6.
	
	According to the specified algorithm, the only time an authoritative name error
	is allowed to be specified is in step 3c. In the case that we have, however, the
	QNAME did match, so you should copy all the RRs into the answer section whose
	TYPE matches QTYPE (in this case zero RRs), and jump to step 6 which has NO way
	of setting NXDOMAIN.
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
