---
layout: page
title: "Q184468: XADM: Edbutil.exe and Eseutil.exe Cannot Dump Log File Header"
permalink: kb/184/Q184468/
---

## Q184468: XADM: Edbutil.exe and Eseutil.exe Cannot Dump Log File Header

	Article: Q184468
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 24-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Edbutil.exe and Eseutil.exe programs include a /M switch that can be used to
	dump the header of a Microsoft Exchange Server database or the contents of a
	checkpoint (Edb.chk) file to a text file. However, the /M switch cannot be used
	to dump the header of a transaction log file to a text file.
	
	MORE INFORMATION
	================
	
	Microsoft recognizes the need for system and network administrators to dump the
	headers of transaction log files to text files. We have modified the Edbutil.exe
	program so that the /M switch can be used for this purpose.
	
	
	This supported feature is now available, but has not been fully regression tested
	and should be applied only to systems having a specific need for it. Unless you
	are severely impacted by the lack of this feature, Microsoft recommends that you
	wait for the next Service Pack that contains this feature. Contact Microsoft
	Technical Support for more information.
	
	
	We have also modified the Eseutil.exe program so that the /M switch can be used
	for this purpose.
	
	This feature is available in the latest service pack for Exchange Server 5.5. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	This feature was first included in Exchange Server 5.5 Service Pack 1.
	
	
	After you obtain this feature, you can use the following command to dump the
	header of a transaction log file:
	
	  <program> /ml <log_file>
	
	where <program> is Edbutil.exe or Eseutil.exe and <log_file> is the
	full path to the log file. You can use the greater-than (>) sign to dump the
	log file header to a text file.
	
	For example, to dump the header of the Edb.log file in the Exchsrvr\Mdbdata
	folder to a text file using the Exchange Server 5.5 Eseutil.exe program, use the
	following command:
	
	  eseutil.exe /ml c:\exchsrvr\mdbdata\edb.log > c:\logdump.txt
	
	For additional information about how to use the Edbutil.exe or Eseutil.exe
	program, type "edbutil.exe /?" or "eseutil.exe /?" at a command prompt, and then
	press ENTER.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
