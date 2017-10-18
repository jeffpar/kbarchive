---
layout: page
title: "Q165264: SMS: Wrong Use of the /D: Switch May Cause Incomplete Inventory"
permalink: kb/165/Q165264/
---

## Q165264: SMS: Wrong Use of the /D: Switch May Cause Incomplete Inventory

	Article: Q165264
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can install the Systems Management Server client software to a specific disk
	drive by using the /d: switch on the cli_<operating system> line (for
	example, Cli_dos.exe) in the Smsls or Runsms batch files. For more information,
	see the following article in the Microsoft Knowledge Base:
	
	  Q127072 Installing SMS Client to Drive Other Than Most Free Disk Space
	
	However, if that switch is mistakenly used on the inv<operating system>
	line (for example, Invdos.exe) in the Smsls or Runsms batch files, the client
	reports an incomplete inventory. Therefore, some icons will be missing from the
	Personal Computer Properties in the Systems Management Server Administrator
	program.
	
	MORE INFORMATION
	================
	
	To prevent this problem from occurring, do not use the /d: switch on the
	inv<operating system> line.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
