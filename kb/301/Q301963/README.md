---
layout: page
title: "Q301963: Err Msg: A Fatal Exception 0E Has Occurred at 0157:BFF9A25B"
permalink: /kb/301/Q301963/
---

## Q301963: Err Msg: A Fatal Exception 0E Has Occurred at 0157:BFF9A25B

{% raw %}

	Article: Q301963
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg win95 kbFatalExErr0E
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start your Microsoft Windows 95-based computer, you may receive an
	error message similar to the following:
	
	  A Fatal Exception 0E has occurred at 0157:BFF9A25B
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- RealJukebox is installed on your computer.
	
	  -and-
	
	- You install AOL 6 on your computer.
	
	You may receive this error message if the RealJukebox and RealPlayer programs are
	configured to start when Windows starts.
	
	RESOLUTION
	==========
	
	To work around this issue, edit the registry to prevent RealJukebox and
	RealPlayer from starting when Windows starts. To do this, follow these steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	3. In Registry Editor, expand the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run
	
	4. On the Registry menu, click Export Registry File.
	
	5. In the Export Registry File dialog box, type "RunKey" (without the quotation
	  marks) in the "File name" box, and then click Save.
	
	  NOTE: The contents of the Run key are saved in the RunKey.reg file. If you
	  later want to undo the following changes to the registry, double-click
	  RunKey.reg. You will be prompted to add the information from Runkey.reg to
	  the registry.
	
	6. In the right pane, right-click the RealJukeboxSystray entry in the Name list,
	  and then click Delete on the shortcut menu that appears.
	
	7. Click Yes in response to the Confirm Value Delete message that appears.
	
	8. Right-click RealTray, and then click Delete on the shortcut menu that
	  appears.
	
	9. Click Yes in response to the Confirm Value Delete message that appears.
	
	10. Quit Registry Editor.
	
	11. Restart your computer.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For additional information about troubleshooting startup problems in Windows,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q156126 Troubleshooting Windows 95 Using Safe Mode
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg win95 kbFatalExErr0E 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
