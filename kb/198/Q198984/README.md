---
layout: page
title: "Q198984: SMSINST: Command Line Switches Are Not Designed to Work Together"
permalink: /kb/198/Q198984/
---

## Q198984: SMSINST: Command Line Switches Are Not Designed to Work Together

{% raw %}

	Article: Q198984
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kbsmsInst
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an executable file compiled using Systems Management Server Installer is
	run from the command line with two or more switches, the switches are not
	executed properly. Only the first switch is executed.
	
	The command line switches were designed to work by themselves, not in conjunction
	with any other command line switches.
	
	MORE INFORMATION
	================
	
	Command Line Switches and Their Functions
	-----------------------------------------
	
	/M:
	
	The /M option (manual) prompts you for the locations of the Windows, System, and
	Temp directories. You can specify any directories; if they do not exist, they
	will be created. Any changes to public .ini files are saved into the Windows
	directory that you specify.
	
	With this option, you can specify different directories in order to keep your
	systems directories pure or to easily detect exactly what was installed. You can
	then manually copy the files to their final destinations.
	
	/S:
	
	The /S option (silent) runs a setup program without displaying any dialog boxes,
	progress bars, messages, or user prompts. Default values are used for all
	variables. This option is useful for background installations in networked
	environments.
	
	/T:
	
	The /T option (test) runs a setup program in test mode.
	
	/X [directory_name]:
	
	The /X option (extract) lists the files installed by a setup program, allowing
	you to select some or all of those files. It enables you to specify the
	directory to which they will be written. Possible uses for this option include:
	
	- If some files have been deleted or corrupted on the destination computer, you
	  can reinstall only those files.
	
	- System operators can scan files for viruses without installing them.
	
	If you specify a directory along with the /X option, all files in the
	installation are written to that directory. If that directory does not exist, it
	is created within \Temp. For example, the following command writes all the
	installation files to \Temp\HoldingPen:
	
	  Setup /X HoldingPen
	
	/Z [directory_name]:
	
	The /Z option is the same as /X except the computer exits Windows after the files
	are extracted.
	
	Additional query words: prodsms smsinst
	
	======================================================================
	Keywords          : kbsmsInst 
	Technology        : kbSMSSearch kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
