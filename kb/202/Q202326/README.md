---
layout: page
title: "Q202326: SMS: HowTo  Determine if a File is &quot;Known&quot; or &quot;Unknown&quot;"
permalink: /kb/202/Q202326/
---

## Q202326: SMS: HowTo  Determine if a File is &quot;Known&quot; or &quot;Unknown&quot;

{% raw %}

	Article: Q202326
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbInventory
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server 2.0 can perform software inventory based on file type
	using a wildcard character. The default is to search for .exe files (*.exe), but
	you can modify this to search for any file type.
	
	Note that unlike in Systems Management Server 1.2, you cannot look for a specific
	file, such as Notepad.exe, you can only search for the file extension type.
	
	When you examine the data in Resource Explorer for a specific client, the files
	are listed under either the Manufacturer or Unknown Files tree in Microsoft
	Management Console (MMC).
	
	MORE INFORMATION
	================
	
	Systems Management Server determines whether to place the file under
	Manufacturer or Unknown Files by reading the file's header information to find
	manufacturer details. If the header does not contain the manufacturer
	information, it is placed in the Unknown Files MMC tree.
	
	Note that there are a number of file types that will not include this
	manufacturer information, including .txt, .bat, .dat, and so forth.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbInventory 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
