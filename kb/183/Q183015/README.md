---
layout: page
title: "Q183015: XADM: Restrictions on ABV Break Mailbox Name Resolution"
permalink: /kb/183/Q183015/
---

## Q183015: XADM: Restrictions on ABV Break Mailbox Name Resolution

{% raw %}

	Article: Q183015
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to add an additional mailbox to the current MAPI profile from the
	Tools menu (then click Services, Microsoft Exchange Server, Properties,
	Advanced, and Add), an error message appears if restrictions have been imposed
	on address book views (ABV). The error message is as follows:
	
	  The name could not be resolved, The action could not be completed
	
	CAUSE
	=====
	
	
	The client cannot add a delegate because it is missing the following registry key
	in the profile:
	
	Software\Microsoft\Windows NT\CurrentVersion\Windows Messaging Subsystem\Profiles\<username>\13dbb0c8aa05101a9bb000aa002fc45a
	
	Value 26
	Name:            101e6613
	Type:            REG_BINARY
	Data:
	00000000   06 00 00 00 1c 00 00 00 - 2d 00 00 00 51 00 00 00  ........-...Q...
	00000010   64 00 00 00 76 00 00 00 - 87 00 00 00 6e 63 61 6c  d...v.......ncal
	00000020   72 70 63 3a 53 41 4d 45 - 45 52 50 31 00 6e 63 61  rpc:SAMEERP1.nca
	00000030   63 6e 5f 69 70 5f 74 63 - 70 3a 73 61 6d 65 65 72  cn_ip_tcp:sameer
	00000040   70 31 2e 6d 69 63 72 6f - 73 6f 66 74 2e 63 6f 6d  p1.microsoft.com
	00000050   00 6e 63 61 63 6e 5f 73 - 70 78 3a 53 41 4d 45 45  .ncacn_spx:SAMEE
	00000060   52 50 31 00 6e 63 61 63 - 6e 5f 6e 70 3a 53 41 4d  RP1.ncacn_np:SAM
	00000070   45 45 52 50 31 00 6e 65 - 74 62 69 6f 73 3a 53 41  EERP1.netbios:SA
	00000080   4d 45 45 52 50 31 00 6e - 63 61 63 6e 5f 76 6e 73  MEERP1.ncacn_vns
	00000090   5f 73 70 70 3a 53 41 4d - 45 45 52 50 31 00        _spp:SAMEERP1.
	
	This key holds the PR_NETWORK_ADDRS of the server.
	
	Why is the client missing this key?:
	
	When the client connects for the first time, it talks to the directory and
	downloads information to the local profile. One of the values is
	PR_NETWORK_ADDRS. This corresponds to the RAW Attribute "Network Address" on the
	<Servername> object. Because of the restriction from the ABView, this
	value does not get downloaded to the local profile.
	
	RESOLUTION
	==========
	
	Assign the Everyone group Search permission on the <Servername> object. By
	giving that permission, there is no security breach because, you give clients
	permission to view the objects beneath the <Servername> object. This does
	not include the global address list. Also, users can only view (not modify) the
	directory object beneath the <Servername> object through some LDAP
	Client.
	
	On the client side, in order for the missing key to get populated, you can either
	create a new profile or modify the existing profile and perform "Checknames."
	You can also distribute the missing key through e-mail or Systems Management
	Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	MORE INFORMATION
	================
	
	The same error message appears if you try to grant another user "send on behalf"
	permissions to your mailbox if restrictions have been enforced in the ABV. The
	steps to reproduce this error vary among clients. These are as follows:
	
	Outlook 8.0, 8.01, 8.02, 8.03: Tools, Options, Delegates, Add Exchange client:
	Tools, Options, Exchange Server, Add
	
	After you have encountered this problem, you must create a new MAPI profile for
	any form of delegate access that you want to assign. This is necessary because
	the existing MAPI profile caches the first failed mailbox resolution query. Any
	subsequent request is read from the existing profile cache and therefore fails.
	
	Additional query words: resolve error delegate restriction
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
