---
layout: page
title: "Q250672: XCLN: Outlook For Macintosh Stops Responding at Splash Screen"
permalink: /kb/250/Q250672/
---

## Q250672: XCLN: Outlook For Macintosh Stops Responding at Splash Screen

{% raw %}

	Article: Q250672
	Product(s): Microsoft Exchange
	Version(s): 8.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Outlook for Macintosh, Outlook may stop responding after the
	splash screen is displayed.
	
	CAUSE
	=====
	
	This issue can be caused by any of the following conditions:
	
	- Extension issues
	- Profile corruption
	- Fonts
	- PRAM corruption
	- Virtual Memory settings
	- Minimum size setting for running application is too low
	- Desktop corruption
	- System corruption
	- Failed Outlook installation
	
	MORE INFORMATION
	================
	
	You can troubleshoot this issue in Outlook by performing the following steps.
	After you perform each troubleshooting step, try to start Outlook to determine
	whether the step has resolved the issue.
	
	1. Check to make sure that the Internet Configuration Extension is installed.
	
	2. Make sure that the following components are installed and turned on:
	
	   - Microsoft OLE Library
	
	   - Microsoft Structured Storage
	
	   - Microsoft Component Library
	
	  Also make sure that these components are version 2.25 or later.
	
	3. Delete and recreate the profile.
	
	4. Make sure that the system script is MAC Roman.
	
	5. Reset the fonts by dragging the Fonts folder to the desktop.
	
	6. Reset the Parameter RAM (PRAM) by restarting the computer while you press the
	  OPTION+Apple+P+R keys. The system appears to restart when you press all four
	  of the keys. Repeat this three times to make sure that the PRAM is clear.
	
	7. If Outlook is running on a Power Macintosh, tune the Memory Control Panel.
	  The recommended disk cache size is 1024 kilobytes (KB). Also turn on the
	  Modern Memory Manager and Virtual Memory. Set the Virtual Memory to twice the
	  size of the Physical Memory plus one megabyte (MB).
	
	8. Load minimal extensions. To do this, in Control Panel, open Extension
	  Manager. Click to clear the check boxes of any unnecessary extensions (make
	  sure that you leave the Microsoft Extension and Networking Extension
	  selected), and then restart the computer. If this works, it may create an
	  extension conflict. To find the corrupted extension, re-add the extensions
	  one by one and restart the computer each time that you add an extension. If
	  for some reason you do not have Extension Manager, you can press the SHIFT
	  key while you restart the computer. If you do this, no extensions load. There
	  is a third-party product called Conflict Catcher that finds conflicting
	  extensions.
	
	9. Change the minimum size setting for the application to at least 4500 KB. To
	  do this, click to select the application file, and press the Apple+I keys to
	  open the Get Info dialog box.
	
	10. Rebuild the desktop. To do this, restart the Macintosh while you press the
	  OPTION+Apple keys until you are prompted to rebuild the desktop.
	
	11. Check for system corruption. Perform a new installation of the system
	  software and Outlook. To install a new system folder with an existing system
	  folder, start by using the installation disk or CD-ROM and press the
	  COMMAND+SHIFT+K keys.
	
	12. Reinstall Outlook. For additional information about how to perform a clean
	  installation, click the article number below to view the article in the
	  Microsoft Knowledge Base:
	
	  Q158519 XCLN: Removing and Reinstalling the Macintosh Client
	
	  This article describes how to reinstall the Microsoft Exchange Client, but
	  the same steps can be used to reinstall Outlook.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbOutlookMacSearch kbOutlook820Mac
	Version           : :8.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
