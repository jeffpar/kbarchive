---
layout: page
title: "Q252279: PRB: Sysprep Shows Error Message After Running Mini Setup"
permalink: /kb/252/Q252279/
---

## Q252279: PRB: Sysprep Shows Error Message After Running Mini Setup

	Article: Q252279
	Product(s): Microsoft Windows NT
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbOPK kbHWx86 kbDSupport kbGrpDSOPK kbSBK kbOEM kbPreInstall
	Last Modified: 17-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Once you run Sysprep on a Windows 2000-based computer, to restore the computer
	to a ship-ready state for delivery to a customer, you must run the Mini Setup
	Wizard to complete the installation of Windows 2000. After completing the mini
	Setup, the computer automatically restarts and displays the Windows desktop. A
	modal dialog box is displayed that contains the following error message:
	
	  C:\sysprep is not accessible. This folder was moved or removed.
	
	Note that "C:" represents the system drive, which can be a drive other than the C
	drive, depending on the installation command used for Windows 2000.
	
	CAUSE
	=====
	
	The %Systemdrive%\Sysprep folder is removed from the hard drive by design,
	because it contains original equipment manufacturer (OEM) tools that do not
	apply to customers.
	
	RESOLUTION
	==========
	
	To bypass this dialog box, do not run Sysprep by double-clicking the Sysprep.exe
	icon from an Explorer window. Instead, open a command-prompt window, browse to
	the Sysprep folder, and then run Sysprep.exe from the command line.
	
	For example, if drive D is your system drive, which also contains the Sysprep
	folder, then after opening the command-prompt window, you should change to drive
	D by typing "D:" (without the quotation marks) at the command prompt, and then
	change to the Sysprep folder by typing "cd sysprep" (without the quotation
	marks). Then, run Sysprep.exe, with the appropriate switch, by typing "sysprep
	-quiet" (without the quotation marks).
	
	This method ensures that a dialog box containing an error message is not
	displayed when the customer first starts up the computer.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For information on preinstallation, please refer to the "Windows 2000 OEM
	Preinstallation Kit User's Guide" that is shipped with your OEM CD.
	
	REFERENCES
	==========
	
	For System Builders, refer to the "Windows 2000 OEM Preinstallation Kit User's
	Guide" at the following OEM Web site:
	
	  http://oem.microsoft.com/namerica/504382.asp
	  (http://oem.microsoft.com/namerica/504382.asp)
	
	This Web site is secured, and therefore you need to be registered in the System
	Builder program to access it. If you haven't registered, you can do so at the
	following System Builder registration Web site:
	
	  https://oempub.microsoft.com/scripts/oemapps/register/register.asp
	  (https://oempub.microsoft.com/scripts/oemapps/register/register.asp)
	
	Sysprep version 1.1 can be downloaded from the following OEM Web Site:
	
	  http://oem.microsoft.com/namerica/504334.asp
	  (http://oem.microsoft.com/namerica/504334.asp)
	
	Additional query words: sysprep kbsbk kbopk
	
	======================================================================
	Keywords          : kbOSWin2000 kbOPK kbHWx86 kbDSupport kbGrpDSOPK kbSBK kbOEM kbPreInstall 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000
	Issue type        : kbprb
	
	=============================================================================
	
