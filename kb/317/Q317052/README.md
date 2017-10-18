---
layout: page
title: "Q317052: HOW TO: Undo Changes Made by the IIS Lockdown Wizard"
permalink: kb/317/Q317052/
---

## Q317052: HOW TO: Undo Changes Made by the IIS Lockdown Wizard

	Article: Q317052
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Introduction
	- Undo Changes Made by the IISLockdown Wizard
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to remove the IISLockdown Wizard from a
	Web server and restore the configuration and settings that were changed when the
	IISLockdown Wizard was run.
	
	Introduction
	------------
	
	If you run the IISLockdown Wizard (Iislockd.exe) from the Microsoft Security
	Toolkit and immediately notice problems with Internet Information Services
	(IIS), you may run the wizard again to undo the changes that the IISLockdown
	Wizard has made to the computer.
	
	Note that the undo operation may not be successful if you have made changes to
	the system between the time when the IISLockdown Wizard was originally run and
	when the undo task is run. Also, note that the Wizard can undo only the changes
	that the Wizard has made. The Wizard cannot undo manual changes that you have
	made to the server configuration.
	
	The undo feature uses the log file, Oblt-log.log, that is created at the time
	Iislockd.exe is originally run. Oblt-log.log is based on the changes that are
	recorded in the log, but it does not record any unused services that you have
	uninstalled. As a result, the undo feature does not restore any previously
	uninstalled services.
	
	Undo Changes Made by the IISLockdown Wizard
	-------------------------------------------
	
	1. Double-click the Iislockd.exe file.
	
	2. On the This Server Was Already Configured page, read the explanatory text,
	  and then click Next.
	
	3. The IIS Lockdown Wizard appears and informs you that the process will undo
	  the changes that were made when you last ran the Wizard. Click Yes to
	  continue.
	
	4. On the Restoring Security Settings page, you can see the previous settings
	  that are restored. When the process is complete, you see "Finished" in the
	  Status area. Note that this can take a significant amount of time based on
	  the complexity of the IIS configuration. Click Next.
	
	NOTE: This process does not restore any services that were removed if you
	selected Remove unselected services when you originally ran the IISLockdown
	Wizard.
	
	5. On the Restoration Complete page, click Finish.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q311113 The IIS Lockdown Wizard Undo Feature Does Not Restore Uninstalled
	  Services
	
	Additional query words: iislockd
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
