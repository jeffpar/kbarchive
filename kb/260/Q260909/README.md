---
layout: page
title: "Q260909: Internet Explorer Script Error with Services for UNIX Admin Tool"
permalink: /kb/260/Q260909/
---

## Q260909: Internet Explorer Script Error with Services for UNIX Admin Tool

{% raw %}

	Article: Q260909
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 04-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Windows Services for UNIX version 2.0 Administrator
	tool, you may receive the following error message:
	
	  Internet Explorer Script Error
	
	  An error has occurred in the script on this page.
	
	  Line: 60
	  Char: 5
	  Error: Automation server can't create object
	  Code: 0
	  URL: file://C:\Program Files\UnixSvcs\Admin\About.htm
	
	  Do you want to continue running scripts on this page?
	
	NOTE: The information in the URL line of the error message is the path to the
	script, and varies depending on your computer.
	
	CAUSE
	=====
	
	This behavior occurs when you install Services for UNIX in a folder whose name
	contains a space or spaces. This also occurs if the folder name contain a tilde
	(~) character.
	
	RESOLUTION
	==========
	
	To resolve this issue, install Services for UNIX in a folder whose name does not
	contain a space, for example, C:\Sfu, or a tilde (~) character.
	
	MORE INFORMATION
	================
	
	You can easily detect this problem by reviewing the URL value in the error
	message. For example:
	
	  C:\Program Files\UnixSvcs\Admin\About.htm
	
	The Program Files folder name contains a space and causes the error message.
	
	This behavior is also described in the Services for UNIX 2.0 Readme.txt file:
	
	  Special Requirements and Alerts
	
	  Install this software in a directory that does not include a space (or tilde)
	  in its name. If you do install this software in a directory that has a space
	  (or tilde) in its name, some shortcuts cannot work correctly. In addition,
	  you may experience problems with Network File System (NFS), some UNIX
	  utilities, and scripts.
	
	Additional query words: solar coaster solarcoaster sfu
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
