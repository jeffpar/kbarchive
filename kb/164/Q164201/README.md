---
layout: page
title: "Q164201: Access Violation Installing IIS"
permalink: /kb/164/Q164201/
---

## Q164201: Access Violation Installing IIS

{% raw %}

	Article: Q164201
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,3.0,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install IIS on Windows NT Server and Windows NT is already installed
	you may experience an Access Violation in Inetins.exe.
	
	RESOLUTION
	==========
	
	Schannel.dll has been modified to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbiisSearch kbiis300 kbiis200 kbiis100
	Version           : winnt:1.0,2.0,3.0,3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
