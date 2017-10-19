---
layout: page
title: "Q267237: SMS: Upgrading SMS SPs Resets Provider Connections to Default"
permalink: /kb/267/Q267237/
---

## Q267237: SMS: Upgrading SMS SPs Resets Provider Connections to Default

	Article: Q267237
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have increased the number of Systems Management Server (SMS) computers at
	your site, you may have increased the number of connection accounts that the SMS
	provider is using. To make the change, you would have modified the Smsprov.mof
	file to increase the maximum SQL connections entry (MaxSQLConnections).
	
	If you install SMS 2.0 Service Pack 2 (SP2) or Service Pack 3 (SP3), this resets
	the number of connections from your custom value back to the default value of
	60.
	
	WORKAROUND
	==========
	
	To work around the problem, increase the connections again by using the
	appropriate method, which is determined by whether or not you have Microsoft
	Systems Management Server, and Microsoft SQL Server on the same computer.
	
	SMS and SQL on the Same Computer
	--------------------------------
	
	If SMS and SQL are on the same computer, the SMS provider is located in this
	computer. Modify the following entry
	
	  MaxSQLConnections=60
	
	in the Smsprov.mof file, which is located on SMS site server, in the
	SMS\bin\i386, or SMS\bin\Alpha folder.
	
	SMS and SQL on Different Computers
	----------------------------------
	
	1. If SMS and SQL are not on the same computer, and the SMS provider is located
	  in the SQL computer, the Smsprov.mof file is located in the
	  <X>:\SMSprov\MOFs\sitecode folder. Compile this file only, and not the
	  Smsprov.mof file that is located in the SMS\Bin\I386 or SMS\Bin\Alpha folder
	  on the SMS site server. If you do so, you may receive the following error
	  message when you click Remote Control in Collections:
	
	  A database could not be found with the name supplied.
	
	2. Open the Smsprov.mof file with a text editor, and then locate the following
	  lines:
	
	  / *************************************
	  // SMS_ConfigData : SMS Provider Configuration data
	  // *************************************
	
	  [singleton]
	  class SMS_ConfigData
	  {
	  // Number of instances returned as a batch to CIMOM for query results
	  [Description("Undocumented - do not change")]
	  uint32 QueryInstanceBatchCount = 0;
	
	  // Max number of SQL connections allowed at one time by the provider
	  [Description("Undocumented - do not change")]
	  uint32 MaxSQLConnections = 60;
	  };
	
	By default, the MaxSQLConnections setting is equal to 60. Change this to a higher
	number based on the number of SMS Administrator Console users. Even if you enter
	a higher number (Default connection=75) during the SMS installation, it does not
	update the number in this file. You have to update this manually.
	
	3. After you make this change, follow these steps to compile this file:
	
	  a. Go to the Mofcomp.exe file, which is located in the
	     %SystemRoot%\System32\WBEM folder.
	
	  b. Copy the Mofcomp.exe file to the folder that contains the Smsprov.mof
	     file.
	
	  c. Run the following command:
	
	  mofcomp smsprov.mof
	
	The output from the command looks like this:
	
	  Microsoft (R) 32-bit MOF Compiler Version 1.10.698.0000
	  Copyright (C) Microsoft Corp. 1997. All rights reserved.
	  Parsing MOF file: smsprov.mof
	  MOF file has been successfully parsed
	  Storing data in the repository...
	  Done!
	
	4. Update the SQL 6.5, or SQL 7.0 user connection configuration based on step
	  3.
	
	  In SQL 6.5:
	
	  a. Start SQL Enterprise Manager, right-click your SQL server, and then click
	     Configure.
	
	  b. On the Configuration tab, locate the User Connections row, and then update
	     the "Current user connections" number with a higher number.
	
	  c. Click Apply Now, then click OK.
	
	  d. Right-click your SQL server, and then click Stop.
	
	  e. Right-click your SQL server, and then click Start.
	
	In SQL 7.0:
	
	  a. Start SQL Enterprise Manager, right-click your SQL server, and then click
	     Properties.
	
	  b. Click the Connection tab.
	
	  c. Update the "Maximum concurrent user connections" number to a higher
	     number, or 0 (0 = unlimited).
	
	  d. Click Apply, and then click Yes to stop, and restart SQL 7.0.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: prodsms Smsprov
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
