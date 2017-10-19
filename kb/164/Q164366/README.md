---
layout: page
title: "Q164366: Encarta 97 Err Msg: Required .dll File Msvcirt.dll is Missing"
permalink: /kb/164/Q164366/
---

## Q164366: Encarta 97 Err Msg: Required .dll File Msvcirt.dll is Missing

	Article: Q164366
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kburl kbimu
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Encarta Encyclopedia, you may receive the following
	error message:
	
	  A required .dll file is missing:
	  Msvcirt.dll
	
	CAUSE
	=====
	
	This behavior can occur if the wrong version of the Msvcrt40.dll file is
	installed on your computer, or if the file is damaged.
	
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
	
	Encarta Encyclopedia 97 does not use the Msvcirt.dll file, but it does use the
	Msvcrt40.dll file. Some versions of the Msvcrt40.dll file require the
	Msvcirt.dll file as a companion file.
	
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
	
	
	Additional query words: 97 multi media multimedia multi-media mmtitles mm dofaq money w_money streets trip planner automap plus creative writer cw2
	
	======================================================================
	Keywords          : kbenv kberrmsg kburl kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1997 kbEncartaEnCyc1997Del
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
