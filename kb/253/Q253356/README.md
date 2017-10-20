---
layout: page
title: "Q253356: PRB: &quot;API Call Caused an Exception&quot; with 3rd-Party Print Drivers"
permalink: /kb/253/Q253356/
---

## Q253356: PRB: &quot;API Call Caused an Exception&quot; with 3rd-Party Print Drivers

{% raw %}

	Article: Q253356
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint kbPrinting kbvfp600 kbOSWin95 kbOSWin98 kbGrpDSFox kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a Hewlett Packard LaserJet 4000 PCL5e or other third-party print
	driver, a non-fatal error can occur:
	
	  API call caused an exception
	
	CAUSE
	=====
	
	The third-party print drivers are not resetting the floating point coprocessor.
	
	RESOLUTION
	==========
	
	Here is a workaround to the behavior. The error message "API call caused an
	exception" is trappable and reports an error number of 2028. The error can be
	handled by placing an _fpreset() function call and a retry command in an
	error-handling procedure. The following code demonstrates the basic structure
	for trapping this error:
	
	  DECLARE _fpreset IN MSVCRT20.DLL
	  ON ERROR DO errHand WITH ERROR()
	  SET LIBRARY TO HOME()+"foxtools.fll"
	  SET PRINTER TO GETPRINTER()
	  ? _wfindtitl("Command") && Error occurs at this point
	
	  PROCEDURE errHand
	  PARAMETERS _lcError
	     DO CASE
	         CASE _lcError = 2028 && API call caused an exception
	  	       _fpreset()
	  	       RETRY
	         OTHERWISE
	                 ERROR _lcError
	         ENDCASE
	  ENDPROC
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Install a HP LaserJet 4000 PCL5e print driver.
	
	2. Copy the following code into a FoxPro program:
	
	  SET LIBRARY TO HOME()+"FOXTOOLS.FLL"
	  SET PRINTER TO GETPRINTER()
	  ? _wfindtitl("command")
	
	3. Execute the new program.
	
	4. Choose the HP LaserJet 4000 PCL5e print driver.
	
	The error message listed in the "Symptoms" section is displayed.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q183522 FIX: Divide by Zero Creates Err with Third-Party Print Drivers
	
	  Q182137 PRB: Memory Error with HP LaserJet 4000 TN PCL 5e Driver
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbprint kbPrinting kbvfp600 kbOSWin95 kbOSWin98 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
