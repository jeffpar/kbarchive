---
layout: page
title: "Q310574: MechCommander 2: Game Unexpectedly Quits After CD Verification"
permalink: /kb/310/Q310574/
---

## Q310574: MechCommander 2: Game Unexpectedly Quits After CD Verification

{% raw %}

	Article: Q310574
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechCommander 2.0, version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	The third-party products discussed in this article are manufactured by 
	vendors independent of Microsoft; we make no warranty, implied or 
	otherwise, regarding these products' performance or reliability.
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft MechCommander 2, the game unexpectedly
	quits after CD verification.
	
	CAUSE
	=====
	
	This behavior can occur if you are using a product such as DAEMON tools to
	create a Virtual CD, a Phantom CD, or a virtual small computer system interface
	(SCSI) CD-ROM drive on your computer.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use one or more of the following methods.
	
	Method 1: Rename the Daemon.exe File
	------------------------------------
	
	1. Click Start, point to Search, and then click "For Files or Folders".
	
	2. In the Named box, type "daemon.exe" (without the quotation marks), and then
	  click Search Now.
	
	3. When the search process is complete, right-click daemon.exe and then click
	  Rename on the shortcut menu.
	
	4. Type "daemon.old" (without the quotation marks), and then press ENTER.
	
	  When you receive the confirmation message, click Yes.
	
	5. Restart your computer.
	
	NOTE: If this method does not resolve the issue, proceed to Method 2.
	
	Method 2: Remove DAEMON from the Registry
	-----------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	3. In the Registry Editor, browse to the following key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
	
	4. Right-click DAEMON.EXE, and then click Delete on the shortcut menu.
	
	  When you receive the confirmation message, click Yes.
	
	5. Quit the Registry Editor, and then restart MechCommander 2.
	
	MORE INFORMATION
	================
	
	For more information, please see the following Daemon Tools Web site:
	
	  http://www.daemon-tools.com/main.htm
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbMSNSearch kbMechCommSearch kbMechCommander200
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
