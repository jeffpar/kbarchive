---
layout: page
title: "Q197308: How to Obtain a Copy of a Notes Database Design Only?"
permalink: /kb/197/Q197308/
---

## Q197308: How to Obtain a Copy of a Notes Database Design Only?

	Article: Q197308
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There may be requirements for Microsoft Support Engineers to obtain a copy of
	your Lotus Notes database for local reproduction of problems in working with
	some Microsoft products. For example, Application Conversion Assistant and Lotus
	Notes Connector. However, for many reasons, there is generally no need for you
	to send the data in the database. This article describes the steps needed to get
	the stripped down copy of the database. The article assumes a Notes R4.x client
	as the interface.
	
	MORE INFORMATION
	================
	
	To get the Notes database without the data, perform the following steps:
	
	1. Start the Lotus Notes client.
	
	2. Open the relevant Notes database.
	
	3. On the File menu, click Database - New Copy.
	
	4. The Server location can stay at the default "Local" location. Look for the
	  Copy section in the dialog box.
	
	5. Change the default selection from Database design and documents to Database
	  design only.
	
	6. Also clear the Access Control List option, otherwise you will have problems
	  reading the database later. Do not select the Create Full Index option.
	
	7. Make sure you know where the database is being created. If you are trying to
	  make a second copy of a local database, you will have to select a different
	  location for the database, or change the file name. By default, Notes will
	  give the same filename, and when it tries to copy the database, it will error
	  out indicating that a copy exists already.
	
	Additional query words: Notes database design, replica, copy
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
