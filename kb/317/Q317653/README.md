---
layout: page
title: "Q317653: XCON: Internet Mail Service Stops with Events 4116 and 4102"
permalink: /kb/317/Q317653/
---

## Q317653: XCON: Internet Mail Service Stops with Events 4116 and 4102

{% raw %}

	Article: Q317653
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Service may unexpectedly stop and it cannot be restarted. If
	you examine the Application Event log, you may see the following events in the
	Application Event log:
	
	  4116
	
	  An error was returned from the messaging software the Internet Mail Service
	  uses to process messages on the Microsoft Exchange Server. It is possible
	  that the piece of mail being processed at the time will not be delivered. The
	  message that was being processed has been moved to the "BAD" folder. Use the
	  appropriate utilities found in the SUPPORT directory of your Exchange CD to
	  view and manipulate these messages.
	
	  4102
	
	  A serious error has occurred while trying to send mail into the Exchange
	  Information Store. The Internet Mail Service is being shut down.
	
	CAUSE
	=====
	
	This issue may occur in one of the following scenarios:
	
	- Antivirus software is installed and running on the server.
	
	
	- The server is running out of available disk space on the partition where the
	  Imcdata folder is located.
	
	- Your server installation needs to be updated with the latest release of the
	  service pack and any hotfixes for Store.exe that may be available.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Check the available disk space on the drive where the Imcdata folder is
	  located. To free up more space, use any or all of the following procedures:
	
	   - Remove unnecessary programs.
	   - Empty the Recycle Bin.
	   - Delete files in all temporary directories.
	   - Remove any unnecessary files from the Imcdata\Log folder.
	   - Move the Imcdata folder to another drive or another partition.
	
	2. If your SMTP Protocol Log appears to occupy a significant portion of the
	  partition, change the logging level to a lower setting. To do this, follow
	  these steps:
	
	  a. Start the Microsoft Exchange Server Administrator program.
	
	  b. Click your server, click Properties on the File menu, and then click the
	     Diagnostic Logging tab.
	
	  c. Locate the SMTP protocol, and then change its logging setting to a lower
	     value.
	
	3. Turn off or remove any antivirus software that may be running on your
	  computer.
	
	4. Locate and delete a bad message that may be causing the information store to
	  stop responding. To do this, follow these steps:
	
	  a. Stop the Internet Mail Service.
	
	  b. Move all messages from the C:\Exchange\Imcdata\In folder to another folder
	     (for example, create a folder named C:\Messages to move the messages to).
	
	  c. Move the messages back to C:\Exchange\Imcdata\In one message at a time. If
	     the number of messages is large, you can move them in small groups.
	
	  d. Delete the Queue.dat file from the Imcdata folder.
	
	  e. Restart the Internet Mail Service.
	
	     If a bad message was placed in the Imcdata\In folder, the information store
	     stops responding immediately.
	
	  f. Repeat steps a through e until you locate and delete the bad message.
	
	5. Use the information from the following Knowledge Base article to change the
	  Max Threads(Private+Public) registry setting:
	
	  Q169686 XADM: IMC Shuts Down, Error Connecting to IS
	
	6. Apply the latest service pack and the most current Exchange Information Store
	  service (Store.exe) hot fixes.
	
	For additional information about how to obtain the latest service pack, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q191014 How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	For additional information about Exchange Server 5.5 information store bugs in
	Service Pack 4 that have been fixed in subsequent hot fixes, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q282533 XADM: Exchange Server 5.5 Post-SP4 Information Store Fixes
	
	MORE INFORMATION
	================
	
	For additional information about similar issues, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q279798 XADM: Information Store Service Hangs After You Apply SP4
	
	  Q295969 XADM: The Information Store Service Is Caught in Deadlock After You
	  Apply Exchange Server 5.5 SP4
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
