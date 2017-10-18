---
layout: page
title: "Q83537: Mac Fax: Fax Gateway Sending an Extra Page"
permalink: kb/083/Q83537/
---

## Q83537: Mac Fax: Fax Gateway Sending an Extra Page

	Article: Q83537
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When sending a fax via MailSender, an extra page will be sent if the fax has the
	From, Subject, Files and To information at the top. The rest of the page will be
	blank.
	
	To prevent this extra page from being sent, delete the contents of the Subject
	field of the Send form that is used for MailSender transmission.
	
	Without information in the Subject field, the extra page will be suppressed and
	will not sent.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
