---
layout: page
title: "Q316439: FIX: XMLToCursor Error Messages with More Than 128 Columns"
permalink: /kb/316/Q316439/
---

## Q316439: FIX: XMLToCursor Error Messages with More Than 128 Columns

	Article: Q316439
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbInternet kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700
	Last Modified: 02-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The XMLToCursor function may report one of the following errors when it
	encounters more than 128 columns:
	
	  Fatal Error: Exception code=C0000005
	
	  -or-
	
	  Syntax Error
	
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
	
	  #define FIELDCOUNT  	128
	  #define TABNAME    	"testtab"
	  #define FIELDNAME  	"fieldnu"
	  #define STRUTAB		"Strutable.dbf"
	  CLEAR
	  LOCAL lafieldinfo[FIELDCOUNT,16]
	  FOR lni = 1 TO FIELDCOUNT
	     lafieldinfo[lni,1] = FIELDNAME +PADL(TRANSFORM(lni),3,'0')
	     lafieldinfo[lni,2] = "C"
	     lafieldinfo[lni,3] = 5
	     lafieldinfo[lni,4] = 0
	     lafieldinfo[lni,5] = .F.
	     lafieldinfo[lni,6] = .F.
	     FOR lnj = 7 TO 16
	        lafieldinfo[lni,lnj] = ""
	     ENDFOR 
	  ENDFOR
	  CREATE CURSOR TABNAME FROM ARRAY lafieldinfo
	  APPEND BLANK 
	  ?(LEN(FIELDNAME)+3)*FIELDCOUNT
	  ??CURSORTOXML(ALIAS(),'cXML',1,0)
	  USE IN TABNAME 
	  =XMLTOCURSOR(cXML,'cur')
	  RETURN 
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbInternet kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
