---
layout: page
title: "Q175482: XFOR: Populating First and Last Name for Dirsync'd MS Mail"
permalink: /kb/175/Q175482/
---

## Q175482: XFOR: Populating First and Last Name for Dirsync'd MS Mail

	Article: Q175482
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The First name or Last name fields of custom recipients for Microsoft Mail for
	PC Users users are not exchanged by directory synchronization (dirsync) by
	default. Consequently, any naming rules based on the Surname (Last name) or
	Given name (First name) will not be followed.
	
	To populate the First name and Last name fields for MS Mail custom recipients for
	Exchange Server user properties, follow the three steps outlined in the
	workaround section.
	
	MORE INFORMATION
	================
	
	1. Set up a template file in MS Mail. To do this:
	  a. Create a text file named Admin.tpl in the \Maildata\Tpl directory.
	
	  b. In that file, create the following entries:
	
	           Surname:~17~10~ULP~Last~
	           Given Name:~17~10~ULP~First~
	    
	
	     For an in-depth explanation of these fields, refer to the MS Mail
	     Administrator guide.
	
	  c. After the template file is made, start the MS Mail Administrator program.
	
	  d. Modify each MS Mail account to enter new template information.
	
	  e. Enable "Send local template information" under Config\Dirsync\
	     Requestor\Options.
	
	2. Set up incoming template definitions on the Exchange Server Directory
	  Synchronization object.
	
	  a. In the Configuration container, select Servers\Server Name\ Directory
	     Synchronization\Incoming Templates, and then click New .
	
	  b. In the "Map the string" field, enter: Given Name: (include the colon).
	
	  c. In the "Mapped to" field, select from the list: Given name, and click OK.
	
	  d. Click New again, and in the "Map this String" area type: Surname: (include
	     the colon).
	
	  e. In the "Mapped to" field, select from the list: Surname.
	
	  NOTE: Be sure to include the colon after each string entry after Surname and
	  the Given name.
	
	3. Perform manual or automatic directory synchronization between MS Mail and
	  Exchange Server. Existing MS Mail custom recipient addresses will be replaced
	  with updated template information.
	
	After the First and Last name fields have been populated, naming rules based on
	Surname and Given names can be applied for custom recipients.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
