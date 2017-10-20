---
layout: page
title: "Q196217: XADM: IS Shuts Down with JET Reporting Out of Disk Space"
permalink: /kb/196/Q196217/
---

## Q196217: XADM: IS Shuts Down with JET Reporting Out of Disk Space

{% raw %}

	Article: Q196217
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:4.0, 5.0, 5.5
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server information store shuts itself down when the Jet
	database engine (EDB) reports that the hard disk drive containing the
	transaction logs is full. This problem may also occur when there is sufficient
	disk space available but the transaction logs are contained within a Services
	for Macintosh (SFM) volume.
	
	The following sequence of events will appear in the Windows NT Application Event
	logs prior to the information store shutting down:
	
	  Event ID:    32
	  Source:      EDB
	  Type:        Error
	  Category:    Logging/Recovery
	  Description: MSExchangeIS ((273) ) Unable to create the log. The drive
	               may be read-only or out of disk space. Error -1811.
	
	  Event ID:    1111
	  Source:      MSExchangeIS
	  Type:        Error
	  Category:    General
	  Description: An error occurred while writing to the database log file.
	               Attempting to stop the Microsoft Exchange Information
	               Store.
	
	  Event ID:    1101
	  Source:      MSExchangeIS Private
	  Type:        Error
	  Category:    Background Cleanup
	  Description: Error -510 occurred during a background cleanup on message
	               1-E85.
	
	  Event ID:    1101
	  Source:      MSExchangeIS Private
	  Type:        Error
	  Category:    Background Cleanup
	  Description: Error -510 occurred during a background cleanup on message
	               1-E8C.
	
	  Event ID:    1025
	  Source:      MSExchangeIS Private
	  Type:        Warning
	  Category:    Transport General
	  Description: An error occurred. Function name or description of problem:
	               EcDoDeliverMessage Error: -510
	
	  Event ID:    1101
	  Source:      MSExchangeIS Private
	  Type:        Error
	  Category:    Background Cleanup
	  Description: Error -510 occurred during a background cleanup on message
	               1-E93.
	
	  Event ID:    5004
	  Source:      MSExchangeSA
	  Type:        Error
	  Category:    General
	  Description: Generation of the offline Address Book is complete. Result:
	               The Microsoft Exchange Server computer is not available.
	               Either there are network problems or the Microsoft Exchange
	               Server computer is down for maintenance. Microsoft Exchange
	               Server Information Store ID no: 8004011d-0525-00000000.
	
	After the information store has shut itself down, the administrator can restart
	the information store provided there is sufficient disk space available.
	
	CAUSE
	=====
	
	This problem may occur when SFM has been installed on the Exchange Server
	computer and the Jet transaction logs (DSADATA and MDBDATA) reside on a
	Macintosh volume. After the information store has shut itself down after the
	error has occurred, a zero byte Edbtmp.log or a zero byte Edb.log file will be
	left in the MDBDATA directory. This error condition arises when the Edb.log file
	is full and needs to be rolled over to the next generation log file number. A
	zero byte Edbtmp.log file is created by Jet and is extended to a file size of 5
	MB. Edb.log is then renamed to the next numbered log file (for example,
	Edb000xx.log). Edbtmp.log is then renamed to Edb.log and then jet continues
	processing new incoming messages.
	
	The problem occurs in the transition of renaming these files when SFM is
	involved. With SFM, there are essentially two file indexes that need to be kept:
	NTFS and Apple Fileshare Protocol (AFP). A timing condition can arise where the
	AFP update occurs after the file has already been renamed and thus no longer
	exists under the old name in NTFS. If so, SFM will create a new zero byte file,
	which causes an error condition that reports back to Jet that "The file already
	exists." This error is eventually interpreted by Jet as being an out of disk
	space condition and the information store then shuts itself down to maintain the
	database integrity.
	
	WORKAROUND
	==========
	
	This problem can be avoided by not having any Jet transaction logs located on a
	SFM volume.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbOSWinSearch kbOSWinNT400 kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbOSWinNTSearch
	Version           : WinNT:4.0, 5.0, 5.5
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
