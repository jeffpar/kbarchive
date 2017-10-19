---
layout: page
title: "Q259182: XCLN: Error Msg: An Internal Support Function Returned an Error"
permalink: /kb/259/Q259182/
---

## Q259182: XCLN: Error Msg: An Internal Support Function Returned an Error

	Article: Q259182
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you set up an Outlook Address Book that uses a contacts public folder as a
	source, if a user opens the Address Book and selects a contacts address book
	from the list of Outlook Address Books, the following error message is
	displayed:
	
	  An internal support function returned an error.
	
	CAUSE
	=====
	
	This issue can occur if the user does not have Read permissions for the contacts
	folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, grant the user Read permissions for the contacts folder.
	
	MORE INFORMATION
	================
	
	Although public folders are visible by default, not all users have Read rights
	for all folders. Outlook allows you to set up a contacts folder as an address
	book if it is visible, but when a user who does not have Read rights to the
	folder tries to gain access to the folder, the error message in the "Symptoms"
	section of this article is displayed.
	
	
	Additional query words: OL97 OL98 OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
