---
layout: page
title: "Q200904: XCLN: Messages with None as Received Date are Not Archived"
permalink: kb/200/Q200904/
---

## Q200904: XCLN: Messages with None as Received Date are Not Archived

	Article: Q200904
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Outlook 97, messages may have a Received time of None, instead of
	the usual date and time values.
	
	CAUSE
	=====
	
	This behavior may occur if the message was sent while working with a Personal
	Folder (PST) file as the primary information store or while working offline with
	an Offline Folder (OST) file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Outlook 97.
	
	MORE INFORMATION
	================
	
	If the message is moved into the Sent Items folder, it will be properly
	archived. Messages with None as Received Date that are moved to any folder other
	than the Sent Items folder will not be archived.
	For more information on messages displayed with a received time of "none", please
	see the following Microsoft Knowledge Base article:
	
	  Q174029 XCLN: Received Time Shows as None in Outlook Client
	
	Additional query words: 8.0 8.01 8.02 8.03
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : :8.0,8.01,8.02,8.03
	Issue type        : kbbug
	
	=============================================================================
	
