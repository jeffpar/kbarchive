---
layout: page
title: "Q196838: XFOR: GroupWise Migration Event ID 4012"
permalink: kb/196/Q196838/
---

## Q196838: XFOR: GroupWise Migration Event ID 4012

	Article: Q196838
	Product(s): Microsoft Exchange
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you migrate GroupWise users into Exchange Server, you may receive the
	following error message:
	
	  One GroupWise user did not grant sufficient access rights to the
	  migration account.
	
	  The user name has been recorded in the application event log.
	
	When you review the application log, you find the following:
	
	  Event ID: 4012
	  Source:   MSExchangeMig
	  Type:     Error
	  Category: None
	
	  Description:
	  The following GroupWise users have not granted sufficient access rights
	  to the migration account.
	
	CAUSE
	=====
	
	The account being used to perform the migration does not have access to parse
	the migrated private mail messages on the Windows NT Server computer.
	
	WORKAROUND
	==========
	
	The account being used to migrate users must have permissions to access private
	messages. During the migration wizard configuration, a dialog box appears
	requiring a user ID. Enter the account that has permissions to the users'
	private messages, or enter the user ID of the actual migrated user.
	
	MORE INFORMATION
	================
	
	Documentation about migrating from Novell GroupWise can be found on the Exchange
	Server 5.0 CD under Migrate\DOCS\Gwise.doc. Chapter 10, page 212, describes the
	prerequisites of migrating GroupWise users.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
