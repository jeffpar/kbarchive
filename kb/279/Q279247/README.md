---
layout: page
title: "Q279247: Access Violation Appears During Shutdown After You Use IIS 5.0"
permalink: kb/279/Q279247/
---

## Q279247: Access Violation Appears During Shutdown After You Use IIS 5.0

	Article: Q279247
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbWin2000SP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Internet Information Server (IIS) 5.0 and then shut down the
	computer, you may receive the following access violation error message:
	
	  ModLoad: 73930000 73940000 D:\Winnt\System32\Clusapi.dll ModLoad: 689d0000
	  689dd000 D:\Winnt\System32\Resutils.dll ModLoad: 6a750000 6a76e000
	  D:\Winnt\System32\Mtxoci.dll Access violation - code c0000005 (first chance)
	
	
	CAUSE
	=====
	
	This behavior can occur when a race condition occurs in the ATQ Context
	structure while the computer is shut down. The ATQ Context structure contains
	information in .dll files that are associated with any client operation that is
	running on an ATQ thread. When you shut down IIS, the main thread quits, but the
	ATQ thread remains unmapped to shutdown, which causes an illegal close. When an
	illegal close is performed, the ATQ Context structure is invalid. Any pending
	operation may not succeed, and the access violation error message appears.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 2.
	
	MORE INFORMATION
	================
	
	For additional information about how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
