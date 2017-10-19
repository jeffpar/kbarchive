---
layout: page
title: "Q99164: Mac Srv: Serial Numbers in Retail and Upgrade Servers"
permalink: /kb/099/Q99164/
---

## Q99164: Mac Srv: Serial Numbers in Retail and Upgrade Servers

	Article: Q99164
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1,3.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1, 3.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions 3.0 and 3.1 of Microsoft Mail for AppleTalk Networks provide two
	different kinds of servers: retail and upgrade. Both versions are identical
	except that the retail version of the server contains a unique serial number and
	has the ability to create a new data file. The upgrade server does not contain a
	serial number and does not have the ability to create a new data file. Both
	servers, however, can upgrade an existing data file.
	
	MORE INFORMATION
	================
	
	When installing Microsoft Mail, the Microsoft Mail Server program checks for a
	valid Microsoft Mail Data file in the System Folder.
	
	If such a file does not exist, and if you are using a retail version of the
	server program, the installation program creates a new Microsoft Mail Data file
	and assigns the serial number of the Mail Server program. You cannot change the
	serial number of a mail server once the number has been written to the data
	file.
	
	If a data file does not exist, and if you are using upgrade version of the server
	program, the following message appears:
	
	  The Microsoft Mail Server could not be loaded because Update servers may only
	  be used with an existing "Microsoft Mail Data" file.
	
	In both cases (if you are using either a retail version or an upgrade version),
	if a data file already exists, the Microsoft Mail Server will update its own
	internal serial number using the information contained within the data file.
	
	Because Microsoft Mail uses the serial number contained within the data file when
	it communicates with other servers, it is possible to replace the Microsoft Mail
	Server file and maintain serial number integrity.
	
	NOTE: The Microsoft Mail server must be an extension in order to get a serial
	number. If the Microsoft Mail Server is running as an application, it will use
	the Microsoft Mail Data file's serial number for operation, but it will not
	change its internal serial number to match. This is important if the Microsoft
	Mail Server is an upgrade because it will not allow for a new datafile to be
	created at a later date.
	
	
	Additional query words: 3.00 3.10 3.10a datafile
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310 kbMailATN310a
	Version           : WINDOWS:3.0,3.1,3.1a
	
	=============================================================================
	
