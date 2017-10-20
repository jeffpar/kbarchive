---
layout: page
title: "Q120018: Err Msg: Volume Corrupt when NTFS Volume Exceeds 1 Million"
permalink: /kb/120/Q120018/
---

## Q120018: Err Msg: Volume Corrupt when NTFS Volume Exceeds 1 Million

{% raw %}

	Article: Q120018
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10
	
	WINDOWS
	
	kbother kbbug3.10 kbfix3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a large number of files on an NTFS volume and attempt to add an
	additional file, the following message may appear:
	
	  Volume corrupt.
	
	This message appears when the total number of files will exceed one million. The
	exact point where the error occurs depends on several factors, disk
	fragmentation being the primary factor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5.
	
	Additional query words: prodnt 3.10 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
