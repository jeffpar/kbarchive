---
layout: page
title: "Q185973: SMS: INVWIN32 Stops Responding and Causes 100 Percent CPU Usage"
permalink: /kb/185/Q185973/
---

## Q185973: SMS: INVWIN32 Stops Responding and Causes 100 Percent CPU Usage

	Article: Q185973
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 05-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server Inventory Agent for Windows NT Server (Invwin32),
	runs as a service. The service was written to activate every 24 hours to take
	the client's inventory. In some cases, Invwin32.exe (running as service) will
	run an inventory continuously, and consume between 80 and 100 percent of a
	computer's CPU time.
	
	The following entries are recorded in the Invagent.log file:
	
	     Invwin32.exe running as service.
	     Attempting to locate/identify Apple zone.
	     Locating/reading SMS.INI.
	     Creating output file.
	     Locating client MIF directories.
	
	After the last line, the Systems Management Server Inventory service appears to
	stop responding and consumes 80 to 100 percent of the processor time until you
	stop the Inventory Agent service.
	
	If you run Invwin32 as an executable file (using the /E /V /F switches) the
	problem will not occur, and the inventory is performed correctly.
	
	CAUSE
	=====
	
	The problem is caused by a corrupted Cmndhis.nt file.
	
	WORKAROUND
	==========
	
	To work around this problem, do any of the following:
	
	- Remove the Cmndhis.nt file from the Ms\Sms\Data directory of the affected
	  clients.
	
	  -or-
	
	- Wait for the next Systems Management Server service pack.
	
	  -or-
	
	- Contact Microsoft Technical Support to obtain the fix discussed below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	Additional query words: prodsms inventory corrupt hang halt
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
