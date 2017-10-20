---
layout: page
title: "Q246693: HOWTO: Get Document Statistics from Word via OLE Automation"
permalink: /kb/246/Q246693/
---

## Q246693: HOWTO: Get Document Statistics from Word via OLE Automation

{% raw %}

	Article: Q246693
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2000,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbole kbvfp300b kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbWord97 kbword2000
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Often times it is useful to obtain document statistics from Word 97 or Word 2000
	using OLE Automation, especially when printing documents. This article
	illustrates how to retrieve the number of pages in a given Word document.
	
	MORE INFORMATION
	================
	
	Using the ComputeStatistics method in Microsoft Word, you can obtain several
	statistics about a Word document, such as the number of pages, the number of
	words and the number of characters. This article demonstrates how to obtain the
	number of pages in a given Word document. For more information on the
	ComputeStatistics method, see the Word VBA online help.
	
	Create a new program, enter the code below, and then run the program.
	
	  IF "3.00"$VERSION() ;
	        OR "5.00"$VERSION()
	     SET LIBRARY TO HOME()+'foxtools.fll'
	  ENDIF
	  CLEAR
	
	  oWord = CREATEOBJECT("Word.Application")
	
	  WITH oWord
	     IF "3.00"$VERSION() ;
	        OR "5.00"$VERSION() ;
	        OR "8167"$VERSION()   
	        cur_dir=SYS(5)+SYS(2003)               && Get the current folder
	     ELSE
	        cur_dir = .Options.DEFAULTFILEPATH(14) && Get the current folder
	     ENDIF
	     word_dir = .Options.DEFAULTFILEPATH(0)    && Look in user's document folder VFP 6.0 SP3.
	     CD (word_dir)
	     word_doc = GETFILE('doc')                 && Insert Word doc here if known
	     WAIT WINDOW "Please wait while I obtain document statistics..." NOWAIT
	     .Documents.OPEN(word_doc)
	     num_pages = .ActiveDocument.ComputeStatistics(2) && 2=number of pages
	     .APPLICATION.QUIT(0)
	  ENDWITH
	
	  =MESSAGEBOX("Number of pages in "+PROPER(JUSTSTEM(ALLTRIM(word_doc))) + ;
	     ": " +ALLTRIM(STR(num_pages)))
	
	  IF "3.00"$VERSION() ;
	        OR "5.00"$VERSION()
	     SET LIBRARY TO
	     SET DEFA TO (cur_dir)  && Switch back to the original folder
	  ELSE
	     CD (cur_dir)           && Switch back to the original folder
	  ENDIF
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbvfp300b kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbWord97 kbword2000 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2000,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
