---
layout: page
title: "Q62233: Mac Wkst: Saving an Enclosure to a Sun File Server"
permalink: /kb/062/Q62233/
---

## Q62233: Mac Wkst: Saving an Enclosure to a Sun File Server

{% raw %}

	Article: Q62233
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When saving a Microsoft Mail enclosure to a Sun file server, avoid using the
	forward slash (/) character. On a Sun file server, this character denotes a
	directory within a filename (that is, "diskname/directory/directory/filename").
	Saving an enclosure with this character may result in an error.
	
	NOTE: The Apple Macintosh uses the colon (:) character for the same purpose.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	

{% endraw %}
