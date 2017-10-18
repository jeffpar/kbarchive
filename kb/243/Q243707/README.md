---
layout: page
title: "Q243707: MapPoint Err Msg: Failed to Open Default Map Templates..."
permalink: kb/243/Q243707/
---

## Q243707: MapPoint Err Msg: Failed to Open Default Map Templates...

	Article: Q243707
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2000 
	- Microsoft MapPoint 2001 
	- Microsoft MapPoint 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft MapPoint, you may receive one of the following error
	messages:
	
	   - Failed to open default map templates and demographic data.
	
	   - Demographic data is missing or corrupted. Please reinstall MapPoint.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions is true:
	
	- The Newmap.ptt file is damaged or an incorrect version.
	
	- The Mdac_typ.exe installation did not finish successfully.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented. <A0>
	
	Remove MapPoint
	---------------
	
	To remove MapPoint:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Microsoft MapPoint 2000 or Microsoft MapPoint 2001 or Microsoft
	  MapPoint 2002, and then click Add/Remove.
	
	4. Follow the instructions on the screen to remove the program. When you are
	  prompted to restart the computer, click No.
	
	5. Delete the <drive>:\Program Files\MapPoint folder, where <drive>
	  is the drive letter of the hard disk on which MapPoint is installed.
	
	6. Restart the computer.
	
	If you are using a Microsoft Windows 98-based computer:
	
	Download MDAC (Microsoft Data Access Components)
	------------------------------------------------
	
	To download the latest version of MDAC:
	
	1. Connect to the following Microsoft Web site:
	
	  http://www.microsoft.com/data/download_250rtm.htm
	
	2. Under "Select an Install Option", click the latest version of MDAC RTM for
	  your language version of Microsoft Windows, and then click "Go to Download".
	
	3. Click "Save this program to disk," and then click OK.
	
	4. In the "Save in" box, click Desktop, and then click Save.
	
	Clean Boot Your Computer
	------------------------
	
	To clean boot your computer:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click System Information.
	
	2. On the Tools menu, click System Configuration Utility.
	
	3. On the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	   - Process Autoexec.bat File
	   - Process Winstart.bat File (if available)
	   - Process Win.ini File
	   - Load Startup Group Items
	
	4. Click OK. When you are prompted to restart the computer, do so.
	
	NOTE: To restore your original Startup options, click Normal Startup on the
	General tab in the System Configuration Utility tool.
	
	For additional information about how to clean boot Windows 98, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	
	Install MDAC
	------------
	
	To install the latest version of MDAC:
	
	1. Double-click the Mdac_typ.exe file on the Windows desktop.
	
	2. Follow the instructions on the screen to install the MDAC update.
	
	3. When you are prompted to restart the computer, click Restart Windows, and
	  then clean boot your computer.
	
	NOTE: You may receive the following error message after you restart the
	computer:
	
	  Unable to open response file C:\Temp\Odbcconf.tmp
	
	For additional information about this error message, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q218184 PRB: Restart After MDAC Installation Causes Error
	
	
	Reinstall MapPoint
	------------------
	
	To reinstall MapPoint:
	
	1. Insert the MapPoint CD-ROM into your CD-ROM drive.
	
	  If MapPoint Setup does not start automatically:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type the following line, and then click OK:
	
	  <cd-rom>:\setup.exe
	
	     where <cd-rom> is the drive letter of your CD-ROM drive.
	
	2. Follow the instructions on the screen to install MapPoint.
	
	3. When the installation process is complete, click OK, and then restart Windows
	  normally.
	
	If you are using a Microsoft Windows 95-based computer:
	
	Download DCOM95 for Windows 95
	
	To download DCOM95 for Windows 95:
	
	1. Connect to the following Microsoft Web site:
	
	  http://www.microsoft.com/com/dcom/dcom95/download.asp
	
	2. Click the link next to the download site closest to you.
	
	3. Click "Save this program to disk," and then click OK.
	
	4. In the "Save in" box, click Desktop, and then click Save.
	
	Download MDAC (Microsoft Data Access Components)
	------------------------------------------------
	
	To download the latest version of MDAC:
	
	1. Connect to the following Microsoft Web site:
	
	  http://www.microsoft.com/data/download_250rtm.htm
	
	2. Under "Select an Install Option", click the latest version of MDAC RTM for
	  your language version of Microsoft Windows, and then click "Go to Download".
	
	3. Click "Save this program to disk," and then click OK.
	
	4. In the "Save in" box, click Desktop, and then click Save.
	
	Clean Boot Your Computer
	------------------------
	
	To clean boot your computer:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select Step By Step Confirmation from the Startup menu.
	
	2. Press Y at each prompt except for the following two prompts, at which you
	  must press N:
	
	   - Process your startup device driver (CONFIG.SYS) [Enter=Y, Esc=N]?
	   - Process your startup command file (AUTOEXEC.BAT) [Enter=Y,Esc=N]?
	
	3. Quit all running programs except Explorer and Systray. To do this:
	
	  a. Press CTRL+ALT+DELETE.
	
	  b. Click the program you want to quit, and then click End Task.
	
	  c. If you receive a message that the program is busy or not responding, click
	     End Task again.
	
	  Repeat this step until you have quit all programs except Explorer and Systray.
	
	4. Disable any anti-virus or disk tool programs installed on the computer. For
	  information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	NOTE: To restore your original Startup options, restart the computer normally,
	and then enable any anti-virus or disk tool programs installed on the computer.
	For information about how to enable these programs, see the printed or online
	documentation for the program.
	
	For additional information about how to clean boot Windows 95, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	Install DCOM95 for Windows 95
	-----------------------------
	
	1. Double-click the Dcom95.exe file on the Windows desktop.
	
	2. Follow the instructions on the screen to install DCOM95 for Windows 95.
	
	3. When you are prompted to restart the computer, click Restart Windows, and
	  then clean boot your computer as described in the "Clean Boot Your Computer"
	  section of this article.
	
	Install MDAC
	------------
	
	To install MDAC:
	
	1. Double-click the Mdac_typ.exe file on the Windows desktop.
	
	2. Follow the instructions on the screen to install the MDAC update.
	
	3. When you are prompted to restart the computer, click Restart Windows, and
	  then clean boot your computer.
	
	NOTE: You may receive the following error message after you restart the
	computer:
	
	  Unable to open response file C:\Temp\Odbcconf.tmp
	
	For additional information about this error message, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q218184 PRB: Restart After MDAC Installation Causes Error
	
	
	Reinstall MapPoint
	------------------
	
	To reinstall MapPoint:
	
	1. Insert the MapPoint CD-ROM into your CD-ROM drive.
	
	  If MapPoint Setup does not start automatically:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type the following line, and then click OK:
	
	  <cd-rom>:\setup.exe
	
	     where <cd-rom> is the drive letter of your CD-ROM drive.
	
	2. Follow the instructions on the screen to install MapPoint.
	
	3. When the installation process is complete, click OK, and then restart Windows
	  normally.
	
	
	
	Additional query words: mp2000 mp2001 multi multi-media media mm gpf ipf auto-map amap
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000 kbMapPoint2001 kbMapPoint2002
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
