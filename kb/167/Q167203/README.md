---
layout: page
title: "Q167203: XADM: Directory Import Error - Event ID 286"
permalink: /kb/167/Q167203/
---

## Q167203: XADM: Directory Import Error - Event ID 286

	Article: Q167203
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Exchange Server Administrator program, when you import a
	directory (on the Tools menu, click Directory Import), errors may occur, and the
	following event ID may be logged in the Event Viewer:
	
	  Event ID:   286
	  Source:  MSExchangeDSImp
	  Type: Error
	  Category:   None
	
	  Description: Unable to create object /o=Volcano Coffee/ou=North
	  America/cn=Recipients/cn=test/cn=test1 because one or more objects in
	  the directory path
	  /o=Volcano Coffee/ou=North America/cn=Recipients/cn=test
	  do not exist.
	
	CAUSE
	=====
	
	The error occurs when the Exchange Server computer to which the directory needs
	to be imported has a Recipients container that is not identical to the
	Recipients container of the Exchange Server computer from which the directory
	was exported.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- In Directory Import dialog box, select Always Use Selected Container. All
	  directory objects will be imported into the selected container.
	
	- Create a recipients container identical to the Microsoft Exchange Server from
	  which the directory was exported. Make sure to use the same directory name,
	  not necessarily the same display name, in creating the identical recipients
	  container. In the above example, create "test" container under "Recipients"
	  container.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
