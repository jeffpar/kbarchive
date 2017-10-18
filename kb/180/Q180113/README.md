---
layout: page
title: "Q180113: Problems Printing to German FPNW from NetWare Clients"
permalink: kb/180/Q180113/
---

## Q180113: Problems Printing to German FPNW from NetWare Clients

	Article: Q180113
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When using Capture.exe that ships with File and Print Services for NetWare
	(FPNW) and printing to a German File and Print Services for NetWare (FPNW)
	server using a command similar to the following:
	
	  CAPTURE L=2 S=fpnw-srv Q=printer NT
	
	The job does not print although it does show up in the queue for a very short
	time.
	
	CAUSE
	=====
	
	To reflect the options entered when capturing the printer, FPNW uses the job
	data types of the Windows NT printing system. Here is how the CAPTURE options
	map:
	
	  <no option>: TEXT
	  NT NFF: RAW
	  NT: RAW [FF appended]
	  <other cases>: default data type
	
	In German FPNW, RAW [FF appended] is localized to RAW [FF angehaengt] where ae is
	a German Umlaut. This string is not localized in the Windows NT printing
	system.
	
	Because the datatype RAW [FF angehaengt] is rejected by the printing subsystem on
	the German server, FPNW cancels the print job and returns the NCP request with
	an error message.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	FPNW has registry entries to set the strings for the data types used above. The
	path below shows the location of this registry key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\FPNW\Parameters.
	
	This is the list of entries and their default values for US-English Windows NT:
	
	Value name: DefaultTextDatatype
	Data type: REG_SZ
	String: TEXT
	
	Value name: DefaultRawDatatype
	Data type: REG_SZ
	String: RAW
	
	Value name: DefaultRawFFDatatype
	Data type: REG_SZ
	String: RAW [FF appended]
	
	The entries do not exist and have to be added manually.
	
	To solve the problem, add a new value DefaultRawFFDatatype with the string RAW
	[FF appended] and restart the FPNW service. To do this, perform the following
	steps:
	
	1. Start Registry Editor (Regedt32.exe) and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\FPNW\Parameters.
	
	2. From the Edit menu, click Add Value. Type the following information and then
	  click OK.
	
	  Value name: DefaultRawFFDatatype
	  Data Type: REG_SZ
	  String: RAW [FF appended]
	
	3. Quit Registry Editor and restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The problem occurs if you run NetWare clients with some MS-DOS applications
	where you do not want to use tab expansion (description below), but want the
	server to append a Form Feed to the print job.
	
	Using Capture.exe that comes with FPNW, this would be an example command line:
	
	  CAPTURE L=2 S=fpnw-srv Q=printer NT
	
	Windows NT tells the system not to expand tab characters (ASCII 0x09) in the
	print job to spaces. It does not matter whether you use Microsoft's or Novell's
	version of Capture.exe or if you use the Nwuser.exe tool under Windows to
	capture the LPT port.
	
	The problem is that the job does not get printed. It shows up only for a short
	time in the Windows NT queue.
	
	In a network trace you can see a NCP request Create Queue Job Extended sent to
	FPNW, but the response frame contains error code 0xD0 (Queue Error).
	
	Without the Windows NT option or by adding NFF (No Form Feed), the print jobs get
	printed but you have side effects like distorted printouts or you manually have
	to add a Form Feed.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
