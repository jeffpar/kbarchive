---
layout: page
title: "Q257946: XGEN: GUI Hotfix Utility Switches /x /m /s /z"
permalink: /kb/257/Q257946/
---

## Q257946: XGEN: GUI Hotfix Utility Switches /x /m /s /z

	Article: Q257946
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:2.0,4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can unpackage prepackaged hotfixes to test, e-mail, or manually install
	them. The Graphical User Interface (GUI) Hotfix utility that is used to package
	hotfixes contains the following undocumented switches (GUI Hotfix utility
	hotfixes are usually packaged as Q<xxxxxx>.exe files, where <xxxxxx>
	is the Microsoft Knowledge Base article Q number for the corresponding hotfix):
	
	- /x Generates a list of the packaged files. You can select the files that you
	  want to extract and the location.
	
	- /s Performs a silent installation. This switch stops services and installs
	  the hotfix with no prompts or user interface (UI). You need to allow
	  sufficient time for the hotfix to be installed, because this switch returns
	  control to the command prompt well before the installation is finished.
	  Verify that the hotfix is installed. The GUI Hotfix package
	  Q<xxxxxx>.exe should be running in the task manager properties, where
	  <xxxxxx> is the Microsoft Knowledge Base article Q number and name of
	  the hotfix.
	
	- /z The same as the /x switch, but the /z switch automatically restarts the
	  computer. Do not use the /z switch unless you want to automatically restart
	  the computer.
	
	- /m Prompts you for the folder locations. You can select the folder locations
	  of the Windows folder, System folder, System32 folder, Temp folder, Source
	  folder (which is usually the Temp folder), System Windows folder, and
	  Language folder.
	
	
	MORE INFORMATION
	================
	
	The following list contains more information about the GUI Hotfix utility
	switches that are listed in the "Summary" section of this article:
	
	- All hotfixes are listed in the following registry key
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Updates\<product>\Q<xxxxxx>
	
	  where <product> is the name of the product that the hotfix is for, and
	  <xxxxxx> is the Microsoft Knowledge Base article Q number of the
	  hotfix.
	
	
	- For Exchange Server, two log files are generated in the
	  Exchsrvr\Q<xxxxxx> folder. The Install.log file indicates if files were
	  copied, skipped, and so on. The Q<xxxxxx>.log file contains more
	  information, which includes who installed the hotfix, when the hotfix was
	  installed, and so on.
	
	- For Exchange Server, you can uninstall some packages. The dialog boxes in the
	  installer setup process state whether or not you can uninstall a fix. When
	  Exchange Server backup is possible, the files are backed up to the following
	  location:
	
	  Exchsrvr\Q<xxxxxx>
	
	- Registry keys that are overwritten are not backed up.
	
	- There is no /? switch or other help documentation included with the fixes.
	
	- Apply hotfixes as a component whole. Microsoft does not recommend the
	  installation of individual files from a component build.
	
	- More information about the /x and /z switches: these switches can be useful
	  if the files have been deleted or are corrupted on the target computer. If
	  you type a folder name after the /x switch, the switch extracts all of the
	  files to the selected folder. The /z switch performs the same function that
	  the /x switch performs, but the computer quits Microsoft Windows after the
	  files are extracted.
	
	- The /s switch runs the installation in silent mode. The background gradient
	  is not displayed, and the progress bar is not displayed. Other than a prompt
	  to restart the computer, any messages or prompts that the installation uses
	  are not displayed.
	
	- Both Alpha and Intel binaries may be displayed in a package if you expand
	  them by using the /x switch. This should only be the case for the
	  Administrator component, where both Alpha and Intel binaries are included by
	  design. I386 and Alpha files go to every Administrator computer regardless of
	  the platform because there may be Exchange Server computers running on either
	  platform in the site.
	
	- Each component build has a master Microsoft Knowledge Base article that is
	  associated with that component build and that lists all of the other
	  Microsoft Knowledge Base articles for fixes of that component. This master
	  Microsoft Knowledge Base article is updated with each new build of the
	  component. The following is a list of the master Microsoft Knowledge Base
	  articles:
	
	  Q244702 XFOR: Exchange Server 5.5 Post-SP3 Migration Fixes Available
	
	  Q246889 XIMS: Exchange Server 5.5 Post-SP3 Internet Mail Service Fixes
	  Available
	
	  Q247009 XIMS: Exchange Server 5.5 Post-SP3 Exchange Connector for Lotus
	  cc:Mail Fixes Available
	
	  Q248838 XADM: Exchange Server 5.5 Post-SP3 Information Store Fixes Available
	
	  Q251137 XADM: Exchange Server 5.5 Post-SP3 Message Transfer Agent Fixes
	  Available
	
	  Q251407 XADM: Exchange Server 5.5 Setup Program Fixes Available
	
	  Q254301 XIMS: New MCIS SMTP Service Fixes Available
	
	  Q254303 XADM: New Collaboration Data Objects for Windows NT Server Fixes
	  Available
	
	  Q254338 New Site Server 3.0 Content Indexing Fixes Available
	
	  Q254682 XADM: Exchange Server 5.5 Post-SP3 Database Engine Fixes Available
	
	  Q254805 XADM: Exchange Server 5.5 Post-SP3 Administrator Program Fixes
	  Available
	
	  Q256032 XFOR: Exchange Server 5.5 Post-SP3 Connector Fixes Available
	
	  Q256041 XIMS: Exchange Server 5.5 Post-SP3 Chat Service Fixes Available
	
	  Q256051 XIMS: New Microsoft Commercial Internet System Network News Transfer
	  Protocol Service Fixes Available
	
	  Q257372 XADM: Exchange Server 5.5 Post-SP3 Directory Fixes Available
	
	
	Additional query words: manual install
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbSMSSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbSMS200
	Version           : winnt:2.0,4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
