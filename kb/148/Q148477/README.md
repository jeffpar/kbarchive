---
layout: page
title: "Q148477: Golf Err Msg with Windows 95/98: Could Not Find Directory"
permalink: /kb/148/Q148477/
---

## Q148477: Golf Err Msg with Windows 95/98: Could Not Find Directory

{% raw %}

	Article: Q148477
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0,2.0a
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install one of the Microsoft Championship Golf courses to a computer
	running Windows 95/98, you may receive the following error message:
	
	  Setup could not find Microsoft Golf in the specified destination path. If you
	  wish to select another destination path, choose Retry or choose Cancel Setup
	  to exit.
	
	This can occur even if Microsoft Golf is installed on the computer.
	
	RESOLUTION
	==========
	
	To install a Microsoft Championship course, you need to remove and reinstall
	Microsoft Golf to a shorter path, such as, C:\Msgolf. This allows you to install
	additional courses.
	
	Installing Microsoft Golf to a Shorter Path
	-------------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click the Install/Uninstall tab.
	
	4. Select Microsoft Golf, and then click Add/Remove.
	
	5. Click Remove All. When you are asked if you are sure you want to remove Golf,
	  click Yes.
	
	6. In the Reinstall PlayerNet dialog box, click OK.
	
	7. Restart Windows to complete the removal process.
	
	8. Repeat Steps 1-2.
	
	9. Select PlayerNet 1.0, and then click Add/Remove.
	
	10. Click Remove All. When you are asked if you are sure you want to remove
	  PlayNet, click Yes.
	
	11. Restart Windows to complete the removal process.
	
	When Windows restarts, reinstall Microsoft Golf into a folder with a shorter
	path. To do this, follow these steps:
	
	1. Install Microsoft Golf according to the Golf Setup instructions.
	
	2. When you receive the following Setup message:
	
	  You can choose not to install Microsoft Golf, or change it's destination
	  folder later during setup.
	
	  click Change Folder.
	
	3. Type the following path, and then click OK
	
	  c:\msgolf
	
	  where c is the letter of the hard drive on which Windows is installed.
	
	4. Follow the Setup instruction on the screen. When Setup is complete, you can
	  install additional golf courses.
	
	Additional query words: 2.00 2.00a w_golf setup course path error remove faq
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf200
	Version           : WINDOWS:2.0,2.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
