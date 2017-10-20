---
layout: page
title: "Q318971: FIX: CTOT() Function Returns Blank Value on an XML DateTime Expr"
permalink: /kb/318/Q318971/
---

## Q318971: FIX: CTOT() Function Returns Blank Value on an XML DateTime Expr

{% raw %}

	Article: Q318971
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 03-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the CTOT() date function on an XML-generated datetime character
	expression, the CTOT() function returns a blank value.
	
	CAUSE
	=====
	
	The SET DATE TO command is set to use the mm/dd/yy format. The Visual FoxPro
	default is AMERICAN, which uses this format.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0.
	
	This problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Paste the following code in a program (.prg) file, and then run the program
	  from the Command window:
	
	  CLEAR
	  IF SET('DATE') <> "AMERICAN"
	     SET DATE TO AMERICAN 
	  ENDIF
	  CREATE CURSOR myxml_date (date_fld T)
	  INSERT INTO myxml_date (date_fld) VALUES (CTOT("12/31/2001 10:00:00P"))
	  CURSORTOXML("myxml_date", "myxml_var", 3, 1)
	  ? myxml_var
	  myval = SUBSTR(myxml_var, AT("date_fld", myxml_var) + 10, 19)
	  ? myval
	  ? CTOT(myval)
	
	2. A blank date is returned from the CTOT() function even though it contains a
	  valid date.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
