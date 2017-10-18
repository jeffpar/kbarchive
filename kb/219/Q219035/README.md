---
layout: page
title: "Q219035: XADM: Backup Event 104 Text is Ambiguous or Incorrect"
permalink: kb/219/Q219035/
---

## Q219035: XADM: Backup Event 104 Text is Ambiguous or Incorrect

	Article: Q219035
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
	
	Exchange Server 5.5 Service Pack 1 includes changes to the text of ESE97 event
	104 (backup). As a result, backup logging in the application log may provide
	ambiguous or erroneous reports.
	
	STATUS
	======
	
	The change to the English text now reflects the database operation ending
	(without error) without suggesting that it guarantees a successful backup. The
	change to the German text is incorrect, as "abgebrochen" suggests stopping
	without completion, or abortion. Microsoft has confirmed this to be a problem in
	Microsoft Exchange Server version 5.5 (Ger) Service Pack.
	
	MORE INFORMATION
	================
	
	ESE97 Event 104 is a "success" event for the database operation.
	
	However, a successful database operation and closure does not necessarily
	guarantee a successful backup. Other components of the backup operation may fail
	independently of the ESE97 operation. The ESE97 operation can only report ESE97
	status, and cannot report on other aspects of the backup operation. The change
	to the text of the event is intended to reflect this.
	
	In Exchange Server 5.5 RTM the English event text read:
	
	  The database engine has completed the backup successfully.
	
	And the German event text read:
	
	  Die Datenbank hat das Backup erfolgreich abgeschlossen.
	
	Exchange 5.5 Service Pack 1 changed the English text to read:
	
	  The database engine has stopped the backup procedure.
	
	And changed the German event text to read:
	
	  Die Datenbank hat das Backup abgebrochen.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug kbinfo
	Solution Type     : kbpending
	
	=============================================================================
	
