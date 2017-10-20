---
layout: page
title: "Q107445: X400: X400GATE.EXE Version 3.2.17 Update"
permalink: /kb/107/Q107445/
---

## Q107445: X400: X400GATE.EXE Version 3.2.17 Update

{% raw %}

	Article: Q107445
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the X400GATE.EXE file that is included with
	version 3.2 of Microsoft Mail Gateway to X.400. The replacement file corrects a
	number of problems in the original X400GATE.EXE file.
	
	For complete information about obtaining and installing the X400GATE.EXE file,
	see the following sections:
	
	- To download the updated file
	
	- To replace your X.400 executable files
	
	MORE INFORMATION
	================
	
	This replacement file corrects the following problems:
	
	- Characters with diacritical marks (accents) are improperly encoded.
	
	- The encoded information type (EIT) for ISO-6937 is improperly encoded.
	
	- The gateway does not update the RECV.LOG file for messages received by the
	  gateway.
	
	- The gateway hangs if the subject line contains enough spaces (ASCII 32D or
	  20H) after the subject text to cause the total length to be 74 or more
	  characters.
	
	- The gateway hangs if a user forwards or replies to a message that was
	  previously returned by the X.400 gateway (usually because of a bad address).
	  This forward or reply message adds characters to the subject line, changing
	  the total length to 74 or more characters, with spaces in the seventy-fourth
	  and following positions.
	
	- The gateway tp4 stack incorrectly replies to a recovery packet and displays
	  "ERROR: Pconnect..."
	
	- The gateway hangs after it processes two messages that have large
	  distribution lists.
	
	- The gateway generates an "ERROR 58" message when it transmits mail or
	  attachments to an ISODE Openpath user, even though the user successfully
	  receives the message.
	
	- The gateway generates invalid minor synchronization points, causing an "ERROR
	  3." If debug mode is used, the error "DEBUG (tp4_recv): connection x:
	  tp_receive() failed" occurs.
	
	- The gateway begins to create nondelivery reports. If the External Mail
	  program tries to deliver these reports, the following error occurs in the
	  SYSTEM.LOG file: "Message was not delivered: routing file was corrupted."
	
	- The gateway generates a free-form name longer than the 64 character limit
	  specified in NIST, causing the message to be rejected by the receiving
	  message transfer agent (MTA).
	
	- The gateway runs out of memory when you use ISO6937 as message body text. The
	  gateway then misplaces subsequent messages, reporting the error "ERROR 3
	  (AttachP2): ISO6937 conversion failed."
	
	- If the gateway is configured to use a checkpoint size of 10, it may display
	  the error "DEBUG (T4 SEND): CONNECTION 32: TP SEND() FAILED: 3." It then will
	  not process any more messages.
	
	- If a large (4000 or more names) custom address map exists, the gateway may
	  process messages slowly.
	
	
	- Read receipts and delivery notifications may be sent to the incorrect address
	  by Softswitch EMX if the unique identifier the Microsoft Mail Gateway to
	  X.400 places on each message is not unique.
	
	
	- Microsoft Mail Gateway to X.400 does not successfully extract outbound mail
	  from .MAI files.
	
	
	- Incoming nondelivery reports may cause the following error:
	
	  ERROR 4 (converting X.400 delivery report): Decoding X.400 Message
	
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload X400ga.exe now
	  (http://download.microsoft.com/download/pcmail/Update/3.2.17/W9XNT4/EN-US/X400ga.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download X400GA.EXE to a clean directory, run it (by typing "x400ga"
	(without the quotation marks) at the MS-DOS command prompt) to extract the
	contents of the file. You should receive the following files:
	
	  X400GATE.EXE (515,860 bytes, dated 04/18/95, 9:04 A.M.)
	  README.TXT (5,714 bytes, dated 10/28/94, 8:30 P.M.)
	  XREAD.TXT
	
	(The README.TXT file included with this update is a revised version of the readme
	shipped on the gateway disk.)
	
	To replace your X.400 executable file
	-------------------------------------
	
	At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>\x400gate.exe <destination> " (without the quotation
	  marks)
	
	where <path> is the drive and directory where you ran the self- extracting
	X400GA.EXE file and <destination> is the drive and directory where your
	X.400 executable files currently reside. For example, if the X.400 executable
	files are located in the MAILEXE directory on drive C and you ran the
	self-extracting file from the TEST directory on drive D, type the following
	command:
	
	  " copy d:\test\x400gate.exe c:\mailexe " (without the quotation marks)
	
	NOTE: The X400GATE.EXE file typically resides on the postoffice server in the
	Mail executables directory as well as on the machine where the gateway is
	running. Make sure all copies are updated appropriately.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
