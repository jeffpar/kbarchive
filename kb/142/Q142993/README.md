---
layout: page
title: "Q142993: Cannot Open Online Viewer Titles After Installing MSN 1.2"
permalink: /kb/142/Q142993/
---

## Q142993: Cannot Open Online Viewer Titles After Installing MSN 1.2

{% raw %}

	Article: Q142993
	Product(s): The Microsoft Network
	Version(s): 1.20
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the MSN, The Microsoft Network, 1.2 upgrade, you may
	experience one of the following symptoms when you try to open an Online Viewer
	title (such as MSN Today):
	
	- The title does not open.
	
	- A general protection (GP) fault occurs.
	
	CAUSE
	=====
	
	These problems can occur if the Mvcache.dat file in the Program Files\ The
	Microsoft Network folder is damaged.
	
	RESOLUTION
	==========
	
	Delete the Mvcache.dat file. The file is rebuilt the next time you sign in to
	MSN.
	
	MORE INFORMATION
	================
	
	If deleting the Mvcache.dat file does not solve the problem, the MSN Online
	Viewer servers may be experiencing temporary difficulties. Try again later to
	open the title.
	
	Additional query words: msn corrupt gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN120
	Version           : 1.20
	
	=============================================================================
	

{% endraw %}
