---
layout: page
title: "Q308923: Streets and Trips 2002: Windows Installer Error Message"
permalink: kb/308/Q308923/
---

## Q308923: Streets and Trips 2002: Windows Installer Error Message

	Article: Q308923
	Product(s): Microsoft Automap
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 10-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Streets & Trips 2002, version 1.0 
	- Microsoft Office 2000 Professional 
	- Microsoft Office XP Professional 
	-------------------------------------------------------------------------------
	
	If this article does not describe the error message that you are receiving, view the following Microsoft Knowledge Base article to view more articles that describe error messages:
	
	  Q315854 Windows 98 and Windows Me Error Message Resource Center
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Streets and Trips 2002, you may receive
	the following error message:
	
	  This installation package cannot be installed by the Windows Installer
	  service. You must install a Windows service pack that contains a newer
	  version of the Windows Installer service.
	
	You may also receive the following error message:
	
	  MSIEXEC caused an invalid page fault in module KERNEL32.DLL
	
	CAUSE
	=====
	
	This behavior can occur if the Windows Installer files that are installed on
	your hard disk are the incorrect version.
	
	RESOLUTION
	==========
	
	To resolve this issue, update the Window Installer files, and then run Streets
	and Trips Setup again. To do this, follow these steps as appropriate to your
	operating system.
	
	Microsoft Windows 98 and Windows 98 Second Edition
	--------------------------------------------------
	
	1. Click Start, and then click Shut Down.
	
	2. Click "Restart in MS-DOS mode", and then click OK.
	
	3. At the command prompt, type the following line, and then press ENTER:
	
	  cd windows\system
	
	4. Rename the following files by using the .old extension:
	
	  Msi.dll
	  Msiexec.exe
	  Msihnd.dll
	
	For example, type the following line, and then press ENTER:
	
	  ren msi.dll msi.old
	
	5. Type "win" (without the quotation marks), and then press ENTER to start
	  Windows.
	
	6. Insert your Streets and Trips compact disc (CD) into your CD-ROM or DVD-ROM
	  drive. Press and hold down the SHIFT key as you insert the CD to prevent it
	  from starting automatically.
	
	7. Start Windows Explorer and browse to the MSI folder of the Streets and Trips
	  2002 CD-ROM.
	
	8. Double-click Instmsi.exe
	
	9. Run Streets and Trips Setup.
	
	Microsoft Windows NT 4.0
	------------------------
	
	1. Stop the Windows Installer service. To do this, follow these steps:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Services.
	
	  c. In the Service list, click Windows Installer, and then click Stop.
	
	  d. Click Yes to the prompt to confirm whether you want to stop the service.
	
	  e. Click Close.
	
	2. Click Start, point to Programs, and then click Command Prompt.
	
	3. At the command prompt, type the following line, and then press ENTER:
	
	  cd winnt\system32
	
	4. Rename the following files by using the .old extension:
	
	  Msi.dll
	  Msiexec.exe
	  Msihnd.dll
	
	For example, type the following line, and then press ENTER:
	
	  ren msi.dll msi.old
	
	5. Type "exit" (without the quotation marks), and then press ENTER.
	
	6. Insert your Streets and Trips compact disc (CD) into your CD-ROM or DVD-ROM
	  drive. Press and hold down the SHIFT key as you insert the CD to prevent it
	  from starting automatically.
	
	7. Start Windows Explorer and browse to the \MSI folder of the Streets and Trips
	  2002 CD-ROM.
	
	8. Double-click Instmsiw.exe
	
	9. Run Streets and Trips Setup.
	
	Microsoft Windows Millennium Edition (Me) or Microsoft Windows 2000
	-------------------------------------------------------------------
	
	NOTE: In Windows Me and Windows 2000, the Windows Installer files are included
	with the operating system. These files are protected under System File
	Protection (SFP) and cannot be renamed.
	
	For additional information about how to troubleshoot Windows Installer issues in
	Windows Me and Windows 2000, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q260404 HOWTO: Troubleshoot Windows Installer Engine Problems
	
	REFERENCES
	==========
	
	For more information about Windows Installer, please see the following Microsoft
	Developer Network (MSDN) Web site:
	
	  Overview of Windows Installer
	  (http://msdn.microsoft.com/library/default.asp?url=/library/en-us/msi/over_1gdu.asp)
	
	For additional information about Windows Installer technology, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q242479 Overview of the Windows Installer Technology
	
	For additional information about how to obtain and download the latest version of
	Windows Installer, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q305496 How to Obtain and Download the Latest Version of Windows Installer
	
	Additional query words:
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbOSWin2000 kbOSWinSearch kbHomeProdSearch _IKkbbogus kbExpediaSearch kbOSWinXP kbOSWinXPSearch kbExpediaStreets2002
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
