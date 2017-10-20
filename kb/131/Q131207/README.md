---
layout: page
title: "Q131207: WINS Manager Fails to Add Static Entries"
permalink: /kb/131/Q131207/
---

## Q131207: WINS Manager Fails to Add Static Entries

{% raw %}

	Article: Q131207
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT 3.5 WINS Manager on a computer running Windows NT
	Workstation 3.51, you cannot add or edit static entries and cannot enter any IP
	addresses.
	
	CAUSE
	=====
	
	The files are incompatible.
	
	This situation occurs when you copied the files required to do WINS
	administration from the Windows NT 3.5 Server compact disc to the computer
	running Windows NT Workstation 3.5, and then subsequently upgraded to Windows NT
	3.51. The WINS manager files are not upgraded when you upgrade a computer
	running Windows NT Workstation.
	
	RESOLUTION
	==========
	
	To correct this problem, manually expand and copy the following files from the
	Windows NT Server 3.51 compact disc to the %SYSTEMROOT%\SYSTEM32 directory:
	
	  winsadmn.exe
	  winsrpc.dll
	  winsadmn.hlp
	  ipadrdll.dll
	
	Additional query words: prodnt admin mappings
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
