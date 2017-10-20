---
layout: page
title: "Q249866: Description of #MH Entry in Windows NT Lmhosts File"
permalink: /kb/249/Q249866/
---

## Q249866: Description of #MH Entry in Windows NT Lmhosts File

{% raw %}

	Article: Q249866
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the multihomed (#MH) entry in the Windows NT
	Lmhosts file. You can use the #MH entry for adding multihomed static WINS
	mappings, but you cannot use it to provide multihomed NetBIOS name resolution.
	
	MORE INFORMATION
	================
	
	You can use the #MH entry when you are importing an Lmhosts file into Windows
	Internet Naming Service (WINS). When you need to import a list of NetBIOS names
	and TCP/IP addresses into WINS for use as static mappings, you can use the
	"import Lmhosts file" functionality. Under these circumstances, you can use the
	#MH entry in the Lmhosts file to add a multihomed entry for a particular name.
	For example, assume that the following sample Lmhosts file is being used:
	
	  1.1.1.1 testsrv #MH
	  1.1.1.2 testsrv #MH
	
	When you import this file into WINS, the following static mappings are added:
	
	  testsrv[00h] multihomed entry with addresses 1.1.1.1 and 1.1.1.2
	  testsrv[03h] multihomed entry with addresses 1.1.1.1 and 1.1.1.2
	  testsrv[20h] multihomed entry with addresses 1.1.1.1 and 1.1.1.2
	
	You cannot use the #MH functionality when you are using the Lmhosts file to
	resolve names during normal NetBIOS name lookup tasks. For example, assume that
	the following sample Lmhosts file is being used:
	
	  testsrv 1.1.1.1 #PRE #MH
	  testsrv 10.10.10.2 #PRE #MH
	
	When you load this file into the NetBIOS name cache, it shows two entries for
	each computer name for each service, but only the last IP address is used when
	NetBIOS name resolution attempts to resolve the name. The NetBIOS name cache
	appears as follows:
	
	                 NetBIOS Remote Cache Name Table
	
	  Name                 Type        Host Address    Life (sec)
	  ------------------------------------------------------------
	  TESTSRV          <03> UNIQUE       1.1.1.1          -1
	  TESTSRV          <00> UNIQUE       1.1.1.1          -1
	  TESTSRV          <20> UNIQUE       1.1.1.1          -1
	  TESTSRV          <03> UNIQUE       10.10.10.2       -1
	  TESTSRV          <00> UNIQUE       10.10.10.2       -1
	  TESTSRV          <20> UNIQUE       10.10.10.2       -1
	
	However, if you then try to connect to \\Testsrv, only the last entry is used
	when you are trying to build a TCP session.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
