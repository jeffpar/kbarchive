---
layout: page
title: "Q99172: 3COM: Gateway Does Not Work After Successful Install"
permalink: /kb/099/Q99172/
---

## Q99172: 3COM: Gateway Does Not Work After Successful Install

	Article: Q99172
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 1.0 of the Microsoft Mail Gateway to 3Com 3+Open may not install
	completely, even though no error messages are displayed during installation. It
	may look as if it installed fine, but the gateway does not work.
	
	CAUSE
	=====
	
	Several subprocesses in the installation process may cause this problem. See
	RESOLUTION below for things to check.
	
	RESOLUTION
	==========
	
	Here are some ways to check for a successful installation process, even when the
	gateway does not work due to other problems on the network.
	
	- The installation process on the gateway postoffice should create a new
	  subdirectory in the Mail database named SMTP, which should contain the
	  following files:
	
	  ADDR_MAP.CFG
	  LOCAL.CFG
	
	- There should be a SMTP.NME file added to the .NME directory, and there should
	  be a SMTP.GLB file added to the .GLB directory.
	
	- Run the ADMIN.EXE utility and select the Gateway option. The access
	  components for SMTP should be seen and usable because the 3Com Gateway uses
	  the SMTP accessing components on the postoffice.
	
	- Verify that the gateway executable files, COURGET.EXE and COURPUT.EXE, are in
	  the directory listed in the GATEWAY.INI file under the FFAPIPath parameter.
	
	- Verify that the files GATEWAY.EXE and GATEWAY.INI are in the same directory.
	
	- Verify that the current directory of the drive listed in the GATEWAY.INI
	  parameter MSMAILDRIVE is the database directory.
	
	  For example:
	
	  If you list M:\MAILDATA in the .INI, and you are in the M:\MAILEXE directory
	  when you run GATEWAY.EXE, the database files will not be found because the
	  gateway will only look in the current directory of the drive, it will not
	  resolve the full path to locate the database files (.ATT, .MAI, .GLB, and so
	  on).
	
	For more information about troubleshooting the 3Com/MS Mail Gateway, query on the
	following words in the Microsoft Knowledge Base:
	
	  "verifying" (without the quotation marks) and "gateway.ini" (without the
	  quotation marks) and "parameters" (without the quotation marks)
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus100
	Version           : :1.0
	
	=============================================================================
	
