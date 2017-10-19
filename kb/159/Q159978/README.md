---
layout: page
title: "Q159978: XCLN: Troubleshooting Profgen.exe Problems"
permalink: /kb/159/Q159978/
---

## Q159978: XCLN: Troubleshooting Profgen.exe Problems

	Article: Q159978
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbtool exc4 exc5
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists steps to help you troubleshoot problems when you attempt to
	use the Microsoft Exchange Roving User Profile Generation Program (Profgen.exe)
	to create Microsoft Exchange messaging profiles.
	
	MORE INFORMATION
	================
	
	Profgen.exe is an unsupported program that simplifies the creation of Microsoft
	Exchange profiles. It works in conjunction with the Automatic Profile Generator
	program (Newprof.exe) to create profiles.
	
	If a profile is not created when you run Profgen.exe, use the following steps to
	troubleshoot the problem:
	
	1. Using the Mail tool in Control Panel, attempt to create a profile. If you are
	  unable to create a profile using the Mail tool in Control Panel, resolve that
	  issue before you attempt to create a profile using Profgen.exe.
	
	2. Run Profgen.exe with the -l command line option or add the following line to
	  the Profgen.ini file before you run Profgen.exe:
	
	    Logging=1
	
	  This causes a Profgen.log file to be created on drive C.
	
	3. Use the Profgen.log file to verify that you are running Profgen.exe version
	  1.5 or later. For additional information, please see the following article in
	  the Microsoft Knowledge Base:
	
	  Q159504 XCLN: Profgen.exe Fails to Replace MailBoxName
	
	4. If you use the -u command line option when you run Profgen.exe or the
	  following line exists in the Profgen.ini file, verify that the specified .prf
	  file is not read-only:
	
	     UpdateMailBoxName=1
	
	  If the .prf file is read-only, the Profgen.log file contains the following
	  line:
	
	  Error updating PRF file '<drive>:\<filename>.prf'
	
	5. View the contents of the Profgen.log file and look for other lines that may
	  indicate the cause of the problem. In particular, look for lines that
	  indicate that the Newprof.exe file or the specified .prf file is invalid or
	  cannot be accessed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
