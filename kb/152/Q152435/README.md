---
layout: page
title: "Q152435: Network Client 3.0 Boot Disk and Error 2: The Specified File"
permalink: /kb/152/Q152435/
---

## Q152435: Network Client 3.0 Boot Disk and Error 2: The Specified File

{% raw %}

	Article: Q152435
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Network Client 3.0 has successfully been installed to your hard drive. You
	then copy the client files to the root of a floppy disk, modify the System.ini
	entries to reflect the new path, and boot from it. The following error message
	is then displayed:
	
	  ERROR 2: The specified file was not found.
	
	CAUSE
	=====
	
	The LANROOT parameter must be set to blank if the client files have been copied
	to the root of the boot device.
	
	RESOLUTION
	==========
	
	Open the System.ini file in a text editor. Change the following:
	
	  [network]
	  LANROOT=XXXXX to LANROOT=
	
	  [network drivers]
	  DEVDIR=XXXXX to DEVDIR=A:\
	
	  [Password Lists]
	  *Shares=XXXXX to *Shares=A:\XXXXX
	  USERNAME=XXXXX to USERNAME=A:\XXXXX
	
	Additional query words: Windows NT Administrator MS
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	
	=============================================================================
	

{% endraw %}
