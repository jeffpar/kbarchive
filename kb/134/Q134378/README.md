---
layout: page
title: "Q134378: CONN: How to Reset the Mail Queue for Mail Connection 3.2"
permalink: /kb/134/Q134378/
---

## Q134378: CONN: How to Reset the Mail Queue for Mail Connection 3.2

{% raw %}

	Article: Q134378
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article covers the steps necessary to reset the mailbag for version 3.2 of
	the Microsoft Mail Connection for PC and AppleTalk Networks.
	
	Notes:
	
	- The following steps should be done if there is corruption or if the file is
	  missing.
	
	- Evidence of corruption include: a mail message that is being sent multiple
	  times from PCMail to AppleTalk Mail, or messages that cannot be deleted from
	  the MACNET/MACPO queue.
	
	For additional information regarding these problems, and prior to following the
	procedures of this article, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q119022 Message Redelivered Repeatedly to Mac Clients
	
	NOTE: MACNET/MACPO will be used to represent the proxy network and postoffice
	names throughout this article. These names can be different in specific
	installations.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q109259 MACGATE.INI File Should Not Be Edited Manually
	
	  Q109256 Changing Mail Connection Proxy Network & Postoffice
	
	MORE INFORMATION
	================
	
	In version 3.2 of the Mail Connection for PC and AppleTalk Networks, there are
	two queues created when the gateway is installed. One of these is for the proxy
	postoffice; the other is for mail addressed using the gateway addressing method.
	The gateway addressing method uses a queue identical to the queue for version
	1.0b of the Connection Gateway.
	
	Prior to recreating the MBG and KEY files for the proxy PO queue, the
	administrator should return mail from the MACNET/MACPO queue.
	
	1. Stop the Mail Connection for PC and AppleTalk Networks.
	
	2. Run the Mail for PC Networks Administrator's program (ADMIN.EXE).
	
	3. Select the Queue option, and select MACNET/MACPO from the list of network
	  names.
	
	  This will display messages that are in the queue.
	
	4. Select the Return option, and use the spacebar to mark each message in the
	  queue.
	
	5. When you are finished marking the messages, press the RETURN key, and answer
	  Yes to the Return Selected Times? prompt.
	
	  NOTE: If more than fifty items are in the mailbag, repeat the procedure.
	
	To recreate the queue, it is necessary to find the number of the queue for the
	proxy PO. This number is kept in an XTN file on the postoffice.
	
	1. Copy the NETWORK.GLB file to a local drive.
	
	  WARNING! Be careful to work with the correct drive as the NETWORK.GLB file
	  from one postoffice will not be the same as another.
	
	2. Type out the NETWORK.GLB file from the MS-DOS prompt (use the MORE pipe if
	  this is a large file and scrolls off the screen).
	
	  NOTE: The network names will be followed by a short blank space and an eight
	  digit number.
	
	  Look for the MACNET name followed by a short space of less than 15 characters
	  and an eight digit hex number. This number is part of the file name of an
	  associated XTN file.
	
	  The queue number will be found in an XTN file. Using the hex number of the
	  NETWORK.GLB file, search the XTN directory for a file with this name (hexid)
	  and the XTN extension.
	
	3. Type out the <hexid>.XTN file.
	
	4. Find MACPO followed by a short space and eight digit number. Write this
	  number down as it is the <HEXID> of the actual queue that is to be
	  reset.
	
	Resetting the queue for the gateway involves resetting two files: the
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
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
