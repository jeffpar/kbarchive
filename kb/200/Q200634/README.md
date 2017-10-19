---
layout: page
title: "Q200634: SMS: Cancel Button Loops on Software Metering Logon Dialog Box"
permalink: /kb/200/Q200634/
---

## Q200634: SMS: Cancel Button Loops on Software Metering Logon Dialog Box

	Article: Q200634
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbReport kbsmsAdmin kbsmsMeter
	Last Modified: 28-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When manually running LicAdmin.exe, a dialog box may appear prompting for
	information to log into the SQL database. If incorrect information is typed into
	any of the fields or if they are left blank, a short Cancel loop may occur when
	trying to use the Cancel button. Under certain situations, the Cancel button may
	not work on the first try. It may take up to six Cancel attempts to actually
	cancel the application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Double-click the LicAdmin.exe executable file and run the application.
	
	2. Type invalid information or leave blank fields on first dialog box and then
	  click OK.
	
	3. Click OK on the resulting error message.
	
	4. Click the Cancel button.
	
	This problem may also occur when installing the Systems Management Server
	Administrator console to a computer running Microsoft Windows NT Workstation or
	Server. The following steps will reproduce the problem under these
	circumstances:
	
	1. Install the Administrator console with the Software Metering Tool enabled.
	
	2. Use the Administrator Console or run LicAdmin.exe to start the Software
	  Metering Tool.
	
	  A SQL Server Login dialog box appears, requesting the Server Name location,
	  Database Name location, User Name, and User Password.
	
	3. Type an incorrect database name; an error dialog box appears.
	
	4. Click the OK button on the error message and the SQL Server Login box
	  reappears.
	
	5. The SQL Server Login dialog box does not close if you click the Close or
	  Cancel buttons. The Cancel or Close buttons do not respond to the function.
	
	Additional query words: prodsms swmeter
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbReport kbsmsAdmin kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
