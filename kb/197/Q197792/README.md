---
layout: page
title: "Q197792: XFOR: General Troubleshooting Stuck Msg in Internet Mail Service"
permalink: kb/197/Q197792/
---

## Q197792: XFOR: General Troubleshooting Stuck Msg in Internet Mail Service

	Article: Q197792
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Internet Mail Service may stop working, and log error 4116 or others in the
	event log, such as event 4116, or it may Dr. Watson on store.exe. This may be
	because a message is stuck in the Internet Mail Service queues.
	
	MORE INFORMATION
	================
	
	To correct for messages stuck in the Internet Mail Service queues follow these
	steps:
	
	1. In the Control Panel, double-click Services, and then stop the Internet Mail
	  Service.
	
	2. Locate the exchsrvr\Imcdata directory. You can verify this, by checking the
	  registry under the following key:
	
	  HKLM\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters\RootDir
	
	3. Create a temporary directory named "TempIMS" (without the quotation marks)
	  under \Imcdata.
	
	4. In the Exchsrvr\Imcdata directory, delete the Queue.dat file.
	
	5. Copy the two directories, Imcdata\IN and Imcdata\OUT, to the TempIMS
	  directory.
	
	6. Delete all the files in the Imcdata\IN and Imcdata\OUT directories.
	
	
	7. Clear out the MAPI queues in MTS-IN and MTS-OUT in the information store.
	  Otherwise, if there are mailboxes on the Exchange Server computer, you need
	  to use one of the following utilities: Gwclean, Profinst, or Mdbvu32.
	
	  If you use Mdbvu32, run the Profinst program to install the MAPI profile to be
	  used by Mdbvu32.
	
	For additional information about how to view and delete messages in the MTS-IN
	and MTS-OUT queues, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q165505 How to View/Delete Messages in the MTS-IN and MTS-OUT queue
	
	
	8. After you clear the queues, restart the information store and the Internet
	  Mail Service. If this fails, check the message transfer agent (MTA) queues.
	  Run the "mtacheck /V /F <filename>.txt" (without the quotation marks)
	  command. You may want to use the /rd or /rl switches.
	
	9. Replay the messages; stop the Internet Mail Service, delete the Queue.dat
	  file, copy the files from TempIMC\IN and TempIMC\OUT to the corresponding
	  directories under Imcdata\IN and Imcdata\OUT, and then restart the Internet
	  Mail Service.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
