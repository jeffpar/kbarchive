---
layout: page
title: "Q155963: WD97: Fax Wizard Sends Cover Sheets Before Form Letters"
permalink: /kb/155/Q155963/
---

## Q155963: WD97: Fax Wizard Sends Cover Sheets Before Form Letters

	Article: Q155963
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you fax multiple form letters using the Fax Wizard, all of the cover sheets
	are faxed first, then the form letter is faxed. The side-effect of this is that
	if you have a large number of faxes to send, the recipient may receive other
	faxes between the time they get your cover sheet and the time they get the form
	letter.
	
	WORKAROUND
	==========
	
	To work around this problem, choose one of the following methods:
	
	Method 1
	--------
	
	Merge fewer documents when merging to fax.
	
	Method 2
	--------
	
	Create a mail merge main document that includes a cover sheet and then merge to
	fax.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Even when faxing a single document using the Fax Wizard, 2 documents are
	created; one is the fax cover sheet and the other is the document you wish to
	fax. When the fax is sent, it will be sent as 2 separate faxes; the cover sheet
	and the document.
	
	This problem is most noticeable when merging to electronic fax because more
	documents and cover sheets are involved.
	
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          : kbualink97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
