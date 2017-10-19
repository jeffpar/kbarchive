---
layout: page
title: "Q157323: XCON: Identifying and/or Reconstructing a Connector Queue"
permalink: /kb/157/Q157323/
---

## Q157323: XCON: Identifying and/or Reconstructing a Connector Queue

	Article: Q157323
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to identify the queue for the connectors installed on
	a computer running Microsoft Exchange Server.
	
	- At a command prompt, enter the following command:
	
	  mtacheck /v /f <filename.log>
	
	The following data represents the applicable contents of the <filename.log>
	from an Enterprise Edition compact disc with all connectors installed. Note that
	the X.400 connector is not readily identified; enabling Field Engineering
	logging for the Microsoft Exchange Message Transfer Agent (MTA) will provide the
	ID of the .dat file that is causing the problem.
	
	  Checking queue XAPIWRKQ (id 01000020)
	
	  Checking queue OOFINFOQ (id 01000025)
	
	  Checking queue REFDATQ (id 01000026)
	
	  Checking queue MTAWORKQ (id 0100002B)
	
	  Checking queue
	  /O=MICROSOFT/OU=ALPHA/CN=CONFIGURATION/CN=CONNECTIONS/CN=INTERNET MAIL
	  CONNECTOR (BETA) (id 0100004F)
	
	  Checking queue
	     /O=MICROSOFT/OU=ALPHA/CN=CONFIGURATION/CN=CONNECTIONS/CN=MS
	  MAIL CONNECTOR (BETA) (id 01000033)
	
	  Checking queue
	  /O=MICROSOFT/OU=ALPHA/CN=CONFIGURATION/CN=SERVERS/CN=BETA/CN=MICROSOFT
	  DXA
	  (id 0100005A)
	
	MORE INFORMATION
	================
	
	To reconstruct a connector queue:
	
	CAUTION: This procedure is comparable to performing an MTAWIPE and should only be
	used under the supervision of Microsoft Technical Support.
	
	In the following example, the Microsoft Mail connector queue Db000033.dat is
	being removed.
	
	1. Identify the problem queue (.dat file)
	
	2. Rename or move the problem file.
	
	3. Run Mtacheck. Information similar to the following will scroll on your
	  screen:
	
	     Checking queue XAPIWRKQ (id 01000020)
	
	     Checking queue OOFINFOQ (id 01000025)
	
	     Checking queue REFDATQ (id 01000026)
	
	     Checking queue MTAWORKQ (id 0100002B)
	
	     Checking queue
	     /O=MICROSOFT/OU=SPICEMAN/CN=CONFIGURATION/CN=CONNECTIONS/CN=MS MAIL
	     CONNECTOR (CHILEDEARBOL) (id 01000033)
	
	     Checking queue
	     /O=MICROSOFT/OU=SPICEMAN/CN=CONFIGURATION/CN=CONNECTIONS/CN=INTERNET
	     MAIL CONNECTOR (CHILEDEARBOL) (id 0100005C)
	
	     Queue
	     /O=MICROSOFT/OU=SPICEMAN/CN=CONFIGURATION/CN=CONNECTIONS/CN=INTERNET
	     MAIL CONNECTOR (CHILEDEARBOL) required reconstruction.
	     0 objects recovered to the queue.
	
	     Queue /O=MICROSOFT/OU=SPICEMAN/CN=CONFIGURATION/CN=CONNECTIONS/CN=MS
	     MAIL CONNECTOR (CHILEDEARBOL) required reconstruction.
	     0 objects recovered to the queue.
	
	     Starting garbage collection of orphaned objects
	
	     Database repaired, some data may have been lost.
	     - 2 queue(s) required repair out of 6 detected (33%).
	     - 0 object(s) damaged out of 34 detected (0%).
	
	  It is possible to also receive the following error message at the end of the
	  log, which indicates that one or more of the core files in the
	  Exchsrvr\mtadata directory is corrupt (Db000001.dat - Db000026.dat)
	
	  Some objects are missing from the Boot Environment, please reload missing
	  files from the BOOTENV directory on the CD.
	
	  Database contains serious errors and cannot be automatically repaired.
	
	  NOTE: The Microsoft Mail Connector (beta) required reconstruction and the
	  final statement indicates that the "Database contains serious errors and
	  cannot be automatically repaired."
	
	4. Run MTACHECK a second time. Note the output displayed. It should be similar
	  to the following.
	
	     Checking queue XAPIWRKQ (id 01000020)
	
	     Checking queue OOFINFOQ (id 01000025)
	
	     Checking queue REFDATQ (id 01000026)
	
	     Checking queue MTAWORKQ (id 0100002B)
	
	     Checking queue
	     /O=MICROSOFT/OU=ALPHA/CN=CONFIGURATION/CN=CONNECTIONS/CN=INTERNET
	     MAIL CONNECTOR (BETA) (id 0100004F)
	
	     Checking queue
	     /O=MICROSOFT/OU=ALPHA/CN=CONFIGURATION/CN=CONNECTIONS/CN=MS
	     MAIL CONNECTOR (BETA) (id 01000033)
	
	     Checking queue
	     /O=MICROSOFT/OU=ALPHA/CN=CONFIGURATION/CN=SERVERS/CN=BETA/ 
	     CN=MICROSOFT DXA
	     (id 0100005A)
	
	     Starting object integrity checks
	     Checking object 03000002 - OK, on queue 01000026
	     Checking object 0A000003 - OK, on queue 01000020
	     Checking object 0B000004 - OK, on queue 01000020
	     Checking object 0B000005 - OK, on queue 01000020
	     Checking object 0C000006 - OK, on queue 01000020
	     Checking object 0C000007 - OK, on queue 01000020
	     Checking object 06000008 - OK, on queue 01000020
	     Checking object 06000009 - OK, on queue 01000020
	     Checking object 0600000A - OK, on queue 01000020
	     Checking object 0600000B - OK, on queue 01000020
	     Checking object 0600000C - OK, on queue 01000020
	     Checking object 0600000D - OK, on queue 01000020
	     Checking object 0600000E - OK, on queue 01000020
	     Checking object 0600000F - OK, on queue 01000020
	     Checking object 06000010 - OK, on queue 01000020
	     Checking object 06000011 - OK, on queue 01000020
	     Checking object 06000012 - OK, on queue 01000020
	     Checking object 06000013 - OK, on queue 01000020
	     Checking object 06000014 - OK, on queue 01000020
	     Checking object 06000015 - OK, on queue 01000020
	     Checking object 09000016 - OK, on queue 01000020
	     Checking object 09000017 - OK, on queue 01000020
	     Checking object 09000018 - OK, on queue 01000020
	     Checking object 09000019 - OK, on queue 01000020
	     Checking object 0900001A - OK, on queue 01000020
	     Checking object 0900001B - OK, on queue 01000020
	     Checking object 0600001C - OK, on queue 01000020
	     Checking object 0600001D - OK, on queue 01000020
	     Checking object 0600001E - OK, on queue 01000020
	     Checking object 0600001F - OK, on queue 01000020
	     Checking object 06000021 - OK, on queue 01000020
	     Checking object 06000022 - OK, on queue 01000020
	     Checking object 06000023 - OK, on queue 01000025
	     Checking object 09000024 - OK, on queue 01000025
	     Checking object 0600002F - OK, on queue 0100002B
	     Checking object 06000036 - and data object 0600002F...OK.
	     OK, on queue 0100002B
	     Checking object 0600003A - OK, on queue 0100002B
	     Checking object 06000047 - and data object 0600003A...OK.
	     OK, on queue 0100002B
	
	     Starting garbage collection of orphaned objects
	
	     Database clean, no errors detected.
	
	  Observe that the queue for the Microsoft Mail Connector has been reconstructed
	  and that there are no errors detected.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
