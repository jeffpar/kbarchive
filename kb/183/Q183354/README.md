---
layout: page
title: "Q183354: XCLN: Unable to Attach Files with Long File Names"
permalink: /kb/183/Q183354/
---

## Q183354: XCLN: Unable to Attach Files with Long File Names

	Article: Q183354
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to attach a file with a long file name, the following error message
	appears:
	
	  The file could not be opened.
	
	This message appears when you try to attach files with file names of 12 or more
	characters and the file does not reside on the local computer. Most often, the
	symptom occurs when the file is on a UNIX or Novell server.
	
	CAUSE
	=====
	
	Win32 API suggests that a truncated short file name appear in a separate field
	when a long file name is being accessed from a server. The field for the
	truncated short file name was empty in this case; therefore, the returned file
	name was used as a short file name. This resulted in an inability to open the
	file, because the name was actually a long file name.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Copy the file to your local hard disk, and then attach it to the message.
	
	- Use an 8.3 file name on the server.
	
	- Use the Exchange 4.0 client.
	
	- Use the Outlook client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Windows NT
	client version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: OS2 namespace 3.12 4.11 netware capone attachments findfirstfile
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
