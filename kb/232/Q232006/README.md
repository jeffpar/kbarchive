---
layout: page
title: "Q232006: XADM: How to Delete a Confidential Message From Exchange Server"
permalink: kb/232/Q232006/
---

## Q232006: XADM: How to Delete a Confidential Message From Exchange Server

	Article: Q232006
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains methods that can be used to remove a highly confidential
	or top secret message from an Exchange Server's database.
	
	MORE INFORMATION
	================
	
	There may certain situations when you need to permanently remove a certain
	message from an Exchange Server database. To do so:
	
	1. Use the ExMerge disaster recovery utility version 3.62 or later to remove the
	  message based on the subject line. Please contact Microsoft Product Support
	  Services (PSS) to obtain the latest version of ExMerge.
	
	  NOTE: If the original message was forwarded with a different Subject line,
	  ExMerge cannot delete the message based on the original message subject line
	  or MTS-ID.
	
	  If Item Retention is turned on, this may make the message available for
	  recovery or un-deletion from the Outlook client. For more information on Item
	  Retention, please see the following article in the Microsoft Knowledge Base:
	
	  Q228934 XCLN: Understanding Deleted Item Recovery
	
	2. Remove or delete the Exchange Server transaction logs from the day the
	  message was sent. To do so, perform a full backup of the information store
	  database, which purges all transaction log files. Please contact Microsoft
	  PSS before deleting transaction log files.
	
	  NOTE: If a transaction log is not completely committed to the Exchange Server
	  database, the log file will not be purged from the hard drive.
	
	3. After the message has been successfully removed using the ExMerge program,
	  use one of the following methods to ensure that the free space created by the
	  message deletion is re-used immediately.
	
	   - Perform an offline defragmentation of the Exchange Server database:
	
	  For Exchange Server 4.0 and 5.0, use EDBUTIL /D /ispriv or EDBUTIL /D
	  /ispub.
	
	  For Exchange Server 5.5, use ESEUTIL /D /ispriv or ESEUTIL /D /ispub.
	
	     NOTE: It is recommended that you perform a full online backup of the
	     Exchange Server databases after the offline defragmentation process is
	     finished.
	
	   - Background Cleanup
	
	     Background cleanup is the process of reclaiming empty space used by deleted
	     folders, messages, and attachments.
	
	     There is a registry variable that controls the rate at which this task runs
	     (not exposed in the Microsoft Exchange Server Administrator program):
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS
	  \ParametersPublic\Background Cleanup (value in milliseconds)
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\
	  ParametersPrivate\Background Cleanup (value in milliseconds)
	
	   - If you are using Exchange Server 5.5, you can use the ESE zeroing feature.
	     For information on this feature, please refer to the following articles in
	     the Microsoft Knowledge Base:
	
	  Q196169 XADM: Option to Zero Out Deleted Messages on Exchange Server
	
	  Q223161 XADM: Information on ESE Zeroing
	
	4. When you use ExMerge 3.62, it is recommended that you use step 1 of the
	  two-step process to remove the confidential message. Configure the Message
	  Details tab of ExMerge with the subject line of the confidential message to
	  be removed.
	
	5. To delete the confidential message, click the ExMerge Options button and on
	  the Import Procedure tab, click select the "Archive data to target store"
	  check box.
	
	  NOTE: The "Archive data to target store" feature causes ExMerge to copy data
	  from the Exchange Server mailbox to a .pst file, then delete the original
	  message from the Exchange Server database.
	
	6. After ExMerge has finished removing the confidential messages from Exchange
	  Server computer, you need to delete the corresponding .pst files created
	  during the ExMerge operation to complete the procedure.
	
	If you only want to delete the message and not flush the system, click the
	article number below to view the following article in the Microsoft Knowledge
	Base:
	
	  Q260037 XADM: How to Remove a Message from Exchange by Using the ExMerge
	  Utility
	
	Additional query words: classified
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
