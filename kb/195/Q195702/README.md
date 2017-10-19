---
layout: page
title: "Q195702: SMS: CHECK20 Misidentifies SMS 1.2 Client as an SMS 2.0 Client"
permalink: /kb/195/Q195702/
---

## Q195702: SMS: CHECK20 Misidentifies SMS 1.2 Client as an SMS 2.0 Client

	Article: Q195702
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP4
	Operating System(s): 
	Keyword(s): kbsms200 kbsms120
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Check20.exe is a utility added to the Smsls.bat file in Systems Management
	Server 1.2 Service Pack 4 to check for the existence of a Systems Management
	Server 2.0 client. If %windir% is not in the path, Check20.exe will fail and
	return errorlevel 1 instead of errorlevel 2. This causes the Smsls.bat calls to
	CLI_NT and INVWIN32 to be skipped.
	
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Systems
	Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time               Size     File name   Platform
	  ------------------------------------------------------------------
	  10/06/98   12:50am            44,252   Check20.exe (x86 and Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 Service Pack 4.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. In the <SMS_root>\Site.srv\maincfg.box\client.src directory, replace
	  the Check20.exe file with the version obtained from the hotfix.
	
	  NOTES:
	
	   - Both Intel x86 and Alpha use the same file.
	
	   - You can perform Step 1 automatically by using Hotfix.exe with the provided
	     Hotfix.ini file.
	
	  Maintenance Manager will replicate this file to the Systems Management Server
	  logon servers on its next work cycle.
	
	2. Update the Check20.exe located in the Repl\Export\Scripts and
	  Repl\Import\Scripts of the site's Windows NT logon servers.
	
	Additional query words: prodsms sp sp4
	
	======================================================================
	Keywords          : kbsms200 kbsms120 
	Technology        : kbSMSSearch kbSMS120SP4
	Version           : :1.2 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
