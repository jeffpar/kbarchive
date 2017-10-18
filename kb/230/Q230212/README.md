---
layout: page
title: "Q230212: How to Determine Which Y2K Patch Is Installed"
permalink: kb/230/Q230212/
---

## Q230212: How to Determine Which Y2K Patch Is Installed

	Article: Q230212
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 28-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to determine which Y2K patch is installed on a
	computer. Currently, there is no tool, as such, to determine which patch or
	patches are installed.
	
	MORE INFORMATION
	================
	
	To differentiate between the patches:
	
	1. Run the executable file with the /x argument (for example, type "y2kfixi.exe
	  /x" (without the quotation marks)). This allows for the extraction of the
	  contents of the hotfix file to a specified location.
	
	2. After the executable file is extracted, observe the following information to
	  determine which hotfix you have:
	
	  Y2KFIXI.EXE        Size           Y2KFIX2I.EXE       Size 
	            
	  Docprop.dll       56 KB           Docprop.dll       56 KB
	  Hotfix.exe        85 KB           Fpnwsrv.sys      217 KB  
	  Hotfix.inf         8 KB           Hotfix.exe        85 KB
	  Netui2.dll       289 KB           Hotfix.inf         8 KB
	  Shell32.dll    1,248 KB           Logout.exe        28 KB
	  Timedate.cpl      52 KB           Mfcinst.exe      694 KB
	                                 Netui2.dll       289 KB
	  Y2kfixi.exe      586 KB           Ntbackup.exe     695 KB
	                                 Ntdetect.com      27 KB
	                                 Nwconv.exe       213 KB
	                                 Shell32.dll    1,248 KB
	                                 Timedate.cpl      52 KB
	                                 Win32spl.dll      78 KB
	                     
	                                 Y2kfix2i.exe   1,009 KB
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
