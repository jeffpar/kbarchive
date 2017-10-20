---
layout: page
title: "Q139410: Err Msg: There are Currently No Logon Servers Available..."
permalink: /kb/139/Q139410/
---

## Q139410: Err Msg: There are Currently No Logon Servers Available...

{% raw %}

	Article: Q139410
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an environment that relies on Windows Internet Name Service (WINS) to resolve
	NetBIOS names, the error message "There are no logon servers available to
	service the logon request" appears if you are an administrator and you do one or
	more of the following:
	
	- You attempt to remotely administer a trusted domain. For example, you use
	  File Manager to assign share permissions to users from the trusted domain.
	
	- You attempt to select the trusted domain in User Manager for Domains.
	
	CAUSE
	=====
	
	The WINS database does not have the proper domain registrations for pass-
	through authentication. See the more information section below for more
	details.
	
	This problem occurs most often in environments where the administrator has
	created a two-way trust between two previously independent domains. Most often,
	there are WINS servers in each domain and the WINS servers do not replicate
	their databases to each other.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Allow WINS dynamic registration.
	
	  This ensures that Domain Controllers register their DOMAIN<1C> NetBIOS
	  names with the WINS Server.
	
	- Make certain that WINS database replication is successful between WINS
	  Servers. Missing database entries for domain names may indicate Problems with
	  the WINS Servers and replication.
	
	To work around this problem:
	
	  NOTE: Microsoft does not recommend using static mappings in the WINS database
	  for WINS enabled computers.
	
	1. Run the WINS Administration Utility to add static mappings for the
	  Domain<1C> registrations (of the trusted domain) that are not listed in
	  the WINS database:
	
	     Name:        Master DOMAIN Name
	     IP Address:  Address of the Primary Domain Controller (PDC) of the
	                   domain
	     Type:        Domain Name
	 
	
	If you are logged on as an administrator at a Domain Controller, remote
	administration works now successfully. If you are attempting to remotely
	administer the domain while logged on to a Server (not a domain controller) or
	Windows NT Workstation, you must add DOMAIN<1C> entries for both the
	trusted and trusting domains.
	
	MORE INFORMATION
	================
	
	To remotely administer a trusted domain, several pass-through authentication
	steps must take place. If the WINS database does not have the proper domain
	registrations, the pass-through authentication fails.
	
	For example, a trust is established between DOMAIN_A and DOMAIN_B. Server PDC_A
	is in DOMAIN_A and PDC_B is in DOMAIN_B. DOMAIN_A is the trusted (master)
	domain, and DOMAIN_B is the resource (trusting) domain. To establish this trust
	relationship, the following NetBIOS names must be resolved to IP addresses,
	either through WINS or broadcast:
	
	  NetBIOS Name      Description of Use of Name
	  ---------------------------------------------------------------------
	  DOMAIN_A<1B>      PDC_B uses this to query the PDC of DOMAIN_A
	  PDC_A<00>         PDC_B uses this to set up a session with the PDC of
	                    DOMAIN_A
	  DOMAIN_A<1C>      PDC_B uses this to get DC list of DOMAIN_A
	
	With these three names being registered, and if your account has administrator
	priviledges, the trust can be established and the message "The trust
	relationship was established successfully" appears. When you reboot the
	computer, or the first time you attempt remote administration, another NetBIOS
	name is needed:
	
	  NetBIOS Name   Description of Use of Name
	  ---------------------------------------------------------------------
	  DOMAIN_A<1C>   Each Domain Controller in DOMAIN_B uses this name to
	                 establish a secure channel with a Domain Controller in
	                 the trusted domain.
	
	The Domain Controller (DC) in the trusting domain attempts to create a secure
	channel with any DC in the trusted domain by making a multicast logon request to
	the NetBIOS name DOMAIN_A<1C>. This logon request is part of a process
	that creates a Secure Channel between the two DCs. The logon ID in this logon
	request is the inter-domain trust account for the trusting domain, DOMAIN_B$. If
	there is no registration for DOMAIN_A<1C> in the WINS database the error
	message STATUS_NO_LOGON_SERVERS is returned to the call. The message "There are
	currently no logon servers available" is then returned to the user.
	
	For additional information about special NetBIOS name registrations in WINS,
	please see the following article(s) in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q119495
	  TITLE : List of Names Registered with WINS Service
	
	Additional query words: prodnt winfile netlogon trusts access denied
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
