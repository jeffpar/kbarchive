---
layout: page
title: "Q319276: FIX: Fatal Exception Error with VAL() and Alpha Character"
permalink: /kb/319/Q319276/
---

## Q319276: FIX: Fatal Exception Error with VAL() and Alpha Character

{% raw %}

	Article: Q319276
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 30-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 7.0, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Val() function and you pass the function an alpha string, you may
	receive the following error message:
	
	  Fatal Error: Exception code: C0000005
	
	After you receive this message, Visual FoxPro closes.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Paste the following code in a program (.prg) file named Test, and then run the
	program from the Command window:
	
	  PUBLIC f1
	  f1=Create("Form")
	  f1.show()
	  FOR i=1 TO 100
	  	F1.addobject("T"+allTrim(Str(i)),"container")
	  	?Val("1.23E4")
	  NEXT 
	  RETURN 
	   
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :5.0,5.0a,6.0,7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
