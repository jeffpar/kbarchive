---
layout: page
title: "Q307026: SMS: Duplicate Resources Appear in Collections"
permalink: kb/307/Q307026/
---

## Q307026: SMS: Duplicate Resources Appear in Collections

	Article: Q307026
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix kbCollections kbDiscovery kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In network environments in which certain conditions exist, Network Discovery may
	collect information that later causes some of the resources that appear in
	collections to be duplicated. For SMS client resources to be duplicated, the
	following conditions must exist:
	
	- There is a multiple-site hierarchy in which at least one primary site reports
	  to another primary site.
	
	- Network discovery must occur at the child primary site level or below it (for
	  example, at a secondary site).
	
	- Domain Name System (DNS) reverse lookup zones do not contain unique fully
	  qualified domain names (FQDNs) for different TCP/IP addresses.
	
	- The SMS client must be reinstalled on a computer such that it obtains a new
	  Globally Unique Identifier (GUID).
	
	These conditions occur together rarely; most Systems Management Server (SMS)
	installations do not encounter this behavior.
	
	The most obvious symptom of this problem is visible by examining the resource
	names that are defined in the discovery data for a client computer that has been
	duplicated. The problem occurs when the resource name for a client is shared by
	another client. Later, when the SMS client is reinstalled on one of these
	computers, the computer can appear more than once when you view it in the
	collections of a primary site that is a parent to another primary site.
	
	This problem may occur more frequently with network devices that do not run
	Microsoft Windows. Network printers, routers, and other devices cannot have the
	SMS client installed and are found exclusively through Network Discovery. If
	Network Discovery returns resource names that are not unique for these devices
	or are later changed because the computer obtains a new TCP/IP address, these
	resources can also appear to be duplicated.
	
	CAUSE
	=====
	
	When the SMS Discovery Data Manager (DDM) component processes a Data Discovery
	Record (DDR) that does not contain a GUID (such as a Network Discovery DDR) or
	contains a GUID that is not already present in the SMS database, DDM builds a
	list of potential matching resources by examining certain key discovery
	attributes including the resource name, NetBIOS name, TCP/IP address, IPX
	address, and media access control (MAC) address. Using this list of potential
	matching resources, DDM examines the other discovery attributes for each
	resource to determine whether it is an exact match for the DDR that is being
	processed.
	
	The problem occurs if the list of potential matches contains more than one
	resource and the exact match is not the first resource in the list. When this
	occurs, DDM updates the wrong record (the first resource in the list). This
	causes the existing discovery record for a valid computer to be replaced by the
	discovery data for another computer that already exists in the SMS database.
	When you view the collection, the resource appears twice and another resources
	is not displayed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	To prevent this problem from occurring, correct the DNS reverse lookup tables so
	that unique FQDNs are always returned.
	
	You can also prevent this problem from occurring on clients that run Windows by
	allowing network discovery to occur only at the top of the SMS hierarchy. This
	ensures that the Resource Name data that is found by Network Discovery is not
	appended to a DDR as it passes up the hierarchy on the way to an upper-level
	primary site.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	the Systems Management Server 2.0 Service Pack 4 Hotfix Rollup Package (HRP).
	
	For additional information about the SMS 2.0 SP4 HRP, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q323206 SMS: List of Bugs Fixed in the Systems Management Server 2.0 SP4 HRP
	
	MORE INFORMATION
	================
	
	Network environments that use Dynamic Host Configuration Protocol (DHCP) for
	TCP/IP address assignment but have static DNS reverse lookup tables run a
	greater risk of encountering this problem. In this type of environment, one
	Network Discovery pass can determine a unique name for a computer's TCP/IP
	address, but after the next Network Discovery pass, that same TCP/IP address
	could belong to another computer. The second computer would then receive the
	same resource name as the first computer.
	
	To test reverse lookup, use the "nslookup" command at a command prompt on the
	site server on which Network Discovery runs. Typing the TCP/IP address of the
	client computer causes Nslookup to query the reverse lookup zone and attempt to
	resolve it to an FQDN.
	
	
	Additional query words: prodsms netdisc identical replace missing
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix kbCollections kbDiscovery kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
