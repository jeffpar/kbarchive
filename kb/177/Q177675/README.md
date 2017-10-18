---
layout: page
title: "Q177675: SMS: Inventory Based on String Value at Offset Incorrect"
permalink: kb/177/Q177675/
---

## Q177675: SMS: Inventory Based on String Value at Offset Incorrect

	Article: Q177675
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbInventory
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When specifying a string pattern at a particular offset for a file that is being
	inventoried, the Systems Management Server Software Inventory Agent counts a
	package as inventory even if the specified string pattern does not match at the
	offset specified. Therefore, if the file exists, the package is still counted as
	inventory.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date     Time        Size            File name      Platform
	  ------------------------------------------------------------
	  3/2/99   1:03PM      283,104 bytes   Inv32cli.exe   Intel
	  3/1/99   7:08PM      296,368 bytes   Invwin32.exe   Intel
	
	  3/2/99   1:06PM      866,576 bytes   Inv32cli.exe   Alpha
	  3/1/99   7:18PM      882,960 bytes   Invwin32.exe   Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, do not use the string property in a package's
	inventory rules. Use other properties instead to determine package inventory,
	such as file date, size, or checksum.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbInventory 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
