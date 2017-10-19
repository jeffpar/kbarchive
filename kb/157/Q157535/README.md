---
layout: page
title: "Q157535: WD97: Outlook Message Title Shows Invalid Character"
permalink: /kb/157/Q157535/
---

## Q157535: WD97: Outlook Message Title Shows Invalid Character

	Article: Q157535
	Product(s): Word 97 for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Outlook 97, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Sending a document created by the Memo Wizard to a Microsoft Outlook recipient,
	the message title contains an invalid character at the end.
	
	CAUSE
	=====
	
	Microsoft Outlook picks up the subject of the mail message from the memo title
	and doesn't know how to suppress the carriage return/line feed (paragraph
	mark).
	
	This does not occur when the mail recipient is using Microsoft Exchange as the
	mail client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	
	
	Additional query words: 97 8.0 word8 word97 square garbage
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbOutlookSearch kbWord97 kbWord97Search kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : :4.0
	
	=============================================================================
	
