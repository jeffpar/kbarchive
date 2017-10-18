---
layout: page
title: "Q273662: Incorrect Short File Names Generated in Japanese Windows NT 4.0"
permalink: kb/273/Q273662/
---

## Q273662: Incorrect Short File Names Generated in Japanese Windows NT 4.0

	Article: Q273662
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Incorrect short file names are generated in the Japanese version of Windows NT
	4.0 after you create more than 136,000 files in the same folder. After you
	create 136,000 files in the same folder, the short file names that are created
	do not use the standard 8.3 file name format.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time    Size       File name     Platform
	  ----------------------------------------------------
	  9/11/2000  5:51pm    366,864  Ntdll.dll     Intel
	  9/11/2000  5:50pm    955,392  Ntkrnlmp.exe  Intel
	  9/11/2000  5:49pm    934,912  Ntoskrnl.exe  Intel
	  9/11/2000  5:50pm    613,648  Ntdll.dll     Alpha
	  9/11/2000  5:48pm  1,407,424  Ntkrnlmp.exe  Alpha
	  9/11/2000  5:48pm  1,383,552  Ntoskrnl.exe  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
