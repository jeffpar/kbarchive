---
layout: page
title: "Q222967: ZAK Client Setup Does Not Create TEMP Folders Correctly"
permalink: /kb/222/Q222967/
---

## Q222967: ZAK Client Setup Does Not Create TEMP Folders Correctly

{% raw %}

	Article: Q222967
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 16-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zero Administration Kit for Windows NT Workstation 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Zero Administration Kit (ZAK) for Windows NT 4.0 Workstation does
	not create the TEMP folders correctly when you are installing clients. This can
	lead to problems with setting up programs, printing, and other issues related to
	the location of the TEMP folder.
	
	CAUSE
	=====
	
	The Newtemp.reg file creates registry values that are REG_SZ data types instead
	of REG_EXPAND_SZ data types.
	
	RESOLUTION
	==========
	
	To work around this issue, modify the Newtemp.reg file in the I386\Scripts
	folder on your distribution share as follows:
	
	  REGEDIT4
	
	  [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session
	  Manager\Environment]
	  "temp"=hex(2): 25,53,79,73,74,65,6d,52,6f,6f,74,25,5c,54,45,4d,50
	  "tmp"=hex(2): 25,53,79,73,74,65,6d,52,6f,6f,74,25,5c,54,45,4d,50
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTWsearch kbAudDeveloper kbZAWNTW400
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
