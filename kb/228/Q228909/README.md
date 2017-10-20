---
layout: page
title: "Q228909: FTP Virtual Directory Is Not Displayed in Directory Listing"
permalink: /kb/228/Q228909/
---

## Q228909: FTP Virtual Directory Is Not Displayed in Directory Listing

{% raw %}

	Article: Q228909
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A virtual directory in an FTP site cannot be seen by the client.
	
	RESOLUTION
	==========
	
	Under the FTP site's home directory, create a physical subdirectory with the
	same name as the alias of the virtual directory.
	
	As an example, assume the FTP site is set up as follows:
	
	- FTP site home directory: C:\INETPUB\FTPROOT
	- Virtual directory alias: TEST
	- Physical directory associated with the TEST virtual directory: C:\FILES
	
	Create a TEST subdirectory under the home directory. In this example, the full
	path for that subdirectory is C:\INETPUB\FTPROOT\TEST.
	
	The next time you use the FTP client to browse the FTP site, you will see TEST
	listed as a directory.
	
	When the TEST directory is opened, the contents of the physical directory
	C:\FILES will actually be displayed (rather than the contents of
	C:\INETPUB\FTPROOT\TEST).
	
	Note: The names of the alias and matching physical subdirectories are NOT case
	sensitive.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: vdir folder missing empty show listing ls dir akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
