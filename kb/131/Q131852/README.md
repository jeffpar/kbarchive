---
layout: page
title: "Q131852: PC Win: Error &#91;009&#93; Mail Maximum Size Exceeded Sending to..."
permalink: /kb/131/Q131852/
---

## Q131852: PC Win: Error &#91;009&#93; Mail Maximum Size Exceeded Sending to...

	Article: Q131852
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use version 3.2 of Microsoft Mail for Windows, you may receive a
	returned mail message similar to the one below:
	
	  From: POSTMASTER
	  Date
	  To
	  CC
	  Subject: Mail Failure
	
	  FROM:NET/PO/POSTMASTER
	  TO:
	  DATE:
	  TIME:
	  SUBJECT: Mailfailure
	
	  _____________________________________
	
	  [009] Mail maximum size exceeded sending to:
	  NET2 /PO2.
	
	  _____________________________________________
	
	with the original message pasted below.
	
	MORE INFORMATION
	================
	
	The Mail administrator has the ability to put a maximum mail size restriction on
	mail delivered between postoffices. For an async postoffice, you can configure
	this setting by selecting External-Admin, Modify, Setup in ADMIN.EXE. You can
	also use the MaxLanMailSize setting when you launch the External for network
	connections.
	
	With this setting, when a message or message plus attachment is sent that exceeds
	the limit, the message will be returned to the sender with the error posted
	inside the message. The following corresponding entry will be in the SYSTEM.LOG
	on the senders postoffice:
	
	  System log entry on: 06-01-95 08:53
	  External program has detected a mail problem.
	
	  Message data:
	
	  From:
	  Date:
	  Time:
	  Subject:
	
	  [009] Mail maximum size exceeded sending to:
	  NET
	  /PO2
	
	For additional information, please see version 3.2 of Microsoft Mail for PC
	Networks "Administrator's Guide," page 274.
	
	Additional query words: 3.20 maximum size exceeded
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
