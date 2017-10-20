---
layout: page
title: "Q165427: Convlog.exe May Cause Access Violation"
permalink: /kb/165/Q165427/
---

## Q165427: Convlog.exe May Cause Access Violation

{% raw %}

	Article: Q165427
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0; :
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Advanced Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Convlog.exe with the following parameter, the application may
	generate an access violation error message:
	
	  Convlog.exe -sw -tnsca -dm:24000 e:\logfile.log
	
	RESOLUTION
	==========
	
	Use the updated version of the utility.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTAdvSerSearch
	Version           : winnt:4.0; :
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
