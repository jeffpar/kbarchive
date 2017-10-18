---
layout: page
title: "Q198778: SMSINST: Adding Shortcuts to Start Menu When Using System Polici"
permalink: kb/198/Q198778/
---

## Q198778: SMSINST: Adding Shortcuts to Start Menu When Using System Polici

	Article: Q198778
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbsms200 kbsms120 kbAdvertisement kbsmsInst
	Last Modified: 07-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The purpose of this article is to provide an example of how the "Create
	Shortcut" script item can be used to add a link for a Control Panel applet (in
	this case, the Advertised Program Wizard) to the Start menu. This may be useful
	in environments where the user does not have direct access to the Control Panel
	as a result of a system policy.
	
	The following items explain the steps taken by the Installer script. A script is
	provided at the end of this article for example purposes only.
	
	1. Read the current win32 system directory into the installer variable SYS. You
	  need this because your link is going to a CPL file contained in this
	  directory, which may be a different path on different machines, which execute
	  this script.
	
	2. Read the Common Start menu value from the registry to get the path to the All
	  Users Start menu (again this may vary from workstation to workstation). This
	  is where you are going to place the actual .lnk file so that all users
	  receive the shortcut. Place the value in the DESTPATH variable.
	
	3. Append the name of the .lnk file to the DESTPATH variable to form a complete
	  destination path for the Create Shortcut script item.
	
	4. In the Create Shortcut script item, use the values obtained above to fill in
	  the script item properties. Specify the icon that will be used for the
	  shortcut. In this case, the Advertised Programs icon that you see in the
	  Control Panel is from %WIN%\MS\SMS\clicomp\SWDist32\00000409\CPLRes.dll, and
	  it happens to be the first icon (offset 0) in this case.
	
	MORE INFORMATION
	================
	
	Example of Completed Script
	---------------------------
	
	To see this script in Systems Management Server Installer, cut and paste it into
	a text editor such as Notepad, and save it as an .ipf file. You may then open
	that file with Installer.
	
	NOTE: This script is provided for example purposes only. Some modification may be required for correct execution in your environment.:
	
	  Document Type: IPF
	  item: Global
	    Version=6.0
	    Title English=Advertised Programs Link
	    Flags=00000100
	    Languages=0 0 65 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
	    LanguagesList=English
	    Default Language=2
	    Japanese Font Name=MS Gothic
	    Japanese Font Size=10
	    Start Gradient=0 0 255
	    End Gradient=0 0 0<BR/>
	    Windows Flags=00010000000000000010110000011000
	    Message Font=MS Sans Serif
	    Font Size=8
	    Disk Filename=SETUP
	    Patch Flags=0000000000000001
	    Patch Threshold=85
	    Patch Memory=4000
	    FTP Cluster Size=20
	  end
	  item: Win32 System Directory
	    Variable=SYS
	  end
	  item: Get Registry Key Value
	    Variable=DESTPATH
	    Key=Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders
	    Value Name=Common Start Menu
	    Flags=00000100
	  end
	  item: Set Variable
	    Variable=DESTPATH
	    Value=\Advertised Programs.lnk
	    Flags=00000001
	  end
	  item: Create Shortcut
	    Source English=%SYS%\SMSCPL32.CPL
	    Destination English=%DESTPATH%
	    Working Directory English=%SYS%
	    Icon Number English=0
	    Icon Pathname English=%WIN%\MS\SMS\clicomp\SWDist32\00000409\CPLRes.DLL
	    Description English=Advertised Programs
	    Key Type English=1536
	    Flags=00000001
	  end
	
	Additional query words: prodsms smsinst
	
	======================================================================
	Keywords          : kbClient kbConfig kbsms200 kbsms120 kbAdvertisement kbsmsInst 
	Technology        : kbSMSSearch kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
