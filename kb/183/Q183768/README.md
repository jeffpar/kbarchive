---
layout: page
title: "Q183768: XCLN: Error: MAPI MapiSend Failed"
permalink: /kb/183/Q183768/
---

## Q183768: XCLN: Error: MAPI MapiSend Failed

{% raw %}

	Article: Q183768
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use MapiSend.exe from a command prompt to send an e-mail message, you
	may receive one of the following error messages:
	
	  Error: MAPI MapiSend Failed: 14
	
	  Error: MAPI MapiSend Failed: 21
	
	CAUSE
	=====
	
	This problem occurs due to ambiguous name resolution.
	
	If the sender's mailbox alias is ambiguous, the following error occurs:
	
	  Error: MAPI MapiSend Failed: 14
	
	If the recipient's mailbox alias is ambiguous, the following error occurs:
	
	  Error: MAPI MapiSend Failed: 21
	
	WORKAROUND
	==========
	
	Make sure that the mailbox aliases for the sender and the recipient are not
	ambiguous.
	
	To test for ambiguity of names, perform the following steps:
	
	1. Type the recipient's (or sender's) name in the To box of a Microsoft Outlook
	  or Exchange Client standard Send form.
	
	2. Click the To button or use the CTRL+K keystroke to see if the names are
	  immediately resolved. If they are resolved without any prompting, they are
	  not ambiguous.
	
	MORE INFORMATION
	================
	
	The MapiSend.exe is a Resource Kit utility that allows a user to send messages
	with optional file attachments through Microsoft Exchange Server from a Windows
	NT or Windows 95 command prompt.
	
	NOTE: MapiSend.exe was formerly known as the Command-Line Mail Sender Tool
	(Sendmail.exe). This program is also available in the Microsoft Mail Resource
	Kit.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
