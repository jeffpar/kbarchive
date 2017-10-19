---
layout: page
title: "Q252417: ISM Property Pages Fail to Appear and the MMC Cannot Be Closed"
permalink: /kb/252/Q252417/
---

## Q252417: ISM Property Pages Fail to Appear and the MMC Cannot Be Closed

	Article: Q252417
	Product(s): Internet Information Server
	Version(s): 1.1,1.2,4.0
	Operating System(s): 
	Keyword(s): kbMMC110 kbDSupport kbiis400
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Management Console, versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Management Console (MMC) version 1.1, the property sheets
	under Internet Information Server (IIS) may stop appearing. When opening the
	properties of a Web site or virtual directory, the title bar of the IIS MMC will
	become inactive, as if a new active window, an IIS property sheet has appeared,
	but none does appear. When trying to close the MMC, the following error message
	appears:
	
	  Please close all property pages before closing.
	
	In the MMC version 1.2, when you use Event Viewer, you see that property pages do
	not appear and the MMC cannot be closed. When you attempt to close Event Viewer,
	you receive the following error message:
	
	  Close all property pages before closing Event Viewer.
	
	CAUSE
	=====
	
	The Rcse.dll file is installed in association with certain tape-backup software.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. Use the Internet Service Manager (HTML) to administer the Web site.
	
	2. Connect to the server from a computer that does not have the DLL installed
	  and remotely administer the computer through the MMC.
	
	3. Remove Rcse.dll from the system. To do this, use Add/Remove Programs to
	  uninstall the Stac Replica software. Be sure to remove the shared system
	  file, Rcse.dll, during the uninstall. When Rcse.dll is removed, the MMC will
	  behave normally again.
	
	NOTE: The MMC also behaves normally for a while after you restart or log back on
	to the computer.
	
	If the Stac Replica software has already been removed, and Rcse.dll is present on
	the system, follow these steps to remove the file:
	
	1. Install The Stac Replica software from the source files.
	
	2. Uninstall the Stac Replica software by using Add/Remove Programs.
	
	3. During the uninstall process, be sure to remove the shared system file,
	  Rcse.dll.
	
	MORE INFORMATION
	================
	
	The MMC version 1.1 does not display the property pages for the IIS snap-ins
	(Microsoft Internet Server Manager and Transaction Server). Other snap-ins, such
	as SQL Enterprise Manager Snap-In or the Radius snap-in, still appear to
	function normally.
	
	For more information, see the following Web site:
	
	  http://support.stac.com/StacRoot/technote/RepSS/9046.shtm
	
	
	Additional query words: event viewer services sbs 2000
	
	======================================================================
	Keywords          : kbMMC110 kbDSupport kbiis400 
	Technology        : kbiisSearch kbAudDeveloper kbiis400 kbMMCSearch kbMMC110 kbMMC120
	Version           : :1.1,1.2,4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
