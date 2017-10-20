---
layout: page
title: "Q151729: Single-Letter Domain Names Appear Twice in Browse List"
permalink: /kb/151/Q151729/
---

## Q151729: Single-Letter Domain Names Appear Twice in Browse List

{% raw %}

	Article: Q151729
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you name your Windows NT domain "E" or any single letter that comes after E
	in the alphabet, your domain will be listed twice in the File Manager browse
	list. When selected to list resources, one entry will work correctly. The other
	will display error 6118: The list of servers is not available.
	
	Other servers on the network may also have difficulty finding the primary domain
	controller.
	
	Under Windows 95 Explorer, the second entry will be displayed with three periods
	after it.
	
	
	RESOLUTION
	==========
	
	Do not use a single letter for your domain name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
