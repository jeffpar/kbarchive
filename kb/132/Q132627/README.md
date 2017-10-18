---
layout: page
title: "Q132627: ScanDisk Reports Invalid Date/Time for Many Files"
permalink: kb/132/Q132627/
---

## Q132627: ScanDisk Reports Invalid Date/Time for Many Files

	Article: Q132627
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run ScanDisk, you may receive the following information about one or
	more files:
	
	- This file or folder's last-modified date or time is invalid or is in the
	  future. This may be because your computer's clock is set incorrectly.
	  ScanDisk repairs future dates by changing them to your computer's current
	  date setting. ScanDisk repairs out-of-range dates or times by changing them
	  to the nearest setting within the valid range.
	
	- This file or folder's last-accessed date is invalid or is in the future. This
	  may be because your computer's clock is set incorrectly. ScanDisk repairs
	  future dates by changing them to "unknown". ScanDisk repairs out-of-range
	  dates by changing them to the nearest setting within the valid range.
	
	CAUSE
	=====
	
	These messages can occur if the computer's date setting has been set back to a
	date earlier than the actual date (causing the dates on the files in question to
	appear to be in the future) and if you are using the "Check files for invalid
	dates and times" option in ScanDisk.
	
	RESOLUTION
	==========
	
	Use the Date/Time tool in Control Panel to set the computer's date to the actual
	date.
	
	MORE INFORMATION
	================
	
	The date "unknown" is 01-01-1980 (the MS-DOS epoch).
	
	Files have three dates: date of last write, date of last access and the create
	date. If the create date or last access date is "in the future" the preceding
	information is correct and those dates will be reset to 01-01-1980. The date of
	last write is fixed differently. If date of last write is "in the future" that
	date is reset to the current date set in the system clock. This correction
	applies to all versions back to the final release version of Windows 95.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
