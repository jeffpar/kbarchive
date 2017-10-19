---
layout: page
title: "Q158519: XCLN: Removing and Reinstalling the Macintosh Client"
permalink: /kb/158/Q158519/
---

## Q158519: XCLN: Removing and Reinstalling the Macintosh Client

	Article: Q158519
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article tells you how to create a fresh installation of the Microsoft
	Exchange Macintosh client on a workstation where the client was previously
	installed.
	
	MORE INFORMATION
	================
	
	To create a fresh install on the Macintosh Exchange client on a workstation
	where the client was previously installed:
	
	1. Create a Temp folder on the desktop.
	
	2. If using offline folders (that is, working offline), make sure a connection
	  is made to Microsoft Exchange Server, and all information is synchronized
	  with the server. To synchronize: On the Tools menu, click Synchronize, and
	  click All Folders).
	
	3. Move any Personal Folders and/or Personal Address Books to the Temp folder
	  you created in Step 1.
	
	4. Move the files Microsoft OLE Automation, Microsoft OLE Extension, and
	  Microsoft OLE Library to the Temp folder created in Step 1.
	
	  NOTE: These OLE files are located in the System Folder in the Extensions
	  folder.
	
	5. Drag the "Microsoft Exchange" folder (or the folder where the Macintosh
	  Exchange client was previously installed) and all of its contents to the
	  Trash can on the desktop.
	
	6. Open the System folder, open the Preferences subfolder, and drag the
	  following files and folders to the trash can on the desktop:
	
	  Exchange Files folder
	  Exchange Help folder
	  Exchange Profiles folder
	  Exchange Preferences file
	  Exchange Services file
	  Mspst.ini file
	  Exchngm.ini file
	  RPC Preferences file
	
	7. Open the System folder, open the Extensions subfolder, and drag the following
	  file to the trash can on the desktop:
	
	  Microsoft RPC Runtime Library
	
	8. Open the System folder and drag the following folder to the trash can on the
	  desktop:
	
	  Exchange Temporary Items
	
	  Note: Your Macintosh may not have some of these files. That is okay. Just make
	  sure all files listed above that do exist on your Macintosh are dragged to
	  the trash can on the desktop.
	
	
	9. If your profile is Appletalk, it is also recommended that you remove the
	  Appletalk Preferences file located in the Preferences folder in the System
	  folder.
	
	10. Hold down Option key and empty trash.
	
	  NOTE: To empty trash: from Finder, click the Special menu and then click the
	  "Empty Trash" option.
	
	11. Restart the Macintosh.
	
	12. Rebuild the desktop on restart:
	
	  a. Hold down the Option and Apple keys when restarting the Macintosh.
	
	  b. Click OK when prompted to rebuild the desktop file(s).
	
	13. Re-install the Macintosh Exchange client: insert the Microsoft Exchange
	  Macintosh client compact disc in the Macintosh CD-ROM drive, and click
	  Microsoft Exchange Setup.
	
	14. Create a new profile by double-clicking on the "Exchange Settings" icon in
	  the Microsoft Exchange folder (or where you installed the Microsoft Exchange
	  Macintosh client). Choose Show Profiles. Choose Add, and then follow the
	  steps in the Profile Wizard.
	
	  NOTE: If client was working offline previously, a new offline folder will
	  need to be re-created. Click Yes when prompted with "Do you travel with this
	  computer?" during profile creation.
	
	15. Remove and re-create any old Inbox Assistant rules.
	
	16. Test connectivity between Microsoft Exchange Server and Microsoft Exchange
	  Macintosh client.
	
	17. Copy the Personal Folders and Personal Address Book files from the Temp
	  folder on the desktop (the folder created in Step 1) to the folder where the
	  Microsoft Exchange Macintosh client was installed (by default this is the
	  Microsoft Exchange folder).
	
	  NOTE: If necessary, add the Personal Folders and Personal Address Book files
	  to the appropriate Profile Service:
	
	  a. Run Exchange Settings, click Show Profiles,open the appropriate profile
	     and edit as needed.
	
	18. Drag the Temp folder on the desktop to the trash can.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q156028 XCLN MAC: List of Files Installed and Used
	
	Additional query words: clean boot delete uninstall install
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange400Mac
	Version           : :4.0
	
	=============================================================================
	
