---
layout: page
title: "Q244794: OLE/DB for DB2 Does Not Prompt for User Name and Password"
permalink: /kb/244/Q244794/
---

## Q244794: OLE/DB for DB2 Does Not Prompt for User Name and Password

	Article: Q244794
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure the OLE/DB Provider for DB2, if the user name and password
	are left blank in the Data Link Properties sheet, or if only the password field
	is blank, SNA Server 4.0 Service Pack (SP) 2 prompts you for the information
	with a dialog box; however, in this same scenario, SNA Server 4.0 SP3 fails with
	the following error message:
	
	  Test connection failed because of an error in initializing provider. Command
	  syntax error. SQLSTATE: HY000, SQLCODE: -379
	
	CAUSE
	=====
	
	This is due to a change in the MDAC DataLink default behavior. With the new
	MDAC, the default for the DBPROP_INIT_PROMPT is DBPROMPT_NOPROMPT, and not
	DBPROMPT_COMPLETE.
	
	RESOLUTION
	==========
	
	In order to be prompted for the missing user ID and password, edit the UDL by
	adding another parameter, "Prompt=2," into the connection string.
	
	To edit the UDL, start Windows Notepad, and open the problem *.udl file. At the
	end of the connection string, add the following parameter with no spaces between
	it and the last entry:
	
	  ;Prompt=2
	
	Save the *.udl file, and then attempt the test connection again.
	
	WORKAROUND
	==========
	
	Hardcode a user ID and password into the Data Link Properties page.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP3
	
	=============================================================================
	
