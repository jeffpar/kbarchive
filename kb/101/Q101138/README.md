---
layout: page
title: "Q101138: PC Win: Using the ServerPath Entry in the MSMAIL.INI File"
permalink: /kb/101/Q101138/
---

## Q101138: PC Win: Using the ServerPath Entry in the MSMAIL.INI File

{% raw %}

	Article: Q101138
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	The ServerPath entry in the [Microsoft Mail] section of the MSMAIL.INI
	file enables versions 3.0 and 3.2 of Microsoft Mail for Windows to
	search for the postoffice in the specified directory. This eliminates
	the need for the NetWare workstation to have a specific drive letter
	mapped to the Microsoft Mail postoffice.
	
	There are two required entries in the [Microsoft Mail] section to make
	this work on a NetWare 2.x or 3.x server:
	
	     ServerPath=server/volume:path
	     ServerPassword=
	     (no parameter is required on the ServerPassword line)
	
	In the MSMAIL.INI file (found in the subdirectory where Windows is
	installed) add the following lines in the [Microsoft Mail] section:
	
	     ServerPath=server/volume:path
	     ServerPassword=
	     (no parameter is required on the ServerPassword line)
	
	After logging in to the NetWare server, when the user starts Microsoft
	Mail, Mail dynamically connects to the postoffice using an unused
	drive letter to the NetWare file server where the postoffice resides.
	There is no need to establish a drive mapping to the postoffice in a
	NetWare login script.
	
	The ServerPassword entry is used to connect to the server specified by
	the ServerPath entry. Because the user will have already specified a
	password when logging in, Mail interprets the ServerPassword line as
	having entered a password.
	
	Additional query words: 3.00 3.20 Novell
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
