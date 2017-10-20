---
layout: page
title: "Q152278: XCLN: Exchange Client Setup Command Line Switches"
permalink: /kb/152/Q152278/
---

## Q152278: XCLN: Exchange Client Setup Command Line Switches

{% raw %}

	Article: Q152278
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 30-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the Microsoft Exchange Client Setup program from the network share
	point, several command line options are available:
	
	SETUP.EXE [/A] [/G filename] [/Q[0|1|T]] [/R] [/U[A]] [/Y]
	
	/A                   Administrator mode.
	/G filename          Generate logfile of installation activity.
	/Q[0|1|T]            Quiet install mode (0 shows exit, 1 hides exit,
	                    T hides all display).
	/U[A]                Uninstall the application but leave shared components
	                    (use /UA to remove all).
	/Y                   Install without copying files.
	
	NOTE: /G, /U, and /UA are not available in the Microsoft Exchange client for
	Windows 3.x Setup program.
	
	MORE INFORMATION
	================
	
	Setup /A - This option is used to create a network share point for users running
	Microsoft Exchange and possibly Windows from a shared network location.
	
	Setup /Y - This option will rewrite the Microsoft Exchange client registry
	entries and recreate the icons in Program Manager.
	
	Setup /GC:\setup.log - This will create C:\Setup.log, which will list all files
	installed and registry settings made during setup.
	
	
	If Default.prf doesn't already exist in the directory pointed to by the WINDIR
	environment variable, the Microsoft Exchange Setup program for Windows 3.x
	clients will not generate a profile.
	
	Additional query words: setup switches switch options command line
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
