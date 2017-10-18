---
layout: page
title: "Q167804: BUG: Source Profiler in Visual C++ Does Not Execute"
permalink: kb/167/Q167804/
---

## Q167804: BUG: Source Profiler in Visual C++ Does Not Execute

	Article: Q167804
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Source Profiler, provided with Microsoft Visual C++, versions 5.0 and 6.0,
	may not execute from the Developer Studio. When attempting to profile, Developer
	Studio switches to the Profiler output window but the profiler tools are not
	executed and no output is produced.
	
	CAUSE
	=====
	
	This problem occurs because Developer Studio fails to create the correct
	environment paths for the spawned process and cannot find the profiler tools
	using the current path variables.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	For Visual C++, version 5.0 on Windows 95, Windows 98, or Windows Millennium
	Edition (Me), add the following directories to the PATH statement in your
	Autoexec.bat file:
	
	     PATH=[Developer Studio Path]\SharedIDE\Bin; [Developer Studio
	     Path]\VC\Bin
	
	For Visual C++, version 6.0 on Windows 95, Windows 98, or Windows Millennium
	Edition (Me), add the following directories to the PATH statement in your
	Autoexec.bat file:
	
	  PATH=[Visual Studio Path]\Common\MSDev98\Bin;[Visual Studio Path]\ 
	  VC98\Bin
	
	On Windows NT, execute the System applet in Control Panel and select the
	Environment tab. Add the previous directories to the system's PATH environment
	variable, not the individual user's PATH variable.
	
	On Windows 2000, execute the System applet in Control Panel, select the Advanced
	tab and click Environment Variables button. Add the previous directories the the
	System's PATH environment variable.
	
	Finally, verify that these directories are also referenced in the IDE by
	following these steps:
	
	1. On the Tools menu, click Options.
	
	2. On the Options dialog box, click the Directories tab.
	
	3. Select Executable Files from the Show Directories For list.
	
	4. Look for the appropriate directories in the Directories list.
	
	5. If necessary, add the full path to the Bin directories of Developer Studio
	  and Visual C++ (as noted previously). To add to the Directories list, click
	  on an blank line and type.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: prep plist profile VWBIss
	
	======================================================================
	Keywords          : kbide kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
