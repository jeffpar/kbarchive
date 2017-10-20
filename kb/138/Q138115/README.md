---
layout: page
title: "Q138115: Error 1811 Occurs Running JETPACK.EXE"
permalink: /kb/138/Q138115/
---

## Q138115: Error 1811 Occurs Running JETPACK.EXE

{% raw %}

	Article: Q138115
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the JETPACK utility to compact a Windows Internet Name Service
	(WINS) or DHCP database, the following error message appears:
	
	  Jetpack failed with error = -1811
	
	CAUSE
	=====
	
	Error 1811 is a JETPACK error which means "File not Found."
	
	This problem occurs if you run JETPACK.EXE from a directory other than the WINS
	or DHCP directory. This error will occur even if the correct directory path for
	the WINS/DHCP database file is given. This is because JETPACK.EXE expects the
	SYSTEM.MDB file to be present in the current directory.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Run JETPACK.EXE from the WINS or DHCP directory.
	
	  -or-
	
	- Copy the WINS/DHCP database file, SYSTEM.MDB to the current directory and run
	  JETPACK giving the full path of the WINS/DHCP database file.
	
	  NOTE: Windows NT 4.0 does not use the System.mdb file, so it is not necessary
	  to copy this file in Windows NT 4.0.
	
	  -or-
	
	- Rename the J50.LOG file to another name and rerun jetpack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server versions 3.5,
	3.51, and 4.0. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt dhcp wins
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
