---
layout: page
title: "Q164564: XADM: How to Install Exchange 4.0 in an Exchange 5.0 Site"
permalink: kb/164/Q164564/
---

## Q164564: XADM: How to Install Exchange 4.0 in an Exchange 5.0 Site

	Article: Q164564
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article concerns a scenario in which you have an existing Microsoft
	Exchange Server site and one of the servers in that Site is running Exchange
	Server 5.0. This article tells you how to install Exchange Server 4.0 in an
	Exchange Server site that contains an Exchange Server 5.0 computer or is in a
	site connected to another site that contains an Exchange Server 5.0 computer.
	
	MORE INFORMATION
	================
	
	The Support folder on the Exchange Server 5.0 CD contains an updated Setup.exe
	file. Use this Setup.exe file when setting up Exchange Server 4.0 in a site that
	contains an Exchange Server 5.0 computer. To set up Exchange Server 4.0:
	
	1. Copy the Setup\<platform> (such as I386, Alpha, and so on) directory
	  from the Exchange Server 4.0 CD to a blank directory on the hard disk drive.
	
	2. Copy Support\Exch40\<platform>\Setup.exe from the Exchange Server 5.0
	  CD to the directory that you created in step 1. This will overwrite the older
	  Setup.exe file.
	
	3. From the directory you created in step 1, run the new Setup.exe program that
	  you copied in step 2.
	
	These steps must be followed because when Exchange Server 5.0 is installed in a
	Site with Exchange 4.0 Server computers, the schema of all the servers in that
	site and all sites that have a Directory Replication Connector to that site will
	be upgraded and the older version of Setup.exe will not work correctly.
	
	Once this is done, installing Exchange Server 4.0 in that site will fail because
	the Exchange Server 4.0 directory handle these new object types. Replication
	with the other servers will fail, or the server will stop operating correctly.
	
	The new version of Setup.exe supplied on the Exchange Server 5.0 CD was modified
	so that the Exchange Server 4.0 can handle these new object types, allowing
	Setup to work correctly.
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
