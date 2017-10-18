---
layout: page
title: "Q179927: XADM: KCC Site Teardown Blocked by Site-Proxy-Space Attribute"
permalink: kb/179/Q179927/
---

## Q179927: XADM: KCC Site Teardown Blocked by Site-Proxy-Space Attribute

	Article: Q179927
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): kbtshoot
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you delete a Directory Replication Connector on a bridgehead server, site
	objects previously associated with the deleted replication connector may not
	completely disappear as expected. In particular, one of the remaining site
	objects may display only a "Site-Addressing" object under "Configuration." (This
	likely indicates a configuration problem originating in this "blocked" site, and
	will likely need to be repaired in that site first. See RESOLUTION and MORE
	INFORMATION below.)
	
	Additionally, the Knowledge Consistency Checker may report that it failed in
	removing a particular context and could not continuing processing.
	
	With the following Directory diagnostic logging enabled
	
	  Knowledge Consistency Checker = MAX
	  Internal Processing = MIN
	
	the following events are logged:
	
	  1171
	  Exception e0010004 has occurred with parameters -1026 and 0 (Internal ID
	  2060400). Please contact Microsoft Product Support Services for
	  assistance.
	
	  1214
	  Couldn't remove the replica of naming context
	  /O=<orgname>/OU=<sitename>/CN=Configuration from
	  EX:/o=<orgname>/ou=<sitename>/cn=Configuration/cn=Servers
	  /cn=<servername>/cn=Microsoft DSA because of error 22. Run the
	  consistency checker on directory
	  EX:/o=<orgname>/ou=<sitename>/cn=Configuration
	  /cn=Servers/cn=<servername>/cn=Microsoft DSA. If this condition
	  persists, stop and restart this Microsoft Exchange Server computer.
	
	  1124
	  The consistency checker encountered an internal error and can't continue
	  checking the consistency of this directory. Stop and restart this
	  Microsoft Exchange Server computer.
	
	CAUSE
	=====
	
	A Site-Addressing object attribute (limited to a single 4-KB page) is full of
	data. In tagging the object for deletion, a 4-byte attribute must be added to
	this page, but 4 bytes are not available. The Site- Addressing attribute most
	likely to be this large is the Site-Proxy-Space attribute.
	
	To verify that this is the cause:
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Administrator program in raw mode against the server failing KCC.
	
	2. Highlight the "<orgname>\<sitename>\Configuration\Site
	  Addressing" object of the context that corresponds to the naming context
	  reported in the 1214 event log error.
	
	3. Select "File, Raw properties"
	
	4. Scroll through the listbox of "Object attributes:" and select "Site-
	  proxy-space."
	
	5. View the "Attribute values" count (to the right). It will be in the hundreds.
	
	RESOLUTION
	==========
	
	Resolution and prevention require ensuring that none of the Exchange Server
	organization site's Site-Proxy-Space attributes includes hundreds of entries.
	The actual limit can vary (up to 350 or more), but the practical limit should be
	less than 20. This can only be controlled within each individual site.
	
	NOTE: The site failing KCC and the site where the problem originates are
	different.
	
	Generically, resolution requires:
	
	1. Addressing the problem in the originating site.
	
	2. Re-establishing replication in the site failing KCC.
	
	3. "Pulling" a replica of the fixed object to the site failing KCC. (Pulling the
	  replica should start at the site adjacent to the originating site along the
	  replication path to the site failing KCC, and at each subsequent site in the
	  path, ending with the site failing KCC.)
	
	The first step to addressing the problem is to determine why hundreds of entries
	exist. Either many site mailboxes include incorrect or inappropriate X.400 proxy
	addresses, or some of the "general purpose" X.400 attributes within the range of
	"C" through "OU4" have been implemented to define mailbox "uniqueness."
	
	If the former case, delete or modify the X.400 proxy addresses of the mailboxes
	as appropriate. For the second case, there are two options:
	
	- Redesign the X.400 addressing scheme to use an X.400 attribute originally
	  intended to insure "uniqueness" (see MORE INFORMATION below);
	
	  -OR-
	
	- Apply the hotfix referenced below.
	
	Redesign the X.400 Addressing Scheme
	------------------------------------
	
	This solution is recommended because it encourages good design and implementation
	by using X.400 attributes appropriately. This may benefit interoperability with
	foreign X.400 systems. It is recognized that the X.400 addressing scheme may
	have originated from legacy systems, and that changing the scheme is not an
	option.
	
	To apply the Hotfix
	-------------------
	
	A hotfix is available that addresses this problem (see the Status section below).
	A new MTA and registry value will be available for configuring Exchange Server
	to accommodate interoperability with and migration from legacy systems that were
	implemented using the range of "C though OU4" X.400 attributes for address
	uniqueness.
	
	The registry value is as follows:
	
	  HKLM\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters
	  Value (case sensitive):  Site Proxy Recalc Limit
	  Data Type:               REG_SZ
	  Data (case insensitive): <one-valid-string>
	  (valid strings: c, a, p, o, ou1, ou2, ou3, ou4)
	
	Adding the registry value and specifying a valid string, for instance OU2,
	configures the RID to exclude all X.400 attributes beyond OU2 from the
	calculation of Site-proxy-space entries. This masking mechanism may be used to
	ensure that Site-Proxy-Space includes only the minimum number of entries
	required for accurate local (site) mailbox routing.
	
	Installation notes:
	
	- Technically, the new message transfer agent (MTA) and registry value must be
	  installed only on the originating site's RID server. But it is recommended
	  that all site servers apply the fix, since the RID server can be changed at
	  any time within Admin from any server in the site. To determine a site's
	  current RID server, view: <sitename>, Configuration, Site Addressing,
	  General, "Routing Calculation Server:" listbox.
	
	- After applying the MTA, all Exchange Services must be restarted (because RID
	  recalculation is spawned from under the System Attendant Service).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a concern for Exchange Server version 5.0.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Controlling Site-Proxy-Space
	----------------------------
	
	Within each site, an additional entry is added to Site-proxy-space (by the
	Routing Information Daemon [RID]) from among all the mailboxes within the site
	for *every unique* X.400 address string out to and including the "OU4"
	attribute.
	
	This string could include any combination of the following X.400 attributes:
	
	C (country), A (administrative domain), P (private domain), O (organization),
	OU1, OU2, OU3, OU4 (organizational units).
	
	Generally, it is not intended that the X.400 attributes listed above would
	contain values *unique* to each X.400 address. Other values such as S (surname),
	G (given name), X.121, DDA Type\Value, etc., are typically relied upon to insure
	"uniqueness" of X.400 addresses.
	
	Site-Proxy-Space values are cached at MTA startup (and refreshed as required). As
	the MTA routes mail, a partial X.400 target address that matches one of these
	cached values is considered to be "local to the site" - thus the MTA "expects"
	to find a DN (X.500 address) that matches the recipient and "expects" to be able
	to route the message locally. NOTE: this assumes the "Share address space with
	other X400 system" is NOT enabled - which is the Exchange default. (This can
	lead to NDRs of "one-off" mail addressed to X.400 addresses if a site mailbox
	maintains an inappropriate X.400 proxy address - see Q175498).
	
	In a default Exchange Server install, there will be a single entry for Site-
	Proxy-Space. This may change as secondary X.400 proxies are added to mailboxes
	within the site, or as additional mailboxes are generated via import. Most
	secondary proxies are created in order to maintain interoperability with legacy
	email systems, or in order to maintain migrated users' previous X.400 address
	(as either the primary, or proxy) for routing purposes.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
