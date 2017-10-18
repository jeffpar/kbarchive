---
layout: page
title: "Q134377: CONN: How to Reset the Mail Queue for Mail Connection 1.0b"
permalink: kb/134/Q134377/
---

## Q134377: CONN: How to Reset the Mail Queue for Mail Connection 1.0b

	Article: Q134377
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection Gateway, version 1.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article covers the steps necessary to reset the mailbag for version 1.0b of
	the Microsoft Mail Connection Gateway.
	
	Notes:
	
	- The following steps should be done if there is corruption or if the file is
	  missing.
	
	- Evidence of corruption include: a mail message that is being sent multiple
	  times from PCMail to AppleTalk Mail, or messages that cannot be deleted from
	  the MSMAIL queue.
	
	For additional information regarding these problems, and prior to following the
	procedures of this article, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q119022 Message Redelivered Repeatedly to Mac Clients
	
	MORE INFORMATION
	================
	
	Prior to recreating the MBG and KEY files for the queue, the administrator
	should return mail from the MSMAIL queue.
	
	1. Stop the Connection Gateway.
	
	2. Run the Mail for PC Networks Administrator's program (ADMIN.EXE).
	
	3. Select the Queue option, and select MSMAIL from the list of network names.
	
	  This will display messages that are in the queue.
	
	4. Select the Return option, and use the spacebar to mark each message in the
	  queue.
	
	5. When you are finished marking the messages, press the RETURN key, and answer
	  Yes to the Return Selected Times? prompt.
	
	  NOTE: If more than fifty items are in the mailbag, repeat the procedure.
	
	To recreate the queue, it is necessary to find the number of the queue for the
	Connection Gateway. This number is kept in the NETWORK.GLB file on the
	postoffice.
	
	1. Copy the NETWORK.GLB file to a local drive.
	
	  WARNING! Be careful to work with the correct drive as the NETWORK.GLB file
	  from one postoffice will not be the same as another.
	
	2. Type out the NETWORK.GLB file from the MS-DOS prompt (use the MORE pipe if
	  this is a large file and scrolls off the screen).
	
	  Notes:
	
	   - The network names will be followed by a short blank space and an eight
	     digit number.
	
	   - The MSMAIL gateway name will be followed by a long blank (greater than 20
	     spaces) prior to an eight digit number.
	
	   - The eight digit number following the long space is the queue number for
	     the MSMAIL gateway.
	
	  Write down the MSMAIL gateway number.
	
	  (As an added check, look in the XTN directory, and confirm that there is NOT
	  an XTN file with this number.)
	
	  The number obtained from the last step is an eight digit hex number
	  <HEXID>. To reset the gateway queue involves resetting two files: the
	  <HEXID>.MBG and the <HEXID>.KEY.
	
	
	NOTE: To allow for recovery, make a copy of the <HEXID>.MBG and
	<HEXID>.KEY files prior to resetting them.
	
	To create new .MBG and .KEY files:
	
	1. From the Administrator program (ADMIN.EXE) menu, choose External-Admin,
	  Create.
	
	2. Create a new postoffice on an existing network, and then quit ADMIN.EXE.
	
	3. Change to the MBG directory of the postoffice, and look for a 0-byte .MBG
	  file with the current date and time.
	
	  Write down the number of this MBG file that will be used to find the .KEY
	  file.
	
	To copy the new .MBG and .KEY files:
	
	1. Copy the new 0-byte .MBG file over the corrupt .MBG file. You cannot use the
	  MS-DOS COPY command to copy 0-byte files.
	
	  On a Novell NetWare network, use NCOPY.
	
	  On a LAN Manager-compatible network, use XCOPY.
	
	2. Change to the KEY subdirectory of the postoffice; issue the MS-DOS DIR
	  command to look for the new KEY file noted in step 3 above.
	
	3. Copy the new 560 byte KEY file over the corrupt .KEY file.
	
	4. In ADMIN.EXE, choose External-Admin, Delete; then delete the new postoffice
	  that was created earlier.
	
	
	Additional query words: 1.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailConn100b
	Version           : :1.0b
	
	=============================================================================
	
