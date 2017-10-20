---
layout: page
title: "Q174329: SMSINST: Creating Backup Copies of Replaced Files"
permalink: /kb/174/Q174329/
---

## Q174329: SMSINST: Creating Backup Copies of Replaced Files

{% raw %}

	Article: Q174329
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbusage smsinst
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Systems Management Server Installer includes a feature that allows you
	to back up files that are replaced during an installation. This process is not
	automatic by default.
	
	MORE INFORMATION
	================
	
	To enable support for backing up replaced files, the Installer variable
	BACKUPDIR must be set to a value that is a valid directory path. Typically a
	backup directory would be created below a program's main installation
	directory.
	
	Use either of the two following methods to ensure that the BACKUPDIR variable is
	set.
	
	METHOD 1
	
	If you wish to display the Backup Replaced Files dialog box or are performing a
	silent installation (using the /s command line switch), do the following:
	
	1. Under Installation Interface, click the Dialogs tab.
	
	2. Click to select the Backup Replaced Files check-box.
	
	  This will display the dialog asking whether you want to back up replaced
	  files, and what directory to store them in, and then sets the BACKUPDIR
	  appropriately. If the option to display the dialog is selected, the default
	  is set to %MAINDIR%\BACKUP.
	
	NOTE: When a Systems Management Server Installer executable is run with the /s
	switch (for silent installation), none of the dialogs selected are displayed,
	but if the Backup Replaced Files dialog box is selected, BACKUPDIR will still be
	set to %MAINDIR%\BACKUP, and files will be backed up accordingly.
	
	METHOD 2
	
	If you wish to have an interactive installation, but prefer not to include the
	Backup Replaced Files dialog box, in Script Editor view, insert a Set Variable
	script item before the first instance of any Install File script items:
	
	  Variable: BACKUPDIR
	  New Value: %MAINDIR%\BACKUP
	  Operation: Nothing
	
	Either of these methods will cause a backup directory to be created (user
	specified location for Method 1 and BACKUP under the application's main
	directory for the Method 2). As each file is installed, Installer will check to
	see if the file being installed is replacing a current file. If it is, it will
	backup the current file to the specified backup directory, then install the new
	file. If the application is later uninstalled, the backed-up files will be
	restored.
	
	For more information on creating backup copies of replaced files, refer to the
	online help provided with Microsoft Systems Management Server Installer. Search
	the index for the word "BACKUPDIR" (without the quotation marks).
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbusage smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
