---
layout: page
title: "Q130937: Manual Installation of INVWIN32 on Windows NT Workstation"
permalink: kb/130/Q130937/
---

## Q130937: Manual Installation of INVWIN32 on Windows NT Workstation

	Article: Q130937
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The administrator of an Systems Management Server managed network may want to
	install the inventory agent service for Windows NT on Windows NT Workstations.
	Systems Management Server does not provide a means to do this, and it is not a
	supported feature at this time. The following steps may be used to accomplish
	this. They are provided as is and are not supported by Microsoft.
	
	MORE INFORMATION
	================
	
	1. On Windows NT Workstation, create an SMS\HELPER.SRV\X86.BIN directory. This
	  directory name is arbitrary, but it helps to be consistent with the currently
	  supported methodology for domain controllers running the inventory agent
	  service. The X86.BIN directory should be named appropriately for the proper
	  architecture (X86.BIN, ALPHA.BIN, MIPS.BIN.)
	
	2. From the appropriate directory on an existing Systems Management Server logon
	  server, copy the INVWIN32.EXE program file into the directory created in step
	  1 above.
	
	3. From the PSSTOOLS directory on the Systems Management Server distribution CD,
	  run INSTSRV.EXE. Install the service using this tool, answering the following
	  questions as presented by the tool:
	
	   - Service Name
	   - User account
	   - Password
	   - Machine name
	   - Path
	   - Start Mode
	
	4. Each time the service is started, it must include an argument containing the
	  path to the logon server it will report inventory to. This is in the format
	  of "/L:\\<SMSLogonServer>\SMS_SHR\" and may need to be "escaped" in
	  some cases. For example, using the SMS Service Manager, the argument must
	  look like /L:\\\\<SMSLogonServer>\\SMS_SHR\\. Option 4 in INSTSRV can
	  be used to start the service, Control Panel <Services>, in addition to
	  the Systems Management Server Service Manager.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
