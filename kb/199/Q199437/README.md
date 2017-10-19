---
layout: page
title: "Q199437: WD97: Text in Return Address Is Obscured by Graphic"
permalink: /kb/199/Q199437/
---

## Q199437: WD97: Text in Return Address Is Obscured by Graphic

	Article: Q199437
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbenvelope word97
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A graphic saved as the EnvelopeExtra1 AutoText entry may be superimposed over
	the return address text.
	
	CAUSE
	=====
	
	The address frame is set with an exact vertical size. When you use the
	EnvelopeExtra1 AutoText entry to insert a graphic, the entry causes
	repositioning of the return address text if the graphic is too large. This
	causes the text to disappear or be repositioned so that it is not visible. The
	large graphic pushes the line spacing down in the address frame. Because the
	address frame is formatted with an exact vertical size, Word must crop the
	return address.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use a smaller graphic so Word does not reposition
	the return address.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbenvelope word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
