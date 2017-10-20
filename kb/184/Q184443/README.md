---
layout: page
title: "Q184443: Error Message: Explorer.exe - DLL Initialization Failed..."
permalink: /kb/184/Q184443/
---

## Q184443: Error Message: Explorer.exe - DLL Initialization Failed...

{% raw %}

	Article: Q184443
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open Control Panel, you may receive the following error message:
	
	  Explorer.exe - DLL Initialization Failed Initialization of the
	  dynamic link library E:\WINNT\System32\RASSCRPT.dll failed.
	  The process is terminating abnormally.
	
	Or, the Services tool may be missing from Control Panel.
	
	CAUSE
	=====
	
	This error message can occur if Remote Access Service (RAS) or modem files are
	missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps in the order in which they are
	listed:
	
	Extract New Copies of the RAS Service Files
	-------------------------------------------
	
	1. Using Windows NT Explorer, rename the Rascpl.cpl file and Rasscrpt.dll file
	  located in the %systemroot%\system32 folder, where %systemroot% is the folder
	  in which Windows NT is installed. To do so, right-click the file, click
	  Rename, type a new name for the file (such as Rascpl.xxx), and then press
	  ENTER. Repeat this step for each file.
	
	2. At a command prompt, change to the <cd-rom>:\<platform> folder,
	  where <cd-rom> is your CD-ROM drive containing your Windows NT CD-ROM
	  and <platform> is the computer platform you are using. Use the I386
	  folder for Intel-based computers.
	
	3. To expand a new copy of the Rascpl.cpl file, type the following command, and
	  then press ENTER:
	
	  expand rascpl.cp_ %systemroot%\system32\rascpl.cpl
	
	4. To expand a new copy of the Rasscrpt.dll file, type the following command,
	  and then press ENTER:
	
	  expand rasscrpt.dl_ %systemroot%\system32\rasscrpt.dll
	
	5. Type "exit" (without quotation marks), and then press ENTER.
	
	Remove the RAS Service
	----------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. Click the Services tab.
	
	4. Click Remote Access Service, and then click Remove. The following warning
	  message is displayed:
	
	  WARNING: This action will permanently remove the component from the
	  system. If you wish to reinstall it, you will have to restart the
	  system before doing so.
	
	  Do you wish to continue?
	
	5. Click Yes and then click Close.
	
	6. Restart you computer when you are prompted to do so.
	
	Remove Your Modem
	-----------------
	
	NOTE: If your modem requires files from the manufacturer, verify that you have a
	copy of the files before you follow these steps.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the installed modem or RAS-capable device, and then click Remove.
	
	4. Click Close, and then restart your computer.
	
	Install Your Modem Again
	------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems to start the Install New Modem wizard.
	
	  NOTE: If another modem is installed in your computer, click Add to start the
	  Install New Modem wizard.
	
	3. Follow the instructions on the screen.
	
	Install the RAS Service Again
	-----------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. Click the Services tab, and then click Add.
	
	4. Click Remote Access Service, and then click OK.
	
	5. Restart your computer when you are prompted to do so.
	
	NOTE: If a Service Pack is installed on your computer, you must reapply the
	Service Pack before restarting your computer. For more information, please see
	the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q165418
	  TITLE : Before Installing a Windows NT Service Pack
	
	MORE INFORMATION
	================
	
	For more information about the Windows NT RAS service, click start, click Help,
	click the Index tab, type "ras" (without quotation marks), and then double-click
	the "RAS" topic.
	
	If you have problems installing the RAS service, please see the following article
	in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q162293
	  TITLE : Troubleshooting RAS Client Issues in Windows NT 4.0
	
	If you have problems installing your modem, please see the following article in
	the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q161516
	  TITLE : Troubleshooting Modem Problems Under Windows NT 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
