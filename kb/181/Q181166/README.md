---
layout: page
title: "Q181166: XFOR: Missing Attachments When Sending to Notes Users"
permalink: kb/181/Q181166/
---

## Q181166: XFOR: Missing Attachments When Sending to Notes Users

	Article: Q181166
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Linkage Notes Connector for Microsoft Exchange Server to send
	messages with attachments to Lotus Notes users, the attachment is either missing
	or misplaced when the message is viewed by the Lotus Notes user.
	
	CAUSE
	=====
	
	This problem is related to a parameter setting in the Linkage.ini file called
	NOTESLINKS. The NOTESLINKS parameter needs to be set to NOTESLINKS=RTF.
	
	WORKAROUND
	==========
	
	To correct the problem, set the NOTESLINKS parameter to NOTESLINKS=RTF by
	performing the following steps:
	
	1. In Control Panel, click the Services icon.
	
	2. Stop the Linkage Connector for Lotus Notes Service.
	
	3. In the LinkAge Software V3.2 program group, select Linkage.ini.
	
	4. Search for [LME-NOTES].
	
	5. Under the LME-NOTES section, find the entry titled NOTESLINKS.
	
	6. Remove the semicolon at the beginning of the line.
	
	7. Change the NOTESLINKS entry to NOTESLINKS=RTF.
	
	8. Save the Linkage.ini file.
	
	9. In Control Panel Services, start the LinkAge Connector for Lotus Notes
	  Service.
	
	MORE INFORMATION
	================
	
	For more information on the NOTESLINKS parameter, refer to the LinkAge.ini Help
	file located in the LinkAge Software V3.2 program group.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
