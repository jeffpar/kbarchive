---
layout: page
title: "Q200543: SMS: PGC Status Setter - PGCSET32.EXE"
permalink: kb/200/Q200543/
---

## Q200543: SMS: PGC Status Setter - PGCSET32.EXE

	Article: Q200543
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Pgcset32.exe is available in the BackOffice Resource Kit, and sets the Program
	Group Control (PGC) status in a batch file under Windows NT Workstation, Windows
	NT Server or Windows 95. It does this by setting the following registry key:
	
	HKEY_CLASSES_ROOT
	 \SMS
	   \APPLICATIONS
	     \regname
	       \CONFIGURATION
	         \STATUS=status
	
	MORE INFORMATION
	================
	
	Pgcset32 sets the MS-DOS error level to one of the following values:
	
	- 0 = Success
	
	- 1 = Wrong number of arguments
	
	- 2 = Unused (used only by 16-bit version)
	
	- 3 = Cannot create or open the registry key
	
	- 4 = Cannot set the value of the registry key
	
	Runs On: Alpha, MIPS, x86
	
	PGCSET32 Syntax
	---------------
	
	- Pgcset32 program_item_registry status.
	
	- Program_item_registry - Specifies the name used in the application's package
	  definition file for the application's program item.
	
	- Status - Specifies the status of the configuration as Success or Fail.
	
	- /? - Provides a usage statement.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
