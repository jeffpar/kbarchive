---
layout: page
title: "Q177369: WD97: Return Address Does Not Print or Show on Envelopes Tab"
permalink: kb/177/Q177369/
---

## Q177369: WD97: Return Address Does Not Print or Show on Envelopes Tab

	Article: Q177369
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbenvelope
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following may occur when you have added an envelope to your document:
	
	- When you print, the Return Address may not print on the envelope.
	
	  -or-
	
	- When you click Envelopes and Labels on the Tools menu, the Return Address may
	  not show on the Envelopes tab.
	
	CAUSE
	=====
	
	The insertion point is in the document text area. When the insertion point is in
	the document (and not in the attached envelope), the return address will not
	print or show on the Envelopes tab.
	
	NOTE: To view the Envelopes tab, click Envelopes and Labels on the Tools menu.
	
	WORKAROUND
	==========
	
	Use the appropriate method to work around your particular situation.
	
	Method 1: Place the Insertion Point in the Envelope
	---------------------------------------------------
	
	Before you print or view the Envelope tab, move the insertion point into the
	envelope that is attached to your document.
	
	Method 2: Use the EnvelopeExtra1 AutoText for the Return Address
	----------------------------------------------------------------
	
	You can use an AutoText entry (EnvelopeExtra1) to add additional information to
	an envelope. The AutoText entry can be helpful for automatically including a
	company logo or other object or text in the return address on an envelope.
	
	NOTE: The EnvelopeAddress1 AutoText will not show on the Envelopes tab, but when
	you add the envelope to a document, the Return Address (EnvelopeAddress1) will
	be added to the envelope and will print.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q109969 WD97: Automatic Envelope Return Address/Graphic Using AutoText
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about problems with the Return Address and Delivery
	Address when the envelope is added to a document, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q177371 WD97: Picture/Object Does Not Show on Envelopes/Labels Tab
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbenvelope 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
