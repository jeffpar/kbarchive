---
layout: page
title: "Q181999: XADM: Err Msg Attempting to Uninstall &quot;Entry Point Not Found&quot;"
permalink: kb/181/Q181999/
---

## Q181999: XADM: Err Msg Attempting to Uninstall &quot;Entry Point Not Found&quot;

	Article: Q181999
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you apply Microsoft Exchange Server 5.0 Service Pack 2 (SP2) and then attempt
	to run Setup from the appropriate folder on the Microsoft Exchange Server 5.0
	compact disc, you may receive an error message similar to the following:
	
	  Entry Point Not found
	  The procedure entry point UIDecodeEUC_KR@24 could not be located in the
	  dynamic library GAPI32.dll.
	
	CAUSE
	=====
	
	Service Pack 2 includes an updated Gapi32.dll file that is copied to your hard
	disk when you apply Service Pack 2. This Gapi32.dll file is not completely
	compatible with the Microsoft Exchange Server 5.0 Setup program.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. Rename the Gapi32.dll file in the Winnt\System32 folder on your hard disk. To
	  do so, type the following command at a command prompt, and then press ENTER:
	
	  ren c:\winnt\system32\gapi32.dll gapi32.sp2
	
	2. Copy the Gapi32.dll file in the Server\Setup\I386 or Server\Setup\Alpha
	  folder on the Microsoft Exchange Server 5.0 CD-ROM to the Winnt\System32
	  folder on your hard disk. To do so, type the following command at a command
	  prompt, and then press ENTER:
	
	  copy <drive>:\server\setup\<platform>\gapi32.dll
	  c:\winnt\system32
	
	  where <drive> is letter of your CD-ROM drive and <platform> is the
	  appropriate folder on the CD-ROM (I386 or Alpha).
	
	3. Run Setup.exe from the compact disc.
	
	4. If you did not completely remove Microsoft Exchange Server using the Remove
	  All option in the Microsoft Exchange Server Setup program, follow these
	  steps:
	
	  a. Rename the Gapi32.dll file in the Winnt\System32 folder on your hard disk.
	     To do so, type the following command at a command prompt, and then press
	     ENTER:
	
	  ren c:\winnt\system32\gapi32.dll gapi32.old
	
	  b. Rename the Gapi32.sp2 file in the Winnt\System32 folder on your hard disk
	     to Gapi32.dll. To do so, type the following command at a command prompt,
	     and then press ENTER:
	
	  ren c:\winnt\system32\gapi32.dll gapi32.old
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
