---
layout: page
title: "Q301445: FP: Error Message When You Install Personal Web Server"
permalink: /kb/301/Q301445/
---

## Q301445: FP: Error Message When You Install Personal Web Server

	Article: Q301445
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows, used with:
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Personal Web Server on a computer running Microsoft
	Windows 98, you may receive an error message similar to the following:
	
	  DllRegisterServer failed on
	  C:\\WINDOWS\SYSTEM\inetsrv\iischema.dll,0x80070057
	  The parameter is incorrect.
	
	When you click OK, you receive several instances of the following error message:
	
	  pws-error
	
	  GetData, 0x80070057
	  The parameter is incorrect.
	
	When you click OK to each of the messages, installation of Personal Web Server
	completes.
	
	After Personal Web Server is installed on your computer, a Publish icon appears
	on your desktop as expected. However, the Personal Web Server icon is not
	displayed in the system tray. In addition, when you click Advanced in Personal
	Web Manager, folders are missing from the Virtual Directories list.
	
	CAUSE
	=====
	
	This issue occurs when you do not log on to the computer on which you are
	installing Personal Web Server. The network stack must be active before you
	install the core components of Personal Web Server. To activate the network
	stack, you must log on to the computer. If you click Cancel on the logon screen,
	the network stack is disabled, Personal Web Server is not installed correctly,
	and you receive the error messages described in the "Symptoms" section of this
	article.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove Personal Web Server, log on to the computer, and
	then reinstall Personal Web Server. To do this, follow these steps.
	
	Remove Personal Web Server
	--------------------------
	
	1. Insert your Microsoft Windows 98 CD in your CD-ROM drive.
	
	2. On the Start menu, click Run.
	
	3. In the Open box, type "<x>:\add-ons\pws\setup.exe" (without the
	  quotation marks) (where <x> is the letter of your CD-ROM drive), and
	  then click OK.
	
	4. In the Microsoft Personal Web Server Setup screen, click Remove All, and then
	  click Next.
	
	5. Click Yes to the "Do you want to continue?" message.
	
	6. Click Finish to exit Setup.
	
	7. Restart your computer.
	
	Install Personal Web Server
	---------------------------
	
	1. Logon to your computer.
	
	2. Insert your Windows 98 CD in your CD-ROM drive.
	
	3. On the Start menu, click Run.
	
	4. In the Open box, type "<x>:\add-ons\pws\setup.exe" (without the
	  quotation marks) (where <x> is the letter of your CD-ROM drive), and
	  then click OK.
	
	5. Follow the directions in the Microsoft Personal Web Server Setup screen to
	  install Personal Web Server.
	
	6. Click Yes to the "Do you want to restart your computer message?".
	
	MORE INFORMATION
	================
	
	For additional information about a known installation issue with the Microsoft
	Transaction Server component of Personal Web Server, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q246081 Error Message: An Unknown Error Occurred While Making MTS Specific
	  Changes to the System Registry
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
