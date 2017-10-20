---
layout: page
title: "Q167009: Description of DHCP Server Service Has a Misspelled Word"
permalink: /kb/167/Q167009/
---

## Q167009: Description of DHCP Server Service Has a Misspelled Word

{% raw %}

	Article: Q167009
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you start the Network tool in Control Panel, click the Services tab, and then
	click Microsoft DHCP Server, you may notice that the Description field reads
	"DHCP (Dynamic Hose Configuration Protocol)" when it should read "DHCP (Dynamic
	Host Configuration Protocol)."
	
	CAUSE
	=====
	
	"Host" was misspelled as "Hose" in the [FileConstantsENG] section of the
	Oemnsvdh.inf file.
	
	STATUS
	======
	
	The misspelling has been corrected and included in the latest Windows NT version
	4.0 U.S. Service Pack. For information about obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt nt4sp3fea
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
