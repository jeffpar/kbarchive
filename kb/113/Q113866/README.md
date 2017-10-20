---
layout: page
title: "Q113866: Long Filenames Appear Incorrect in File Manager"
permalink: /kb/113/Q113866/
---

## Q113866: Long Filenames Appear Incorrect in File Manager

{% raw %}

	Article: Q113866
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Macintosh client performs a tree copy from the Macintosh to a Microsoft
	Windows NT Advanced Server running Services for Macintosh (SFM), and then
	another tree copy from the SFM volume to another tree on an SFM volume, the long
	filenames of the final destination tree are converted to 8.3 names as displayed
	in WinFile. Source files in this operation contain trailing periods or spaces in
	their name.
	
	When you view the destination tree from a command prompt or from the Macintosh
	client, the filenames are correct.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1. This problem was corrected in Windows NT version 3.5.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
