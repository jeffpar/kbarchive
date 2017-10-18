---
layout: page
title: "Q150643: PRB: Setting Wrong System Date Causes Lost Project History"
permalink: kb/150/Q150643/
---

## Q150643: PRB: Setting Wrong System Date Causes Lost Project History

	Article: Q150643
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbSSafe400 kbSSafe600
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 6.0 
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Resetting the system time and date to something earlier than a project's
	creation time and date can cause that project's labeling information to be lost.
	
	CAUSE
	=====
	
	SourceSafe uses the system date and time to determine if a file is within a
	valid range for a label. Manually altering the system clock to facilitate a
	desired date preceding the creation date of the project causes serious damage to
	the labeling structure of the project.
	
	RESOLUTION
	==========
	
	Make sure the system clock is set to the right time before checking in files. If
	you need to alter the computer's system date and time, you must be careful to
	reset to the correct date and time before checking files in to SourceSafe.
	
	On a network server, all workstations should be synchronized to the server's time
	to ensure correct date/time stamping by those workstations using SourceSafe.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The NET TIME command is used to synchronize the time in Windows NT. The syntax
	is as follows:
	
	     NET TIME [\\computername | /DOMAIN:domainname] /SET
	
	where \\computername is the computer to which you want to synchronize your
	computer's clock. If you have a domain controller, use the domain to synchronize
	with the domain controller.
	
	The SYSTIME utility is used to synchronize time using a Novell Netware File
	server. The syntax for this command can be found in Novell's Help system.
	
	STEPS TO REPRODUCE
	------------------
	
	1. Create a new project and add some files.
	
	2. Set the system clock back to an earlier date.
	
	3. Add a Label to the project.
	
	4. Check the files out from the project.
	
	5. Set the system clock back to the current time and date.
	
	6. Check the files in.
	
	7. View the History of the project.
	
	RESULT: The label does not appear in the project's history.
	
	Additional query words: stamp date time
	
	======================================================================
	Keywords          : kb3rdparty kbSSafe400 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe16bitSearch
	Version           : :4.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
