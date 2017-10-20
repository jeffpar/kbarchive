---
layout: page
title: "Q140378: Using NETSVC.EXE To Control and Display Services"
permalink: /kb/140/Q140378/
---

## Q140378: Using NETSVC.EXE To Control and Display Services

{% raw %}

	Article: Q140378
	Product(s): Microsoft Windows NT
	Version(s): 1.0,1.1,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	- MSPRESS Microsoft Windows NT Resource Kit, versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use NETSVC.EXE to control and display Windows NT
	services on a local or a remote computer.
	
	You may also use NETSVC.EXE to view current driver status.
	
	MORE INFORMATION
	================
	
	NETSVC.EXE is a command line utility which allows you to administer and query
	services on a Windows NT workstation or server.
	
	In order to use this utility, you must first have adequate permissions on the
	target computer. In most cases, Local Administrator equivalencies are required.
	
	SYNTAX: NETSVC servicename \\computername /command
	
	Available command options:
	
	  /query      Queries the status of the service
	  /start      Starts the service
	  /stop       Stops the service
	  /pause      Pauses the service
	  /continue   Starts the paused service
	  /list       Lists installed services and drivers
	
	Additionally, the /list option can be followed by the > command and a filename
	to write the output to file. For example:
	
	  NETSVC \\ABRAMELIN /LIST > SERVICES.TXT
	
	NETSVC is available on the Windows NT Resource Kit CD-ROM under the \platform
	(x86, alpha, ppc, mips) \netadmin subdirectory, or on the SMS 1.1 CD-ROM, under
	the \PSSTOOLS\X86.BIN for x86 computers.
	
	NOTE: The SMS CD-ROM contains the X86 version only.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbSMSSearch kbZNotKeyword6 kbZNotKeyword2 kbSMS100 kbSMS110 kbZNotKeyword5
	Version           : :1.0,1.1,3.5,3.51
	
	=============================================================================
	

{% endraw %}
