---
layout: page
title: "Q272483: SMS: Access Violation Error Message with Datdupcl.exe or Datdupc"
permalink: /kb/272/Q272483/
---

## Q272483: SMS: Access Violation Error Message with Datdupcl.exe or Datdupc

	Article: Q272483
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Datdupcl.exe and Datdupck.exe SMS utilities generate access violation error
	messages when an attempt is made to log a SQL Server error message that is
	returned to the program's message handler.
	
	CAUSE
	=====
	
	This problem can occur when the logging functions of Datdupcl.exe and
	Datdupck.exe attempt to write error information to their respective log files,
	Datdupcl.log and Datdupck.log. The log file is not yet open at the point when
	the attempt to write error information occurs.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version      Size      File name     Platform
	  -------------------------------------------------------------
	  9/22/00   1:22    786          11,000    Datdupck.exe  Intel
	  9/22/00   1:23    786          15,000    Datdupcl.exe  Intel
	  9/22/00   1:25    786          16,000    Datdupck.exe  Alpha
	  9/22/00   1:24    786          20,000    Datdupcl.exe  Alpha
	
	
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	The SMS version 2.0 tools Datdupck.exe and Datdupcl.exe log SQL error messages
	successfully to their log files when a SQL error message is received.
	
	Additional query words: prodsms Datdupck Datdupcl exe
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
