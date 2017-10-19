---
layout: page
title: "Q190863: PRB: Grid Header Alignment Property Accepts Any Value"
permalink: /kb/190/Q190863/
---

## Q190863: PRB: Grid Header Alignment Property Accepts Any Value

	Article: Q190863
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Grid Alignment property programmatically accepts any numeric value without
	causing a error. According to the Help file, values 0 through 9 are the only
	valid values.
	
	This behavior also exists in Visual FoxPro versions 3.x and 5.x.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	According to Visual FoxPro Online help, values 0 through 9 are valid Grid Header
	Alignment values, but values outside this range do not cause errors. In general,
	values below 0 align the header to the middle left and values above 9 align the
	header to the bottom center.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code and change the Grid Header Alignment property by using
	  the Spinner control:
	
	        frmAlignment=CREATEOBJECT('form')
	        frmAlignment.ADDOBJECT('grdHeader','grid')
	        frmAlignment.ADDOBJECT('spnSpinner','Gridspinner')
	        frmAlignment.grdHeader.COLUMNCOUNT = 3
	        frmAlignment.grdHeader.VISIBLE = 1
	        frmAlignment.grdHeader.column1.header1.CAPTION = "I"
	        frmAlignment.grdHeader.column1.header1.ALIGNMENT = 0 &&Aligned Left
	        frmAlignment.SHOW(1)
	
	        DEFINE CLASS gridspinner AS SPINNER
	            TOP = 225
	            VISIBLE = .T.
	            PROCEDURE INTERACTIVECHANGE
	                frmAlignment.grdHeader.column1.header1.ALIGNMENT=THIS.VALUE
	            ENDPROC
	        ENDDEFINE
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on: "Header Alignment Property"
	
	Additional query words: kbVFp600 kbVFp500a kbVFp500 kbVFp300b kbVFp300 kbCtrl kbContainer
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
