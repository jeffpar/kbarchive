---
layout: page
title: "Q194297: SMS: Windows NT Inventory File Collector Causes Access Violation"
permalink: kb/194/Q194297/
---

## Q194297: SMS: Windows NT Inventory File Collector Causes Access Violation

	Article: Q194297
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,Part 2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Windows NT Inventory File Collector (Pollinv.exe) attempts to connect
	to the remote registry of a server that is having remote procedure call (RPC)
	related problems, an access violation (AV) will occur in Pollinv.exe.
	
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
	
	  Date      Time         Size      File name   Platform
	  -----------------------------------------------------
	  10/5/98   10:43am      154,704   Pollinv.exe (Intel)
	  10/5/98   10:42am      528,656   Pollinv.exe (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 and the Backoffice Resource Kit Part 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on each Systems Management
	Server logon server running the Windows NT Inventory File Collector service:
	
	1. Stop the SMS_NT_INVENTORY_FILE_COLLECTOR service.
	
	2. Replace the current Pollinv.exe file with the hotfixed version.
	
	3. Restart the SMS_NT_INVENTORY_FILE_COLLECTOR service.
	
	Additional query words: prodsms pollinv crash
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2,Part 2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
