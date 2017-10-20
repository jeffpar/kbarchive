---
layout: page
title: "Q277745: Creation of Cyclical Redundancy Checksum Entries for Programs"
permalink: /kb/277/Q277745/
---

## Q277745: Creation of Cyclical Redundancy Checksum Entries for Programs

{% raw %}

	Article: Q277745
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbServer kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how Microsoft Systems Management Server (SMS) creates the
	Cyclical Redundancy Checksum (CRC) entries for client programs.
	
	SMS uses a file integrity method that prevents the start of a program by the
	Systems Management Client service if the program does not match the CRC
	generated for that program by the site server.
	
	MORE INFORMATION
	================
	
	When you find that mismatched files exist between the client, the logon point,
	the client access point (CAP), and the site server, it means that there has been
	a previous unsuccessful attempt using the verification process.
	
	SMS maintains the list of client files that require CRC generation in the
	Sitectrl.ct0 site control file. The following example lists a typical entry:
	
	  BEGIN_CLIENT_CONFIGURATION
	  <Client Properties> <3>
	  TARGET_PLATFORM <ALL>
	  SITE_KEY_FLAGS <0>
	  Property <Bin\Alpha\Abnwcli.dll><Client Program><><4>
	  Property <Bin\Alpha\Bindclin.dll><Client Program>><4>
	  Property <Bin\Alpha\Ccim32.dll><Client Program><><2>
	  Property <Bin\Alpha\Chksnmp.exe><Client Program><><2>
	  Property <Bin\Alpha\Clisvcl.exe><Client Program><><1>
	  Property <Bin\Alpha\Cmgr32.dll><Client Program><><2>
	  Property <Bin\Alpha\Falclin.dll><Client Program><><4>
	  Property <Bin\Alpha\Hinv32.exe><Client Program><><2>
	  Property <Bin\Alpha\Mslmclin.dll><Client
	  Program><><4>
	  Property <Bin\Alpha\Ndsclin.dll><Client Program><><4>
	  Property <Bin\Alpha\Odpsys32.exe><Client
	  Program><><3>
	  Property <Bin\Alpha\Odpusr32.exe><Client
	  Program><><3>
	  Property <Bin\Alpha\Rcclicfg.exe><Client
	  Program><><2>
	  Property <Bin\Alpha\Sinv32.exe><Client Program><><2>
	  Property <Bin\Alpha\Smsapm32.exe><Client
	  Program><><2>
	  Property <Bin\Alpha\Smscq_32.exe><Client
	  Program><><2>
	  Property <Bin\i386\Abnwcli.dll><Client Program><><4>
	  Property <Bin\i386\Bindclin.dll><Client Program><><4>
	  Property <Bin\i386\Ccim32.dll><Client Program><><2>
	  Property <Bin\i386\Chksnmp.exe><Client Program><><2>
	  Property <Bin\i386\Clisvcl.exe><Client Program><><1>
	  Property <Bin\i386\Cqmgr32.dll><Client Program><><2>
	  Property <Bin\i386\Falclin.dll><Client Program><><4>
	  Property <Bin\i386\Hinv32.exe><Client Program><><2>
	  Property <Bin\i386\Mslmclin.dll><Client Program><><4>
	  Property <Bin\i386\Ndsclin.dll><Client Program><><4>
	  Property <Bin\i386\Odpsys32.exe><Client Program><><3>
	  Property <Bin\i386\Odpusr32.exe><Client Program><><3>
	  Property <Bin\i386\Rcclic16.exe><Client Program><><2>
	  Property <Bin\i386\Rcclicfg.exe><Client Program><><2>
	  Property <Bin\i386\Sinv32.exe><Client Program><><2>
	  Property <Bin\i386\Smsapm32.exe><Client Program><><2>
	  Property <Bin\i386\Smscq_32.exe><Client Program><><2>
	  Property <Bin\i386\Wuser.exe><Client Program><><2>
	
	The Client Install Data Manager uses the data from the preceding file to locate
	the client files, and then to generate the CRC data. The CRC is built against
	the files located in the site server's \Bin\i386 and \Bin\Alpha directory
	structure. It then populates the CRC data in the Cli_inst.cfg file located in
	the \SMS\Inboxes\Clidata.Src folder on the site server. The Inbox Manager copies
	this file to the Clidata.box folder on the client access points. The client,
	when installed, takes the reserved data from the Cli_inst.cfg file, and then
	inserts it into its local registry.
	
	When the SMS Client service tool (Clisvcl.exe) starts, it attempts to start each
	individual client program. When it undertakes this process, it checks the CRC of
	the local file against the registry built from the Cli_inst.cfg file. If it does
	not match, you can receive the following error message:
	
	  #$#$#$#$#$ ERROR: The Client Service is not authorized to run this
	  application (5)
	
	For additional information about the CRC checking process, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q246331 CRC Checking and Installation of Client-Side Hotfixes
	
	  Q270912 SMS: '#$#$#$#$#$ ERROR' Appears in Clisvc.log File
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbServer kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
