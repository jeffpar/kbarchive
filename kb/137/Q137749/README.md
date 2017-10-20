---
layout: page
title: "Q137749: How to Perform an Automated Backup with System Agent"
permalink: /kb/137/Q137749/
---

## Q137749: How to Perform an Automated Backup with System Agent

{% raw %}

	Article: Q137749
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbusage win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Windows 95 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use System Agent and Microsoft Backup to perform
	automated backups.
	
	MORE INFORMATION
	================
	
	You must first create a file set of the files to be backed up. To do so, follow
	these steps:
	
	1. Start Microsoft Backup.
	
	2. On the Backup tab, double-click the drive containing the files you want to
	  back up.
	
	3. To select all the files in a folder for backup, click the check box next to
	  the folder. To select only certain files in a folder, double- click the
	  folder, and then click the check box next to the files you want.
	
	4. After you select the files and folders you want to back up, click Next Step.
	
	5. Click the destination for the backup files, and then click Options on the
	  Settings menu.
	
	6. On the Backup tab, click the "Quit Backup after operation is finished" check
	  box to select it. Select any other options you want, and then click OK.
	
	7. On the File menu, click Save As. Type a name for the file set, and then click
	  Save.
	
	8. On the Settings menu, click Drag And Drop.
	
	9. Click the Confirm Operation Before Beginning check box to clear it, and then
	  click OK. Quit Backup.
	
	After you create the file set, schedule a Backup task in System Agent. To do so,
	follow these steps:
	
	1. Double-click the System Agent icon on the taskbar.
	
	2. If you already have a Backup task scheduled, disable the task.
	
	3. On the Program menu, click Schedule A New Program.
	
	4. Type the following line in the Program box
	
	  " c:\progra~1\access~1\backup.exe c:\program files\accessories\<f.set>
	  " (without the quotation marks)
	
	  where <f.set> is the name of the file set you created in Backup.
	
	
	1. Schedule the days and time you want the automated backup to occur.
	
	2. Click OK and close System Agent.
	
	
	Additional query words: sage sysagent
	
	======================================================================
	Keywords          : kbusage win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
