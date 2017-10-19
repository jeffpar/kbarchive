---
layout: page
title: "Q253475: SMCLIENT.EXE: Doesn't Logon to Server"
permalink: /kb/253/Q253475/
---

## Q253475: SMCLIENT.EXE: Doesn't Logon to Server

	Article: Q253475
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	SMCLIENT may hang at the Winlogon dialog waiting for user input. It may be
	necessary to restart the tool. However, SMCLIENT still may not execute the logon
	command.
	
	CAUSE
	=====
	
	SMCLIENT will run and connect to the Terminal Server and the Winlogon dialog
	will appear. However, SMCLIENT does not send the users name to the Winlogon
	dialog, thus Terminal Server Client does not logon to the Terminal Server.
	
	RESOLUTION
	==========
	
	Microsoft has created a replacement for SMCLIENT.EXE that fixes this problem.
	The self extracting archive file SMCLIENT.ZIP contains the executable and
	documentation for SMCLIENT.
	
	SMCLIENT is available for download from the following Microsoft FTP site:
	
	  ftp://ftp.microsoft.com/reskit/win2000
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a local user named "test" on the server.
	
	2. Make the following sample scripts named test.scp to test smclient.exe.
	
	  {
	      connect("test", "test", "", 640, 480);
	      // Wait for desktop
	      check("Wait4Str", "MyComputer");
	      logoff();
	  }
	
	3. Run the sample scripts with "smclient.exe -v -f:test.scp".
	
	
	Additional query words: rkbook win2000 TOOLS RESKIT RESOURCE KIT
	
	======================================================================
	Keywords          :  
	Issue type        : kbprb
	
	=============================================================================
	
