---
layout: page
title: "Q194828: Combat Flight Simulator: Cannot Open Dialog Boxes in Program"
permalink: /kb/194/Q194828/
---

## Q194828: Combat Flight Simulator: Cannot Open Dialog Boxes in Program

{% raw %}

	Article: Q194828
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbfile kburl kbimu msgamekbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Combat Flight Simulator, you may be unable to open any
	of the dialog boxes in the program.
	
	CAUSE
	=====
	
	This behavior can occur if the Mfc42.dll and Msvcrt.dll files installed on your
	computer are missing, damaged, mismatched, or the incorrect version.
	
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
	
	Additional query words: 1.00 msgame combatfs cfs kbfaq
	
	======================================================================
	Keywords          : kbdisplay kbenv kbfile kburl kbimu msgame kbfaq
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
