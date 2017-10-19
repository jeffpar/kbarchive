---
layout: page
title: "Q124741: BUG: WinG 1.0 Bug List"
permalink: /kb/124/Q124741/
---

## Q124741: BUG: WinG 1.0 Bug List

	Article: Q124741
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft WinG API, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft has confirmed the items in the following list to be bugs in the
	Microsoft WinG API.
	
	
	- Some Western Digital drivers cause the WinG display profiler to crash.
	
	  The second time a WinG application is run, the profiler will not run and WinG
	  will attempt to use the driver's StretchDIBits without profiling. This may or
	  may not let the application run depending on what caused the original crash.
	
	
	- The WinG installation will not work on networked Windows installations (setup
	  /n) because the WinG setup program needs to write to the system directory.
	
	
	- If your application needs to link to TOOLHELP, you must call TOOLHELP's
	  LibMain before you call WinG. Work-arounds include changing the DLL
	  initialization order, or linking dynamically to WING.DLL or TOOLHELP.DLL. If
	  you are using Microsoft Visual C++, you can change the initialization order
	  by following these steps:
	
	  1. Go to Project/Edit and check the list of files you have in the project. If
	     you have included WING.LIB, delete it.
	
	  2. Go to Options/Project/Linker/Input/Windows Libraries and clear the
	     TOOLHELP selection.
	
	  3. Go to Options/Project/Linker/Input/Input and hard code the locations of
	     TOOLHELP.LIB, followed by WING.LIB and then the rest of the libraries as
	     usual. For example: C:\MSVC\LIB\TOOLHELP, C:\WING\LIB\WING, oldnames,
	     libw, mlibcew
	
	
	- Video cards using the Cirrus Logic chipset may cause WinG to display the
	  following warning each time WinG is loaded; once should be enough:
	
	  WinG has encountered a problem with your video display driver. Contact the
	  manufacturer of your card to obtain the most recent driver. Your WinG
	  applications will still run, but at reduced speed.
	
	
	- When WinG closes down, it leaks selectors, the memory is freed when the WinG
	  DLL exits.
	
	- On Win32s, calls to WinGGetDIBColorTable() do not retrieve the color table of
	  a WinG bitmap. Possible work-arounds include keeping track of the color table
	  yourself or thunking to the 16-bit WinGGetDIBColorTable().
	
	STATUS
	======
	
	Microsoft has confirmed these to be bugs in WinG version 1.0. Microsoft is
	researching these problems and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbWinGAPI kbWinGSearch
	Version           : :1.0
	
	=============================================================================
	
