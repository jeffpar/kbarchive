---
layout: page
title: "Q155730: Objects Don't Appear When Viewed in Page on Personal Web Server"
permalink: /kb/155/Q155730/
---

## Q155730: Objects Don't Appear When Viewed in Page on Personal Web Server

{% raw %}

	Article: Q155730
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv mspwsw95
	Last Modified: 12-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server version 1.0 for Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you view a page from Personal Web Server, some objects may not be displayed
	correctly.
	
	CAUSE
	=====
	
	If the server does not know what the Multipurpose Internet Mail Extensions
	(MIME) type is for the requested data, it may return an incorrect type (such as
	text/plain) that results in an incorrect display of the object.
	
	What Is a MIME Type?
	--------------------
	
	MIME types instruct a Web browser (such as Microsoft Internet Explorer) how to
	handle files being downloaded from a server. When a Web browser requests an item
	on a server, it also requests the MIME type of the object. Some MIME types (such
	as graphics) can be displayed inside the browser, while others (such as
	animations or document files) must start an external program to display them.
	
	WORKAROUND
	==========
	
	To work around this problem, add the appropriate MIME types to Personal Web
	Server.
	
	Steps to Add a MIME Type
	------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	The list of configured MIME types is stored in the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\InetInfo\ 
	  Parameters\MimeMap
	
	To add a new MIME type, open the MimeMap key and create a new String value. The
	name for the new string value should be set for the new MIME type in the
	following format:
	
	  <mime/type>,<extension>,<unused>,<unused>
	
	For example, type the following:
	
	  "image/gif,gif,,"
	
	NOTE: The default entries contain settings in the second unused area. These
	settings are left over from the Internet Information Server (IIS) codebase,
	which Personal Web Server is based on, but they are not used.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbenv mspwsw95 
	Technology        : kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
