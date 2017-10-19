---
layout: page
title: "Q201984: Error:&quot;Procedure for service Content Filter in Qperf.dll Failed&quot;"
permalink: /kb/201/Q201984/
---

## Q201984: Error:&quot;Procedure for service Content Filter in Qperf.dll Failed&quot;

	Article: Q201984
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Microsoft Windows NT Option Pack, the following errors may
	occur in the Windows NT Event Log:
	
	  Content Filter
	
	  The open procedure for service "Content Filter" in Qperf.dll failed.
	  Performance data for this service will not be available. Status code returned
	  is DWORD0.
	
	-or-
	
	  Content Index
	
	  The open procedure for service "Content Index" in Qperf.dll failed.
	  Performance data for this service will not be available. Status code returned
	  is DWORD0.
	
	-or-
	
	  ISAPI Search
	
	  The open procedure for service "ISAPI Search" in Qperf.dll failed.
	  Performance data for this service will not be available. Status code returned
	  is DWORD0.
	
	All of these error messages are logged as event ID 1008.
	
	CAUSE
	=====
	
	The Performance Monitor counters for Index Server are not loaded correctly
	during setup.
	
	RESOLUTION
	==========
	
	There are two ways to resolve this problem:
	
	- Manually extract and load the Performance Monitor counters for Index Server.
	
	  1. Use the Extract utility (Extract.exe) to extract the following files from
	     the Windows NT Option Pack Is20.cab file:
	
	      - Ciperfm.h
	      - Filtperf.h
	      - Perfwci.h
	      - Perfci.ini
	      - Perffilt.ini
	      - Perfwci.ini
	
	For additional information about the Extract utility, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q132913 How to Use EXTRACT.EXE to Copy Files from DMF Disks
	
	  2. Place these files in the \Winnt\System32 folder.
	
	  3. In the System32 folder, type the following commands at a command prompt:
	
	  "lodctr perfci.ini" (without the quotation marks)
	  "lodctr perffilt.ini" (without the quotation marks)
	  "lodctr perfwci.ini" (without the quotation marks)
	
	-or-
	
	- Reinstall Index Server.
	
	  1. Run the Windows NT Option Pack Setup.exe file.
	
	  2. When prompted, click Add/Remove.
	
	  3. In the list of components, clear the Index Server check box.
	
	  4. Rerun Setup.exe.
	
	  5. In the list of components, select Index Server.
	
	MORE INFORMATION
	================
	
	Generally, these errors do not indicate a performance or functionality problem
	with Index Server. Rather, they indicate that the Performance Monitor counters
	are not loaded on the system. Index Server functions normally, but you cannot
	run the Performance Monitor against it until you follow the steps in the
	"Resolution" section.
	
	Additional query words: 1008
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
