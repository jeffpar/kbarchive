---
layout: page
title: "Q156047: &quot;A Temporary File...&quot; Error Occurs Opening Attachment"
permalink: kb/156/Q156047/
---

## Q156047: &quot;A Temporary File...&quot; Error Occurs Opening Attachment

	Article: Q156047
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 23-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when opening an attachment in a
	e-mail message:
	
	  A temporary file needed for this action could not be created.
	
	CAUSE
	=====
	
	This error may occur if the Temp directory specified by the SET TEMP= statement
	does not exist on the hard disk drive or is set to an incorrect directory.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps for Win9.x clients:
	
	1. Verify that the Autoexec.bat file contains the following line: SET
	  TEMP=<tempdir> where <tempdir> is the name of a valid directory
	  on your hard disk drive.
	
	2. Verify that the <tempdir> directory specified in Step 1 exists. If it
	  does not exist, create the directory.
	
	3. Make sure there is enough disk space available on the hard disk to store the
	  attachment.
	
	To work around this problem for Windows NT clients, perform the following steps:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click System.
	
	2. Click the Environment tab.
	
	3. Check the Temp Variable in the User Variables section. If that directory does
	  not exist, create the directory.
	
	4. Make sure there is enough disk space available on the hard disk to store the
	  attachment.
	
	MORE INFORMATION
	================
	
	When you open an attachment in Exchange Server, the file is stored in the
	directory specified by the SET TEMP= statement. If this directory does not
	exist, or there is not enough available disk space on the hard drive, Exchange
	Server may have problems opening the attachment.
	
	
	Additional query words: double click file icon
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
