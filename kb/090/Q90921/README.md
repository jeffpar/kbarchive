---
layout: page
title: "Q90921: WFWG Err Msg: The Specified Drive Letter or Device Is Invalid"
permalink: /kb/090/Q90921/
---

## Q90921: WFWG Err Msg: The Specified Drive Letter or Device Is Invalid

{% raw %}

	Article: Q90921
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows for Workgroups File Manager allows attempts to connect to a network
	drive with a drive letter greater than that specified by the LASTDRIVE=
	statement in the CONFIG.SYS file.
	
	If an attempt to connect to a Windows for Workgroups or LAN Manager share using
	such a drive letter is made, the following error message may occur:
	
	  The specified drive letter or device is invalid. If you specified a drive, it
	  may be past the value specified by the LASTDRIVE command in the CONFIG.SYS
	  file.
	
	CAUSE
	=====
	
	The Windows for Workgroups File Manager always allows drive designations through
	the letter Z in the Connect Network Drive dialog box drop down list, regardless
	of the value specified by LASTDRIVE=. Because Microsoft LAN Manager (and
	compatible) networks only use drive designations up to and including that
	specified by LASTDRIVE=, this may result in the attempt to connect to an invalid
	drive letter and the resulting error message above.
	
	Connections to shares on Novell NetWare servers do not result in the error
	because Novell workstations running a monolithic redirector (NETX.COM or
	NETX.EXE) reserve drive letters after that specified by the LASTDRIVE= statement
	for their connections.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1. We are researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
