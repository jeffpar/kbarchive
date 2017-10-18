---
layout: page
title: "Q98055: 3COM: Mail Is Not Sent Through Gateway"
permalink: kb/098/Q98055/
---

## Q98055: 3COM: Mail Is Not Sent Through Gateway

	Article: Q98055
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using version 1.0 of the Microsoft Mail Gateway to 3Com 3+Mail, the gateway
	may seem blocked: mail is not passed in either direction, yet the gateway screen
	or error log shows no error messages related to this.
	
	CAUSE
	=====
	
	This may be a result of a message being stuck in the 3Com gateway processing
	subdirectories.
	
	RESOLUTION
	==========
	
	Remove the stranded messages from the processing subdirectories before
	restarting the gateway.
	
	If you want to try to save the mail messages for later, back up the following
	subdirectories with their files to a different location. Then delete the message
	files and subdirectories in these locations:
	
	1. In the gateway-software subdirectory:
	
	  3C-OUT
	  MFFPUT
	  MFFGET
	
	2. In the Microsoft Mail postoffice database directory:
	
	  P1
	
	NOTE: Do NOT erase the POPULATE.MSM file or any currently dated message- header
	files in the P1 directory. Remove only older files.
	
	To get the gateway running, you need to clear all files out of these directories
	and restart the gateway.
	
	Later, you can try to resend the mail by copying the message files back into the
	original directories.
	
	If the problem persists, try the following:
	
	- Use a faster PC for the gateway, such as a 386/25 or faster with a 16-bit
	  high speed network interface card.
	
	- Increase the interval between firing times from the default of 10 minutes to
	  20 minutes.
	
	- Use the .INI parameter FIRETIME to selectively increase gateway throughput
	  during peak times if needed.
	
	- Make sure you address mail to fewer than 99 users at any one time.
	
	- If you have large attachments to send, make sure the address list is small.
	  You might have to send the mail multiple times to fit within the memory
	  limits of the gateway.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Mail Gateway to
	3Com 3+Mail, version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.00 one direction stuck
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus100
	Version           : :1.0
	
	=============================================================================
	
