---
layout: page
title: "Q185615: Encarta 98 Err Msg: Enc98 Caused an Invalid Page Fault..."
permalink: /kb/185/Q185615/
---

## Q185615: Encarta 98 Err Msg: Enc98 Caused an Invalid Page Fault...

	Article: Q185615
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kburl kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 98 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Encarta 98 Encyclopedia, you may receive the following error
	message:
	
	  Enc98 caused an invalid page fault in module <filename>.
	
	where <filename> is any of the following files:
	
	- Eeuil11.dll
	- Vtwrap.dll
	- Dec3298.dll
	- Encitl98.dll
	- Am16.dll
	- Amf16.dll
	- Uninst32.ini
	- Uninst32.exe
	- Unenc98.dll
	
	CAUSE
	=====
	
	This behavior can occur if the versions of the Mfc40.dll and Msvcrt40.dll files
	installed in the computer do not match.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the Windows Libraries Update. To do
	this:
	
	1. Visit the following Microsoft Web site:
	
	  http://www.microsoft.com/downloads/search.asp?
	
	2. In the Search By area, click Keywords.
	
	3. In the Keywords box, type "libraries update" (without the quotation marks).
	
	4. In the Operating System box, click the appropriate operating system, and then
	  click Find It.
	
	5. Click the link that is returned, and then follow the instructions on the
	  screen to install the Microsoft Libraries Update.
	
	The Microsoft Libraries Update resolves an issue that can cause some third-party
	software to behave unexpectedly after the installation of Microsoft Works Suite
	99, Microsoft Encarta Encyclopedia 99 (US only), Microsoft Encarta Virtual Globe
	99, Microsoft Graphics Studio Greetings 99, or other third-party software.
	Impacted programs include America Online (AOL) version 4.0 and HyperTerminal.
	
	For additional information about the Microsoft Libraries Update, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q197298 INFO: Microsoft Libraries Update: What, Where, Why
	
	
	MORE INFORMATION
	================
	
	The following table lists the files installed by the Microsoft Library Files
	Update:
	
	  Filename       Version       Description
	  -----------------------------------------------------------------------
	
	  Msvcrt.dll     6.00.8337     Visual C++ run-time, no dependencies.
	
	  Oleaut32.dll   2.30.4265     Part of the OLE-AUT fileset that
	                               compliments Microsoft Foundation Classes
	                               (MFC) and Visual Basic run-time.
	
	  Olepro32.dll   5.00.4265     Part of OLE-AUT fileset that compliments
	                               MFC and Visual Basic run-time.
	
	  Asycfilt.dll   2.30.4265     Part of OLE-AUT fileset that compliments
	                               MFC and Visual Basic run-time.
	
	  Stdole2.tlb    2.30.4265     Part of OLE-AUT fileset that compliments
	                               MFC and Visual Basic run-time.
	
	  Mfc42.dll      6.00.8267     Microsoft Foundation Class (MFC),
	                               dependent on Msvcrt.dll, ComCtl32.dll, and
	                               OLE-AUT files.
	
	  Mfc42u.dll     6.00.8267     MFC Unicode only for the Windows NT
	                               Platform.
	
	  Regsvr32.exe                 For registration purposes only. For
	                               Mfc42.dll and Oleaut32.dll.
	
	  RegTlib.exe                  For .tlb registration for stdole2.tlb.
	
	Additional query words: multi media mmtitles general protection gpf ipf multi-media mm
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kburl kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1998
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
