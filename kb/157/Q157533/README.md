---
layout: page
title: "Q157533: PRB: PVCS to SourceSafe Conversion Fails"
permalink: /kb/157/Q157533/
---

## Q157533: PRB: PVCS to SourceSafe Conversion Fails

	Article: Q157533
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSsafe600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running PVCS_SS.EXE to convert a PVCS database to a SourceSafe database,
	the conversion does not complete. This process does not return any error
	messages.
	
	RESOLUTION
	==========
	
	Add these lines to AUTOEXEC.BAT:
	
	     set libpath = <path to the DLLs used by the GET program,
	                   such as c:\pvcs\dll>
	
	     set vcsid  = <userid>
	
	     set vcscfg = <path to configuration file>
	
	     set intrsolvdir = <path to dir where license admin facility is>
	
	NOTE: When you execute PVCS_SS *.*, meaning convert *all* of the files, it may
	appear to hang as it apparently does a lot of initialization in PVCS.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. At a DOS prompt, switch to the directory containing the file PVCS_SS.EXE.
	  This will vary depending on the version of SourceSafe and the kind of
	  installation.
	
	2. Type the command: " PVCS_SS *.* $/<newproject> " (without the quotation
	  marks)
	
	On screen and in the conversion log file, the following appears:
	
	  PVCS_SS. Copyright... 7/25/95 12:42
	
	There may be some other unusable information as well.
	
	The PVCS data is converted to SourceSafe data.
	
	Additional query words: kbdsi
	
	======================================================================
	Keywords          : kbSSafe kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSsafe600FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,4.0a,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
