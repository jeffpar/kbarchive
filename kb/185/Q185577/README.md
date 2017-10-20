---
layout: page
title: "Q185577: XADM: Error 1120 and 5000 When Starting Information Store"
permalink: /kb/185/Q185577/
---

## Q185577: XADM: Error 1120 and 5000 When Starting Information Store

{% raw %}

	Article: Q185577
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Information Store service in Microsoft Exchange Server may not start and the
	Server Specific Error 4294966746 occurs. Events 1120 and 5000 are recorded in
	the Event Log with MSExchangeIS as the source.
	
	CAUSE
	=====
	
	This behavior can occur when the Information Store stops abnormally and the
	Eseutil.exe hard repair option (/P) is run against the Priv.edb file to return
	it to a state in which it can be started. In addition, the previous transaction
	log files were deleted, as recommended in the Eseutil dialog box, but hard
	repair was not run against the Pub.edb file.
	
	At this point, the Priv.edb file is returned to a consistent state through the
	repair process, but the Pub.edb file is not. A consistent database does not
	require the presence of previous transaction log files to start, but an
	inconsistent one does.
	
	WORKAROUND
	==========
	
	Use either of the following solutions to resolve this behavior.
	
	Remove Pub.edb
	--------------
	
	Remove the Pub.edb file. This removes all public folder data on the server.
	
	IMPORTANT: If you choose to remove the Pub.edb file, rather than repair it, do
	not remove the Edb.log file that was just created during the previous startup
	attempt.
	
	That failure marks the Priv.edb file as inconsistent and Priv.edb requires the
	presence of its log file so that it can start successfully.
	
	If the Edb.log file is removed, the only way to return the Priv.edb file to a
	consistent state is to run the "eseutil /p" command again.
	
	Run Eseutil /p
	--------------
	
	Run the "eseutil /p" command (without the quotation marks) against the Pub.edb
	file.
	
	MORE INFORMATION
	================
	
	The symptoms described in this article also occur if Pub.edb is repaired, but
	Priv.edb is not.
	
	IMPORTANT: Note that using the Eseutil's hard repair functionality is a last
	resort option. Using that option may result in data loss if there is no current
	backup or if circular logging is enabled, thus preventing restoration of
	Exchange data to the time of failure. First try a soft recovery by using the
	eseutil /r command. If this does not work, try the eseutil /p command for a hard
	repair; this may be the best current alternative.
	
	In the application event log, a series of events similar to the following
	accompany this behavior:
	
	  Event ID: 100
	  Source: ESE97
	  Type: Information
	  Category: General
	  Description: MSExchangeIS ((<Process ID>) ) The database engine
	  <version> started.
	
	  Event ID: 108
	  Source: ESE97
	  Type: Information
	  Category: Logging/Recovery
	  Description: MSExchangeIS ((<Process ID>) ) The database engine is
	  initiating recovery steps.
	
	  Event ID: 109
	  Source: ESE97
	  Type: Information
	  Category: Logging/Recovery
	  Description: MSExchangeIS ((<Process ID>) ) The database engine is
	  replaying log file <exchsrvr>\MDBDATA\edb.log.
	
	  Event ID: 110
	  Source: ESE97
	  Type: Information
	  Cateogory: Logging/Recovery
	  Description: MSExchangeIS ((<Process ID>) ) The database engine has
	  successfully completed recovery steps.
	
	  Event ID: 1120
	  Source: MSExchangeIS
	  Type: Error
	  Category: General
	  Description: Error Database is in inconsistent state initializing the
	  Microsoft Exchange Server Information Store database.
	
	  Event ID: 5000
	  Source: MSExchangeIS
	  Type: Error
	  Category: General
	  Description: Unable to initialize the Microsoft Exchange Information
	  Store service. Error Database is in inconsistent state.
	
	A Microsoft Exchange Server database is considered consistent only after it has
	been shut down normally. At all other times, including during normal operation,
	there is a flag in the database marking it as inconsistent. Thus if the database
	service is terminated abnormally, Exchange Server knows on the next startup that
	something went wrong in the previous session. Exchange then initiates "soft
	recovery" steps to back out or commit necessary transactions to the database and
	restore its integrity.
	
	You can check a database for consistency with the following command:
	
	  eseutil /mh <database path and name> | more
	
	The State line in the screen output from this command may contain Consistent or
	Inconsistent.
	
	NOTE: Exchange 2000 Service Pack 2 and later, do not report the database state as
	"Consistent" or "Inconsistent" but as "Clean Shutdown" or "Dirty Shutdown." The
	meaning of "Clean Shutdown" is the same as "Consistent", and the meaning of
	"Dirty Shutdown" is the same as "Inconsistent".
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
