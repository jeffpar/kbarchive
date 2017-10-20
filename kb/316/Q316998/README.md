---
layout: page
title: "Q316998: PRB: FTP Banner Displayed on Command Line Cannot Be Removed"
permalink: /kb/316/Q316998/
---

## Q316998: PRB: FTP Banner Displayed on Command Line Cannot Be Removed

{% raw %}

	Article: Q316998
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a command window and use File Transfer Protocol (FTP) to connect
	to an Internet Protocol (IP) address or an FTP location, an FTP banner that
	resembles the following is displayed:
	
	In IIS 5.0:
	
	  C:\Documents and Settings\username>ftp xx.xx.xx.xx
	  Connected to xx.xx.xx.xx.
	  220 Servername Microsoft FTP Service (Version 5.0).
	  User (xx.xx.xx.xx:(none)):
	
	In IIS 4.0:
	
	  C:\>ftp xx.xx.xx.xx
	  Connected to xx.xx.xx.xx.
	  220 Servername Microsoft FTP Service (Version 4.0).
	  User (xx.xx.xx.xx:(none)):
	
	MORE INFORMATION
	================
	
	Users often request that "Microsoft FTP Service (Version X.X)" be removed or
	hidden for security reasons. However, the FTP banner or the welcome message that
	appears before the user logon is hard-coded. This is part of Ftpsvc2.dll file
	and cannot be removed.
	
	The Ftpsvc2.dll file is found under the %systemroot%\WINNT\system32\inetsrv
	folder.
	
	Additional query words: ftp banner removed masked hide
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
