---
layout: page
title: "Q159775: PRB: General Protection Fault Occurs On VSS Launch"
permalink: kb/159/Q159775/
---

## Q159775: PRB: General Protection Fault Occurs On VSS Launch

	Article: Q159775
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0.,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	- Microsoft Visual SourceSafe for Windows, versions 5.0., 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain conditions, you may receive a General Protection Fault when
	attempting to open Visual SourceSafe. When running on Windows NT, this message
	may appear as:
	
	  The exception unknown software exception (0xc00000fd) occurred in the
	  application at location <address>.
	
	  Click OK to terminate the application.
	  Click on CANCEL to debug the application.
	
	where <address> is any hexadecimal memory address.
	
	In addition to the above message, the following error has been reported under
	Windows NT:
	
	  An application error has occurred and an application error log is being
	  generated. SSADMIN.EXE (SSEXP.EXE) Exception: Stack overflow 0xc00000fd
	  Address: <address>
	
	where <address> is any hexadecimal memory address.
	
	
	When running on Windows 95, this message may appear as:
	
	  This program has performed and illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	Another error message may appear when you log on the Visual SourceSafe explorer:
	
	  Too many file handles open.
	
	CAUSE
	=====
	
	One possible cause of this error is if the Srcsafe.ini file's #include
	statements are cyclical in nature.
	
	In a typical client server SourceSafe installation, both the client and the
	server will have an Srcsafe.ini file. The client's Srcsafe.ini file usually
	contains a single #INCLUDE entry that points to the server's Srcsafe.ini file.
	An example would be:
	
	     #INCLUDE \\Server\Share\VSS\Srcsafe.ini
	
	If a user or administrator inadvertently modifies or adds a #INCLUDE statement to
	one or more Srcsafe.ini files that results in a cyclic relationship, the above
	errors will occur.
	
	RESOLUTION
	==========
	
	Removing the cyclic #INCLUDE statements and replacing them with correctly
	formatted #INCLUDE statements will resolve this problem.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install a Server installation of Visual SourceSafe.
	
	2. Open the SRCSAFE.INI file and add the following line to the beginning of the
	  file:
	
	        #INCLUDE <Path to Srcsafe.ini>\Srcsafe.ini
	
	  where <Path to Srcsafe.ini> is the path to the currently-opened
	  Srcsafe.ini file. Save and close the Srcsafe.ini file.
	
	3. Attempt to run the Visual SourceSafe Explorer. Note that, depending on your
	  current operating system, one of the above error messages will occur.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,4.0a,5.0.,6.0
	Issue type        : kbprb
	
	=============================================================================
	
