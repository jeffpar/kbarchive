---
layout: page
title: "Q155330: FPNW Utility to Set Up Subauthentication on Domain Controller"
permalink: /kb/155/Q155330/
---

## Q155330: FPNW Utility to Set Up Subauthentication on Domain Controller

{% raw %}

	Article: Q155330
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a master domain model, if the File and Print Services for NetWare (FPNW)
	server is installed in a resource domain and the user accounts reside in the
	accounts domain, you can use the Fpnwauth.exe utility to enable the domain
	controllers in the accounts domain to authenticate logon attempts by FPNW users
	from NetWare client computers.
	
	However, on a "tools only" install of FPNW, there is not a way to set up
	subauthentication on a domain controller.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
