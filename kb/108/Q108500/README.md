---
layout: page
title: "Q108500: WD97: Envelope Command Fails to Pick Up Print Merge Addrs Fields"
permalink: kb/108/Q108500/
---

## Q108500: WD97: Envelope Command Fails to Pick Up Print Merge Addrs Fields

	Article: Q108500
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbualink97 kbmerge kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Word for Windows, if you create a mail merge main document, and then choose
	Envelopes And Labels from the Tools menu, the envelope dialog box does not pick
	up some or all of the merge fields, even if they are selected.
	
	CAUSE
	=====
	
	There is a limit to the number of characters the envelope dialog box can
	support. If the address the envelope feature is trying to read has too many
	characters, the envelope dialog box will appear blank or will not display all of
	the address lines.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Shorten length of fields
	----------------------------------
	
	Shorten the length of the print merge fields.
	
	Method 2: Add envelope to document
	----------------------------------
	
	Add the envelope to the mail merge main document and then copy and paste the
	address print merge fields from the document to the envelope, or use the Insert
	Merge Field button to add the address merge fields to the envelope.
	
	Method 3: Directly insert fields
	--------------------------------
	
	In the Envelopes and Labels dialog box, press CTRL+F9 to insert the field braces
	and then type the field names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the versions of Word listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	
	
	Additional query words: word97
	
	======================================================================
	Keywords          : kbprint kbualink97 kbmerge kbPrinting 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
