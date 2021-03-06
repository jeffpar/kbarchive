---
layout: page
title: "Q217134: Err Msg: The Application Failed to Initialize Properly"
permalink: /kb/217/Q217134/
---

## Q217134: Err Msg: The Application Failed to Initialize Properly

{% raw %}

	Article: Q217134
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsound
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Symptom 1:
	
	When you start Windows NT 4.0, you may receive the following error message:
	
	  Systray.exe - Application Error
	
	  The application failed to initialize properly (0xc0000005)
	  Click on OK to terminate the application.
	
	You may receive this error message multiple times during the startup process;
	once for each program you have in the Startup folder.
	
	If you try to start other programs, you may receive the following error message:
	
	  Application error: application failed to initialize properly 0xc000005.
	
	- or - When you try to open the Sounds or Multimedia tools in Control Panel, you
	may receive the following error message:
	
	  Error loading mmsys.cpl, invalid access to memory.
	
	- or - When you open Event Viewer, you may receive the following error message:
	
	  Event Viewer
	  The Event Log Service on the local machine is not started.
	
	CAUSE
	=====
	
	These error messages can occur if you install the Creative Labs Sound Blaster
	drivers incorrectly.
	
	RESOLUTION
	==========
	
	To resolve this issue, install the Sound Blaster drivers correctly. To do this,
	follow these steps:
	
	1. Close all the programs running on your computer.
	
	2. Click Start, point to Find, and then click Files Or Folders.
	
	3. In the Named box, type "sb16snd.sys sp16snd.dll" (without the quotation
	  marks), and then click Find Now.
	
	4. Rename the Sb16snd.sys and Sb16snd.dll files to Sb16snd.old and Sb16snd.dl0.
	
	For information about how to rename a file in Windows, click Start, click Help,
	click the Index tab, type "renaming: files" (without the quotation marks), and
	then click Display.
	
	If you cannot rename the files because they are in use, note the location of the
	Sb16snd.sys and Sb16snd.dll files, and then follow these steps:
	  a. Press CTRL+ALT+Delete, and then click Task Manager.
	
	  b. On the Processes tab, click Explorer.exe, and then click End Process.
	
	  c. On the File menu, click New Task.
	
	  d. In the Open box, type "cmd" (without the quotation marks)
	
	  e. At the MS-DOS prompt, type "cd\<folder>" (without the quotation
	     marks), where <folder> is the location of the Sb16snd.sys and
	     Sb16snd.dll files.
	
	  f. Typ the following lines, pressing ENTER after you type each line:
	
	  ren sb16snd.sys sb16snd.old
	  ren sb16snd.dll sb16snd.dl0
	  exit
	
	5. In Task Manager, click New Task on the File menu, type "explorer.exe"
	  (without the quotation marks) in the Open box, and then click OK.
	
	6. Remove and reinstall the Sound Blaster drivers. For information about how to
	  do this, please see the following article in the Microsoft Knowledge Base or
	  contact Creative Labs:
	
	  Q184327 How to Install Sound Blaster Drivers in Windows NT 4.0
	
	Additional query words: sound blaster, sb16snd.sys, sb16snd.dll, systray.exe, application error, mmsys.cpl,
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsound 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
