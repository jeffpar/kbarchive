---
layout: page
title: "Q143059: Network Client 3.0 Removes Most Recent Persistent Connection"
permalink: /kb/143/Q143059/
---

## Q143059: Network Client 3.0 Removes Most Recent Persistent Connection

{% raw %}

	Article: Q143059
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you create several persistent network connections in Network Client 3.0
	and attempt to remove a specific network connection, it is not removed. The most
	recent persistent network connection is removed. For example, if you have
	network connections assigned to drives E, G and F (in this order), and you
	attempt to remove drive E, drive F is removed. This problem does not occur if
	you use the following command:
	
	  net use e: /d
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Network Client version 3.0
	for MS-DOS. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
