---
layout: page
title: "Q239035: Err Msg: 550 Directory: Access Denied, Failed to Change Dir"
permalink: /kb/239/Q239035/
---

## Q239035: Err Msg: 550 Directory: Access Denied, Failed to Change Dir

{% raw %}

	Article: Q239035
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user browses files and directories on an Internet Information Services
	5.0 FTP Server using CuteFTP, an error message similar to the following may
	occur:
	
	  550 Directory: Access Denied
	  Failed to Change Dir
	
	The error usually occurs when the user is attempting to download a "queued" file.
	
	CAUSE
	=====
	
	This error is most often caused by an attempt to connect to the FTP site when
	the user does not have list permissions on the directory.
	
	RESOLUTION
	==========
	
	To correct this problem, assign list and read permissions on the directories
	that the user (or the user's group) needs permissions to.
	
	MORE INFORMATION
	================
	
	For more information about setting directory and file permissions on FTP
	content, see the Windows 2000 Resource Kit and the Internet Information Services
	documentation.
	
	Additional query words: iis cuteftp ftp
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
