---
layout: page
title: "Q131560: BUG: Creating a Header Class Definition in a VCX Causes Error"
permalink: /kb/131/Q131560/
---

## Q131560: BUG: Creating a Header Class Definition in a VCX Causes Error

{% raw %}

	Article: Q131560
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUGkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a visual class library (VCX) is edited programmatically and the VCX is
	opened with the MODIFY CLASS command, Visual FoxPro is halted and an exception
	error is generated.
	
	CAUSE
	=====
	
	The Exception error is the result of a programming error. The information placed
	in the VCX under program control is erroneous. In particular, creating a Header
	or a Column class as a visual class yields this error because it is not possible
	to create these classes in a VCX.
	
	RESOLUTION
	==========
	
	Ensure that you are creating classes that are allowed in a visual class library.
	Visual classes that cannot be created in a VCX require a container to exist.
	They include:
	
	- Column class
	
	- Header class
	
	- Page class
	
	- Separator class
	
	- OptionButton class
	
	- DataEnvironment class
	
	- Cursor class
	
	- Relation class
	
	You can however subclass all of these classes under program control.
	
	STATUS
	======
	
	Microsoft has confirmed the fact that the product halts to be a problem in the
	Microsoft products listed at the beginning of this article. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	The following program duplicates the Exception error. Please exercise caution if
	you decide to run this sample program because it causes FoxPro to halt. This
	code is provided as an illustration only. The comments highlight the source of
	the error.
	
	     CREATE CLASS grid1 OF myvcx AS Grid &&Set the ColumnCount property to 1
	     USE myvcx.vcx
	     LOCATE FOR baseclass = 'header'
	     COPY TO myvcx2 NEXT 1
	     APPEND FROM myvcx2
	     GO BOTTOM
	     REPLACE objname with 'myheader'\ 
	
	  * The replace statement below is the cause of the error
	  * A header object is created, and this is illegal in a VCX.
	
	     REPLACE properties WITH STRTRAN(properties,"header1","myheader")
	     REPLACE reserved1 WITH 'Class'
	     REPLACE parent WITH SPACE(0)
	     REPLACE UniqueID WITH LEFT(UniqueID,LEN(UniqueID)-1) + ;
	        IIF(RIGHT(UniqueID,1)='Z','Q','Z')
	     USE
	     ERASE myvcx2.DBF
	     ERASE myvcx2.FPT
	     MODIFY CLASS myheader OF myvcx
	     * choose the class MyHeader and click Open
	
	Additional query words: crash hang
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
