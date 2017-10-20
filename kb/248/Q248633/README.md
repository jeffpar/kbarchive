---
layout: page
title: "Q248633: Objects May Be Incorrectly Joined When MA Is in Reflector Mode"
permalink: /kb/248/Q248633/
---

## Q248633: Objects May Be Incorrectly Joined When MA Is in Reflector Mode

{% raw %}

	Article: Q248633
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Zoomit VIA, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The default "Attempt to Join" configuration setting when a Management Agent (MA)
	is in Reflector mode may create a problem for new users in Zoomit VIA 2.1. All
	the objects with the Common Name (CN) attribute (for example, John Smith) from
	the MA are joined as one person. It is possible that two objects may possess the
	same common name but should be separate entries in the metadirectory. Therefore,
	objects may be joined that are not related.
	
	CAUSE
	=====
	
	The "Attempt to Join" option is on by default. The default configuration for the
	search base is Common Name (CN), so users with the same CN are joined regardless
	of whether they are the same person object or not.
	
	RESOLUTION
	==========
	
	To work around this issue, add a unique ID as part of the search base during MA
	construction:
	
	1. From Known Universe, click Bookmarks.
	
	2. Click the Management Agents bookmark.
	
	3. Click the MA to be edited.
	
	4. Click Join.
	
	5. Click the "Configure the Join" tab.
	
	6. In the Join Configuration area, the "Attempt to Join" check box is
	  automatically selected. Remove the DN from the Search Base box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem has been corrected in
	Microsoft Metadirectory Services version 2.1.
	
	Additional query words: MA zscript genlogs
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbZoomitSearch kb3rdpartySearch kbZoomit210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
