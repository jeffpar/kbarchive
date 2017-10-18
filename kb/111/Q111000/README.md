---
layout: page
title: "Q111000: PC WRmt: Summary List of Mail Remote for Windows 3.2 Bugs"
permalink: kb/111/Q111000/
---

## Q111000: PC WRmt: Summary List of Mail Remote for Windows 3.2 Bugs

	Article: Q111000
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	The following is a list of bugs confirmed in version 3.2 of Microsoft Mail
	Remote for Windows. This is not a comprehensive list; this list is current
	as of January 1, 1994.
	
	For more information on the bug listed, query in the Microsoft Knowledge
	Base on the article ID or the bug number.
	
	BUG LISTING FOR VERSION 3.2
	---------------------------
	
	- Keyboard Problems in Select Headers Dialog Box
	
	- Null Modem Script Displays Phone Number
	
	- Unsendable Messages Counted Wrong
	
	- Setup May Fail If Program Manager Not Running
	
	- Incorrect Sorting by Subject
	
	- MAPI Ignores Scheduled Connections
	
	- Err Msg: Mail Remote Driver Not Compatible...
	
	- Cannot Create New .MMF If Old Location Unavailable
	
	- Problems with Extended Characters
	
	Keyboard Problems in Select Headers Dialog Box
	----------------------------------------------
	
	  Q97071
	
	In version 3.2 of Microsoft Mail Remote for Windows, interacting with the
	headers dialog box without a mouse can be awkward. For remote users, this
	can occur frequently.
	
	Null Modem Script Displays Phone Number
	---------------------------------------
	
	  Q97897
	
	
	When using version 3.2 of Microsoft Mail Remote for Windows and connecting
	with a null Modem script, the Connection dialog shows Dialing and then
	displays a phone number.
	
	This is confusing and misleading, because no phone number is dialed while
	using a null modem connection.
	
	Unsendable Messages Counted Wrong
	---------------------------------
	
	  Q98013
	
	If there are unsendable messages waiting in the Outbox for version
	3.2 of Microsoft Mail Remote for Windows, when you choose Connect
	Now from the View menu, the messages are counted as messages waiting to
	be sent, even though they are not waiting to be sent.
	
	Setup May Fail If Program Manager Not Running
	---------------------------------------------
	
	  Q98044
	
	If the Microsoft Windows Program Manager is not running when you start
	the Setup program for version 3.2 of Microsoft Mail Remote for Windows,
	the Setup program attempts to build the Program Manager group but cannot.
	The following error message is generated:
	
	  Cannot establish DDE link to Program Manager - Retry/Cancel.
	
	
	After you select Cancel, a message appears stating that Mail is not
	installed correctly and will not function. After you select Exit
	Install, a sharing violation occurs.
	
	Mail Remote for Windows does run correctly after installation.
	
	Incorrect Sorting by Subject
	----------------------------
	
	  Q99116
	
	When sorting messages by Subject (using the View menu) in version 3.2 of
	Microsoft Mail Remote for Windows, the RE: and FW: header prefixes are not
	ignored, as they are by Microsoft Mail for Windows. This causes all replies
	and forwards to be sorted together.
	
	The sort should ignore the RE: and FW: prefixes so that messages are truly
	sorted by subject.
	
	MAPI Ignores Scheduled Connections
	----------------------------------
	
	  Q100458
	
	When a message is sent from an application that uses Simple MAPI (such
	as Microsoft Word version 2.0 for Windows), and you have version 3.2
	of Microsoft Mail Remote for Windows installed but not running, the
	message is always sent immediately, despite the Mail Remote for Windows
	connection-scheduling feature that tells Mail to wait until the scheduled
	time.
	
	Err Msg: Mail Remote Driver Not Compatible...
	---------------------------------------------
	
	  Q101367
	
	In version 3.2 of Microsoft Mail Remote for Windows, with the option
	"Connect on Exit of Mail" selected, the following incorrect error message
	may appear if you do not have mail to send in your Outbox when exiting:
	
	  This Microsoft Mail Remote driver is not compatible with your messaging
	  system.
	
	
	This message is incorrect and misleading.
	
	If you have mail waiting in your Outbox, this error message does not
	appear.
	
	This problem is also documented in the README.TXT file under section
	2J. The README.TXT file is located on Disk 1.
	
	Cannot Create New .MMF If Old Location Unavailable
	--------------------------------------------------
	
	  Q103905
	
	Version 3.2 of Microsoft Mail Remote for Windows may return the following
	error message
	
	  Your message file could not be found
	
	  followed by:
	
	  Open Message File
	
	
	After the error message, even if you change to a different directory,
	Windows Remote Mail ignores the change to the directory and creates a
	new Mail message file (.MMF) in the directory listed on the
	OfflineMessages line of the MSMAIL.INI file.
	
	Problems with Extended Characters
	---------------------------------
	
	  Q105931
	
	With version 3.2 of Microsoft Mail Remote for Windows, if you include
	extended characters in a message and you save the message as a text
	file, the extended characters are translated to incorrect byte values.
	
	Additional query words: readme.txt
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
