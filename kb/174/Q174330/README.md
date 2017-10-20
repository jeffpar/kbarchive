---
layout: page
title: "Q174330: SMSINST: Use of the RESTART Variable in SMS Installer"
permalink: /kb/174/Q174330/
---

## Q174330: SMSINST: Use of the RESTART Variable in SMS Installer

{% raw %}

	Article: Q174330
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbsetup smsinst
	Last Modified: 15-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Systems Management Server Installer uses a predefined variable called
	RESTART in determining whether or not a system should be restarted at the end of
	an installation script. The variable can be set manually in an installation
	script or changed automatically by the SMS Installer run- time when certain
	conditions are met. Restart variables are case sensitive.
	
	MORE INFORMATION
	================
	
	The variable RESTART can be set to any of the following values:
	
	- W (a restart of Windows will be performed)
	- S (a warm-boot of the system will be performed)
	- E <MS-DOS program name> (the MS-DOS program will be executed during the
	  restart)
	
	The RESTART variable is set automatically by using a number of script items
	including, but not limited to:
	
	- Add Command to Autoexec.bat
	- Add Command to Config.sys
	- Add Device to System.ini
	
	The RESTART variable is also set automatically if you replace any files in use.
	SMS Installer copies the new version of the file into the destination directory
	under a temporary filename. After the system is restarted, the original file to
	be replaced is deleted and the new file is renamed.
	
	To determine which file is causing the RESTART variable to be set, you can place
	a "Display Message %RESTART%" script item after each system file that is being
	installed. If a letter S is displayed, a file in use has been marked for
	replacement on restart.
	
	To suppress the reboot altogether, include a script item at the end of your
	script:
	
	  Script Item:   Set Variable
	  Variable:      RESTART
	  New Value:     (leave blank, this will set it to null)
	  Operation:     Nothing
	
	NOTE: If the system is restarted manually, the files in use will still be
	replaced at that time.
	
	Conversely, to force a system restart, you may set the RESTART variable to S.
	
	Additional query words: prodsms boot reboot
	
	======================================================================
	Keywords          : kbsetup smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
