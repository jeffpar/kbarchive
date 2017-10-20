---
layout: page
title: "Q235792: SMSINST: Long Filename Is Truncated with Version Checking"
permalink: /kb/235/Q235792/
---

## Q235792: SMSINST: Long Filename Is Truncated with Version Checking

{% raw %}

	Article: Q235792
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing a long filename file on a computer running Microsoft Windows 95
	using the Install File script item with version checking, the file name is
	truncated to the 8.3 format when installed. Note that it is not converted to a
	legal short file name or alias, but rather truncated at the eighth position in
	the file name.
	
	For example, if the source file name is "FolioCacheCleaner.DLL", the file at
	destination becomes "Foliocac.dll", even though %MAINDIR%\FolioCacheCleaner.DLL
	was specified for the destination in the Install File script item dialog box.
	
	Also note that if the file is self-registering, the long file name is referenced
	in the Install.log and you receive an error message stating that the file was
	unable to self-register because a file of that name does not exist at the
	destination.
	
	The following is a sample Install.log file that shows this:
	
	  ***  Installation Started 5/21/99 4:45:18  ***				
	  Title: Untitled Installation				
	  Source: C:\WINDOWS\DESKTOP\UNTITLED.EXE				
	  File Copy: C:\TEST\ThisIsALongFileName.txt				
	  File Copy: C:\TEST\FolioCacheCleaner.dll				
	  Could not Self-Register: C:\TEST\FolioCacheCleaner.dll				
	
	Using the example above after the installation is completed, C:\TEST contains the
	following files:
	
	- Install.log
	
	- ThisIsALongFileName.txt (correctly copied, because it contains no version
	  information)
	
	- foliocac.dll (the DLL was not self-registered)
	
	Note that this problem does not occur if version checking is not taking place, or
	the long filename file does not have version information.
	
	WORKAROUND
	==========
	
	To work around this problem, do not use version checking if installing files
	with version information that has long file names. Instead, specify Always in
	the replacement options drop-down list for the Install File script item
	installing the long file name file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use Systems Management Server Installer version 2.0.64 to create a new
	  script.
	
	2. Add an Install File script item. For the source, specify a file that has a
	  long file name (no spaces) and has version information (such as a DLL).
	
	3. Select the Self Register check box if this file is self-registering. NOTE:
	  This is not necessary for reproducing the problem, but illustrates the
	  additional effect of problem.
	
	4. Under Replacement Options, choose If version number same or older.
	
	5. Compile and run the script. View the Install.log and destination file names.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
