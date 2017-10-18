---
layout: page
title: "Q114336: Missing MS At Work PC Fax Address Option in WFWG 3.11 Mail"
permalink: kb/114/Q114336/
---

## Q114336: Missing MS At Work PC Fax Address Option in WFWG 3.11 Mail

	Article: Q114336
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a new address entry in the Windows for Workgroups 3.11
	Mail program, the Microsoft At Work PC Fax address option is missing.
	
	NOTE: Even when this option is missing, you should not encounter any problems
	receiving or sending faxes.
	
	CAUSE
	=====
	
	This situation can be caused by a missing FAXNSP entry in the MSMAIL.INI file or
	a corrupted FAXNSP.DLL file in the Windows SYSTEM subdirectory.
	
	RESOLUTION
	==========
	
	Edit the MSMAIL.INI file located in the Windows directory and verify that the
	NAME= entry under the [Providers] section contains Faxnsp. Below is an example
	of how this section should look.
	
	     [Providers]
	     Name=Pabnsp MSSFS Faxnsp
	
	If the [Providers] section appears to be correct, it is possible that FAXNSP.DLL
	is corrupted. Expand a new FAXNSP.DLL from Disk 6 (of the 3.5- inch set) or Disk
	8 (of the 5.25-inch set) of Windows for Workgroups 3.11. For example, to expand
	a new copy of the file from a disk located in the A drive to a Windows directory
	located on the drive C, you would use the following:
	
	  expand a:\faxnsp.dl_ c:\windows\system\faxnsp.dll
	
	Additional query words: 3.11 dos not connected
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
