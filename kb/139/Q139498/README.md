---
layout: page
title: "Q139498: PC NTMMTA: Err Msg: Setup Has Encountered a Problem..."
permalink: /kb/139/Q139498/
---

## Q139498: PC NTMMTA: Err Msg: Setup Has Encountered a Problem...

{% raw %}

	Article: Q139498
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Windows NT Multitasking MTA (MMTA) Setup program over
	the network, you may get the following error message:
	
	  Setup has encountered a problem.
	
	  Please report file='COMMON\LIST1.C', Line='1013' to Microsoft Product Support
	  Services.
	
	CAUSE
	=====
	
	The Setup program is expecting the location of the Microsoft Windows NT server
	agent programs to be C:\MAILEXE. The error occurs because of other types of
	input formats of the network drive paths.
	
	For example, assume the N drive is mapped to \\SERVER NAME\MAILEXE share:
	
	- If you enter the Mailexe path as N or N:, it is not accepted. A dialog box
	  with the following text will be displayed:
	
	  The path entered is invalid.
	
	- If you enter the Mailexe path as N:\, it will be accepted, and Setup will
	  fail with the above error message.
	
	- If you enter the Mailexe path as N:\MAILEXE, it will be accepted; however,
	  the Setup program will create a new subdirectory under the Mailexe
	  subdirectory. In this case, the executables will be installed into
	  C:\MAILEXE\MAILEXE of the NT MMTA machine.
	
	RESOLUTION
	==========
	
	1. Share the parent directory that includes the \MAILEXE sudirectory, and map a
	  drive to that share. For example, map a drive N to the share C:\ of the
	  machine that will host the NT MMTA.
	
	2. Enter the \MAILEXE path as N:\MAILEXE.
	
	MORE INFORMATION
	================
	
	The same error message may be reported when you try to run the Setup program
	from within Microsoft Windows 95. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q135733 Errors Installing on Unsupported Platforms
	
	Additional query words: 3.20 windows nt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
