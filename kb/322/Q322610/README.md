---
layout: page
title: "Q322610: Zone: Sign-in Page Reappears After You Submit Your Information"
permalink: kb/322/Q322610/
---

## Q322610: Zone: Sign-in Page Reappears After You Submit Your Information

	Article: Q322610
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to sign in to the Microsoft Zone.com site, the original sign-in
	page reappears after you submit your sign-in information.
	
	CAUSE
	=====
	
	This behavior may occur if either of the following conditions is true:
	
	- Your Internet Explorer security settings are set too high.
	
	  -or-
	
	- The Zone cookie is missing or corrupted.
	
	  -or-
	
	- You are running a program that interferes with the use of cookies on your
	  computer.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the following steps in the order in which they are
	presented.
	
	NOTE: Unless you run Microsoft Windows 98 or Microsoft Windows Millennium Edition
	(Me), you must be logged on as Administrator to complete these steps.
	
	Part 1: Allow Cookies
	---------------------
	
	Internet Explorer 6.0:
	
	1. Start Internet Explorer.
	
	2. On the Tools menu, click Internet Options.
	
	3. Click the Privacy tab.
	
	4. Drag the slider to Medium.
	
	5. Click OK.
	
	Internet Explorer 5.x:
	
	1. On the Tools menu, click Internet Options.
	
	2. Click the Security tab.
	
	3. Click Internet.
	
	4. Under "Security level for this zone", click Default Level.
	
	5. Click OK.
	
	Internet Explorer 4.x:
	
	1. On the View menu, click Internet Options.
	
	2. Click the Advanced tab.
	
	3. Scroll to the Security section.
	
	4. Under Cookies, click to select the Always Accept Cookies check box, and then
	  click OK.
	
	Part 2: Delete Cookies
	----------------------
	
	Internet Explorer 6.0:
	
	1. On the Tools menu, click Internet Options.
	
	2. Click the General tab.
	
	3. Under Temporary Internet Files, click Delete Cookies and then click OK.
	
	Internet Explorer 4.x and 5.x:
	
	1. Start Internet Explorer.
	
	2. On the View or Tools menu, click Internet Options, and then click the General
	  tab.
	
	3. Under Temporary Internet Files, click Settings.
	
	4. Click View Files.
	
	5. On the View menu, click Details.
	
	6. Click the Internet Address heading, and then locate the Internet address of
	  the cookie file.
	
	  For example:
	
	  Cookie:username@websitename.com
	
	7. Click a cookie file, press DELETE, and then click Yes when you receive a
	  prompt to confirm the deletion.
	
	8. Repeat steps 6 through 7 to delete each cookie file.
	
	Clean Boot Your Computer
	------------------------
	
	Use a clean boot to restart your computer and see if the issue persists. A clean
	boot is a way to create a clean environment. When you start your computer with a
	clean boot, Microsoft Windows starts and loads only basic devices and services.
	For more information about how to use a clean boot, see the "Reference" section
	later in this article.
	
	To restart your computer with a clean boot, follow the steps that are appropriate
	to your operating system.
	
	Windows XP:
	
	1. Click Start, and then click Run.
	
	2. Type "msconfig" (without the quotation marks) in the Open box, and then click
	  OK.
	
	3. Click the General tab, and then click Selective Startup.
	
	4. Click to clear the following check boxes under Selective Startup:
	
	  Process SYSTEM.INI file
	  Process WIN.INI file
	  Load Startup Items
	
	5. Click the Services tab, click to select the "Hide All Microsoft Services"
	  check box, and then click Disable All.
	
	6. Click OK, and then click Restart to restart the computer.
	
	NOTE: To restore the computer to use a normal startup, click "Normal Startup -
	load all device drivers and services" on the General tab in the System
	Configuration Utility, click OK, and then click Restart to restart the
	computer.
	
	Windows Me:
	
	1. Click Start, and then click Run.
	
	2. Type "msconfig" (without the quotation marks) in the Open box, and then click
	  OK.
	
	3. Click the General tab, and then click Selective Startup.
	
	4. Click to clear all of the check boxes under Selective Startup.
	
	5. On the Startup tab, click to select the *StateMgr check box, click OK, and
	  then click Yes when you receive a prompt to restart the computer.
	
	
	6. After the computer restarts, click Start, click Run, type "msconfig" (without
	  the quotation marks) in the Open box, and then click OK.
	
	IMPORTANT: Make sure that the check boxes you cleared in the General tab are
	still cleared. If you see a check box that is selected but unavailable (it is
	dimmed and has a check mark in it), your computer is not clean-booted, and you
	may require assistance from the manufacturer of the program that is listed next
	to the selected, unavailable check box.
	
	NOTE: To restore the computer to use a normal startup, click Normal Startup on
	the General tab in the System Configuration Utility, click OK, and then restart
	the computer.
	
	Windows 98:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click System Information.
	
	2. On the Tools menu, click System Configuration Utility.
	
	3. Click the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	  Process Config.sys file
	  Process Autoexec.bat file
	  Process Winstart.bat file (if available)
	  Process Win.ini file
	  Load Startup group items
	
	4. Click OK, and then restart the computer.
	
	NOTE: To restore the computer to use a normal startup, click Normal Startup on
	the General tab in the System Configuration Utility, click OK, and then restart
	the computer.
	
	REFERENCES
	==========
	
	For additional information about cookies and privacy settings in Internet
	Explorer, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q282846 Privacy Settings Only Affect Internet Zone
	
	  Q283185 How to Manage Cookies in Internet Explorer 6
	
	  Q196955 How to Set and Customize Cookies Settings in Internet Explorer
	
	For additional information about how to perform a clean-boot in Windows, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q310353 How to Perform a Clean Boot in Windows XP
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	Additional query words: cookie monster adsubtract popup killer
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
