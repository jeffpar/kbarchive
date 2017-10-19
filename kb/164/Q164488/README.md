---
layout: page
title: "Q164488: HOWTO: Registry Settings for the Microsoft DNS Server"
permalink: /kb/164/Q164488/
---

## Q164488: HOWTO: Registry Settings for the Microsoft DNS Server

	Article: Q164488
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbnetwork kbSample kbsetup kbASP kbSQLServ kbATM
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article describes settings for the Microsoft Domain Name Service (DNS)
	Server. You can modify most settings using the DNSADMIN tool, although some
	settings can only be altered using Registry Editor.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To change these parameters, use the following procedure:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services
	
	3. From the Edit menu, click Add Value and add a value to the key described in
	  the appropriate entry below. Type in the value, and using the Data Type
	  checkbox to set the value type.
	
	4. Click OK.
	
	5. Quit Registry Editor.
	
	6. Restart the DNS Server for the above changes to take affect.
	
	All of the DNS parameters are registry values located under subkeys of:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\ 
	Services\DNS\Parameters
	
	NOTE: The previous registry key is one path; it has been wrapped for
	readability.
	
	------------------------------------------------------------------
	
	EnableRegistryBoot
	
	     Key: DNS\Parameters<BR/>
	     Value Type: REG_DWORD - Boolean<BR/>
	     Default: 0 (False)<BR/>
	     Valid Range: 0,1 (False, True)<BR/>
	     Description: Configure the DNS Server to read information about
	     Zones either from a Bind style boot file or from the Registry.
	<BR/><BR/>
	     <B>NOTE</B>: If you return to using a boot file, ALL changes to zone
	     information, including new zones, made through the DNS Manager
	     will be lost.<BR/>
	
	Forwarders
	
	     Key: DNS\Parameters<BR/>
	     Value Type: REG_BINARY - Binary list of ip addresses.<BR/>
	     Default: none<BR/>
	     Description: IP address(es) of Forwarder(s).<BR/>
	
	ForwardingTimeout
	
	     Key: DNS\Parameters<BR/>
	     Value Type: REG_DWORD - Time in seconds<BR/>
	     Default: 5<BR/>
	     Description: Timeout in seconds until a forwarded query is
	     regarded as unsuccessful.<BR/>
	
	IsSlave
	
	     Key: DNS\Parameters<BR/>
	     Value Type: REG_DWORD - Boolean<BR/>
	     Default: 0 (False)<BR/>
	     Valid Range: 0,1 (False, True)<BR/>
	     Description: Configures the DNS Server to be a Slave server.
	     Can only be used when the DNS Server is configured to use
	     Forwarder(s).<BR/>
	
	ListenAddresses
	
	     Key: DNS\Parameters<BR/>
	     Value Type: REG_BINARY - Binary list of ip addresses.<BR/>
	     Default: none<BR/>
	     Description: The ListenAddresses key is a list of IP
	     addresses for the DNS server to listen on. The list is not
	     dotted IP strings, but a counted array of raw addresses in
	     net byte order. It should be configured through the
	     ServerProperties\Interfaces dialog box in the admin tool.
	     Editing the rekey is discouraged. If the ListenAddresses key
	     does not exist, the DNS server attempts to bind to every IP
	     address on the computer. This is in general desirable
	     behavior.<BR/>
	
	BindSecondaries
	
	
	     Key: DNS\Parameters<BR/>
	     Value Type: REG_DWORD - Boolean<BR/>
	     Default: 1 Bind compatibility Enabled.<BR/>
	     Valid Range: 0,1 (False, True)<BR/>
	     Description: Disables (old) Bind compatible Zone Transfer.
	     Prior to BIND version 4.9.4, implementations of DNS would send
	     one resource record per message to secondary servers. For this
	     reason, Windows NT defaults to this standard when sending
	     messages to a non-Microsoft secondary DNS Server.
	<BR/><BR/>
	     If the DNS secondary servers are running BIND version 4.9.4 or
	     later, it will be able to send multiple resource records at a time.<BR/>
	
	CleanupInterval
	
	     Key: DNS\Parameters<BR/>
	     Value Type: REG_DWORD - Time in seconds<BR/>
	     Default: 900 (15 minutes)<BR/>
	     Valid Range: 600 - 86400 (ten minutes - one day)<BR/>
	     Description: Specifies how often the DNS Server will clean up
	     the database from expired entries. The DNS Server will also verify
	     that it can find root servers at this interval. If no root servers
	     can be found using cached information, the DNS Server will reload
	     the cache file.
	<BR/><BR/>
	    <B> NOTE</B>: The DNS Server will normally only update any cached NS and
	     corresponding A entries if current time-to-live (TTL) is less than
	     CleanupInterval. (that is, if the entry risks to be removed from the
	     cache before next CleanupInterval)<BR/>
	
	DisableAutoReverseZones
	
	     Key: DNS\Parameters<BR/>
	     Value Type: REG_DWORD - Boolean<BR/>
	     Default: 0 (Create AutoreverseZones Enabled.)<BR/>
	     Valid Range: 0,1 (False, True)<BR/>
	     Description: By default, when the DNS Server is started, three zones       are always created (In Memory only). These zones are used for       localhost lookups and they should always exist on the DNS Server.
	<BR/><BR/>
	        0.in-addr.arpa<BR/>
	        127.in-addr.arpa<BR/>
	        255.in-addr.arpa
	<BR/><BR/>
	     You should normally never disable this because, if they do not exist,
	     lookup to any of these zones will be sent to a root server.
	<BR/><BR/>
	     As these zones are only created in memory and not stored in any zone
	     files, if you need to modify the localhost reverse lookup zone, then
	     you need to manually create it. The correct name for that zone is:
	     0.0.127.in-addr.arpa<BR/>
	
	NoRecursion
	
	     Key: DNS\Parameters<BR/>
	     Value Type: REG_DWORD - Boolean<BR/>
	     Default: 0 (Recursion Enabled.)<BR/>
	     Valid Range: 0,1 (False, True)<BR/>
	     Description: Enables/disables if the DNS Server should do
	     recursive lookups to other DNS Servers.<BR/>
	
	RecursionRetry
	
	     Key: DNS\Parameters<BR/>
	     Value Type: REG_DWORD - Time in seconds<BR/>
	     Default: 2<BR/>
	     Description: Specifies number of seconds that the DNS Server
	     waits for a recursive query to another DNS Server to return.<BR/>
	
	RecursionTimeout
	
	     Key: DNS\Parameters<BR/>
	     Value Type: REG_DWORD - Time in seconds<BR/>
	     Default: 15<BR/>
	     Description: Specifies maximum number of seconds that the DNS Server
	     waits before returning an unsuccessful answer to the client.
	<BR/><BR/>
	     If RecursionTimeout is set to 15 and RecursionRetry is set to 2,
	     then if every query is unsuccessful, the DNS Server will make up
	     to eight queries to other DNS servers before returning an             unsuccessful response to the resolver (client).
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNS\Zones
	--------------------------------------------------------------
	
	Holds information of every configured zone.
	
	Every zone has a registry key under the Zones key.
	
	There will always be a key with the name ".". This key will either refer to the
	cache file, or if the server is a root server, the zone file for the root
	domain.
	
	The DNS Server loads the cache from this file when started. The DNS Server will
	never respond to a query from the cache file. It is used internally in the DNS
	Server to find root name servers.
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNS\Zones\(ZoneName)\
	--------------------------------------------------------------------------
	
	DatabaseFile
	
	     Key: DNS\Zones\(ZoneName)\ <BR/>
	     Value Type: REG_SZ - String that holds File name.<BR/>
	     Default: (zone.dns  i.e. microsoft.com -> microsoft.com.dns)<BR/>
	     Description: Name of the database file.
	     The file is stored in Winnt\System32\DNS<BR/>
	
	Type
	
	     Key: DNS\Zones\(ZoneName)\ <BR/>
	     Value Type: REG_DWORD - Number 0-2<BR/>
	     Default:<BR/>
	     Valid Range: 0,1,2<BR/>
	     Description: Type of Zone/Database.<BR/>
	     0=Cache file, 1=Primary Zone, 2=Secondary Zone.
	<BR/><BR/>
	     <B>NOTE</B>: If the server is configured as a root server, then the       Type of the Zone file of the "." domain will be set to 1. And the      format of the file has to be the same as any other zone file.
	<BR/><BR/>
	     <B>NOTE</B>: A root server does not cache resolved queries. It will      always respond from the zone file.<BR/>
	
	MasterServers
	
	     Key: DNS\Parameters<BR/>
	     Value Type: REG_BINARY - Binary list of ip addresses.<BR/>
	     Default: none<BR/>
	     Description: IP addresses of Master servers. This entry is only
	     available for secondary zones. The DNS Server will contact
	     servers listed here to request a zone transfer.<BR/>
	
	SecondaryServers
	
	     Key: DNS\Parameters<BR/>
	     Value Type: REG_BINARY - Binary list of IP addresses.<BR/>
	     Default: none<BR/>
	     Description: IP addresses of secondary servers to be notified
	     about changes to the zone. This list is also used if you
	     configure the DNS Server to only allow specific servers to
	     request a zone transfer (SecureSecondaries).<BR/>
	
	SecureSecondaries
	
	     Key: DNS\Parameters<BR/>
	     Value Type: REG_DWORD - Boolean<BR/>
	     Default: 0<BR/>
	     Valid Range: 0,1 (False, True)<BR/>
	     Description: Allow ONLY in SecondaryServers listed servers
	     to function as secondary servers.(Request ZoneTransfer.)
	
	
	Additional query words: dns
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbnetwork kbSample kbsetup kbASP kbSQLServ kbATM 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
