---
layout: page
title: "Q149290: XCLN: Renaming Attachment Doesn't Change File Association"
permalink: kb/149/Q149290/
---

## Q149290: XCLN: Renaming Attachment Doesn't Change File Association

	Article: Q149290
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 24-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you rename an attachment, the file association for that attachment does not
	change. Therefore, the original application will still start when that
	attachment is activated.
	
	CAUSE
	=====
	
	When you attach a file in a mail message, the name and extension are stored
	internally. If you rename the attachment giving it a different extension, the
	file association is not changed. For example, if you receive a Test.dat
	attachment and rename it to Test.doc, double-clicking it will not launch Word as
	expected.
	
	RESOLUTION
	==========
	
	This is by design. This way the user can change the name to something like "My
	most excellent document" with having to worry about adding a .doc extension to
	it. If you choose the Save As option, you will still see the original attachment
	name.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
