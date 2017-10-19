---
layout: page
title: "Q319167: SMS: Custom Hardware Inventory .mif Files Are Placed in Badmifs"
permalink: /kb/319/Q319167/
---

## Q319167: SMS: Custom Hardware Inventory .mif Files Are Placed in Badmifs

	Article: Q319167
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you customize the default Sms_def.mof file and change the reporting values
	to report more available properties for additional available inventory classes,
	the inventory .mif file that is generated may be larger than the site-defined
	maximum .mif file size. This .mif file is rejected by the Inventory Data Loader
	Server component. Any .mif files that are larger than this maximum size are
	placed in the SMS\Inboxes\Dataldr.box\Badmifs folder. An error message that is
	similar to the following message may be recorded in the Dataldr.log file:
	
	  Starting the No. 1 machine MIF processing thread, thread ID = 6C4
	  Processing file NPFPTHKY.MIF
	  ERROR: File size exceeds defined maximum.
	  Cannot process MIF NPFPTHKY.MIF, moving it to
	  D:\SMS\inboxes\dataldr.box\BADMIFS\NPFPTHKY.MIF
	  Finished processing file NPFPTHKY.MIF
	  No more machine MIFs to be processed, terminating thread
	  Finished processing 1 MIFs
	
	CAUSE
	=====
	
	If you report additional inventory information in the Sms_def.mof file, the size
	of the inventory .mif file increases. By default, the maximum size of a hardware
	inventory .mif file is 5 megabytes (MB). (This is noted in decimal as 5000000.)
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can specify the maximum size of a hardware inventory .mif file to increase
	the default maximum. To do this, change the following registry value:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Components\SMS_INVENTORY_DATA_LOADER\Max
	  MIF Size
	
	The value that you specify is the number of bytes that the Data Loader component
	will process in a single mif file. You may want to specify the value in decimal
	instead of hexadecimal. For example, if you want to change the Max MIF Size
	registry value to 10 MB, enter a value of 10000000 (decimal). The default value
	is 5 MB.
	
	MORE INFORMATION
	================
	
	The default Sms_def.mof file that is included with Systems Management Server
	(SMS) 2.0 produces a .mif file that is approximately 100 KB in size. If you
	report all of the attributes for all inventory classes, the .mif file that is
	produced varies in size depending on the information that is returned.
	
	Subsequent hardware inventories are referred to as "Delta Inventories." These
	contain information only for workstations that have changed since the last
	hardware inventory. The default Delta .mif file size is approximately 6 KB with
	no changes.
	
	Additional query words: prodsms maxmifsize
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
