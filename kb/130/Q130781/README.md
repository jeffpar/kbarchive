---
layout: page
title: "Q130781: Trust Fails if PDC Computer Name Exists in a Trusted Domain"
permalink: /kb/130/Q130781/
---

## Q130781: Trust Fails if PDC Computer Name Exists in a Trusted Domain

{% raw %}

	Article: Q130781
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your two-way trust between Domain1 and Domain2 may experience a failure in one
	direction. Domain1 may receive the following error message in Event Viewer:
	
	  Event ID : 5770
	  Source : NetLogon
	  Description: The session setup to the Windows NT Comain Controller
	  <PDC1> from computer <PDC2> using account <Domain2$>
	  failed. <PDC1> is declared to be a BDC in domain <Domain1>.
	  However, <PDC2> tried to connect as either a DC in a trusted domain, a
	  member workstation in domain <Domain1>, or as a server in domain
	  <Domain1>. Use the Server Manager to remove the BDC account for
	  <PDC2>.
	
	  where PDCx is the primary domain controller of Domainx and BDC is backup
	  domain controller.
	
	When you attempt to connect to the PDC of Domain2, you may receive the following
	error message:
	
	  The trust relationship between the primary domain and the trusted domain
	  failed.
	
	CAUSE
	=====
	
	User Manager on the Domain1 PDC incorrectly assumes that the Domain2 PDC is a
	Backup Domain Controller in Domain1 and sends a validation request to it to
	verify its Security Accounts Management (SAM) database. When the Domain2 PDC
	attempts to connect as a PDC, the validation request fails.
	
	
	RESOLUTION
	==========
	
	In NT 3.1:
	
	Go to Server Manager and delete the duplicate computer name from the list of
	servers. This BDC will need to be re-installed if it will be brought up on the
	network. Or, the PDC can be re-installed that has the duplicate name.
	
	In NT 3.5x / 4.0 :
	
	If the BDC that is duplicated has been taken off the network, simply delete the
	duplicate computer account from Server Manager on DOM1.
	
	If the BDC and PDC need to coexist, the PDC (or BDC) can be renamed and rebooted.
	The coinciding entry from Server Manager must also be removed as a result.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
