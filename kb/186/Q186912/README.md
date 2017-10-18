---
layout: page
title: "Q186912: FIX: Error Using Trimcrlf Method of _stringlib Class"
permalink: kb/186/Q186912/
---

## Q186912: FIX: Error Using Trimcrlf Method of _stringlib Class

	Article: Q186912
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Trimcrlf method of the _stringlib class, one of the following
	error messages appear:
	
	  Variable 'CR' is not found
	
	  _STRINGLIB1
	  ERROR: 12
	  Method: trimcrlf
	  Line: 6
	  DO WHILE (LEFT(lcString,1)==CR OR LEFT(lcString,1)==LF
	
	-or-
	
	  Variable 'LF' is not found
	
	  _STRINGLIB1
	  ERROR: 12
	  Method: trimcrlf
	  Line: 6
	  DO WHILE (LEFT(lcString,1)==CR OR LEFT(lcString,1)==LF
	
	CAUSE
	=====
	
	This behavior occurs because the variables CR and LF have not been defined in
	the Trimcrlf method of the _stringlib class.
	
	RESOLUTION
	==========
	
	The _stringlib class is contained in the _utility class library (_utility.vcx)
	located in the \ffc subdirectory of the Visual FoxPro installation directory.
	Open the _utility class library and select the _stringlib class. Select the
	Trimcrlf method and change the code to read as follows:
	
	     LPARAMETERS tcstring,tltrimleft,tltrimright
	     #DEFINE CR CHR(13)
	     #DEFINE LF CHR(10)
	     LOCAL lcstring
	     lcstring=tcstring
	     IF tltrimleft
	
	        DO WHILE LEFT(lcstring,1)==CR OR LEFT(lcstring,1)==LF
	           lcstring=LTRIM(SUBSTR(lcstring,2))
	        ENDDO
	
	     ENDIF
	     IF tltrimright
	
	        DO WHILE RIGHT(lcstring,1)==CR OR RIGHT(lcstring,1)==LF
	           lcstring=TRIM(LEFT(lcstring,LEN(lcstring)-1))
	        ENDDO
	
	     ENDIF
	     RETURN lcstring
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named Testtrim.prg, using the following code:
	
	     CLOSE ALL
	        SET CLASSLIB TO HOME()+"FFC\_UTILITY.VCX"
	        outilobject=CREATEOBJECT('array_form')
	        outilobject.SHOW
	        READ EVENTS
	
	        DEFINE CLASS array_form AS FORM
	           TOP = 0
	           LEFT = 0
	           HEIGHT = 180
	           WIDTH = 220
	           DOCREATE = .T.
	           CAPTION = "_Utilities TRIM CRLF"
	           NAME = "ARRAY_FORM"
	           AUTOCENTER=.T.
	
	           ADD OBJECT list1 AS LISTBOX WITH ;
	              HEIGHT = 125, ;
	              LEFT=05, ;
	              TOP = 10, ;
	              WIDTH = 100, ;
	              ROWSOURCETYPE=5, ;
	              ROWSOURCE="arraya"
	
	           ADD OBJECT list2 AS LISTBOX WITH ;
	              HEIGHT = 125, ;
	              LEFT=115, ;
	              TOP = 10, ;
	              WIDTH = 100, ;
	              ROWSOURCETYPE=5, ;
	              ROWSOURCE="arrayb"
	
	           ADD OBJECT command2 AS COMMANDBUTTON WITH ;
	              LEFT=10, ;
	              HEIGHT=25, ;
	              CAPTION="\<Close", ;
	              TOP=150, ;
	              WIDTH=200, ;
	              NAME = "Command1"
	
	           ADD OBJECT _arraylib1 AS _arraylib
	
	           ADD OBJECT _stringlib1 as _stringlib
	
	           PROCEDURE LOAD
	              PUBLIC arraya, arrayb
	              DECLARE arraya[4]
	              arraya[1]="Apple "+CHR(13)+CHR(10)
	              arraya[2]="Banana "+CHR(13)+CHR(10)
	              arraya[3]="Orange "+CHR(13)+CHR(10)
	
	              arraya[4]="Pear "+CHR(13)+CHR(10)
	              DECLARE arrayb[4]
	              arrayb[1]="Blueberry"
	              arrayb[2]="Cherry"
	              arrayb[3]="Grapefruit"
	              arrayb[4]="Strawberry"
	           ENDPROC
	
	           PROCEDURE list1.CLICK
	              LOCAL thisval
	              thisval=THISFORM.list1.VALUE
	              stringval=arraya[thisval]
	              FOR i=1 TO ALEN(arraya,1)
	                 THISFORM.list1.REMOVEITEM(1)
	              ENDFOR
	              IF CHR(13)$STRINGVAL
	                 stringval=THISFORM._stringlib1.trimcrlf(stringval,.t.,.t.)
	              ENDIF
	              THISFORM._arraylib1.insaitem(@arrayb,stringval,thisval-1)
	              THISFORM._arraylib1.delaitem(@arraya,thisval)
	              FOR i=1 TO ALEN(arraya,1)
	                 THISFORM.list1.ADDITEM(arraya[i])
	              NEXT
	              THISFORM.list2.NUMBEROFELEMENTS=ALEN(arrayb,1)
	              THISFORM.REFRESH
	           ENDPROC
	
	           PROCEDURE list2.CLICK
	              LOCAL thisval
	              thisval=THISFORM.list2.VALUE
	              FOR i=1 TO ALEN(arrayb,1)
	                 THISFORM.list2.REMOVEITEM(1)
	              ENDFOR
	              stringval=arrayb(thisval)
	              THISFORM._arraylib1.insaitem(@arraya,stringval)
	              THISFORM._arraylib1.delaitem(@arrayb,thisval)
	              FOR i=1 TO ALEN(arrayb,1)
	                 THISFORM.list2.ADDITEM(arrayb[i])
	              NEXT
	              THISFORM.list1.NUMBEROFELEMENTS=ALEN(arraya,1)
	              THISFORM.REFRESH
	           ENDPROC
	
	           PROCEDURE command1.CLICK
	              CLEAR EVENTS
	           ENDPROC
	
	        ENDDEFINE
	
	2. Click any item in list1. The error message occurs, unless the variables CR
	  and LF are defined within the Trimcrlf method of the _stringlib class.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by John Desch, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
