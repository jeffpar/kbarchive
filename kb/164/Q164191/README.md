---
layout: page
title: "Q164191: Msbatch.inf Parameters: Bypassing Network Logon"
permalink: /kb/164/Q164191/
---

## Q164191: Msbatch.inf Parameters: Bypassing Network Logon

	Article: Q164191
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to bypass the network logon during the first reboot
	after running Setup by using the Msbatch.inf file for batch installations of
	Windows 95.
	
	MORE INFORMATION
	================
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	You can use the Autologon registry entry to prevent the display of a network
	logon dialog box. This key is added as part of the installation. However, simply
	adding the key is insufficient. Unless the key is removed, the user is not
	prompted to log on to the network, and does not have more than basic
	connectivity. To bypass the network logon dialog box, remove theAutologon key
	from the registry after the first reboot.
	
	There are two parts to accomplishing this. The first part is to modify the
	existing script to add the appropriate key, copy a file, and add another key to
	the registry that causes Windows 95 to implement a second file. The existing
	script should be modified to include the following lines:
	
	  [Install]
	  CopyFiles=@auto.inf
	  Addreg=Add.Autologon
	
	  [DestinationDirs]
	  DefaultDestDir=10
	
	  [SourceDisksFiles]
	  auto.inf=22,,1234
	
	  [SourceDisksNames]
	  22="Source",,0
	
	  [Add.Autologon]
	  HKLM,"Software\Microsoft\Windows\CurrentVersion\Network\Real Mode
	
	     Net",Autologon,1,0
	
	  HKLM,"Software\Microsoft\Windows\CurrentVersion\RunOnce",Autooff,,
	
	     "rundll setupx.dll,InstallHInfSection DefaultInstall 132 auto.inf"
	
	The second part is to create a file named Auto.inf in the root folder of the
	distribution point. The file should contain the following lines:
	
	  [version]
	  signature="$CHICAGO$"
	
	  [DefaultInstall]
	  delreg=auto.on.reg
	
	  [auto.on.reg]
	  HKLM,"Software\Microsoft\Windows\CurrentVersion\Network\Real Mode
	
	     Net",Autologon
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
