---
layout: page
title: "Q90243: Workgroup Connection SYSTEM.INI Settings"
permalink: /kb/090/Q90243/
---

## Q90243: Workgroup Connection SYSTEM.INI Settings

{% raw %}

	Article: Q90243
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Workgroup Connections SYSTEM.INI file contains switches used to control the
	behavior of various Workgroup Connections network components.
	
	The switches control such things as where to find certain files, sizes of some
	buffers used by the redirector, and flags that alter default behavior of
	Workgroup Connections features and default parameters used by the NET command.
	
	Most switches are found in the [Network] section, which is analogous to the
	[network] section in the Windows for Workgroups SYSTEM.INI file.
	
	MORE INFORMATION
	================
	
	Some of the more common switches:
	
	The [Password Lists] section contains the username and the location and name of
	the users password cache file.
	
	The [Network] Section
	---------------------
	
	autostart=FULL or BASIC
	
	  This will determine which redirector is loaded by default when you type "net
	  logon" (without the quotation marks), "net start workstation" (without the
	  quotation marks) or "net start" (without the quotation marks).
	
	username=
	
	  The default username when you type "net logon".
	
	workgroup=
	
	  The default domain you will view.
	
	reconnect=no or yes
	
	  This determines whether to save the connections you make as a persistent
	  connection.
	
	passwordcaching=no or yes
	
	  This enable/disable password caching.
	
	computername=
	
	  This is the name for the computer (node). It must be unique.
	
	lanroot=path
	
	  This is the path to the Workgroup connection files.
	
	dospophotkey=N
	
	  This is the key that triggers the Workgroup Connections network pop-up
	  utility if it is started. (The default is CTRL+N).
	
	Additional query words: 1.00 3.10 wc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : :1.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
