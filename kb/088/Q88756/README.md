---
layout: page
title: "Q88756: Embedded Paintbrush Object Disappears in Write"
permalink: /kb/088/Q88756/
---

## Q88756: Embedded Paintbrush Object Disappears in Write

{% raw %}

	Article: Q88756
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to embed a Paintbrush object into Write, the object may not
	appear or the object may appear briefly then become invisible.
	
	WORKAROUND
	==========
	
	To work around this problem, decrease the width and height of the image in
	Paintbrush, or press the PAGE UP key until the image appears.
	
	1. Because the image causes Write to scroll down the page, press the PAGE UP key
	  to cause the embedded object to appear.
	
	  -or-
	
	2. Decrease the object's width and height with Paintbrush's Image Attributes
	  command:
	
	  a. From the Options menu, choose Image Attributes.
	
	  b. Decrease both the Width and Height values.
	
	MORE INFORMATION
	================
	
	On page 491 of the "Microsoft Windows User's Guide," two methods of embedding a
	drawing are described. The first method discusses starting from the application
	where the embedded drawing appears (client), such as Write. When this method is
	used and Paintbrush's Image Attributes are set too high, then the image causes
	Write to scroll down and appear not to display the image.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
