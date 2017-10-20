---
layout: page
title: "Q90709: Using WinLogin with 3Com 3+Share"
permalink: /kb/090/Q90709/
---

## Q90709: Using WinLogin with 3Com 3+Share

{% raw %}

	Article: Q90709
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft WinLogin, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running WinLogin 1.0 with 3Com 3+Share, you may encounter problems when
	multiple users attempt to access WinLogin's database. To resolve this problem,
	increase the number of concurrent file range locks supported by the server.
	
	MORE INFORMATION
	================
	
	When multiple users attempt to access WinLogin's database, the following error
	messages may occur:
	
	  Error opening the database
	
	  Error initializing the database
	
	  Error accessing <one of the tables; user, group, wksta>
	
	Increasing the number of concurrent file range locks supported by the server
	solves this problem. Increasing the range locks is done through the 3Com
	Optimization program called "3OPT". This program is located in the 3Com server
	directory structure. Once you are in this program, one of the screens will be
	the "Byte Range Locks" for the different services. This is where the actual
	change needs to be done. A system administrator needs to know how this should be
	done as well as what to increase it to because there are different scenarios
	that will be dealt with, such as memory, services available, and so on.
	
	Additional query words: 3Com 3 com network 1.00 WinLogin
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWinLoginSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinLogin100
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	

{% endraw %}
