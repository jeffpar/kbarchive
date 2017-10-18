---
layout: page
title: "Q279441: Hardware Inventory Is Rejected If Variable Ends with Backslash"
permalink: kb/279/Q279441/
---

## Q279441: Hardware Inventory Is Rejected If Variable Ends with Backslash

	Article: Q279441
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbDataLoader kbInventory kbsms200preSP3fix kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When environment variable data is collected by using the Systems Management
	Server (SMS) 2.0 Hardware Inventory process, the SMS Hardware Inventory agent
	truncates any string that is more than 260 characters long. If the resulting
	string is truncated such that it ends with an odd number of backslashes (\) in
	the hardware inventory (MIF) file, the Inventory Dataloader component on the
	site server does not add that computer's hardware inventory information to the
	SMS database.
	
	CAUSE
	=====
	
	Depending on how the environment variable data is truncated, a MIF file that
	contains incorrect syntax may be created. For string data in a MIF file, a
	backslash (\) must be represented as two backslashes (\\) to be processed
	correctly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	To avoid this problem, adjust the environment variables on the computers that
	are affected, or disable the Win32_Environment class in the Sms_def.mof file.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	This problem occurs only if the default hardware inventory is changed to include
	the Win32_Environment class. For additional information about changing the
	default hardware inventory collection criteria, refer to the "Modifying the
	Sms_def.mof File" section in the online SMS Administrator's Guide.
	
	The environment variable that is most often affected by this problem is the
	system PATH variable. However, other environment variables that are created by
	installed programs can also cause this behavior as well.
	
	When the Hardware Inventory agent truncates the data, it records the following
	text in the Hinv32.log file:
	
	  CLASS - Process Class: Win32_Environment
	  WARNING - Truncate attribute VariableValue of Win32_Environment.
	
	Later, when the Inventory Dataloader component attempts to process the computer's
	inventory file, it produces this syntax error message:
	
	  Processing file H2WOUU0W.MIF
	  Compilation failed~syntax error on line 42, token '~~'
	  Could not convert file: F:\SMS\inboxes\dataldr.box\process\XH2WOUU0W.MIF
	
	
	Additional query words: prodsms hinv mif
	
	======================================================================
	Keywords          : kbDataLoader kbInventory kbsms200preSP3fix kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
