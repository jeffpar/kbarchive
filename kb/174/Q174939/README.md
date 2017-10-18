---
layout: page
title: "Q174939: SMS: How to Use Listnt.exe with Systems Management Server"
permalink: kb/174/Q174939/
---

## Q174939: SMS: How to Use Listnt.exe with Systems Management Server

	Article: Q174939
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP3
	Operating System(s): 
	Keyword(s): kbusage smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Listnt.exe is a utility that lists computers from the Systems Management Server
	SQL database, as specified by certain parameters. The following is an example of
	the syntax of Listnt.exe:
	
	     LISTNT /A:<account> [/P:<password>] [/W|/S] [/NOPCM] [/O:<filename>]
	
	The following table describes the available parameters for Listnt.exe.
	
	  Parameter          Description
	  ------------------------------------------------------------------------
	
	  /A:<account>       Specifies the SQL account to be used to access the
	                     database.
	
	  /P:<password>      Specifies the SQL account password (this is optional
	                     for integrated security).
	
	  /W                 Specifies that only computers running Windows NT
	                     Workstation will be listed.
	
	  /S                 Specifies that only computers running Windows NT
	                     Server will be listed.
	
	  /D:<domain>        Specifies that only computers in the specified domain
	                     will be listed.
	
	  /IP:<ipaddress>    Specifies that only computers in the specified subnet
	                     will be listed. (This is based on the actual IP
	                     address, not the subnet mask.)
	
	  /NOPCM             Specifies that only computers that do not have
	                     Package Command Manager (PCM) as a service installed
	                     will be listed.
	
	  /X86               Specifies that only computers that have an Intel
	                     processor architecture will be listed.
	
	  /ALPHA             Specifies that only computers that have the Alpha
	                     processor architecture will be listed.
	
	  /O:<filename>      Specifies that the list will be written out to an
	                     .ini file.
	
	  /V                 Specifies that detailed progress information will be
	                     printed.
	
	MORE INFORMATION
	================
	
	Listnt.exe was introduced with Systems Management Server 1.2 Service Pack 3 to
	install the PCM service on computers running Microsoft Windows NT Workstation
	with RSERVICE. For more information on Listnt.exe, please see the Install.doc
	and Readme.txt files that are included in Microsoft Systems Management Server
	version 1.2 Service Pack 3.
	
	Additional query words: prodsms pcmservice pcmsvc
	
	======================================================================
	Keywords          : kbusage smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS120SP3
	Version           : :1.2 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
