---
layout: page
title: "Q281318: Unattended Installation Of Windows 2000 Resource Kits To A Custo"
permalink: /kb/281/Q281318/
---

## Q281318: Unattended Installation Of Windows 2000 Resource Kits To A Custo

	Article: Q281318
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 2000 Professional Resource Kit ISBN 1-57231-808-2 
	- MSPRESS Microsoft Windows 2000 Server Resource Kit ISBN 1-57231-805-8 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When performing an unattended installation of the Windows 2000 Resource Kit from
	the command prompt using MSIEXEC.EXE, the default installation location is
	C:\Program Files\Resource Kit. Use the following syntax to specify an
	installation location other than the default.
	
	  
	  C:\>msiexec /i w2000rk.msi NTRK50DIR="C:\Resource Kit" /q<BR/>
	
	Replace "C:\Resource Kit" with a directory of your choice.
	
	This syntax will work for CD setup as well as network installations.
	
	MORE INFORMATION
	================
	
	Further information on installing the Windows 2000 Resource Kit from the command
	prompt is included in the Resource Kit Release Notes.
	
	Additional query words: rkbook win2000 TOOLS RESKIT RESOURCE KIT W2K
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
