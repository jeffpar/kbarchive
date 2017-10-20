---
layout: page
title: "Q257174: Using Mapped Drives with IIS"
permalink: /kb/257/Q257174/
---

## Q257174: Using Mapped Drives with IIS

{% raw %}

	Article: Q257174
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 25-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information about using mapped network drives for Web
	sites and virtual directories with IIS.
	
	When you create or administer a Web site or virtual directory, the option to
	browse for the physical location where the content is stored for that site or
	virtual directory includes mapped drives. This may be interpreted as a way to
	keep the content on a network share accessible through the mapped drive;
	however, because the nature of drive mappings, this is not a viable option. If
	you prefer to keep your content on a remote computer, then create the Web site
	or virtual directory with a universal naming convention (UNC) path to point to
	the share on the remote computer.
	
	MORE INFORMATION
	================
	
	Drive mappings are an extension to the net use command and are created on a
	per-user basis. That is, the entries for drive mappings exist under the
	Hkey_Current_User registry key for the user who maps to the network drive. Also,
	drive mappings are created with the credentials of the user who is currently
	logged on.
	
	A possible work around is to log in to the console of the Web server as a user
	who may need to be authenticated through the Web server, and then create the
	mapped drive as a persistent drive (Reconnect at Logon) for that user account.
	This can cause performance degradation because the user account that you are
	connecting with may need to be authenticated twice for access, once by IIS and a
	second time to create the mapped drive.
	
	The preferred method of accessing content for the Web server that exists on a
	remote computer is to use shares that follow the universal naming convention
	(UNC). For additional information, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q222069 IIS 4.0 Requires Username and Password When Using a Remote Computer
	
	  Q207671 Accessing Network Files from IIS Applications
	
	REFERENCES
	==========
	
	For additional information on mapped drives and the net use command, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q135665 Connection Established in MS-DOS Session Is Not Reconnected
	
	  Q149984 Accessing Network Drives Created in Services Under Windows NT
	
	  Q103390 Network Access Validation Algorithm and Example
	
	  Q201656 INFO: An Explanation of a Net Use Session via TCP/IP
	
	  Q154738 Connect Network Drive Caches First Credentials Supplied
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
