---
layout: page
title: "Q166612: XADM: Migration from Collabra to MS Exchange Fails"
permalink: kb/166/Q166612/
---

## Q166612: XADM: Migration from Collabra to MS Exchange Fails

	Article: Q166612
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbusage
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The migration program stops responding (hangs) and creates a list of Event Log
	error messages when it tries to migrate a Word Document from Collabra to a
	Microsoft Exchange public folder. It always fails when the migration program
	reaches a .doc attachment. The beta version of the same migration program does
	not hang. It ignores all Word documents and therefore does not try to migrate
	them.
	
	  Event ID: 10002
	  Source: MSExchangeMig
	  Description:
	  Migration begins.
	
	  Event ID: 10003
	  Source: MSExchangeMig
	  Description:
	  The 'Extract' of mail from 'Collabra Share -
	     \\path to your forum\forum\'
	  completed with the following results:
	
	  Start Time: 16:51:29
	  Elapsed Time: 00:00:31
	
	  Forums created:
	  Successes:   1
	  Warnings:    0
	  Errors:      0
	  E-mail Messages Migrated:
	     Total:      2
	     Successes:  2
	     Warnings:   0
	     Errors:     0
	
	  Event ID: 8048
	  Source: MSExchangeMig
	  Type: Error
	  Description:
	  Mail Message Section C:\Collabra\Migration\Collabra 007\00000001.SEC
	  Line Number = 3 Attachement File Name is Absent - Required for
	  Attachement  %4.
	
	  Event ID: 8005
	  Source: MSExchangeMig
	  Type: Error
	  Description:
	  Error occurred in the secondary file, Some of the data may have been
	  lost!
	  Filename : C:\Collabra\Migration\Collabra 007\00000001.SEC <14225>
	
	  Event ID: 8059
	  Source: MSExchangeMig
	  Type: Error
	  Description:
	  Parser Error C:\Collabra\Migration\Collabra 007\00000001.SEC
	  Line Number = 3
	  Invalid Secondary Section Heading Details: Error encountered in reading
	  the ATTACHEMENT Header.
	
	  Event ID: 8054
	  Source: MSExchangeMig
	  Type: Error
	  Description:
	  Parser Error C:\Collabra\Migration\Collabra 007\00000001.PRI
	  Line Number = 6
	  Error in reading Secondary file Details : The Error code was 0x8042063C.
	
	  Event ID: 8094
	  Source: MSExchangeMig
	  Type: Error
	  Description:
	  Parser Error C:\Collabra\Migration\Collabra 007\00000001.PRI
	  Line Number = 6
	  Internal Parser Error.Details : The Error code was 0x80420633.
	
	  Event ID: 8095
	  Source: MSExchangeMig
	  Type: Error
	  Description:
	  Parser Error C:\Collabra\Migration\Collabra 007\00000001.PRI
	  Line Number = 6
	  Error occurred in the processing of the line.Details : The Error code
	  was 0x80420664.
	
	  Event ID:   8001
	  Source:     MSExchangeMig
	  Description:
	  While migrating,
	    0 Message-Operations encountered errors
	    0 Account-Creation operations encountered errors
	    0 Pab-Creation operations encountered errors
	    1 Messages were created successfully
	    1 Accounts were created successfully
	    0 Pabs were created successfully.
	
	CAUSE
	=====
	
	Migration Wizard may hang while migrating Collabra Share forums with Word
	attachments. If it doesn't hang, the attachment causes an error on import, and
	is not migrated. Collabra treats Word attachments as regular attachments, but
	uses a feature of the file format that is associated with OLE presentation data.
	This data occurs where other attachment data is expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kb3rdparty kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	
