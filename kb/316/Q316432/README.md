---
layout: page
title: "Q316432: FIX: XMLToCursor Incorrectly Adds Row When You Use Inline Schema"
permalink: /kb/316/Q316432/
---

## Q316432: FIX: XMLToCursor Incorrectly Adds Row When You Use Inline Schema

	Article: Q316432
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbInternet kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 02-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The XMLToCursor function erroneously adds a row to a cursor when you use an
	inline schema.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Save the following code in a program (.prg) file and then run the program:
	
	  ** CODE BEGIN:
	  CLEAR
	  CREATE CURSOR TQUERY (COL1 I, COL2 C(10), COL3 D, COL4 T, COL5 L, COL6 Y)
	  LCXML = ""
	  CURSORTOXML("TQUERY","LCXML",1,48,0,"0")
	  CURSORTOXML("TQUERY","LCXML2",1,48,0,"1")
	  ?  LCXML  && EMPTY XMLDOC WITH NO SCHEMA REF
	  CLOSE DATA
	  XMLTOCURSOR(LCXML,"TC1")
	  ?'EXTERNAL SCHEMA RECCOUNT:',RECCOUNT()
	  XMLTOCURSOR(LCXML2,"TC2")
	  ?'INLINE SCHEMA RECCOUNT:',RECCOUNT()
	  RETURN
	  ** CODE END
	
	After you run the program, note that the record count of the cursor echoed to the
	desktop for the inline schema is 1.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbInternet kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
