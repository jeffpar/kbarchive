---
layout: page
title: "Q159310: Updated Version of Dns.exe Fixes Several Problems"
permalink: kb/159/Q159310/
---

## Q159310: Updated Version of Dns.exe Fixes Several Problems

	Article: Q159310
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An updated version of Dns.exe is available to fix the following problems:
	
	- A lookup for a non-existent A record takes about 30 seconds to time out: When
	  the internal DNS server is queried, it goes to the root server. If the root
	  server returns an RCODE of 0, the Microsoft DNS server does not respond to
	  its client immediately. Some versions of BIND may return an RCODE of 0. This
	  can cause a 30 second delay at the querying client.
	
	
	- Problem resolving some MX records: If a DNS client does a recursive query to
	  the Microsoft DNS server for an MX record and the authoritative DNS server
	  for that MX record returns an SOA record instead (because the MX record
	  doesn't exist), the Microsoft DNS server does not return that SOA record to
	  the client. A BIND DNS server does return the SOA record to the DNS client
	  even though it requested an MX record. Microsoft has modified its DNS service
	  to be compatible with BIND.
	
	
	- BIND incompatibility: When the Microsoft DNS service receives a query for a
	  name that requires an authoritative lookup, and the DNS server handling the
	  lookup is a BIND server, it may respond with a CNAME record, causing the name
	  server (NS) record for the BIND server to be overwritten in cache. The NS
	  record is used to specify the authoritative name server for a domain.
	
	
	- When using the new WriteAuthorityNs reg key that was added in Windows NT 4.0
	  SP3 DNS, DNS queries will always return authority records=0 and additional=0
	  instead the actual count for this.
	
	
	- If you delegate a zone (such as mydepartment.mycompany.com) to a DNS server
	  that is not in the zone (such as yourserver.yourdepartment.company.com), when
	  a client does a lookup on a host in the delegated zone, it will not succeed.
	  If you ping the server that the zone was delegated to
	  (yourserver.yourdepartment.company.com) once so that it is cached, lookups
	  will start to succeed. The problem was caused by a problem following the glue
	  record that was associated with the delegation, and it has been fixed.
	
	
	- Access Violation in Dns.exe: Dr Watson may report an access violation on a
	  secondary DNS server when it is receiving invalid records from the primary,
	  and the data changes on the primary from the initial zone transfer.
	
	
	Other updates and optimizations:
	
	- Reduced traffic to root servers: This version eliminates the automatic root
	  query on startup and in the timeout thread; instead, it queries the root only
	  when it receives a query that needs to be sent to the root servers, and
	  limits retrying the root servers to once every ten minutes.
	
	- Better recursion response: This version supports direct forwarding of a
	  response from the remote DNS, where possible.
	
	- Eliminates a deadlock condition hit by a few customers. At least one person
	  posting on the MS-DNS newsgroup reported hitting a deadlock. The symptom of
	  this is that the server stops responding to all requests.
	
	- Better use of SOA in authority section: This version still has an
	  optimization to avoid this on local queries, but overall should be a more
	  "friendly" partner for remote DNS servers when sending a NAME_ERROR or
	  no-records response.
	
	- Local network prioritization of queries: If there are multiple A records,
	  this version of the server puts the one that "fits best" first; if none fits
	  best, a straight round robin scheme is followed. This is off by default but
	  can be turned on with the new LocalNetPriority registry flag:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNS\Parameters
	
	  Value Name: LocalNetPriority
	  Data Type : REG_DWORD
	  Data : 0 or 1 (0 is disabled)
	
	  NOTE: This key does not exist by default.
	
	
	For more information see the following article in the Microsoft Knowledge base:
	
	  ARTICLE-ID: Q177883
	  TITLE : DNS Server Stops Using Round Robin for Host Name Resolution
	
	- WildcardAllTypes registry flag: If on, this version of DNS will use wildcards
	  on all types -- even where they make no sense; this was added for a specific
	  customer scenario where it is used for a security check using reverse lookup.
	
	- Cache pollution fix: There was a recently-publicized problem where a remote
	  DNS returned bogus data, polluting the cache of DNS servers on the Internet.
	  This was used to point some traffic that would normally go to InterNIC sites
	  to another site. This release plugs that hole. All data received must be for
	  names at or below the zone for which the NS is queried. For example, when you
	  query the microsoft.com DNS server, you will accept any data for
	  microsoft.com or ntdev.microsoft.com but will reject any data for
	  someothersite.com.
	
	- Non-port-53 operation: The purpose of this is to allow firewall of port 53
	  and still have the server go out and query the world. Anyone running a server
	  on a firewall who is not interested in incoming traffic may be interested.
	  You need to set the SendOnNonDnsPort registry key, to get non-53 sends. If
	  you set this to a specific port > 1024, you actually run on that port, any
	  < 1024 true value means you bind to any port.
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNS\Parameters
	
	  Value Name: SendOnNonDnsPort
	  Data Type : REG_DWORD
	  Data : Desired Port#(53 is default)(port numbers are in decimal)
	
	  NOTE: This key does not exist by default.
	
	- No-forward of delegations: This is on by default. If you delegate
	  foo.ntdev.microsoft.com to some server, that server is usually on your lan
	  and you do not want to go through your forwarding server to reach it. To turn
	  it off, set the ForwardDelegations registry key.
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNS\Parameters
	
	  Value Name: ForwardDelegations
	  Data Type : REG_DWORD
	  Data : 0 or 1 (0 is disabled)
	
	  NOTE: This key does not exist by default.
	
	
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
	
	The hotfix mentioned above, may experience some problems as specified below:
	
	- Local network prioritization of queries may cause Round-Robin load balancing
	  to fail. If you experience this problem turn off the LocalNetPriority flag as
	  mentioned above.
	
	
	- High Speed Zone Transfers
	  The default configuration does not attempt to include multiple records in each
	  transaction. This may cause BIND 4.9.5 and newer DNS Servers to have slow
	  zone transfers. If you experience this problem set the BindSecondaries flag
	  to use faster zone transfers:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNS\Parameters
	
	  Value Name: BindSecondaries
	  Data Type : REG_DWORD
	  Data : 0 or 1 (0 = high speed; 1 = slower transfers)
	
	  NOTE: This key does not exist by default. Transfers between Microsoft DNS
	  Servers will always be done with using the faster, high compression method,
	  regardless of how the BindSecondaries flag is set. After changing this
	  registry key, you must stop and restart the DNS Server service.
	
	  For more information see the following article in the Microsoft Knowledge
	  base:
	
	  ARTICLE-ID: Q151416
	  TITLE : Microsoft DNS Compatibility w/BIND Versions Earlier Than 4.9.4
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
