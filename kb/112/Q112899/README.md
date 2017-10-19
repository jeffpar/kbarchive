---
layout: page
title: "Q112899: PC WRmt: Problems Mixing Language Versions of Mail"
permalink: /kb/112/Q112899/
---

## Q112899: PC WRmt: Problems Mixing Language Versions of Mail

	Article: Q112899
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install version 3.2 of Microsoft Mail Remote for Windows over a
	pre-existing version of Microsoft Mail for Windows of a different language, you
	will get an error message that states the MSSFS.DLL can not be found.
	
	You also get an incorrect message similar to:
	
	  Currently version 3.02 of MSMAIL.EXE is installed and supports French. The
	  software you are installing supports US English. Should the copy be over
	  written?"
	
	NOTE: The incorrect version number is displayed; there is no version 3.02.
	
	CAUSE
	=====
	
	Mail Remote for Windows requires that you install the same language version of
	Mail Remote for Windows as you use for Mail for Windows. If different language
	versions are used, you will receive the error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Remote for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Assume you are installing German Microsoft Mail Remote for Windows over English
	Microsoft Mail for Windows. Setup looks in MSMAILPV.INI for the current driver.
	The current driver string is localized, so Setup will find the current driver
	string, Microsoft Mail for PC Networks.
	
	Setup will then compare this string with the German version. The compare will
	fail, and Setup will then assume that there is no current driver. It will then
	look for stranded Microsoft Mail for Windows LAN Driver files and move them to
	<windows>\MSMAIL\MSMAIL, so the MSSFS.DLL driver will not be found in its
	old location.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
