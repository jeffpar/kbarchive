---
layout: page
title: "Q139891: INFO: Visual SourceSafe Installation is Processor Specific"
permalink: /kb/139/Q139891/
---

## Q139891: INFO: Visual SourceSafe Installation is Processor Specific

{% raw %}

	Article: Q139891
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual SourceSafe installation is Processor specific. If you install on an
	Intel-based system, you get only the executables in the DOS, Win, and Win32
	directories for Intel-based operating systems such as Windows, Windows 95,
	Windows NT, and MS-DOS. Installing on a MIPS- or Alpha-based system, installs
	only MIPS- or ALPHA-based executables in the Ntmips or Ntaxp directories.
	
	Visual SourceSafe 6.0 does not ship with any MIPS or PowerPC executables. The
	Alpha Visual SourceSafe executables are only shipped with the Visual Basic
	Enterprise Edition.
	
	MORE INFORMATION
	================
	
	To install for more than one processor, you can run a server setup on each of
	the workstations running under each processor and direct each installation to
	the server. Each setup will add directories to the server install for that
	processor. Clients can then have access to the executables for the architecture
	they are running.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Hardware          : ALPHA MIPS
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
