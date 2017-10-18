---
layout: page
title: "Q162260: WD97: Err Msg: &quot;The Subdocument Is Missing&quot; Word Hangs"
permalink: kb/162/Q162260/
---

## Q162260: WD97: Err Msg: &quot;The Subdocument Is Missing&quot; Word Hangs

	Article: Q162260
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a subdocument into a master document, you may receive the
	following error message:
	
	  The subdocument <path>\<filename> is missing. Do you want to
	  expand the master document without this subdocument?
	
	If you click Yes, Word may stop responding (hang).
	
	CAUSE
	=====
	
	The subdocument you are inserting contains a subdocument that is missing. This
	problem occurs if the inserted subdocument contains only the subdocument that is
	missing. Word will not hang if the inserted subdocument contains other
	subdocuments besides the one that is missing.
	
	RESOLUTION
	==========
	
	Correct the problem with the subdocument before you insert it into a master
	document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	
	Additional query words: 97 8.0 word8 word97
	
	======================================================================
	Keywords          : kbualink97 kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
