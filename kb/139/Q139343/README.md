---
layout: page
title: "Q139343: How To Promote BDC to PDC Through RAS"
permalink: /kb/139/Q139343/
---

## Q139343: How To Promote BDC to PDC Through RAS

{% raw %}

	Article: Q139343
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	A Backup Domain Controller (BDC) can be connected to a remote domain
	using Windows NT Server Remote Access Service (RAS). To promote a BDC that
	is connected through RAS to a primary domain controller (PDC):
	
	1. Configure the BDC as a Dial-out-only RAS client. The Remote Access Server
	  service should not be running on this BDC. By having just the RAS client dial
	  out services on this BDC, it can function as a PDC because that functionality
	  does not depend on Netlogon.
	
	2. If you promote the RAS-connected client, Netlogon stops, changes roles and
	  restarts. RAS is dependent on Netlogon, so when Netlogon stops, the
	  connection is lost.
	
	3. A RAS-connected BDC that has been promoted to PDC functions as it should, but
	  possibly with slower response time, depending on line speed.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
