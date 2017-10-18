---
layout: page
title: "Q97768: WFWG: Incorrect AutoStart=&lt;Full-or-Base&gt; Entry in SYSINI.WRI"
permalink: kb/097/Q97768/
---

## Q97768: WFWG: Incorrect AutoStart=&lt;Full-or-Base&gt; Entry in SYSINI.WRI

	Article: Q97768
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SYSINI.WRI file incorrectly lists the real-mode component value "base" for
	the AutoStart= line of the SYSTEM.INI [network] section. If you execute the NET
	START command with the value "base" in the AutoStart= line, the following error
	message appears:
	
	  Error 2185: The service name is invalid.
	
	RESOLUTION
	==========
	
	To eliminate this error message, use the correct real-mode component value,
	which is "basic."
	
	MORE INFORMATION
	================
	
	For more information about real-mode values for the AutoStart= line of the
	SYSTEM.INI [network] section, refer to page 6-65 of the "Microsoft Windows for
	Workgroups Resource Kit" for version 3.1 or query on the following words in the
	Microsoft Knowledge Base:
	
	  net start and autostart
	
	Additional query words: 3.10 redirector 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
