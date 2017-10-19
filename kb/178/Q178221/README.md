---
layout: page
title: "Q178221: XCLN: Microsoft Outlook Displays Incorrect Size for Attachments"
permalink: /kb/178/Q178221/
---

## Q178221: XCLN: Microsoft Outlook Displays Incorrect Size for Attachments

	Article: Q178221
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you view the properties of an attachment in Microsoft Outlook 97, the size
	of the attachment may appear to be smaller than its actual size. The size
	displayed in the Properties dialog box is rounded down to the nearest kilobyte
	(KB), megabyte (MB), or gigabyte (GB). The following examples illustrate this
	behavior:
	
	  Actual Size       Display Size     Difference
	  ===========       ============     ==========
	
	    1.0 KB              1KB             -
	    1.4 KB              1KB          400 bytes
	    1.9 KB              1KB          900 bytes
	
	    2.0 MB              2MB             -
	    2.2 MB              2MB          200 KB
	    2.9 MB              2MB          900 KB
	
	    3.0 GB              3GB             -
	    3.3 GB              3GB          300 MB
	    3.9 GB              3GB          900 MB
	
	WORKAROUND
	==========
	
	To determine the correct size of the file, save the file to your hard disk drive
	and view the file's properties in Windows Explorer. To do this, perform the
	following steps:
	
	1. Open the message.
	
	2. From the File menu, select Save Attachments.
	
	3. Select the attachment from the list, and click OK.
	
	4. Save the file to a directory on your hard disk drive.
	
	5. Using Windows Explorer, view the file's properties to determine the correct
	  file size.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 1MB truncate decimal point
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : :8.0,8.01,8.02,8.03
	Issue type        : kbbug
	
	=============================================================================
	
