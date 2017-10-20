---
layout: page
title: "Q183171: XADM: Internet Mail Service Error with 5.5 Added to Site"
permalink: /kb/183/Q183171/
---

## Q183171: XADM: Internet Mail Service Error with 5.5 Added to Site

{% raw %}

	Article: Q183171
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you add a computer running Exchange Server 5.5 to an Exchange 4.0 or
	Exchange 5.0 site, using the Administrator program from version 4.0 or 5.0, you
	cannot see all properties for the Internet Mail Service (Internet Mail Connector
	in 4.0). If you double-click on the Internet Mail Service, the following error
	message appears:
	
	  Extension SMTP could not be loaded. The specified Module could not be
	  found.
	
	However, the Internet Mail Service can be administered using the Exchange Server
	5.5 Administrator program.
	
	CAUSE
	=====
	
	During the installation of an Exchange Server 5.5 computer into the Exchange 4.0
	or 5.0 site, not all libraries required for a static link for run-time are
	replicated over to the Exchange Server computers running 4.0 or 5.0, or to any
	computer running the Administrator program from version 4.0 or 5.0.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Copy two files from the Exchange Server version 5.5 CD: Mfc42.dll and
	  Msvcrt.dll.
	
	2. Insert those files into the winnt\system32 directory on the computers running
	  the Exchange 4.0 or Exchange 5.0 Administrator program. Because the
	  Msvcrt.dll file is a C-Runtime file used for certain operating system time
	  functions, a file lock will be established at startup.
	
	3. If the computer is using NTFS, you must perform a parallel installation of
	  Windows NT (in other words, install Windows NT into another directory or
	  partition on the same computer). Then copy over the files into their
	  appropriate location. If you are using FAT, go to MS-DOS and copy over the
	  files.
	
	Additional query words: IMC IMS extension SMTP could not be Loaded Module could not be found
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
