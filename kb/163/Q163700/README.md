---
layout: page
title: "Q163700: IIS Access Violation for Polygon with More Than 100 Vertices"
permalink: /kb/163/Q163700/
---

## Q163700: IIS Access Violation for Polygon with More Than 100 Vertices

{% raw %}

	Article: Q163700
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Internet Information Server (IIS) may experience an access violation when it
	processes client response coordinates for a server side Image Map. The access
	violation will occur if the region selected is a Polygon with more than 100
	vertices defined.
	
	CAUSE
	=====
	
	IIS defines enough space to store 100 vertices for a polygon region; therefore,
	if more than 100 vertices exist in the image map, IIS attempts to process the
	additional vertices. An access violation then occurs when the limit of 100
	vertices is exceeded.
	
	RESOLUTION
	==========
	
	IIS has been modified to allow 160 vertices and ignore any polygon region
	defined with more than 160 vertices.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server versions 2.0 and 3.0. This problem was corrected in the latest Microsoft
	Windows NT 4.0 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt access violation iis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : winnt:2.0,3.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
