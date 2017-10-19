---
layout: page
title: "Q169547: WD97: Some OLE Automation Commands Fail with Visual Fox Pro"
permalink: /kb/169/Q169547/
---

## Q169547: WD97: Some OLE Automation Commands Fail with Visual Fox Pro

	Article: Q169547
	Product(s): Word 97 for Windows
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbole kbProgramming kbdtacode
	Last Modified: 10-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to call Word 97 Visual Basic for Applications methods from
	Microsoft Visual Fox Pro, you may receive the following error message:
	
	  OLE error code 0x800200005. Type Mismatch.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR-1).
	
	To work around this problem, use the Microsoft Word Visual Basic for Applications
	WordBasic object to call the required methods as in the following example:
	
	  WordObj.WordBasic.FileSaveAs "C:\MyDoc.Doc"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	There are a number of Word 97 Visual Basic for Applications automation calls
	(the SaveAs method, for example) that fail when invoked from Microsoft Visual
	Fox Pro versions 5.x and 6. Attempting to invoke these methods returns "Type
	Mismatch" errors.
	
	Additional query words: SR1 release1 8.0 8.00 vb vbe vba
	
	======================================================================
	Keywords          : kberrmsg kbole kbProgramming kbdtacode 
	Technology        : kbWordSearch kbVFPsearch kbAudDeveloper kbWord97 kbWord97Search kbZNotKeyword2 kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
