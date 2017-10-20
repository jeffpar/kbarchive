---
layout: page
title: "Q191605: INFO: Incorporating ScriptIt with Unattended Installation"
permalink: /kb/191/Q191605/
---

## Q191605: INFO: Incorporating ScriptIt with Unattended Installation

{% raw %}

	Article: Q191605
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbOPK kbSBK
	Last Modified: 05-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The unattended installation process includes several techniques for added
	customization, such as sysdiff and runonce. However, there are limitations with
	these options; for example, installing and configuring a sound card or
	installing a service.
	
	ScriptIt is a freely available, unsupported utility from Microsoft, and is
	approximately 489 KB in size. ScriptIt extends functionally to the Unattend
	process. ScriptIt is a tool for automating interactive software installations
	and system configuration tasks. ScriptIt can be used to start a process, monitor
	the window titles of active processes, and, when appropriate, send a set of
	keystrokes to the correct window. The keystrokes can be predetermined or they
	can be determined at run time. ScriptIt can be configured to differentiate (and
	respond appropriately) between multiple windows that have the same title bar but
	different instructional text.
	
	Note that ScriptIt is not a traditional scripting language and does not offer
	many of the traditional programming language constructs. The ScriptIt command
	must be started by a user with sufficient security privileges to perform the
	designated installation or configuration task.
	
	IMPORTANT: Microsoft does not provide technical support for scripts prepared with
	the ScriptIt tool, but provides this article as information only. Consequently,
	it is important that you test your scripts thoroughly before using them in a
	production environment. Use this utility and information at your own risk.
	
	ScriptIt is a executable that runs in conjunction with a script file. For
	example, the following ScriptIt .ini file launches the Have Disk window under
	Display Properties (further keystrokes can be added to install a specific
	driver, set the resolution, and test the resolution).
	
	     [SCRIPT]
	     run="control.exe desk.cpl"
	     Display Properties=+{TAB}
	     Display Properties={RIGHT 4}
	     Display Properties=!T
	     Display Type=c
	     Change Display=h
	
	For additional information about parameters for the Unattend.txt file, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q155197 Unattended Setup Parameters for Unattend.txt File
	
	For additional information about runonce and other techniques to install
	applications using unattend installs, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q158447 How to Run a Program Only Once After Unattended Setup of WinNT
	
	Runonce can be modified to call ScriptIt and ScriptIt .ini files by performing
	the following steps:
	
	1. Create a $OEM$ directory in the i386 share.
	
	2. Within this directory create a Scriptit directory that resides in a C
	  directory (that is, $OEM$\C\Scriptit).
	
	3. Copy Scriptit.exe and any ScriptIt scripts to the $OEM$\C\Scriptit directory.
	  The contents of the $OEM$\C directory will be copied to the C directory of
	  the target workstation.
	
	4. Create a Batch.cmd file that contains the location of the ScriptIt executable
	  and the .ini file or files:
	
	        c:\scriptit\scriptit.exe c:\scriptit\script.ini
	        %SystemRoot%\System32\rundll32.exe setupapi,InstallHinfSection
	        DefaultInstall 132 %SystemRoot%\System32\cleanup.inf
	
	  NOTE: The last two lines in the above command should be all on one line; the
	  line is wrapped for readability (ensure that word wrap in Notepad has been
	  disabled).
	
	MORE INFORMATION
	================
	
	You can download the ScriptIt.exe utility from the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/winnt/
	  (http://www.microsoft.com/technet/winnt/)
	
	For additional information regarding Scriptit, visit the following Microsoft Web
	site:
	
	  http://www.microsoft.com/NTServer/nts/deployment/custguide/scriptit3.asp
	  (http://www.microsoft.com/NTServer/nts/deployment/custguide/scriptit3.asp)
	
	Additional query words: sysdiff runonce unattended scriptit deployment Setup
	
	======================================================================
	Keywords          : kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
