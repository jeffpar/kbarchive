---
layout: page
title: "Q155885: XCLN: Update Not Updating Files in Directories w/Long File Names"
permalink: kb/155/Q155885/
---

## Q155885: XCLN: Update Not Updating Files in Directories w/Long File Names

	Article: Q155885
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Schedule+, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Update.exe for Microsoft Exchange Server Service Pack 3 on a client
	computer running Windows 95, some files are not updated. Update.exe runs without
	an error, and states that Setup was completed successfully.
	
	The following are the affected files:
	
	  Msspc32.dll
	  Scanpst.exe
	  Newprof.exe
	  Exchng32.exe
	  Mlshext.dll
	
	CAUSE
	=====
	
	The update program uses the 16-bit version of the API to locate and read the
	directory names. This version of the API does not support long file names, and
	the process cannot find the files to be updated (that is, C:\Program
	Files\Microsoft Exchange\Exchng32.exe) so they are never copied over the older
	versions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: gone missing disappear vanished
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbZNotKeyword3 kbExchange400Win95
	Version           : WINDOWS:4.0,7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
