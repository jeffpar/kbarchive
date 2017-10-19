---
layout: page
title: "Q76939: Multimedia Windows: Problems with SCRNSVR.EXE and IDLEWILD.EXE"
permalink: /kb/076/Q76939/
---

## Q76939: Multimedia Windows: Problems with SCRNSVR.EXE and IDLEWILD.EXE

	Article: Q76939
	Product(s): Miscellaneous Windows Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear if the Windows with Multimedia Extensions
	file SCRNSVR.EXE and the Windows Entertainment Pack's file IDLEWILD.EXE are
	loaded onto the same system and Idlewild is manually dismissed:
	
	  Cannot find AboutWEP.DLL Please insert in Drive A
	  Cannot find IWLib.dll Please insert in Drive A
	
	CAUSE
	=====
	
	The error message occurs if Idlewild is invoked by using the "Load=" line in the
	WIN.INI file and then is manually closed.
	
	WORKAROUND
	==========
	
	To prevent this problem, change the load line to:
	
	  "load=scrnsvr.exe c:\wep\idlewild.exe" (without the quotation marks)
	
	  -or-
	
	  "load=scrnsvr.exe" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Set the WIN.INI load line to:
	
	  "load=c:\wep\idlewild.exe scrnsvr.exe" (without the quotation marks)
	
	2. Start Windows and close Idlewild after it loads.
	
	3. Wait for the delay period to expire. At this point, a prompt will be issued
	  for the Windows Entertainment Pack's DLLs.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMultiXSearch kbWinMultiX100
	Version           : :1.0
	
	=============================================================================
	
