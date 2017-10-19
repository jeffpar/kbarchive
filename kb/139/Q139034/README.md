---
layout: page
title: "Q139034: PC NTMMTA: DISPATCH.EXE Using Single Postoffice Instance"
permalink: /kb/139/Q139034/
---

## Q139034: PC NTMMTA: DISPATCH.EXE Using Single Postoffice Instance

	Article: Q139034
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Dispatch service included with the Mail Multitasking MTA for
	Windows NT (NT MMTA), and the service is configured with the Single Postoffice
	Instance option, you will receive the following error in the Monitor window or
	the DISPATCH.LOG:
	
	  Dynamic connections could not be established
	
	However, the Directory Synchronization (Dir-Sync) process operates successfully
	as indicated by the following messages in the log file:
	
	  Checking the process table on <NETWORK>\<POSTOFFICE>
	  Running "NSDA -RT"
	  "NSDA -RT" terminated normally with exit code 64
	
	CAUSE
	=====
	
	The Single Postoffice Instance setting check box is only for the Mail External
	program (EXTERNAL.EXE). The DISPATCH.EXE program does not recognize this option.
	
	RESOLUTION
	==========
	
	A Dynadmin table has one of three options:
	
	- Add a DrivesUNC= statement with the serverpath being the home postoffice.
	
	- Set the SERVER.GLB file to zero bytes. This will remove the Dynadmin table
	  for this postoffice.
	
	  To set SERVER.GLB to zero bytes, use MS-DOS to rename the SERVER.GLB file in
	  the \MAILDATA\GLB directory, such as SERVER.BAK. Then, type the following at
	  the \MAILDATA\GLB directory prompt
	
	  "Type nul>server.glb" (without the quotation marks)
	
	- Run DISPATCH.EXE from the MS-DOS command line. DISPATCH.EXE will not use
	  Dynamic drives from the command line unless the DrivesDynamic= setting is
	  used in the DISPATCH.INI file.
	
	MORE INFORMATION
	================
	
	The Single Postoffice Instance check box was designed only for use with the
	Windows NT version of EXTERNAL.EXE.
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
