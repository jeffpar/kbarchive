---
layout: page
title: "Q150861: XADM: Msvcr40d.dll Missing From the Exchange Resource Kit"
permalink: kb/150/Q150861/
---

## Q150861: XADM: Msvcr40d.dll Missing From the Exchange Resource Kit

	Article: Q150861
	Product(s): Microsoft Windows NT
	Version(s): winnt:Part 1
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Resource Kit Part 1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to execute the Setup program for the CleanMB utility, supplied with
	the Microsoft Exchange 4.0 Resource Kit, the following error message will
	appear:
	
	  The dynamic link library MSVCR40D.dll could not be found in the specified
	  path <<Path>>.
	
	WORKAROUND
	==========
	
	To work around this problem, you must either put Msvcr40d.dll in your Windows NT
	System32 directory or in the directory where the CleanMB files are installing
	from.
	
	RESOLUTION
	==========
	
	The most current version of the Microsoft Exchange Resource Kit does not exhibit
	this problem and is available for download on
	http://www.microsoft.com/msdownload
	
	MORE INFORMATION
	================
	
	Msvcr40d.dll is a Microsoft Visual C++ runtime dll and is required for this
	Setup program.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : winnt:Part 1
	
	=============================================================================
	
