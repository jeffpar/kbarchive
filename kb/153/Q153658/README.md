---
layout: page
title: "Q153658: XFOR: DXA Crashing with Event ID 268"
permalink: /kb/153/Q153658/
---

## Q153658: XFOR: DXA Crashing with Event ID 268

{% raw %}

	Article: Q153658
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 4.0 
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Directory Synchronization Service (DXA) crashes when
	attempting to process an incoming Directory Synchronization (DirSync) message
	when running Windows NT version 4.0 Service Pack 2 (SP2) and 128 bit encryption.
	When you check the Windows NT Application Event log, you will find the following
	error:
	
	  Event ID: 268
	  Source: MSExchangeDX
	  Description: An error occurred when attempting to open a temporary file In the
	  DXADATA directory. Ensure that there is enough disk space to Perform this
	  action.
	
	NOTE: This error message is misleading because the problem really has nothing to
	do with lack of disk space.
	
	
	CAUSE
	=====
	
	The 128 bit encryption Security.dll that ships with Windows NT version 4.0 SP2
	was rebased to a new address that, when loaded, blocked the DXA from creating
	the necessary memory mapped file it needs when processing DirSync messages.
	
	
	WORKAROUND
	==========
	
	To find out if the Security.dll files is based correctly, there are two methods.
	The first is to perform the following steps:
	
	1. Start the Windows NT Explorer.
	
	2. Change to the %systemroot%\system32 directory.
	
	3. Select the Security.dll file.
	
	4. From the File menu, click Quick View.
	
	5. Scan the Quick View window for the string "Image Base".
	
	6. If it shows 46480000, the file is incorrectly based.
	
	The second method is to use Dumpbin.exe (available in Microsoft Development
	Studio).
	
	Using Dumpbin.exe, verify that the DLL in question is indeed based at 46480000.
	This can be done with the following command:
	
	  DUMPBIN /HEADERS SECURITY.DLL
	
	Scan the output for the OPTIONAL HEADERS SECTION looking for the 'image base'
	parameter. The following is a sample output of the incorrectly based DLL:
	
	  Microsoft (R) COFF Binary File Dumper Version 4.20.6164
	  Copyright (C) Microsoft Corp 1992-1996. All rights reserved.
	
	  Dump of file security.dll
	
	  PE signature found
	
	  File Type: DLL
	
	  FILE HEADER VALUES
	       14C machine (i386)
	         6 number of sections
	  3338158D time date stamp Tue Mar 25 10:12:29 1997
	         0 file pointer to symbol table
	       2D7 number of symbols
	        E0 size of optional header
	      2302 characteristics
	              Executable
	              32 bit word machine
	              Debug information stripped
	              DLL
	
	  OPTIONAL HEADER VALUES
	       10B magic #
	      3.10 linker version
	      7800 size of code
	      2E00 size of initialized data
	         0 size of uninitialized data
	      1000 address of entry point
	      1000 base of code
	      9000 base of data
	           ----- new -----
	  46480000 image base<--- This is the parameter in question.
	
	The file can be rebased to the original base address (77A80000) by running
	Rebase.exe against the DLL with the following command:
	
	  REBASE -b 77A80000 SECURITY.DLL
	
	The server in question should be rebooted after this has been rebased.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 SP2 with
	128 bit encryption. It has been fixed in Windows NT version 4.0 SP3.
	
	
	MORE INFORMATION
	================
	
	Similar symptoms can also occur with Microsoft Exchange Server version 5.0. The
	event logged is:
	
	  EventID: 249
	  Source: MSExchangeDX
	  Type: Error
	  Category: Startup
	  Description:
	  Error -1201 occurred while trying to create a new database.
	
	The workaround and status sections apply to version 5.0 as well.
	
	Additional query words: DXA.DBG DXA.EXE
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTSsearch kbExchangeSearch kbExchange400 kbZNotKeyword2 kbGraph500
	Version           : winnt:4.0,5.0
	
	=============================================================================
	

{% endraw %}
