---
layout: page
title: "Q274776: Microsoft Reader Error Message: Activation Error"
permalink: /kb/274/Q274776/
---

## Q274776: Microsoft Reader Error Message: Activation Error

	Article: Q274776
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu
	Last Modified: 22-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Reader version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to activate Microsoft Reader, you may receive the following
	error message:
	
	  Activation Error
	
	  -or-
	
	When you attempt to login to your Passport account through Reader, it will take
	you back to the first Activation page asking you to sign in again.
	
	  -or-
	
	You have a Passport, but when you click YES on the Passport site, you keep
	receiving the same question.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions is true:
	
	- You are currently signed in to a Microsoft Passport account.
	
	- You connect to the Internet through a firewall or proxy server.
	
	- Your Temporary Internet files or Cookies have become corrupt.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Delete Your Password Cookie
	---------------------------
	
	You may have to delete your Passport cookie to activate Microsoft Reader. To
	remove Passport cookies, follow these steps:
	
	Internet Explorer
	
	1. On the Tools menu, then Internet Options.
	
	2. Under Temporary Internet files, click Settings.
	
	3. Click the View Files button.
	
	4. Right click and delete the following files:
	
	  
	
	  [YourName]@passport.com
	  [YourName]@passporttest.com
	  Cookie:[your name]@das.microsoft.com/ 
	  Cookie:[your name]@passport.com/ 
	  Cookie:[your name]@passport.com/ppsecure
	
	5. Close all your browser windows, and reopen your browser to:
	
	  http://das.microsoft.com/activate
	
	Netscape Navigator
	
	1. Close all Netscape instances.
	
	2. Use Notepad to edit the following:
	
	  
	
	  [Netscape Install Drive]:\Program Files\Netscape\Users\[your name]\cookies.txt.
	
	3. Remove all lines that start with "passport.com" and "das.microsoft.com."
	
	4. Reopen your browser to:
	
	http://das.microsoft.com/activate
	If the issue continues to occur, proceed to the next method.
	
	Uninstall and Reinstall Microsoft Reader in a Clean Environment
	---------------------------------------------------------------
	
	To uninstall and reinstall Microsoft Reader in a clean environment:
	
	1. On the Passport navigation bar, click "Passport sign out".
	
	  NOTE: If a "Passport sign in" link appears on the Passport navigation bar
	  instead of a "Passport sign out" link, you are not signed in to a Passport
	  account. If this is the case, proceed to the next step.
	
	2. Quit all unnecessary programs that are running on your computer. To do this:
	
	  a. Press CTRL+ALT+DELETE.
	
	  b. In the Close Program dialog box, click any program except Explorer or
	     Systray (which are components of Microsoft Windows), and then click End
	     Task.
	
	     If you receive a message which states that the program is busy or not
	     responding, click End Task again.
	
	  c. Repeat steps A and B to quit all programs except Explorer and Systray.
	
	3. Visit the following Microsoft Web site:
	
	  http://www.passport.com
	
	4. Click Start, point to Settings, and then click Control Panel.
	
	5. Double-click Add/Remove Programs.
	
	6. In the list of installed programs, click Microsoft Reader, and then click
	  Add/Remove.
	
	7. Follow the instructions on the screen to remove Microsoft Reader.
	
	8. Download and install a new copy of Microsoft Reader.
	
	For additional information about how to download and install Microsoft Reader,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q271251 How to Download Microsoft Reader for Desktop or Laptop Computers
	
	If the issue continues to occur, proceed to the next method.
	
	Temporarily Bypass Your Firewall or Proxy Server Settings
	---------------------------------------------------------
	
	To temporarily bypass your firewall or proxy server settings:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Internet or Internet Options.
	
	3. Click the Connections tab.
	
	4. Click LAN Settings.
	
	5. Click to clear the "Automatically detect settings" check box, and then click
	  OK.
	
	6. Click OK.
	
	7. Activate Microsoft Reader.
	
	  If you activate Microsoft Reader successfully, repeat the previous steps to
	  restore the original setting of the "Automatically detect settings" check
	  box.
	
	  If the issue is not resolved, contact your Internet Service Provider (ISP) or
	  system administrator to inquire about how to temporarily bypass any firewalls
	  or proxy servers for your Internet connection. After you activate Microsoft
	  Reader, restore the original firewall or proxy server settings for your
	  Internet connection.
	
	Clear Out Temporary Internet Files and Delete All Cookies
	---------------------------------------------------------
	
	Follow the steps below to clear out Temporary Internet Files, and delete all
	cookies.
	
	1. Right-click on the Internet Explorer Icon on your desktop and click
	  Properties.
	
	2. Click the Delete Files button, and click to check the box to delete Offline
	  Files. Click OK. NOTE: This may take a while.
	
	3. Click Settings, click View Files, click Edit, click All, click File, and then
	  click Delete.
	
	4. Close this window, and click OK on the Settings Window.
	
	5. Click the Clear History Button, and then click Yes to clear your history.
	
	6. Now connect to http://www.passport.com, log in, then log out again so you are
	  not signed in to Passport. Next, open http://reader.microsoft.com/activate in
	  Internet Explorer, and go through the process to activate Reader again.
	
	
	Additional query words: 1.50 multi multi-media media mm msreader loop looping
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu 
	Technology        : kbReaderSearch kbReader150
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
