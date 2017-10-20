---
layout: page
title: "Q161162: Application Error When Opening a File in Office 95"
permalink: /kb/161/Q161162/
---

## Q161162: Application Error When Opening a File in Office 95

{% raw %}

	Article: Q161162
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In any Office 95 application, you may receive an "Application Error" dialog box
	when you click Open on the File menu, but all other aspects of the application
	work properly. The text in the dialog box is:
	
	  Exception privileged instruction 0xc0000096
	
	CAUSE
	=====
	
	The Mso95.dll file has become corrupted.
	
	RESOLUTION
	==========
	
	To resolve this problem, do any one of the following:
	
	- Rename the existing Mso95.dll file and then copy a good Mso95.dll file from a
	  different computer that does not exhibit this problem.
	
	- Rename the existing Mso95.dll file and then decompress or expand a new copy
	  of the Mso95.dll file from the original installation media.
	
	- Reinstall Office 95.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
