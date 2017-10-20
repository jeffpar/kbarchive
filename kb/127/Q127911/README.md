---
layout: page
title: "Q127911: Err Msg: Cannot Create This File When This File Already Exists"
permalink: /kb/127/Q127911/
---

## Q127911: Err Msg: Cannot Create This File When This File Already Exists

{% raw %}

	Article: Q127911
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to establish trusts among a number of domains using User
	Manager for Domains, the following error message appears:
	
	  Cannot create this file when this file already exists
	
	CAUSE
	=====
	
	This problem occurs when you attempt establish a trust with a domain that has
	the same domain security identification (SID) information as another domain that
	is already trusted, or has the same local Domain SID. This problem occurs when
	you:
	
	- Rename a domain and the trust to the previous name is still in a trust
	  relationship.
	
	- Split a single domain into two domains by simply renaming the domain on some
	  backup domain controller (BDC) and promoting it to a primary domain
	  controller (PDC). In this case both domains have the same Domain SID.
	
	- Create two domains through an automated process. For example, you install
	  Windows NT once on a PDC and then performing a disk-to-disk copy to another
	  identical computer, and then change the domain name.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- If a domain is renamed and previous trust relationships still exist, break
	  all trusts established by the previous domain, and re-create the trusts for
	  the new domain.
	
	  -or-
	
	- Reinstall all domain controllers in one of the domains (consider using a
	  smaller domain). After you re-install the domain controllers, change the
	  security on all objects which give permissions to objects in that domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	A domain SID is generated during installation when you decide if you want the
	newly installed computer to be the PDC of a new domain. If there is no domain
	reachable on the network with that domain name, a new SID is generated. If you
	decide you want the computer to be a BDC, it browses the network for a PDC of a
	domain with that name and use that same domain SID. Once a SID is generated for
	a domain it does not change. This means that if you change a domain's name, it
	retains the same domain SID.
	
	
	Additional query words: prodnt usrmgr
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
