---
layout: page
title: "Q258533: FIX: Can't Resize Column Widths under Localized Windows"
permalink: /kb/258/Q258533/
---

## Q258533: FIX: Can't Resize Column Widths under Localized Windows

	Article: Q258533
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0,6.0 SP3
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp600 kbvfp600bug kbGrpDSFox MSGRAPH kbVS600sp4fix kbVS600sp4 kbV
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to resize grid column widths when the RightToLeft property of a
	grid is set to True ( .T.) in Visual FoxPro 6.0 running under Hebrew Windows 95,
	Windows 98, and Windows NT. This behavior occurs in both the Form Designer and
	at run time.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	1. Run Visual FoxPro 6.0 on Hebrew Windows 98.
	
	2. Add a grid with several columns.
	
	3. Set the RightToLeft property of the Grid to .T.
	
	4. Edit the grid and try to resize the column width.
	
	Note that you are unable to resize the column width.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp600 kbvfp600bug kbGrpDSFox MSGRAPH kbVS600sp4fix kbVS600sp4 kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0,6.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
