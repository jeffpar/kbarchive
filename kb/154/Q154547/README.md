---
layout: page
title: "Q154547: XADM: Service Packs Fail to Install All Files with -d Option"
permalink: /kb/154/Q154547/
---

## Q154547: XADM: Service Packs Fail to Install All Files with -d Option

{% raw %}

	Article: Q154547
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,7.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Exchange MS-DOS client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Schedule+, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you expand files for Microsoft Exchange Service Packs using the PKUNZIP -d
	option, some of the files and/or directories are missing.
	
	CAUSE
	=====
	
	It appears that PKUNZIP has a limitation of seven directory levels. For example
	the SP2_400I.EXE file, when expanded, is four levels deep. If you start
	expanding this file in a directory that is greater than three levels deep, it
	will fail to expand any files that are in a directory that is eight levels deep,
	and it will fail to create directories at the ninth level.
	
	
	WORKAROUND
	==========
	
	There are two solutions to this issue:
	
	- Make sure you do not decompress the Service Pack 2 files in a directory that
	  is deeper than 3 levels.
	
	  -OR-
	
	- 
	  1. Use the MS-DOS Substitute command to map a drive to the directory
	     structure. For example: SUBST E: C:\SERVIC~1\EXCHAN~1\SERVIC~1\Server
	
	  2. Decompress the SP2 files from drive E.
	
	MORE INFORMATION
	================
	
	The level of directory that this problem will encounter will vary depending on
	the length the directory path. If using the substitute command, remember this is
	an MS-DOS command, and it does not support long file names.
	
	Additional query words: PKZIP PKUNZIP extract SP's 4.00
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbZNotKeyword3 kbExchange400DOS kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0,7.0; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
