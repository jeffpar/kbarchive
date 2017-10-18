---
layout: page
title: "Q231685: XCON: Corrupted Message in MTA DB Logs DB Server Errors"
permalink: kb/231/Q231685/
---

## Q231685: XCON: Corrupted Message in MTA DB Logs DB Server Errors

	Article: Q231685
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following Event IDs are logged in the application event log in the following
	sequence, and you may or may not be experiencing problems with your message
	transfer agent (MTA):
	
	  Event ID 2170
	  An MTA database server error was encountered while appending an attribute.
	  Called from MTA. Procedure: 359. Database error code: ODXOINIU - Object does
	  not exist. Object at fault: 06000034. Attribute identifier: 53. Value number:
	  1. Referenced object: 06000034 (00000000 => N/A). Referenced object error
	  2109. [DB Server SUBMIT 14 19] (14)
	
	  Event ID 2175
	  An MTA database server error was encountered while an attribute length. Called
	  from MTA. Procedure: 73. Database error code: ODXOINIU - Object does not
	  exist. Object at fault: 06000034. Attribute identifier: 10. Value number: 1.
	  Referenced object: 00000000 (00000000 => N/A). Referenced object error 0.
	  [DB Server SUBMIT 14 72] (14)
	
	  Event ID 105
	  An MTA database server error was encountered. [MTA SUBMIT 14 359] (14)
	
	  Event ID 2143
	  A fatal MTA database server error was encountered. Call Microsoft Technical
	  Support. Unrecoverable error: ODXOINIU - Object does not exist. About to
	  terminate. Called from MTA. Procedure 91. Object ID: 06000034. Attribute ID:
	  18. Attribute value number: 1. Referenced object: 00000000 (00000000 =>
	  N/A). Referenced object error 0. [1 DB Server DELIVER 7 101] (16)
	
	  Event ID 2173
	  An MTA database server error was encountered while deleting an attribute.
	  Called from MTA. Procedure: 91. Database error code: ODXOINIU - Object does
	  not exist. Object at fault: 06000034. Attribute identifier: 18. Value number:
	  1. [DB Server DELIVER 7 25] (14)
	
	  Event ID 2171
	  An MTA database server error was encountered while reading an attribute.
	  Called from MTA. Procedure: 88. Database error code: ODXOINIU - Object does
	  not exist. Object at fault: 06000034. Attribute identifier: 10. Value number:
	  1. Referenced object: 00000000 (00000000 => N/A). Referenced object error
	  0. [DB Server DELIVER 7 26] (14)
	
	  Event ID 2188
	  An MTA database server error was encountered while deleting an object. Called
	  from XAPI. Procedure 109. Database error code: ODXOINIU - Object does not
	  exist. Object at fault: 06000034. [DB Server DELIVER 7 9]1 109 ODXOINIU -
	  Object does not exist 06000034 DB Server DELIVER 7] (14)
	
	  Event ID 3128
	  An MTA database server error was encountered. [XAPI DELIVER 7 44] (14)
	
	  Event ID 2188
	  An MTA database server error was encountered while deleting an object. Called
	  from XAPI. Procedure 109. Database error code: ODXOINIU - Object does not
	  exist. Object at fault: 06000034. [DB Server DELIVER 7 9]1 109 ODXOINIU -
	  Object does not exist 06000034 DB Server DELIVER 7] (14)
	
	CAUSE
	=====
	
	When you analyze the application log and look at the details of all these Event
	IDs, it becomes obvious that "object at fault" in each Event ID is pointing to
	the same message object, a corrupted message. In the Event IDs above, this is
	the Db000034.dat file, which is located in the MTA database folder.
	
	RESOLUTION
	==========
	
	Even though the above Event IDs state the "Object does not exist," it may exist
	in the Mtadata folder. If the corrupted file (Db000034.dat in this example)
	still exists in the Mtadata folder:
	
	1. Stop the MTA service.
	
	2. Rename or remove this file from the Mtadata folder.
	
	3. Run the Mtacheck utility twice.
	
	4. Restart the MTA.
	
	If the message file does not exist in the Mtadata folder:
	
	1. Stop the MTA.
	
	2. Run Mtacheck twice.
	
	3. If Mtacheck registers that the MTA is clean, restart the MTA.
	
	MORE INFORMATION
	================
	
	The MTA should restart without a problem. At this point, there should be no
	database server error issues with the MTA unless another corrupted message hits
	the MTA, or there are some other issues with the MTA. If there are some other
	issues with the MTA, please follow the procedures for troubleshooting the MTA as
	mentioned in the following Microsoft Knowledge Base articles:
	
	  Q147704 XCON: Troubleshooting Tips for: Exchange MTA Not Starting
	
	  Q162384 XCON: How to Troubleshoot MTA Starting Failures
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
