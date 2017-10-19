---
layout: page
title: "Q263402: SMS: Msiexec.exe Cannot Process an MSI File"
permalink: /kb/263/Q263402/
---

## Q263402: SMS: Msiexec.exe Cannot Process an MSI File

	Article: Q263402
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbSoftwareDist kbsms200preSP3 kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run an .msi file by specifying the name of the file at a command
	prompt, the Msiexec.exe program cannot process the .msi file.
	
	CAUSE
	=====
	
	When you run .msi files by just specifying the name of the .msi file, no command
	prompt parameters are passed to the Msiexec.exe program, so the Msiexec.exe
	program cannot process the .msi file.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	To work around this problem, include an explicit call to the Msiexec.exe program
	at the command prompt when you want to advertise programs. You must also type
	the appropriate command-line switch with the Msiexec.exe program, such as /I (to
	install) or /f (to repair the installation). For a complete list of command-line
	switches that you can use with the Msiexec.exe program, view the following
	Microsoft Knowledge Base article:
	
	  Q227091 Command-Line Switches for the Microsoft Windows Installer Tool
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	You can run Windows Installer packages (.msi packages) by either double-clicking
	the .msi file itself or by calling it by using the Msiexec.exe program from a
	command prompt.
	
	When you use System Management Server (SMS) 2.0, you can advertise and run .msi
	packages only by explicitly calling the command prompt and specifying the name
	of the .msi file that you want to run.
	
	Additional query words: prodsms c line
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbSoftwareDist kbsms200preSP3 kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
