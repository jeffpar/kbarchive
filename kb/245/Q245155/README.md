---
layout: page
title: "Q245155: XFOR: Error Message: Extension 'lsntscp0' Could Not Be Loaded"
permalink: kb/245/Q245155/
---

## Q245155: XFOR: Error Message: Extension 'lsntscp0' Could Not Be Loaded

	Article: Q245155
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 19-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to access the Microsoft Exchange Connector for Lotus Notes you may
	the receive following error message:
	
	  Extension 'lsntscp0' could not be loaded
	
	  An error occurred during replication. Unable to find the extension .DLL. file
	  with the correct version number. To view details of the error, see the
	  application event log in the Windows NT Event Viewer on the Microsoft
	  Exchange Server computer.
	
	  Microsoft Exchange Administrator
	  ID no c1030ad1
	
	CAUSE
	=====
	
	This is error message can occur if there is a mismatch of version number
	information on the Lsntscp0.dll file.
	
	To determine if this is the cause:
	
	1. In the Microsoft Exchange Server Administrator program, click to expand the
	  Organization object, click to expand the Site object, and then click the
	  Configuration container for the Exchange Notes Connector.
	
	2. Click Add-ins, click Extension, and then click the General tab to find the
	  version number that the Exchange Server Administrator program specifies for
	  the Lsntscp0.dll file.
	
	3. Open the Exchsrvr\Addins\Lsntscp0\I386 folder and find the version number of
	  the Lsntscp0.dll file.
	
	If the version numbers that you find are different, you are experiencing the
	issue that this article deals with.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	- Use the Lsntscp0.dll file that has the version number that is specified in
	  the Exchange Server Administrator program to replace the Lsntscp0.dll file in
	  the Exchsrvr\Addins\Lsntscp0\I386 folder.
	
	-or-
	
	- Edit the Lsntscp0.dll file version number that is specified in the Exchange
	  Server Administrator program by using raw mode.
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	  1. Start the Exchange Server Administrator program in raw mode by typing the
	     following at a command prompt:
	
	  c:\exchsrvr\bin\admin /r
	
	  2. Click to expand the Organization object, click to expand the Site object,
	     click the Configuration container, click Add-ins, and then click Extension
	     for the Exchange Notes Connector.
	
	  3. On the File menu, click Raw Properties, and then click File Version.
	
	  4. Click Editor, click File Version, and then modify the file version number
	     to match the version number of the Lsntscp0.dll file that is located in
	     the Exchsrvr\Addins\Lsntscp0\I386 folder.
	
	  5. Make sure that you click Set before you quit the Exchange Server
	     Administrator program in raw mode.
	
	Additional query words: Extension, lsntscp0, Lotus Notes
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
