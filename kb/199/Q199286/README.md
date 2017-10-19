---
layout: page
title: "Q199286: DNS Event IDs 1 Through 1657 for Windows NT 4.0 SP4"
permalink: /kb/199/Q199286/
---

## Q199286: DNS Event IDs 1 Through 1657 for Windows NT 4.0 SP4

	Article: Q199286
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes DNS event IDs 1 through 1657 for Windows NT Server
	version 4.0 with Service Pack 4 installed. In the list below, each event ID
	number is followed by its definition and description.
	
	MORE INFORMATION
	================
	
	Startup / General Messages
	--------------------------
	
	  1 (Success) DNS_EVENT_STARTING
	  Starting Microsoft DNS Server (Windows NT 4.0 Service Pack 4, September 24,
	  1998).
	
	  2 (Success) DNS_EVENT_STARTUP_OK
	  The DNS Server has started.
	
	  3 (Success) DNS_EVENT_SHUTDOWN
	  The DNS Server has shutdown.
	
	Initialization
	--------------
	
	  110 (Error) DNS_EVENT_INITIALIZATION_FAILED
	  DNS Server could not initialize its basic data structures. The data is the
	  error.
	
	  111 (Error) DNS_EVENT_CANNOT_CREATE_THREAD
	  DNS Server could not create thread. The data is the error.
	
	  112 (Error) DNS_EVENT_RECURSION_INIT_FAILED
	  DNS Server could not initialize recursion. The data is the error.
	
	WINS + NBSTAT
	-------------
	
	  130 (Error) DNS_EVENT_WINS_INIT_FAILED
	  DNS Server could not initialize WINS lookup.
	
	  131 (Error) DNS_EVENT_NBSTAT_INIT_FAILED
	  DNS Server failed to initialize reverse WINS lookup, through netBIOS adapter
	  status lookup. This may be caused by an incorrectly configured NetBIOS over
	  TCP/IP (NetBT) configuration. Try restarting the DNS server. If reverse WINS
	  lookup is not required, remove WINS-R records from zone datafiles and restart
	  the DNS server.
	
	  132 (Warning) DNS_EVENT_NBSTAT_ADAPTER_FAILED
	  DNS Server failed to open adapter %1, for netBIOS adapter status lookup.
	
	RPC Initialization
	------------------
	
	  140 (Error) DNS_EVENT_RPC_SERVER_INIT_FAILED
	  DNS Server could not initialize RPC. The data is the error.
	
	Winsock / Interface Initialization
	----------------------------------
	
	  400 (Error) DNS_EVENT_CANNOT_INITIALIZE_WINSOCK
	  DNS Server could not initialize the socket library. The data is the error.
	
	  403 (Error) DNS_EVENT_CANNOT_CREATE_TCP_SOCKET
	  DNS Server could not create a TCP socket. The data is the error.
	
	  404 (Error) DNS_EVENT_CANNOT_BIND_TCP_SOCKET
	  DNS Server could not bind a TCP socket to address %1. The data is the error.
	  Note that an IP address of 0.0.0.0 indicates a socket that will use all IP
	  addresses available on this computer. That is a valid configuration.
	
	  405 (Error) DNS_EVENT_CANNOT_LISTEN_TCP_SOCKET
	  DNS Server could not listen on TCP socket for address %1. The data is the
	  error. Note that an IP address of 0.0.0.0 indicates a socket that will use
	  all IP addresses available on this computer. That is a valid configuration.
	
	  406 (Error) DNS_EVENT_CANNOT_CREATE_UDP_SOCKET
	  DNS Server could not create datagram socket. The data is the error.
	
	  407 (Error) DNS_EVENT_CANNOT_BIND_UDP_SOCKET
	  DNS Server could not bind a datagram (UDP) socket to %1. The data is the
	  error.
	
	  408 (Error) DNS_EVENT_OPEN_SOCKET_FOR_ADDRESS
	  DNS Server could not open socket for address %1. Verify that this is a valid
	  IP address on this computer. If it is NOT valid, use the Interfaces dialog
	  box under Server Properties in the DNS Manager to remove it from the list of
	  IP interfaces. Then stop and restart the DNS server. (If this was the only IP
	  interface on this computer, the DNS server may not have started as a result
	  of this error. In that case, remove the DNS\Parmeters\ListenAddress value in
	  the services section of the registry and restart.) If this is a valid IP
	  address for this computer, make sure that no other application (for example,
	  another DNS server) is running that would attempt to use the DNS port.
	
	  409 (Warning) DNS_EVENT_UPDATE_LISTEN_ADDRESSES
	  DNS Server listen address list contains IP addresses that are not IP addresses
	  on the DNS Server. Use the DNS manager server properties, interfaces dialog,
	  to verify and reset the IP addresses the DNS Server should listen on.
	
	  410 (Error) DNS_EVENT_INVALID_LISTEN_ADDRESSES
	  DNS Server listen address list contains no IP addresses that are valid IP
	  interfaces on this computer. The DNS Server will use all IP interfaces on the
	  machine. Use the DNS manager server properties, interfaces dialog, to verify
	  and reset the IP addresses the DNS Server should listen on.
	
	  411 (Error) DNS_EVENT_HOSTENT_MAX_IPS
	  DNS Server did not bind to all IP addresses available on this server. Please
	  use the DNS Manager server properties interfaces tab to edit the list of IP
	  addresses on which DNS is running. Add any missing IP addresses to the list.
	  After adding any additional IP addresses to the interfaces list, you MUST
	  stop and restart the DNS service for the new interfaces to receive DNS
	  service. Note that each additional IP interface does consume system resources
	  and adds a small performance overhead to query reception. There is no benefit
	  in DNS to additional addresses beyond those necessary to support the
	  available network cards. Even if the DNS Server is handling multiple zones
	  registered with the Internic, it is not necessary to have different IPs
	  registered for each zone. Hence, though the individual effect if small, since
	  a very large number of IP interfaces may degrade performance, you are
	  encouraged to remove from the machine any IP addresses that are unnecessary.
	
	  412 (Warning) DNS_EVENT_MANY_IP_INTERFACES
	  DNS Server is bound to many IP interfaces.
	
	NOTE: Each additional IP interface does consume system resources and adds a small
	performance overhead to query reception. There is no benefit in DNS to
	additional addresses beyond those necessary to support the available network
	cards. Even if the DNS server is handling multiple zones registered with the
	InterNIC, it is not necessary to have different IPs registered for each zone.
	Therefore, although the individual effect is small, because a very large number
	of IP interfaces may degrade performance, you are encouraged to remove from the
	computer any IP addresses that are unnecessary.
	
	Registry boot problems
	----------------------
	
	  500 (Error) DNS_EVENT_INVALID_REGISTRY_ZONE
	  DNS Server zone %1 has invalid or corrupted registry data. Delete its registry
	  data and recreate with DNS Admin.
	
	  501 (Error) DNS_EVENT_INVALID_ZONE_TYPE
	  DNS Server zone %1 has missing or corrupted zone type in registry. Fix type,
	  or delete zone from registry and recreate with DNS Admin.
	
	  502 (Error) DNS_EVENT_NO_ZONE_FILE
	  DNS Server primary zone %1 has no database file in registry. Add filename, or
	  delete zone from registry and recreate with DNS Admin.
	
	  503 (Error) DNS_EVENT_SECONDARY_REQUIRES_MASTERS
	  DNS Server secondary zone %1, had no master IP addresses in registry.
	  Secondary zones require masters.
	
	  504 (Error) DNS_EVENT_REG_ZONE_CREATION_FAILED
	  DNS Server could not create zone %1, from registry data. Data is the error.
	
	  505 (Error) DNS_EVENT_INVALID_REGISTRY_ZONE_DATA
	  DNS Server zone %1 has invalid or corrupted registry data for %2. Delete its
	  registry data and recreate with the DNS Mangager.
	
	  506 (Error) DNS_EVENT_INVALID_REGISTRY_PARAM
	  DNS Server has invalid or corrupted registry parameter %1. Delete this
	  registry parameter and recreate with DNS Admin.
	
	  507 (Error) DNS_EVENT_INVALID_REGISTRY_FORWARDERS
	  DNS Server encountered invalid or corrupted forwarder registry parameter. Fix
	  parameter or delete all forwarders parameters:
	
	     Forwarders
	     ForwardingTimeout
	     IsSlave
	
	  They may be re-created using the server properties dialog in the DNS manager.
	
	General Database Load Problems
	------------------------------
	
	  700 (Error) DNS_EVENT_DOMAIN_CREATION_FAILED
	  DNS Server could not create domain %1.
	
	  701 (Error) DNS_EVENT_PRIMARY_NO_FILE
	  DNS Server requires primary zones to have zone file.
	
	  706 (Warning) DNS_EVENT_NO_ROOT_NAME_SERVER
	  DNS Server does not have a cache (or database) entry for root name server. The
	  cache file must have at least one NS record, indicating a root DNS Server and
	  a corresponding A record for that root DNS Server. Otherwise, the DNS Server
	  will be unable to contact the root DNS Server on startup and will be unable
	  to answer queries for names outside of its own authoritative zones.
	
	  707 (Error) DNS_EVENT_NO_CACHE_FILE_SPECIFIED
	  DNS Server is not root authoritative and no cache file specified. A cache file
	  must be specified when the DNS Server is not authoritative for the root
	  domain. The cache file must contain NS record(s) for root DNS Servers and
	  corresponding A record(s) for the root DNS Servers. Otherwise, the DNS Server
	  will be unable to contact the root DNS Server on startup and will be unable
	  to answer queries for names outside of its own authoritative zones.
	
	  708 (Informational DNS_EVENT_CACHING_SERVER_ONLY
	  The DNS server has no 'primary' or 'secondary' zones. The DNS server will run
	  as a caching-only server, but will not be authoritative for any zones.
	
	File Loading Problems
	---------------------
	
	  1000 (Error) DNS_EVENT_FILE_OPEN_ERROR
	  DNS Server could not open the file %1. The data is the error.
	
	  1001 (Error) DNS_EVENT_FILE_NOT_MAPPED
	  DNS Server could not map file %1 to memory.
	
	  1003 (Error) DNS_EVENT_CACHE_FILE_NOT_FOUND
	  DNS Server could not find or open cache file.
	
	  1004 (Error) DNS_EVENT_COULD_NOT_OPEN_DATABASE
	  DNS Server could not find or open database file %1.
	
	  1006 (Error) DNS_EVENT_FILE_EXCEEDS_MAX_PATH
	  DNS Server encountered file name %1 exceeding maximum file path length, in
	  file %2, line %3.
	
	  1007 (Error) DNS_EVENT_MISSING_FILENAME
	  DNS Server encountered missing database filename, in file %1, line %2.
	
	  1008 (Error) DNS_EVENT_FILE_PATH_TOO_LONG
	  DNS Server unable to create path to file %1 in directory %2. Path too long.
	
	Boot File Problems
	------------------
	
	  1200 (Error) DNS_EVENT_BOOT_FILE_NOT_FOUND
	  DNS Server could not find or open boot file %1. Data is the error. Note all
	  DNS files by default must be located in the "%SystemRoot%\system32\dns"
	  directory unless otherwise specified.
	
	  1201 (Error) DNS_EVENT_ZONE_CREATION_FAILED
	  DNS Server could not create zone %1, specified in file %2 line %3.
	
	  1202 (Warning) DNS_EVENT_DIRECTORY_DIRECTIVE
	  DNS Server encountered unsupported "directory" directive in file %1, line %2.
	  By default all database files must be located in the
	  "%SystemRoot%\system32\dns" directory unless otherwise specified.
	
	  1203 (Error) DNS_EVENT_NO_FORWARDING_ADDRESSES
	  DNS Server encountered FORWARDERS directive with no forwarding addresses, in
	  file %1, line %2.
	
	  1204 (Error) DNS_EVENT_SLAVE_REQUIRES_FORWARDERS
	  DNS Server encountered SLAVE directive without preceeding FORWARDERS list, in
	  file %1, line %2.
	
	  1205 (Error) DNS_EVENT_UNKNOWN_BOOTFILE_OPTION
	  DNS Server encountered unknown boot option %1, in file %2, line %3.
	
	Database File Parsing Problems
	------------------------------
	
	  1501 (Error) DNS_EVENT_COULD_NOT_PARSE_DATABASE
	  DNS Server could not parse database file %1 for zone %2.
	
	  1502 (Error) DNS_EVENT_DATABASE_PARSING_ERROR
	  DNS Server could not parse token "%1" in database file %2, line %3.
	
	  1503 (Error) DNS_EVENT_PARSING_ERROR_LINE
	  DNS Server could not parse database file %1 line %2.
	
	  1504 (Error) DNS_EVENT_UNEXPECTED_TOKEN
	  DNS Server could not parse unexpected token "%1" in database file %2, line %3.
	
	  1505 (Error) DNS_EVENT_UNEXPECTED_END_OF_TOKENS
	  DNS Server unexpected end of line, in database file %1, line %2.
	
	  1506 (Error) DNS_EVENT_INVALID_TOKEN
	  DNS Server encountered invalid token "%1" in database file %2, line %3.
	
	  1507 (Error) DNS_EVENT_INVALID_CLASS_TOKEN
	  DNS Server encountered invalid class token "%1" in database file %2, line %3.
	  DNS Server supports only Internet (IN) class records.
	
	  1508 (Error) DNS_EVENT_IGNORING_FILE_RECORD
	  DNS Server ignoring invalid resource record in database file %1, line %2. See
	  previous event for description of error. Although the DNS Server can continue
	  to load by ignoring this record, it is strongly recommended that you
	  investigate the error associated with this record and either correct it or
	  remove the record from the database file.
	
	Directive problems
	------------------
	
	  1520 (Warning) DNS_EVENT_UNKNOWN_DIRECTIVE
	  DNS Server encountered the unknown directive "%1" in file %2, line %3. The
	  directive was ignored.
	
	  1521 (Warning) DNS_EVENT_UNSUPPORTED_DIRECTIVE
	  DNS Server encountered the unsupported directive "%1" in file %2, line %3. The
	  directive was ignored.
	
	  1522 (Warning) DNS_EVENT_OBSOLETE_DIRECTIVE
	  DNS Server encountered the obsolete directive "%1" in file %2, line %3. The
	  directive was ignored.
	
	  1523 (Warning) DNS_EVENT_DIRECTIVE_NOT_YET_IMPLEMENTED
	  DNS Server encountered the directive "%1" in file %2, line %3. The directive
	  is not yet supported and was ignored.
	
	Domain Name Problems
	--------------------
	
	  1540 (Error) DNS_EVENT_DOMAIN_NODE_CREATION_ERROR
	  DNS Server unable to create domain node.
	
	  1541 (Error) DNS_EVENT_PARSED_INVALID_DOMAIN_NAME
	  DNS Server encountered invalid domain name "%1" in database file %2, line %3.
	
	  1542 (Error) DNS_EVENT_INVALID_DOTTED_DOMAIN_NAME
	  DNS Server encountered invalid domain name "%1".
	
	  1543 (Error) DNS_EVENT_DOMAIN_NAME_TOO_LONG
	  DNS Server encountered domain name "%1" exceeding maximum length.
	
	  1544 (Error) DNS_EVENT_INVALID_ORIGIN_TOKEN
	  DNS Server encountered invalid "@" token "%1", in database file %2, line %3.
	
	  1545 (Error) DNS_EVENT_FILE_NODE_OUTSIDE_ZONE
	  DNS Server encountered name outside zone, in zone file %1, line %2.
	
	  1546 (Error) DNS_EVENT_FILE_INVALID_NS_NODE
	  DNS Server encountered invalid NS (Name Server) record, in zone file %1, line
	  %2. NS records must be at zone root node or be at root of a sub-zone being
	  delegated.
	
	  1547 (Error) DNS_EVENT_FILE_INVALID_A_NODE
	  DNS Server encountered an invalid A (Address) record, in zone file %1, line
	  %2. A records must be at a domain name within the zone, with the exception of
	  "glue" A records which are at hostname given in an NS record contained in
	  zone.
	
	Resource Record Problems
	------------------------
	
	  1600 (Error) DNS_EVENT_UNKNOWN_RESOURCE_RECORD_TYPE
	  DNS Server encountered unknown or unsupported record type %1 in database file
	  %2, line %3.
	
	  1601 (Warning) DNS_EVENT_OBSOLETE_RECORD_SKIPPED
	  DNS Server encountered the obsolete record type %1 in database file %2, line
	  %3. The record was ignored. MD or MF record types are obsolete. They should
	  be converted to MX record type which has the format:
	
	     MX <preference value> <mail server domain name>
	
	  Example:
	
	     mycompany.com   MX 10 mailer1.mycompany.com.
	
	  1602 (Error) DNS_EVENT_SOA_NOT_FIRST_RECORD
	  DNS Server encountered resource record prior to SOA record in database %1,
	  line %2.
	
	  1603 (Error) DNS_EVENT_INVALID_SOA_RECORD
	  DNS Server encountered invalid SOA record in file %1, line %2. SOA record must
	  be first record in zone file and must belong to the root of zone.
	
	  1604 (Error) DNS_EVENT_SOA_INVALID_IN_CACHE_FILE
	  DNS Server encountered SOA record in cache file %1, line %2.
	
	  1605 (Error) DNS_EVENT_AUTHORITATIVE_ZONE_WITHOUT_SOA
	  DNS Server detected an authoritative zone without an SOA record.
	
	  1610 (Error) DNS_EVENT_PARSED_ADD_RR_AT_CNAME
	  DNS Server encountered a resource record, file %1, line %2 for a domain node
	  with an existing CNAME record. A CNAME must be the only record for its domain
	  name.
	
	  1611 (Error) DNS_EVENT_PARSED_CNAME_NOT_ALONE
	  DNS Server encountered a CNAME record, file %1, line %2 for a domain name with
	  existing resource records. A CNAME must be the only record for its domain
	  name.
	
	  1612 (Error) DNS_EVENT_PARSED_CNAME_LOOP
	  DNS Server encountered CNAME record, file %1, line %2 that forms CNAME loop.
	
	  1613 (Error) DNS_EVENT_INVALID_PREFERENCE
	  DNS Server encountered invalid preference value "%1" in database file %2, line
	  %3. Preference must be a valid 16-bit unsigned integer quantity.
	
	  1614 (Error) DNS_EVENT_INVALID_DWORD_TOKEN
	  DNS Server encountered token "%1" in file %2, line %3, that it could not
	  convert to DWORD value.
	
	  1615 (Error) DNS_EVENT_TOO_MANY_TEXT_RECORDS
	  DNS Server encountered too many text records at token "%1", in file %2, line
	  %3.
	
	  1616 (Error) DNS_EVENT_TEXT_STRING_TOO_LONG
	  DNS Server encountered text "%1" exceeding maximum length, in file %2, line
	  %3.
	
	  1617 (Error) DNS_EVENT_INVALID_IP_ADDRESS_STRING
	  DNS Server encountered invalid IP address "%1", in file %2, line %3.
	
	  1618 (Error) DNS_EVENT_INVALID_IPV6_ADDRESS
	  DNS Server encountered invalid IPv6 address "%1", in file %2, line %3.
	
	  1619 (Error) DNS_EVENT_UNKNOWN_PROTOCOL
	  DNS Server could not find protocol "%1" in database file %2, line %3.
	
	  1620 (Error) DNS_EVENT_UNKNOWN_SERVICE
	  DNS Server could not find well known service "%1" in database file %2, line
	  %3.
	
	  1621 (Error) DNS_EVENT_WKS_PORT_UNSUPPORTED
	  DNS Server encountered WKS service "%1" with port exceeding WKS maximum port
	  in database file %2, line %3. Port is unsupported.
	
	MS RR Problems
	--------------
	
	  1650 (Error) DNS_EVENT_INVALID_WINS_RECORD
	  DNS Server encountered invalid WINS record in file %1, line %2. WINS records
	  are subject to the following conditions:
	
	- WINS record must be in forward lookup zone (not in in-addr.arpa domain).
	
	- Only one WINS record may be specified in a zone file.
	
	- WINS record must belong to the zone root (the WINS record name must be the
	  origin of the zone). If WINS lookup is desired for names in a sub-domain of
	  the zone, then the sub-domain must be split into its own zone.
	
	- WINS record must specify at least one WINS server.
	
	  The format of a WINS record:
	
	     WINS [LOCAL] [L] [C]  [WINS IPs...]
	
	  Examples (zone root assumed to be current origin):
	
	     @ IN       WINS LOCAL L1 C10 10.10.10.1 10.10.10.2 10.10.10.3
	     @ IN       WINS 10.10.10.1
	
	  1651 (Error) DNS_EVENT_INVALID_NBSTAT_RECORD
	  DNS Server encountered invalid WINS-R record in file %1, line %2. WINS-R
	  records are subject to the following conditions:
	
	- WINS-R record must be in reverse lookup zone (under in-addr.arpa domain).
	
	- Only one WINS-R record may be specified in a zone file.
	
	- WINS-R record must belong to the zone root (the WINS record name must be the
	  origin of the zone).
	
	- WINS-R record must specify at domain for the resulting name.
	
	  The format of a WINS-R record:
	
	     WINS-R [LOCAL] [L] [C]
	
	  Examples (zone root assumed to be current origin):
	
	     @ IN       WINS-R LOCAL L1 C10 mycompany.com.
	     @ IN       WINS-R wins.mycompany.com.
	
	  1654 (Error) DNS_EVENT_UNKNOWN_WINS_SCOPE_MAPPING_FLAG
	  DNS Server encountered unknown WINS-DNS mapping flag %1, in file %2, line %3.
	
	  1656 (Error) DNS_EVENT_NO_NBSTAT_DOMAIN
	  DNS Server encountered WINS-R record without domain for resulting names,
	  required by mapping, in file %1, line %2. WIN-R record must include DNS
	  domain in which hostnames resolved by nbstat (WINS-R) should be put.
	
	  1657 (Error) DNS_EVENT_NBSTAT_DOMAIN_WITH_SCOPE
	  DNS Server encountered WINS-R domain %1, with mapping set to use scope as
	  result domain, in file %2, line %3. If use of NetBIOS scope is specified in
	  WINS-R record, then no domain is required. Hostnames resolved by nbstat
	  (WINS-R) lookup, are placed into the DNS domain corresponding to the scope of
	  the resolved hostname.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400xsearch
	Version           : :4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
