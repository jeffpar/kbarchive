---
layout: page
title: "Q300956: How to Manually Rebuild Performance Library Values"
permalink: kb/300/Q300956/
---

## Q300956: How to Manually Rebuild Performance Library Values

	Article: Q300956
	Product(s): Microsoft Windows NT
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to manually rebuild the performance counter library
	values.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	When you use the System Monitor tool, some counters may be missing or do not
	contain counter data. The base set of performance counter libraries may become
	corrupted and may need to be rebuilt along with any extensible counters. This
	behavior can occur if certain extensible counters corrupt the registry, or if
	some Windows Management Instrumentation (WMI)-based programs modify the
	registry.
	
	Extensible counter information is stored in both of the following locations:
	
	- The HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\Current
	  Version\Perflib\009 registry.
	
	- The %Systemroot%\System32\Perfc009.dat folder and the
	  %Systemroot%\System32\Perfh009.dat folder.
	
	To rebuild the base performance counter libraries manually:
	
	1. Expand the Perfc009.dat file and the Perfh009.dat file that is located on the
	  Windows 2000 CD-ROM, and then replace the files in the %Systemroot%\System32
	  folder.
	
	2. Start the Registry Editor (Regedt32), and then access the following registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Perflib
	
	3. In the registry, change the LastCounter value to 1846 (decimal) and LastHelp
	  value to 1847 (decimal).
	
	4. Locate the following registry to search for services that have a Performance
	  subkey:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	
	5. Remove the FirstCounter, FirstHelp, LastCounter, and LastHelp values that are
	  located in the Performance subkey (if they exist). The Exctrlst.exe tool may
	  also be used to locate the performance counter dynamic-link library files
	  (DLLs) that are installed; then, access the registry to remove the DWORD
	  values. You now have a workable performance registry that only contains
	  system base counters.
	
	Then, you must re-add the extensible counters from the list of services. Before
	you begin this procedure, however, you must identify the .ini file that is used
	to load the counters:
	
	1. Open a command prompt window.
	
	2. At the command prompt, type "%Systemroot%\System32" (without the quotation
	  marks), and then press ENTER.
	
	3. At the command prompt, type "findstr drivername *.ini" (without the quotation
	  marks), and then press ENTER.
	
	4. Note the name of the .ini file for each drivername in the list.
	
	5. At the command prompt, type the following line, and then press ENTER
	
	  lodctr <inifile>
	
	  where <inifile> is the name of the .ini file for the driver that you
	  want to reload.
	
	  For example, if you want to reload the ASP driver, the list that you noted in
	  step 4 shows that Axperf.ini is the .ini file for the ASP driver
	  (axperf.ini:drivername=ASP). Therefore, to reload the ASP driver, type
	  "lodctr axperf.ini" (without the quotation marks) at the command prompt, and
	  then press ENTER.
	
	6. Repeat step 5 for each .ini file in the list.
	
	NOTE: If you receive an error message about the performance library when you use
	the preceding steps, you may need to unload and reload the IIS performance
	dynamic link libraries (DLLs). For additional information about how to do this,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q267831 Event ID 2003 Warning Message Logged When Loading Performance
	  Counters
	
	Additional query words: perfmon tshoot
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000
	Issue type        : kbhowto
	
	=============================================================================
	
