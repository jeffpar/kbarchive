---
layout: page
title: "Q163255: WD97: Unexpected Memory Problems with Word 97 and Outlook 97"
permalink: /kb/163/Q163255/
---

## Q163255: WD97: Unexpected Memory Problems with Word 97 and Outlook 97

	Article: Q163255
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbualink97 kbdtakbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Word 97 as your e-mail editor in Microsoft Outlook 97,
	you may receive one or more of the following error messages or behaviors:
	
	In Word:
	
	  Can't find Winword, using Outlook editor instead.
	
	  -or-
	
	  There is insufficient memory or disk space. Word cannot display the requested
	  font.
	
	  -or-
	
	  In Microsoft Windows 95 or Microsoft Windows 98:
	
	  This program has caused an illegal operation and will be shut down.
	
	  In Microsoft Windows NT 4.0:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  In Microsoft Windows 2000:
	
	  WINWORD has generated errors and will be closed by Windows. You will need to
	  restart the program.
	
	  An error log is being created.
	
	  -or-
	
	  Your computer beeps or does not respond, or you receive an unexpected error
	  in Microsoft Word 97.
	
	In Outlook:
	
	  This program has caused an illegal operation and will be shut down.
	
	  -or-
	
	  The message "Please wait while Microsoft Outlook exits" is not displayed when
	  you quit Microsoft Outlook.
	
	CAUSE
	=====
	
	This behavior occurs because Word 97 or Outlook 97 processes remain in memory
	after you quit the programs. The server objects of the programs may not be
	closed when you quit the programs.
	
	WORKAROUND
	==========
	
	To determine whether a program is still in memory, do one of the following
	appropriate for your version of Microsoft Windows:
	
	In Microsoft Windows 95, Microsoft Windows 98, and Microsoft Windows NT 4.0:
	
	Press CTRL+ALT+DELETE to view the Close Program dialog box. If Word or Outlook is
	listed, the program is still active in memory.
	
	To quit the program remaining in memory, in the Close Program dialog box, click
	to select the program, and then click End Task. You may have to perform this
	step more than once to close both Word 97 and Outlook 97.
	
	In Microsoft Windows 2000:
	
	Press CTRL+ALT+DELETE to view the Windows Security dialog box, and then click
	Task Manager. If Word or Outlook is listed on the Processes tab, click to select
	the program, and then click End Process. You may have to perform this step more
	than once to close both Word 97 and Outlook 97.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was corrected in Microsoft
	Outlook 98 and later.
	
	Additional query words: ipf gpf can t
	
	======================================================================
	Keywords          : kberrmsg kbualink97 kbdta kbfaq
	Technology        : kbWordSearch kbOutlookSearch kbWord97 kbWord97Search kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
