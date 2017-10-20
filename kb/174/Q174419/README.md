---
layout: page
title: "Q174419: HOWTO: Configure a Subnetted Reverse Lookup Zone on Windows NT"
permalink: /kb/174/Q174419/
---

## Q174419: HOWTO: Configure a Subnetted Reverse Lookup Zone on Windows NT

{% raw %}

	Article: Q174419
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbhowto kbinfo kbArtTypeINF
	Last Modified: 12-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NOTE: Creating delegated subnetted reverse lookup zones is not a trivial task.
	It is important to understand how DNS zones work before attempting to create
	subnetted reverse lookup zones. There are numerous notes throughout this
	document to which you should pay close attention. It is recommended that you
	first attempt these procedures in a test environment before deploying them on a
	live network because of the ease with which mistakes can occur during
	configuration.
	
	The rapid growth of the Internet community created the need to subnetwork full IP
	networks into smaller portions. In a subnetted environment, DNS servers can
	easily delegate authority of forward lookup zones because they are independent
	of the underlying subnetted infrastructure. However, because of the inverse
	structure of reverse lookup zones and their strict reliance on the specific
	subnet structure, delegation of these zones requires special considerations. The
	Internet Engineering Task Force (IETF) has created RFC 2317, "Classless
	IN-ADDR.ARPA Delegation," which discusses these considerations.
	
	Delegating subnetted reverse lookup zones complements the ability to delegate
	forward lookup zones. This flexibility in zone ownership allows you, as the
	administrator of a parent domain, to delegate control of both a child subdomain
	and a corresponding subnet of addresses to another administrator. Conversely, as
	the administrator of a child domain, you now have the control necessary to make
	changes to both DNS host (A) records or IP address (PTR) records without having
	to make a request for change through the parent domain.
	
	This article discusses how to configure delegated subnetted reverse lookup zones
	for a Microsoft Windows NT 4.0 DNS server.
	
	NOTE: Simply because your network environment is subnetted does not imply that
	your DNS server must be configured in the manner described in this article.
	Creating delegated subnetted reverse lookup zones is an administrative choice
	only; it is not solely dictated by the underlying subnetted infrastructure.
	
	MORE INFORMATION
	================
	
	A "classful" IP addressing scheme is one that does not break an IP network down
	into smaller segments. For example, a class C address of 192.168.1.0 with a
	subnet mask of 255.255.255.0 is a classful IP addressing scheme.
	
	A "classless" IP addressing scheme is one that uses a subnet mask to divide an IP
	address into smaller segments. For example, a class C address of 192.168.1.0
	with a subnet mask of 255.255.255.192 is a classless IP addressing scheme. Along
	with this network, you would also have the following IP network addresses:
	192.168.1.64, 192.168.1.128, and 192.168.1.192.
	
	When subnetting IP networks, additional bits are taken from the host portion of
	the IP address and given to the network portion. This is defined by adding
	additional bits to the subnet mask. The value
	11111111.11111111.11111111.00000000 shows us a classful subnet mask for a Class
	C network of 255.255.255.0, while the value 11111111.11111111.11111111.11000000
	illustrates the classless subnet mask of 255.255.255.192. Therefore, from the
	example above, we know that:
	
	  If the subnet mask is   The subnet mask bit-count is
	  ---------------------   ----------------------------
	  255.255.255.128          25
	  255.255.255.192          26
	  255.255.255.224          27
	  255.255.255.240          28
	  255.255.255.248          29
	  255.255.255.252          30
	  255.255.255.254          31
	
	The Syntax
	----------
	
	Delegated subnetted reverse lookup zones can be used to transfer administrative
	control between any parent and child IN-ADDR.ARPA zone in the DNS. Common
	configurations involve an ISP (Parent) delegating to a Customer Site (Child) or
	a Corporate Headquarters (Parent) delegating to a Corporate Remote Site (Child).
	Because the ISP scenario is most typical, it will be used in the following
	example.
	
	When creating classless reverse lookup zones, you may use notation such as the
	following:
	
	  <subnet>-<subnet mask bit count>.100.168.192.in-addr.arpa or
	
	  <subnet>/<subnet mask bit count>.100.168.192.in-addr.arpa or
	
	  <subnet>.<subnet mask bit count>.100.168.192.in-addr.arpa or
	
	  SubnetX<subnet>.100.168.192.in-addr.arpa (where X is the subnet number
	  assigned by parent) or
	
	  <subnet>.100.168.192.in-addr.arpa
	
	For example:
	
	  64-26.100.168.192.in-addr.arpa or
	
	  64/26.100.168.192.in-addr.arpa or
	
	  64.26.100.168.192.in-addr.arpa or
	
	  Subnet3.100.168.192.in-addr.arpa or
	
	  64.100.168.192.in-addr.arpa
	
	This indicates that the subnetted reverse lookup zone is the 64 subnetwork that
	is using 26 bits for its subnet mask.
	
	NOTE: If you will be performing any Zone Transfers, between parent and child you
	need to check the syntax of the files that will be transferred between DNS
	servers. Not all versions of DNS servers will support the various syntax methods
	defined in the RFC (the hyphen, the slash, etc.). Microsoft DNS will support any
	of these methods.
	
	NOTE: Whichever syntax is chosen in the Parent domain MUST be identical to the
	syntax used in the Child domain.
	
	The Checklist
	-------------
	
	Filling out the following checklist will make walking through this document
	easier.
	
	Parent Checklist                         Child Checklist
	----------------                         ---------------
	<Parent DNS server name>                 <Child DNS server name>
	<Parent DNS server IP>                   <Child DNS server IP>
	<subnet mask>                            <subnet mask>
	<subnet><syntax><subnet mask bit count>  <subnet><syntax><subnet  mask bit 
	                                         count>
	
	Here is the example we will use of an ISP who has taken a Class C range and
	subnetted it into 4 subnets by using the 255.255.255.192 subnet mask. The 4
	subnets are 192.168.100.0, 192.168.100.64, 192.168.100.128 and 192.168.100.192.
	The subnet being delegated to the Customer Site is the second range, that is the
	64 network using 65-126 for the host IP addresses.
	
	  Parent Checklist       Child Checklist
	  ----------------       ---------------
	  NS.microsoft.com       NS1.msn.com
	  192.168.43.8           192.168.100.126
	  255.255.255.192        255.255.255.192
	  0-26                   64-26
	  64-26
	  128-26	
	  192-26
	
	The Parent Walkthrough for Windows 2000 Environments
	----------------------------------------------------
	
	- Launch the DNS MMC (Microsoft Management Console).
	
	- Under view, change from standard view to advanced.
	
	- Highlight Reverse Lookup Zones, right click and select new zone.
	
	- Select Zone Type of Active Directory Integrated or Standard Primary, click
	  next.
	
	- Type in either the non-subnetted network ID (for example, 192.168.100) or the
	  reverse lookup zone name (for example, 100.168.192.in-addr.arpa) for the
	  non-subnetted class C address, click next.
	
	- If you selected standard primary, you can either create a new zone file or if
	  there is an existing zone file, you can place it in the
	  %systemroot%\winnt\system32\dns directory and the server will read it from
	  that directory.
	
	- Once the primary parent zone is created, right click on the newly created
	  zone, and select new delegation.
	
	- Add the naming convention you choose as the parent for the delegated child
	  zone, (for example, 64-26). Be sure to communicate that naming convention to
	  the administrator of the child domain. See examples.
	
	- Add the CNAME (ALIAS) RR (resource records) for the devices within each of
	  the subnets.
	
	For example,
	
	  65 CNAME 65.64-26.100.168.192.in-addr.arpa.
	
	NOTES:
	- Dynamic updates for subnetted reverse lookups do not work in Windows 2000.
	  The records will need to be added manually.
	
	- Using "Create Associated PTR record" checkbox will not work for the subnetted
	  reverse lookup zone when "A" (host) record is created through GUI.
	
	The Parent Walkthrough for Windows NT 4.0 Environments
	------------------------------------------------------
	
	NOTE: The Microsoft DNS Manager can be used to set up the reverse lookup zone for
	that name server, as well as the subnetted reverse lookup zone or zones. After
	the in-addr.arpa zone and the subnetted in-addr.arpa zone(s) are created, the
	files will need to be manually edited to include the NS, CNAME, and PTR records
	in each zone file. NOTE: Several prerequisites are assumed in this example. It
	is assumed that the Microsoft DNS server has been installed and that the TCP/IP
	properties (IP Address, Subnet Mask, Default Gateway, and so on) have been
	configured correctly.
	
	1. Apply the latest Microsoft Windows NT Service Pack.
	
	2. Restart your computer when prompted.
	
	3. Click Start, select Programs, select Administrative Tools, and then click DNS
	  Manager.
	
	4. On the DNS menu, click New Server, type the IP address or host name of your
	  DNS server, and then click OK.
	
	5. Create the non-subnetted reverse lookup zone using the following steps:
	
	  a. Click your DNS server, and then click New Zone on the DNS menu.
	
	  b. Click the Primary radio button in the Creating New Zone dialog box, and
	     then click Next.
	
	  c. Type "100.168.192.in-addr.arpa" (without the quotation marks) in the Zone
	     Name text box, and then press TAB.
	
	  d. The Zone File text box should automatically be populated with
	     100.168.192.in-addr.arpa.dns.
	
	  e. Click Finish.
	
	6. When you have finished creating the zones, stop the DNS Server using either
	  of the following methods:
	
	   - Click Start, point to Settings, click Control Panel, and then double-click
	     the Services icon. Select Microsoft DNS Server in the Service list and
	     click Stop.
	
	   - Type the following at a command prompt and press Enter:
	
	        NET STOP DNS
	
	  NOTE: It is important to stop the DNS service before editing the Zone files or
	  you may lose manually recorded information.
	
	7. With a text editor, open the non-subnetted reverse lookup zone file that you
	  have just created. We now need to add an NS record that will delegate a
	  subnet to the child dns server. Add the following to the end of the file:
	
	  ;  Begin Delegation comments
	  ;
	  <subnet><syntax><subnet mask bit count>        NS     <Child DNS server name>
	  ;  End delegation
	
	  Our example will look like this:
	
	  ;  Begin Delegation sub-zone:  64-26.100.168.192.in-addr.arpa.
	  ;
	  64-26                   NS	NS1.msn.com.
	  ;  End delegation
	
	8. It is now necessary to create a CNAME records for each addresses in the
	  delegated subnetted range. Our example looks like this:
	
	     65    CNAME    65.64-26.100.168.192.in-addr.arpa.
	     66    CNAME    66.64-26.100.168.192.in-addr.arpa.
	     67    CNAME    67.64-26.100.168.192.in-addr.arpa.
	     68    CNAME    68.64-26.100.168.192.in-addr.arpa.
	     69    CNAME    69.64-26.100.168.192.in-addr.arpa.
	     ...
	     126   CNAME    126.64-26.100.168.192.in-addr.arpa.
	
	  NOTE: The ellipse, "...", indicates the unique IP addresses and hosts between
	  67 and 126. Ellipses are not valid in the file.
	
	9. By repeating steps 8 and 9, you may delegate any additional subnetted zones.
	
	10. After the NS and CNAME records have been entered, save and exit the file.
	
	11. Start the DNS server using one of the following methods:
	
	   - Click Start, point to Settings, click Control Panel, and then double-click
	     the Services icon. Select Microsoft DNS Server in the Service list and
	     click Start.
	
	   - Type the following at a command prompt and press Enter:
	
	        NET START DNS
	
	The Child Walkthrough for Windows 2000 Environments
	---------------------------------------------------
	
	1. Launch the DNS MMC (Microsoft Management Console).
	
	2. Under view, change from standard view to advanced.
	
	3. Highlight Reverse Lookup Zones, right click and select new zone.
	
	4. Select Zone Type of Active Directory Integrated or Standard Primary, click
	  next.
	
	5. Select the option for the "Reverse lookup zone name". Type in the name of the
	  reverse lookup zone, (for example, 64-26.100.168.192.in-addr.arpa) for the
	  subnetted class C address. Be sure to use the naming convention supplied by
	  the administrator of the parent domain, click next.
	
	6. If you selected standard primary, you can either create a new zone file or if
	  there is an existing zone file, you can place it in the
	  %systemroot%\winnt\system32\dns directory and the server will read it from
	  that directory.
	
	7. Manually add your PTR (pointer records) as you would any reverse lookup
	  zone.
	
	  For example:
	
	  65 PTR host65.msn.com.
	
	8. You may have to configure the child DNS server(s), which are hosting the
	  delegated zone, to forward to the parent DNS servers. This enables the child
	  DNS servers to resolve records in the zones hosted by the parent DNS servers.
	
	The Child Walkthrough for  Window NT 4.0 Environments
	-----------------------------------------------------
	
	1. Apply the latest Microsoft Windows NT Service Pack.
	
	2. Restart your computer when prompted.
	
	3. Click Start, select Programs, select Administrative Tools, and then click DNS
	  Manager.
	
	4. On the DNS menu, click New Server, type the IP address or host name of your
	  DNS server, and then click OK.
	
	5. Create a subnetted reverse lookup zone using the following steps:
	
	  a. Click your DNS server, and then click New Zone on the DNS menu.
	
	  b. Click the Primary radio button in the Creating New Zone dialog box, and
	     then click Next.
	
	  c. Depending on the syntax chosen at the Parent, select one of pairs listed
	     below. For our example we'll type "64-26.100.168.192.in-addr.arpa"
	     (without the quotation marks) in the Zone Name text box, and then press
	     Tab.
	
	        Zone Name: 64-26.100.168.192.in-addr.arpa
	        Zone File: 64-26.100.168.192.in-addr.arpa.dns or
	
	        Zone Name: 64/26.100.168.192.in-addr.arpa
	        Zone File: 64.26.100.168.192.in-addr.arpa.dns or
	
	        Zone Name: 64.26.100.168.192.in-addr.arpa
	        Zone file: 64.26.100.168.192.in-addr.arpa.dns or
	
	        Zone Name: 64.100.168.192.in-addr.arpa
	        Zone file: 64.100.168.192.in-addr.arpa.dns or
	
	        Zone Name: Subnet64.100.168.192.in-addr.arpa
	        Zone file: Subnet64.100.168.192.in-addr.arpa.dns or
	
	     NOTE: Microsoft DNS Administrator will automatically populate the File Name
	     field when creating zones. If you use the "/" syntax, please be sure to
	     change the filename and replace the "/" character because the underlying
	     file system will not allow a "/" in the file name. Simply substitute the
	     slash character in the filename with another character such as the one
	     suggested in the second example above
	     (64.26.100.168.192.in-addr.arpa.dns).
	
	  d. The Zone File text box should automatically be populated with
	     64-26.100.168.192.in-addr.arpa.dns.
	
	  e. Click Finish.
	
	  f. Repeat steps a through e, for any additional subnets to being delegated to
	     you.
	
	6. When you have finished creating the zones, stop the DNS server using either
	  of the following methods:
	
	   - Click Start, select Settings, click Control Panel, and then double-click
	     the Services icon. Select Microsoft DNS Server in the Service list and
	     click Stop.
	
	   - Type the following at a command prompt and press Enter:
	
	        NET STOP DNS
	
	  NOTE: It is important to stop the DNS service before editing the Zone files or
	  you may lose manually recorded information.
	
	7. Open the subnetted reverse lookup zone file using a text editor. It is now
	  necessary to create the PTR records for each address in the delegated
	  subnetted range. Add the following to the end of the file:
	
	     65                      PTR     host65.msn.com.
	     66                      PTR     host66.msn.com.
	     67                      PTR     host67.msn.com.
	     ...
	     126                     PTR     host126.msn.com.
	
	  NOTE: The ellipse, "...", indicates the unique IP addresses and hosts between
	  67 and 126. Ellipses are not valid in the file.
	
	8. After the PTR records have been entered, save and exit the file.
	
	9. Restart the DNS server using one of the following methods:
	
	   - Click Start, point to Settings, click Control Panel, and then double-click
	     the Services icon. Select Microsoft DNS Server in the Service list and
	     click Start.
	
	   - Type the following at a command prompt and press Enter:
	
	        NET START DNS
	
	10. Hosts on the Internet should now be able to perform a reverse lookup for IP
	  addresses in the delegated reverse lookup zone. One last series of steps is
	  required in order for hosts that use the Customer Site DNS to be able to
	  perform the reverse lookups correctly. It is necessary that a copy of the
	  non-subnetted zone be present on the child domain DNS server. The easiest
	  way to do this is to become a secondary zone to the ISP. Create the
	  secondary zone using the following steps
	
	  a. Click your DNS server, and then click New Zone on the DNS menu.
	
	  b. Click the Secondary radio button in the Creating New Zone dialog box.
	
	  c. For Zone: enter 100.168.192.in-addr.arpa and for Server: enter the
	     <Parent DNS server IP>. For our example, it is 192.168.43.8. Click
	     Next.
	
	  d. For Zone Name: enter 100.168.192.in-addr.arpa and for Zone File: enter
	     100.168.192.in-addr.arpa.dns. Click Next.
	
	  e. In the IP Masters field, again enter the <Parent DNS server IP>. For
	     our example it is 192.168.43.8. Click Add, Click Next, and then Click
	     Finish.
	
	11. You may have to configure the child DNS server(s), which are hosting the
	  delegated zone, to forward to the parent DNS servers. This enables the child
	  DNS servers to resolve records in the zones hosted by the parent DNS
	  servers.
	
	Sample Zone Files
	-----------------
	
	Parent Subnetted Reverse Lookup Zone File:
	
	;
	;  Database file 100.168.192.in-addr.arpa.dns for 100.168.192.in-addr.arpa zone.
	;      Zone version:  4
	;
	
	@                       IN  SOA NS.microsoft.com. administrator.microsoft.com. (
	                       	4           ; serial number
	                       	3600        ; refresh
	                       	600         ; retry
	                       	86400       ; expire
	                       	3600      ) ; minimum TTL
	
	;
	;  Zone NS records
	;
	
	@                       NS	NS.microsoft.com.
	
	;
	;  Zone records
	;
	
	;
	;  Delegated sub-zone:  64-26.100.168.192.in-addr.arpa.
	;
	64-26                   NS	NS1.msn.com.
	;  End delegation
	
	65                      CNAME	65.64-26.100.168.192.in-addr.arpa.
	66                      CNAME	66.64-26.100.168.192.in-addr.arpa.
	67                      CNAME	67.64-26.100.168.192.in-addr.arpa.
	...
	126                    CNAME	67.64-26.100.168.192.in-addr.arpa.
	
	NOTE: The ellipse, "...", indicates the unique IP addresses and hosts between 67
	and 126. Ellipses are not valid in the file.
	
	Child Subnetted Reverse Lookup Zone File:
	
	;
	;  Database file 64-26.100.168.192.in-addr.arpa.dns for 64-26.100.168.192.in-addr.arpa zone.
	;      Zone version:  1
	;
	
	@                       IN  SOA NS1.msn.com. administrator.msn.com. (
	                       	1           ; serial number
	                       	3600        ; refresh
	                       	600         ; retry
	                       	86400       ; expire
	                       	3600      ) ; minimum TTL
	
	;
	;  Zone NS records
	;
	
	@                       NS	NS1.msn.com.
	
	;
	;  Zone records
	;
	
	65                      PTR     host65.msn.com.
	66                      PTR     host66.msn.com.
	67                      PTR     host67.msn.com.
	...
	126                    PTR     host126.msn.com.
	
	NOTE: Again, in the above examples, the ellipses indicate the omitted IP
	addresses between 67 and 126. Ellipses are not valid in the file.
	
	REFERENCES
	==========
	
	For additional information about DNS, please see the following white paper
	available on the Microsoft anonymous ftp server:
	
	  File Name: Dnswp.exe
	  Location : ftp://ftp.microsoft.com/bussys/winnt/winnt-docs/papers/
	  Title : "DNS and Microsoft Windows NT 4.0"
	
	For additional information about Classless IN-ADDR.ARPA Delegation, please see
	RFC2317. RFCs may be obtained through the Internet as outlined in the following
	article in the Microsoft Knowledge Base:
	
	  Q185262 How to Obtain Request for Comments Documents from the Internet
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbhowto kbinfo kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
