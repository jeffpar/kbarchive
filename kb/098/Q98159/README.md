---
layout: page
title: "Q98159: SMTP: Err Msg: ERROR Translating Message to SMTP..."
permalink: /kb/098/Q98159/
---

## Q98159: SMTP: Err Msg: ERROR Translating Message to SMTP...

{% raw %}

	Article: Q98159
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After the Microsoft Mail Gateway to SMTP starts and initializes, it checks for
	outgoing mail from the SMTP outgoing queue. If it detects outgoing mail, it
	opens a session with the smarthost and begins to process the outgoing messages.
	
	If the gateway comes to a message in the queue that it cannot process, this error
	message may occur:
	
	  ERROR translating message to SMTP: protocol error
	
	CAUSE
	=====
	
	This error can result from a damaged message in the SMTP gateway queue. When
	there is a damaged message in the queue, the gateway stops processing the
	outgoing messages and switches to the idle state waiting for TCP/IP connections.
	It then repeats the same process during its next scheduled connection attempt
	time.
	
	RESOLUTION
	==========
	
	The problem message in the SMTP queue should either be deleted or returned to
	the sender. You may want to first rename the temporary files used by the SMTP
	gateway that are found in the MAILDATA\SMTP directory. Any file with extension
	.API in the SMTP directory should be changed to an extension of .OLD with the
	following command:
	
	  ren *.api *.old
	
	Deleting or returning of messages is done from within the ADMIN.EXE program:
	
	1. Start ADMIN.EXE with an account that has Admin privileges.
	
	2. From the Admin menu, choose Queue.
	
	3. In the dialog box, type "SMTP" (without the quotation marks) and press the
	  ENTER key.
	
	4. Return the problem message (probably the first or last message in the SMTP
	  queue).
	
	5. The user who sent the message needs to resend the returned message or be
	  notified that it was deleted.
	
	NOTE: If there is a file called FROM_NC.API or OUTBAD.API in the SMTP directory
	of the Mail Postoffice, you can view this file and decipher who the sender of
	the problem message is. The sender's name is preceded with a FROM: and contains
	the full 10/10/10 Microsoft Mail address. Once you have this information, you
	follow the steps above to remove the message from the SMTP outgoing queue. It is
	suggested to use Debug since many MS-DOS editors show the file as one big line
	of text.
	
	Example
	-------
	
	Assume there is a file stranded in the M:\MAILDATA\SMTP directory called
	OUTBAD.API. Use the following steps to find the sender of the problem message:
	
	1. Type the following:
	
	  " DEBUG M:\MAILDATA\SMTP\OUTBAD.API " (without the quotation marks)
	
	2. At the hyphen (-) prompt, type the letter "D" (without the quotation marks)
	  and press the ENTER key.
	
	3. A mix of HEX values and ASCII text is displayed on the screen, repeatedly
	  press D, ENTER until the word FROM: shows up in the ASCII column.
	
	4. Note the information following the FROM: because this is the sender of the
	  problem message.
	
	  NOTE: There may be multiple messages in the .API file, where each one has its
	  own FROM: information. If the old .API files are renamed prior to the startup
	  of the gateway as mentioned above, a new file containing only the problem
	  message should be created.
	
	5. Use this name when following the steps above to return or delete the message
	  out of the SMTP queue.
	
	NOTE: The "protocol error" message can be a vague error message and may refer to
	a number of other issues. The resolution in this article has been proven to work
	in many situations where this error occurred.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
