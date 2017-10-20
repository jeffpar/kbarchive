---
layout: page
title: "Q146573: Using Image Maps with Internet Information Server"
permalink: /kb/146/Q146573/
---

## Q146573: Using Image Maps with Internet Information Server

{% raw %}

	Article: Q146573
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following describes how you can set up an image map on an HTML page:
	
	1. Create a DEFAULT.HTM file in the default WWWROOT directory.
	
	2. Find or create a GIF image to be used as the image map.
	
	3. Create the image map file (in CERN format) in the WWWROOT directory.
	  Generally, the map file has the same file name as the GIF file. For example,
	  create an image map file called MYIMAGEMAP.MAP for MYIMAGEMAP.GIF.
	
	4. Create a link in your DEFAULT.HTM file referencing the image map, as
	  follows:
	
	        <A HREF="myimagemap.map"<>IMG SRC="myimagemap.gif" ALIGN="BOTTOM"
	          ismap border=0 ALT="Test Image Map"></A>
	   
	
	The example code above displays the GIF image on the web page. When a user clicks
	a mapped area of the image, the designated link is activated. An image map
	editor, such as Map THIS!, can be used to create the "hot spots" on the image
	map. Advanced HTML tags can be used to modify the placement of the image on the
	page.
	
	For more information, see the documentation of the image map editor.
	
	The third-party products discussed here is manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this products'
	performance or reliability.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
