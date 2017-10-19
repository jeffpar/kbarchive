---
layout: page
title: "Q197300: WD97: Save As Word 6.0/95 Loses Attached Template"
permalink: /kb/197/Q197300/
---

## Q197300: WD97: Save As Word 6.0/95 Loses Attached Template

	Article: Q197300
	Product(s): Word 97 for Windows
	Version(s): Service Release 1 (SR-1)
	Operating System(s): 
	Keyword(s): kbdta kbtemplate word97
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, version Service Release 1 (SR-1) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you save your document as a "Word 6.0/95 (*.doc)" type and then close and
	reopen the document, the attached template (on the Tools menu, click Templates
	And Add-Ins) has been changed to Normal.dot.
	
	CAUSE
	=====
	
	The "Word 6.0/95 (*.doc)" converter as shipped with Microsoft Word 97 Service
	Release 1 (SR-1) has a problem retaining the reference to an attached template.
	
	NOTE: This problem also occurs with the updated Word 6.0/95 Binary Converter for
	Word 97 if you downloaded the converter from the Microsoft Web Site before June
	4, 1998.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. This problem was corrected in Microsoft Office 97
	Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	This problem was corrected in Microsoft Word 2000.
	
	
	MORE INFORMATION
	================
	
	When you open a document that has an attached template on a system different
	from the one it was created on, you must have a copy of the appropriate attached
	template existing on the other system. Also, the directory structure of the
	attached template must be the same on both computers, and the template must be
	unique to the version of Word that you are working within.
	
	For example, if a Word 97 document has the Word 97 template
	"C:\Templates\Test.dot" attached, your Word 6.0 for Windows or Word for Windows
	95 installation must have the proper version of the attached template in the
	same path structure of "C:\Templates\Test.dot."
	
	Word does not convert an attached template.
	
	Additional query words: hotfix
	
	======================================================================
	Keywords          : kbdta kbtemplate word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2 kbWord97SR1
	Version           : :Service Release 1 (SR-1)
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
