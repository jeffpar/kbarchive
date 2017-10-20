---
layout: page
title: "Q140978: WINS Does Not Replicate &lt;1c&gt; Names Properly"
permalink: /kb/140/Q140978/
---

## Q140978: WINS Does Not Replicate &lt;1c&gt; Names Properly

{% raw %}

	Article: Q140978
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Among Windows Internet Name Service (WINS) servers, the [1C] group name is not
	replicating properly, resulting in certain WINS databases that contain only a
	partial list of domain controllers in the [1C] group.
	
	CAUSE
	=====
	
	The [1C] record is not replicated because the [1C] version ID was not updated to
	indicate that it had changed.
	
	Description of Problem
	----------------------
	
	When a DC registers with a WINS server, the DC will register its IP address in
	the <domain>[1C] group, (along with any other servers already listed,) and
	the WINS server will update the 'version ID' of that [1C] record. That record
	will then get propagated from the WINS server, to a partner-WINS server.
	
	If the partner-WINS already has a previous replica (copy) of the [1C] record, it
	will update its own database to include the new IP addresses in that record, but
	it will not update its version ID of that [1C] record. (The original WINS and
	the partner-WINS will maintain different version IDs of the records that they
	pass to each other.)
	
	At this point the partner-WINS has an updated [1C] record, however it will not
	push that record to a third partner-WINS because the version ID was not
	updated.
	
	For example:
	
	Assume a network with at least 3 WINS servers WINS_X, WINS_Y, and WINS_Z; where
	WINS_X is the primary WINS server that all DCs register with; WINS_Y and WINS_Z
	are sequential partners; thus, during propagation the flow of the [1C] group is
	as follows:
	
	  (WINS_X)  -->  (WINS_Y)  -->  (WINS_Z) ....
	
	Assume that initial propagation has already occurred, so that WINS_Y and WINS_Z
	have a replica [1C] record. Then, a new DC registers with WINS_X, the version ID
	of the [1C] record is updated, and it gets propagated to WINS_Y. WINS_Y already
	has a replica of the [1C] record, so it will update the DC addresses in that
	record, but not the version ID. WINS_Z then pulls from WINS_Y, however the [1C]
	record was not included because the [1C] version ID was not updated to indicate
	that it had changed.
	
	The result of this is that the domain controllers in the list at WINS_Z may get
	overloaded with network requests; and DC redundancy is reduced.
	
	WORKAROUND
	==========
	
	To work around this problem, you have three options.
	
	- This option works best if you have all DCs registering at one WINS:
	
	  1. Use WINSCL.EXE (from the Windows NT Resource Kit) to delete the [1C] entry
	     on all WINS databases that merely contain a replica of the record (that
	     is, no DCs are registering to those WINS servers). Also delete any static
	     [1C] record from any WINS (because the 'migrate on' feature will not
	     resolve the problem.)
	
	  2. From your WINS server(s) that accepts DC registrations, do something to
	     cause an update to the [1C] record, such as rebooting a DC, or typing
	     IPCONFIG /RENEW if you are using DHCP.
	
	  3. Force propagation to all partner WINS servers. Since owner [1C] records
	     are updated, and the partners do not have any replica copy at all, it
	     should get completely replicated because it is a new record (and high
	     version ID) at every partner.
	
	
	  -or-
	
	- Set up your WINS push/pull configuration in a star pattern, such that there
	  is a central WINS where all your DCs register, and the partner WINS servers
	  only replicate with the central server. In this configuration the problem
	  should not occur at all. -or-
	
	- Although Microsoft generally does not recommend using Static entries for
	  computers that are WINS aware, you can overcome this problem by creating a
	  static record for the [1C] domain name. This will disable the functionality
	  of controllers dynamically registering their address in the [1C] group,
	  however it will allow you to manually add controllers to the [1C] record on
	  any partner WINS database, and thus have control of the list.
	
	  NOTE: If you have a Windows NT 3.1 DC in your domain, this static method will
	  be required because Windows NT 3.1 is not WINS aware.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The [1C] (that is, [1Ch] or [0x1Ch]) is a special group name registered for use
	by the domain controllers (DCs) within the domain, and can contain up to 25 IP
	addresses.
	
	In a large network with more than 25 DCs, new registrations will overwrite the
	oldest ones. This means that the primary DC (PDC) will remain in the [1C] list
	unless it gets overwritten, too. However, when a client does a query for the
	[1C] list, the PDC address will still be returned because the PDC registers the
	<domain>[1B] name, and that address will always be returned with the [1C]
	list.
	
	The [1C] domain name is used for the following functions:
	
	- Domain logon process through WINS (when Windows for Workgroups, Windows95,
	  and Windows NT clients log on):
	
	  1. A client will send a name query to the WINS server for the <domain
	     name>[1C].
	
	  2. The WINS server will return the list of IP addresses (DCs) in the [1C]
	     group.
	
	  3. The client will send a directed datagram to each DC in an attempt to logon
	     to the domain.
	
	  4. The DCs will start responding to the logon request.
	
	  5. The client will continue the logon process with the first DC that
	     responds; the client will ignore the other responses.
	
	- Secure Channel establishment:
	
	   - Interdomain: When Windows NT workstations and servers are started, they
	     will use the [1C] list of addresses to find a DC and establish a secure
	     channel for their domain machine account.
	
	   - Trusted domains: When a DC comes up, it will set up a secure channel with
	     a DC from the <remote domain>[1C] list. This channel will be used
	     for pass-through authentication.
	
	Additional query words: prodnt mappings
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
