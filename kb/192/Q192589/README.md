---
layout: page
title: "Q192589: Encarta 98 Research Organizer Err Msg: Cannot Find the File..."
permalink: kb/192/Q192589/
---

## Q192589: Encarta 98 Research Organizer Err Msg: Cannot Find the File...

	Article: Q192589
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbui kburl kbimu
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 98 Research Organizer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Encarta 98 Research Organizer, you may receive one of the
	following error messages:
	
	   - This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	   - Cannot find the file 'C:\Program File\Microsoft Reference\Encarta
	  Encyclopedia\Org98.exe' (or one of its components). Make sure the path and
	  file name are correct and that all required libraries are available.
	
	CAUSE
	=====
	
	This behavior can occur if one of the Microsoft Foundation Classes (MFC) core
	files is damaged or an incorrect version.
	
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
	
	Additional query words: 1.00 multi multi-media media mm ro
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbui kburl kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaResearchOrg98
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
