---
layout: page
title: "Q136933: Out of Virtual Memory Using Office 95 Shortcut Bar"
permalink: kb/136/Q136933/
---

## Q136933: Out of Virtual Memory Using Office 95 Shortcut Bar

	Article: Q136933
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Office 95 in Windows NT and place the mouse pointer
	on the Office 95 Shortcut bar for a long period of time, the following error
	message appears:
	
	  System Process - Out of Virtual Memory
	
	  Your system is running low on virtual memory. Please close some applications.
	  You can then start the System option in the Control Panel and choose the
	  Virtual Memory button to create an additional page file or to increase the
	  size of your current paging file.
	
	CAUSE
	=====
	
	Each time you use the Microsoft Office Toolbox to open a document or keep the
	mouse on the Shortcut the Microsoft Office process does not free used memory
	properly.
	
	WORKAROUND
	==========
	
	To work around this problem, stop and restart the toolbar periodically, or
	remove it from the startup group and do not leave it running.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
