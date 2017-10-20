---
layout: page
title: "Q171977: WD97: When You Quit Word, It Hangs or Stops Responding"
permalink: /kb/171/Q171977/
---

## Q171977: WD97: When You Quit Word, It Hangs or Stops Responding

{% raw %}

	Article: Q171977
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you quit Microsoft Word, Word may appear to stop responding (hang).
	
	
	CAUSE
	=====
	
	When you quit Microsoft Word normally, Word performs several functions. During
	any of these steps, problems may occur that cause Microsoft Word to hang.
	
	A known cause of this symptom is when the Msgsrv32.exe file does not respond to
	the system. When you press CTRL+ALT+DEL to show the Windows task list, it may
	show that Msgsrv32.exe has stopped responding.
	
	Msgsrv32.exe is a Microsoft Windows dynamic-link library file that handles error
	message codes for Windows-based drivers. If Msgsrv32.exe encounters an error
	code that it is unable to handle, Msgsrv32.exe may stop responding.
	
	RESOLUTION
	==========
	
	For additional information about attempting to resolve this problem, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q188803 Err Msg: MSGSRV32.EXE Caused a General Protection Fault in...
	
	  Q182567 Fatal Exception in Msgsrv32.exe When You Quit Windows 95
	
	  Q306616 Msgsrv32.exe Stops Responding and Then the Computer Stops Responding
	
	
	WORKAROUND
	==========
	
	To work around this problem and quit Microsoft Word, follow these steps:
	
	1. Press CTRL+ALT+DELETE.
	
	2. Look for Msgsrv32.exe in the Windows task list.
	
	3. Do one of the following:
	
	   - If Msgsrv32.exe is listed, select Msgsrv32.exe and then click End Task. If
	     you receive the message "This application is not responding...", click
	     Yes. Microsoft Word should finish quitting normally. To attempt to correct
	     the problem, please see the articles listed in the "Resolution" section
	     for more troubleshooting ideas.
	
	     -or-
	
	   - If Msgsrv32.exe is not listed in the task list, please see the articles
	     listed in the "More Information" section for more troubleshooting ideas to
	     correct the problem.
	
	MORE INFORMATION
	================
	
	This problem is known to be related to VXD driver files. VXD driver files are
	often used in creating printer and video drivers for Windows. To ensure that the
	problem does not involve the video driver, set your display to use the Standard
	VGA driver that is included with Windows. To ensure that the problem does not
	involve the printer driver, install a printer driver that does not exist in your
	system.
	
	For information about how to contact your printer or video driver manufacturer,
	click the appropriate article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	For additional information about other troubleshooting steps you can take to
	resolve this problem, click the article numbers below to view the articles in
	the Microsoft Knowledge Base:
	
	  Q166703 WD97: Known Video Driver Conflicts in Word 97
	
	  Q168198 WD97: Troubleshooting Invalid Page Faults in Word 97
	
	  Q127139 Troubleshooting Video Problems in Windows
	
	  Q156126 Troubleshooting Windows 95 Using Safe Mode
	
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: hang crash close
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
