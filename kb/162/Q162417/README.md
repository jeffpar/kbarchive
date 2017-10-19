---
layout: page
title: "Q162417: RPC Error Opening .evt File on Windows 95 Computer"
permalink: /kb/162/Q162417/
---

## Q162417: RPC Error Opening .evt File on Windows 95 Computer

	Article: Q162417
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0 95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open an Event Viewer file (.evt file) through the Server Tools,
	Event Viewer installed on a Windows 95 computer, the following error is
	returned:
	
	  The remote procedure call failed.
	
	CAUSE
	=====
	
	Copy the Event Viewer file from a Windows NT computer locally to the Windows 95
	computer where the Server Tools are installed. Then try to open the file through
	Event Viewer that comes with the Server Tools. Event Viewer will try to connect
	to the Windows NT computer from where the Event Viewer file was copied. If you
	do not have the rights to access that Windows NT computer or if the Windows NT
	computer is not on your network, you will receive the error: The remote
	procedure call failed.
	
	The Event Viewer files are located under %system root%\system32\config on a
	Windows NT computer. The file names are: AppEvent.evt, SecEvent.evt, and
	SysEvent.evt.
	
	WORKAROUND
	==========
	
	When viewing an Event Viewer file this way, make sure you can connect to the
	Windows NT computer from where the file was copied.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51,
	and 4.0. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: evt remote
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : 3.5 3.51 4.0 95
	Issue type        : kbbug
	
	=============================================================================
	
