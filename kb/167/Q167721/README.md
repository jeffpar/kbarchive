---
layout: page
title: "Q167721: WD97: IPF Error Opening File with Recover Text Converter"
permalink: /kb/167/Q167721/
---

## Q167721: WD97: IPF Error Opening File with Recover Text Converter

	Article: Q167721
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbole kbualink97 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to open a document, you receive the following error:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you will receive the following error message:
	
	  WINWORD caused an invalid page fault in module OLE32.DLL at <address>
	
	When you re-start Word, you receive the following message:
	
	  Word encountered file corruption while opening <filename>. Part of this
	  document may be recoverable. Attempt recovery now?
	
	If you answer Yes to attempt to recover the text of the document, you receive the
	error again.
	
	CAUSE
	=====
	
	The "Recover Text from Any File" converter has encountered corruption in the
	file and it is unable to interpret this corrupt information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q156577 Word 97: Unable to Recover Lost Document
	
	  Q87856 Troubleshooting Damaged Documents in Word for Windows
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbole kbualink97 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbbug
	
	=============================================================================
	
