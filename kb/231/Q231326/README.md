---
layout: page
title: "Q231326: Err Msg: The Document Is in Use by Another Application"
permalink: /kb/231/Q231326/
---

## Q231326: Err Msg: The Document Is in Use by Another Application

{% raw %}

	Article: Q231326
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open an HTM file using WordPad and make a change, and then open
	Internet Explorer and type in the Web site and path to the HTM file, the
	following error message occurs when you attempt to save the changes in WordPad:
	
	  The Document your_page.htm is in use by another application and cannot be
	  accessed.
	
	CAUSE
	=====
	
	Internet Information Server (IIS) opens HTM files to read them and deliver the
	content to Web clients. When WordPad opens a document, it blocks both read and
	write permissions on the file by setting the Deny write and Deny read flags.
	Because IIS has the file open for read, the WordPad request fails. If an
	application attempts to open the file with only the Deny write flag, the system
	will return the file without an error.
	
	Reviewing network trace information reveals that the IRP making the open call
	uses a Deny write Deny read. IIS respects system file locking if you open a file
	with Deny read Deny Write attributes. IIS will gracefully respect this and
	return an appropriate message.
	
	WORKAROUND
	==========
	
	Use another editor to make the necessary changes. Notepad or Visual InterDev are
	two of the alternative editors that Microsoft offers.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
