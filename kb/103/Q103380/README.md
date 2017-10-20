---
layout: page
title: "Q103380: PC Forms: File Scan Rights Required for Novell NetWare"
permalink: /kb/103/Q103380/
---

## Q103380: PC Forms: File Scan Rights Required for Novell NetWare

{% raw %}

	Article: Q103380
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With version 1.0 of Microsoft Electronic Forms Designer, if the electronic forms
	(E-forms) are to be shared among multiple users on a Novell NetWare local area
	network (LAN), the Microsoft Mail shared extensions directory must have File
	Scan rights so Microsoft Mail and the E-form Browser can access the SHARED.INI
	and E-form files.
	
	When you install E-forms on a NetWare LAN, you may want to locate the shared
	extensions directory in a subdirectory of the MAILEXE directory where the
	Microsoft Mail executable files are installed, because the MAILEXE directory
	must have File Scan set to on.
	
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
