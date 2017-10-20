---
layout: page
title: "Q170516: Microsoft Exchange Client Unable to Print Message w/ Attachment"
permalink: /kb/170/Q170516/
---

## Q170516: Microsoft Exchange Client Unable to Print Message w/ Attachment

{% raw %}

	Article: Q170516
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbprint kbuikbfixlist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user chooses to print a mail message with a file attachment, the user may
	optionally choose to print the attachment as well. In cases where the user
	chooses to print the attachment, and the application responsible for printing
	the attachment is running, the file attachment may not print properly.
	
	The user may see a message such as this:
	
	  Microsoft WordErr=1078
	  This file could not be found.(C:\temp\document.doc)
	
	CAUSE
	=====
	
	On computers running Windows NT 3.51, the Microsoft Exchange client calls a
	Windows NT system function that is responsible for printing the file attachment
	using whatever application has registered itself to handle this document (based
	on the attachment's file extension).
	
	
	The Microsoft Exchange client saves the document attachment in a temporary
	directory and calls the Windows NT system function, passing it the path to the
	document to print.
	
	If the application necessary for printing the document is not running, the
	following operations are performed by the system function:
	
	1. The application necessary to print the document is started.
	
	2. The application is passed information on the command-line regarding the name
	  of the file to print.
	
	3. The application is closed after printing is complete.
	
	If the application necessary for printing the document is currently running, the
	following operations are performed by the system function:
	
	1. The system function initiates a Windows DDE conversation with the
	  application.
	
	2. The application is asked (through DDE) to open, print, and close the
	  document.
	
	After the system call is performed, the Microsoft Exchange client deletes the
	temporary file created for printing the attachment.
	
	A race condition exists where, in the latter case (using DDE), the temporary file
	is deleted BEFORE the application has had an opportunity to print the document,
	which usually results in the application complaining that the file is missing.
	
	WORKAROUND
	==========
	
	Close the application(s) that will be used to print the file attachments before
	beginning the print operation.
	
	STATUS
	======
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: SHELL32 printing print failure
	
	======================================================================
	Keywords          : kbprint kbui kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
