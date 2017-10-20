---
layout: page
title: "Q128121: WINS PersonaNonGrata Registry Parameter"
permalink: /kb/128/Q128121/
---

## Q128121: WINS PersonaNonGrata Registry Parameter

{% raw %}

	Article: Q128121
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows NT Server version 3.5 Windows Internet Name Service (WINS)
	includes a registry parameter for replication partners called PersonaNonGrata
	(located under the \Wins\Partners key).
	
	MORE INFORMATION
	================
	
	This parameter is not defined in the Windows NT 3.5 registry help file or in the
	Windows NT 3.5 Server documentation. It is documented only in the Microsoft
	Windows NT Resource Kit Volume 2: Windows NT Networking Guide (Chapter 14, Page
	306, Installing and Configuring WINS Servers).
	
	This parameter specifies the Internet Protocol (IP) addresses of WINS servers
	whose records are not to be inserted into the local database during replication.
	If there are incorrect records in one or more WINS server databases on your
	network, you can prevent those records from being replicated to your WINS Server
	database by specifying the IP addresses of the WINS servers that own them under
	the PersonaNonGrata parameter. After you make this change, restart the server
	for the change to take effect.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
