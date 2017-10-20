---
layout: page
title: "Q309417: You Can Start Only from 30 to 60 Simultaneous RSH Commands"
permalink: /kb/309/Q309417/
---

## Q309417: You Can Start Only from 30 to 60 Simultaneous RSH Commands

{% raw %}

	Article: Q309417
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a Services for UNIX (SFU) 2.0 RSH server, commands may not
	run after from 30 to 60 simultaneous commands have started. However, the event
	log lists "success" entries for the commands that do not run. The number of
	commands that you can start simultaneously depends on your server's system
	configuration, but is not limited by the system resources.
	
	CAUSE
	=====
	
	This problem occurs because the memory that is available to Rshsvc is limited.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version        Size    File name     
	  -----------------------------------------------------
	  03-Oct-2001  09:39  5.3000.2073.2  72,704  Rshsvc.dll
	
	
	
	After you install this hotfix, you can run as many simultaneous RSH commands as
	the system resources will allow.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
