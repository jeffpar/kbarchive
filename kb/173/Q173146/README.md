---
layout: page
title: "Q173146: WD97: Run from Network Install for Web Authoring AutoUpdate"
permalink: /kb/173/Q173146/
---

## Q173146: WD97: Run from Network Install for Web Authoring AutoUpdate

{% raw %}

	Article: Q173146
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Web Authoring Tools support the ability to perform an administrative
	installation for use with "Run From Network Server" installations of Word.
	
	To update the Web Authoring Tools in a "Run From Network Server" environment, use
	the steps described in this article.
	
	MORE INFORMATION
	================
	
	The following list of steps must be performed to properly create a "Run From
	Network" installation of the updated Web Authoring Tools:
	
	1. Download the latest version of the Web Authoring Tools file, Wd97au.exe, to a
	  client machine that has been set up to run Word from the server.
	
	  For more information about where to obtain the latest version of the Web
	  Authoring Tools, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q163299 WD97: Web Page Authoring Tools AutoUpdate
	
	2. When given the choice to either save to disk or open the Wd97au.exe, click
	  Save To Disk.
	
	3. Ensure there are no users running Word 97 from the server.
	
	4. On the client machine, from the Windows 95 Start menu, click Run.
	
	5. Type in the following Setup script, substituting the path in the following
	  example for the path location of the Wd97au.exe you downloaded in steps 1 and
	  2.
	
	  c:\Windows\Desktop\Wd97au.exe /c:serverau.inf
	
	  This executes a special version of the Setup script which will install the
	  updated Web authoring components to the server.
	
	6. You must restart Windows at the client machine you ran the setup script from
	  before the updated settings will take effect. The Server does not need to be
	  restarted.
	
	7. After restarting the client machine, users at other workstations will see the
	  changes the next time they start or install Word 97.
	
	This method does not install the Web Publishing Wizard. The Web Publishing Wizard
	must be set up on each computer. To set up the Web Publishing Wizard, use the
	following steps:
	
	1. Copy or download the Wd97au.exe to each client machine setup to run Word from
	  the server.
	
	2. If Word is currently running, exit Word.
	
	3. Type in the following Setup script, substituting the path in the following
	  example for the path location of the Wd97au.exe you downloaded or copied in
	  step 1.
	
	  c:\Windows\Desktop\wd97au.exe /c:wpfull.inf
	
	  This executes a special version of the setup script which will install the
	  Updated Web Publishing Wizard components to the client machine.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q172502 WD97: Troubleshooting Setup for the Web AutoUpdate Feature
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : winword word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
