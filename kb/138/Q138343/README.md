---
layout: page
title: "Q138343: INFO: New Features of Ddconv.exe in Visual SourceSafe"
permalink: /kb/138/Q138343/
---

## Q138343: INFO: New Features of Ddconv.exe in Visual SourceSafe

	Article: Q138343
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500
	Last Modified: 11-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Ddconv.exe file has changed in Visual SourceSafe version 4.0. Ddconv now
	runs as a Windows-based application, reports more information to the user, and
	repairs some database corruption.
	
	MORE INFORMATION
	================
	
	New Features of Ddconv
	----------------------
	
	1. Data repair. Ddconv will search the database for minor data corruption. If it
	  finds any, it will attempt to repair the file. This replaces items such as
	  FIXPRJ and FIXPAR, and eliminates the need for several utility files. If
	  Ddconv cannot repair the data, a Ddcerr.log file will be created that
	  contains more information about the problem. If Ddconv does not fix all of
	  the errors, you will need to call Microsoft technical support.
	
	2. Windows interface. Ddconv now may run as a Windows-based application with a
	  status bar. This allows you to see if Ddconv is running or if it is hanging
	  (not responding). Previous versions of SourceSafe did not give any indication
	  of the progress.
	
	3. More verbose status reporting. There are a few new switches that may be used
	  to get a more verbose error reporting during execution.
	
	  No switches This gives only the percent gauge.
	  -r1 This gives the status bar & current file and directory
	  -r, -r2 This reports any messages during execution.
	  -r3 Similar to -r2 except that it reports filenames & messages.
	
	To call the new Ddconv program, use this command line:
	
	  DDCONV <Database path> -r2
	
	REFERENCES
	==========
	
	Query using "ddconv.exe" in Visual SourceSafe Books Online located under the
	Help menu.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
