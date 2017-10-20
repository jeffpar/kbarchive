---
layout: page
title: "Q119996: Muliple Access of Clipper Index File Causes Corruption"
permalink: /kb/119/Q119996/
---

## Q119996: Muliple Access of Clipper Index File Causes Corruption

{% raw %}

	Article: Q119996
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5 
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When multiple processes of the Clipper application are accessing the same data
	file using proper record locking/unlocking syntax, the index file(s) may become
	corrupted, and may display the following error message:
	
	  Error DBFNTX/1210 Corruption detected
	
	There is a problem with Windows NT and record locking that manifests itself in
	many other different applications, such as Microsoft Access, Mail, etc.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.1 and 3.5.
	This problem was corrected in the latest Windows NT 3.5 U.S. Service Pack and is
	also corrected in Windows NT version 3.51. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	S E R V P A C K
	
	Additional query words: prodnt 3.10 3.50 nt16ap
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5
	
	=============================================================================
	

{% endraw %}
