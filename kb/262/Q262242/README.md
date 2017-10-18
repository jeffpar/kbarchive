---
layout: page
title: "Q262242: SMS: Error in HINV32.LOG When Turnng On WIN32_NTLOGEVENT"
permalink: kb/262/Q262242/
---

## Q262242: SMS: Error in HINV32.LOG When Turnng On WIN32_NTLOGEVENT

	Article: Q262242
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbWBEM kbsms200 kbsms200bug
	Last Modified: 02-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the SMS_DEF.MOF is edited to enable Win32_NTLogEvent, and all items under
	this class are turned on, an error message appears in the HINV32.log on the
	client when hardware inventory is taken. The error is documented in the log as
	follows:
	
	  CLASS - Process Class: Win32_NTEventlogFile $$&<Hardware Inventory
	  Agent&>&<Fri May 05 10:00:14.466
	  2000&>&<thread=175 (0xAF)&>
	
	  WARNING - Unable to return all values of property Sources of
	  Win32_NTEventlogFile, max length reached !! $$<Hardware Inventory
	  Agent><Fri May 05 10:00:20.775 2000><thread=175 (0xAF)>
	
	  CLASS - Process Class: Win32_NTLogEvent $$<Hardware Inventory
	  Agent><Fri May 05 10:00:21.186 2000><thread=175 (0xAF)>
	
	  WARNING - Property EventIdentifier of Win32_NTLogEvent has been skipped.
	  Integer 2147490648 is too large !! $$<Hardware Inventory Agent><Fri
	  May 05 10:00:21.837 2000><thread=175 (0xAF)>
	
	  WARNING - Property EventIdentifier of Win32_NTLogEvent has been skipped.
	  Integer 2147489653 is too large !! $$<Hardware Inventory Agent><Fri
	  May 05 10:00:22.127 2000><thread=175 (0xAF)>
	
	This problem appears to be limited to the EventIdentifier object under the
	WIN32_NTLogEvent class.
	
	WORKAROUND
	==========
	
	Do not turn on the Win32_NTLogEvent class or collect the EventIdentifier object
	for inventory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbWBEM kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
