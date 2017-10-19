---
layout: page
title: "Q221713: FIX: Possible Run-time Error with _EvalText in _html.vcx"
permalink: /kb/221/Q221713/
---

## Q221713: FIX: Possible Run-time Error with _EvalText in _html.vcx

	Article: Q221713
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbFFC kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 24-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The keyword "this" is missing from one of the instances of the EvalText method
	when the method is referenced in the _html class library. Under certain
	conditions, this may cause a run-time error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual FoxPro 6.0, open the _EvalText class in the _html.vcx class
	  library.
	
	2. Open the EvalText method.
	
	You will find two instances of the EvalText method referenced in this method:
	
	  	    .
	      m.lcOldStr=this.EvalText(m.lcEvalStr)
	               .
	               .
	               .
	      m.lcNewText=EvalText(m.lcNewText)
	               .   
	
	In the last instance, the keyword "this" is missing from the EvalText method.
	Both of the methods need the keyword "this."
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbvfp600 kbFFC kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
