---
layout: page
title: "Q315192: GAMES: Windows Unexpectedly Restarts"
permalink: kb/315/Q315192/
---

## Q315192: GAMES: Windows Unexpectedly Restarts

	Article: Q315192
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Train Simulator, version 1.0 
	- Microsoft MechCommander 2.0, version 1.0 
	- Microsoft MechWarrior 4: Black Knight 
	- Microsoft MechWarrior 4: Vengeance 
	- the operating system: Microsoft Windows XP 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	The third-party products discussed in this article are manufactured by 
	vendors independent of Microsoft; we make no warranty, implied or 
	otherwise, regarding these products' performance or reliability.
	
	SYMPTOMS
	========
	
	When you play one of the games listed at the beginning of this article, Windows
	may unexpectedly restart.
	
	The following Stop error message may be briefly displayed:
	
	  KMODE_EXCEPTION_NOT_HANDLED
	
	CAUSE
	=====
	
	This behavior can occur in the following situation:
	
	- You have a display adapter based on the NVIDIA graphics chipset.
	
	  -and-
	
	- Your display drivers are corrupted or incompatible.
	
	RESOLUTION
	==========
	
	To troubleshoot this issue, update the display drivers with those of a previous
	or a newer version. To obtain NVIDIA Detonator display drivers, see the
	following NVIDIA Web site:
	
	  http://www.nvidia.com
	
	Microsoft Windows XP
	--------------------
	
	If you are running Windows XP, you may be able to roll back to a previous more
	stable display driver. For additional information about using the driver roll
	back feature in Windows XP, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q283657 HOW TO: How to Use the Roll Back Driver Feature
	
	  Q306546 HOW TO: Use Driver Roll Back to Restore a Previous Driver
	
	To update the display adapter drivers, follow these steps.
	
	NOTE: If you are installing display drivers from the NVIDIA Web site, follow the
	instructions included with the display driver to update your display adapter.
	
	1. Log on to the computer as Administrator.
	
	2. Click Start, right-click My Computer, and then click Properties on the
	  shortcut menu that appears.
	
	3. Click the Hardware tab, and then click Device Manager.
	
	4. Expand "Display adapters", right-click the adapter, and then click Update
	  Driver on the shortcut menu that appears.
	
	5. Follow the instructions in the Hardware Update Wizard to install the display
	  driver that you want.
	
	6. Restart the computer.
	
	Microsoft Windows 2000 Professional
	-----------------------------------
	
	To reinstall the display adapter drivers, follow these steps.
	
	NOTE: If you are installing display drivers from the NVIDIA Web site, follow the
	instructions included with the display driver to update your display adapter.
	
	1. Log on to the computer as Administrator.
	
	2. Right-click My Computer, and then click Properties on the shortcut menu that
	  appears.
	
	3. Click the Hardware tab, and then click Device Manager.
	
	4. Expand "Display adapters", right-click the display adapter, and then click
	  Properties on the shortcut menu that appears.
	
	5. Click the Driver tab, and then click Update Driver.
	
	6. Follow the instructions in the Upgrade Device Driver Wizard to install the
	  display driver that you want.
	
	7. Restart the computer.
	
	MORE INFORMATION
	================
	
	By default, Windows XP and Windows 2000 Professional are configured to
	automatically restart when a Stop error occurs. This may prevent you from
	viewing the error message. To disable this feature so that you can view Stop
	error messages, follow these steps.
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please see your product documentation
	to complete these steps.
	
	1. Click Start, and then right-click My Computer.
	
	2. On the shortcut menu that appears, click Properties.
	
	3. Click the Advanced tab, and then click Settings under "Startup and Recovery".
	
	4. Under "System failure", click to clear the "Automatically restart" check box.
	
	5. Click OK, and then click OK.
	
	To obtain the latest updates for your operating system, see the following
	Microsoft Web site:
	
	  http://v4.windowsupdate.microsoft.com/en/default.asp
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbOSWin2000 kbOSWinSearch kbHomeProdSearch kbGamesSearch kbOSWinXP kbMSNSearch _IK kbMechCommSearch kbOSWinXPSearch kbTrainSim kbMechCommander200 kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
