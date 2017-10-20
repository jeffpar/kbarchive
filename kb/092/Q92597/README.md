---
layout: page
title: "Q92597: Disabling an Inactive Persistent Connection"
permalink: /kb/092/Q92597/
---

## Q92597: Disabling an Inactive Persistent Connection

{% raw %}

	Article: Q92597
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have persistent connections enabled, but you can't use File Manager to
	disconnect a network drive connection that isn't currently active.
	
	CAUSE
	=====
	
	If a persistent connection cannot be made to a server, it does not display in
	File Manager. Because it does not show up in File Manager, you can't use File
	Manager to disable the persistent connection.
	
	WORKAROUND
	==========
	
	To disable an inactive persistent connection, you must use the NET USE command
	from the MS-DOS command prompt.
	
	In the following example, drive M is an inactive persistent connection:
	
	  NET USE M: /D /PER:NO
	
	This disables the connection, but causes the following error message to be
	displayed:
	
	  Error 3: The specified path was not found.
	
	To verify that the persistent connection has indeed been disabled, use the
	command:
	
	  NET USE /PER:LIST
	
	MORE INFORMATION
	================
	
	Microsoft Windows for Workgroups offers a feature known as persistent
	connections. This feature allows Windows for Workgroups to automatically
	reconnect a workstation to various network drives as configured by the user.
	Persistent connections are normally handled through the File Manager, but File
	Manager cannot disable a persistent connection if the connection is not
	currently active.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1. This problem does not occur in later versions of the product.
	
	Additional query words: 3.1 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
