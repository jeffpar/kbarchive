---
layout: page
title: "Q90241: NET.EXE Does Not Save Passwords or Restore Connections"
permalink: /kb/090/Q90241/
---

## Q90241: NET.EXE Does Not Save Passwords or Restore Connections

{% raw %}

	Article: Q90241
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	The Windows for Workgroups or Workgroup Connections pop-up Terminate-
	and-stay-resident (TSR) program [started by typing "net start popup" (without the quotation marks)] does not make use of your password
	cache. If you reconnect to a shared resource with a password, you will
	be prompted for the password again.
	
	The setting Reconnect At Startup only functions as long as the
	computer is not turned off or the pop-up TSR is not removed from
	memory. After restarting your computer, none of the connections you
	had will be maintained. The pop-up TSR will not read the Reconnect=
	statement in the SYSTEM.INI file.
	
	Both of these limitations were designed to save conventional memory
	usage by the pop-up TSR.
	
	Additional query words: 3.10 1.00 rebooting wc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1; :1.0
	
	=============================================================================
	

{% endraw %}
