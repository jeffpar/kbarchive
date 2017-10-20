---
layout: page
title: "Q157854: HOWTO: Create a New Form Based on a Template"
permalink: /kb/157/Q157854/
---

## Q157854: HOWTO: Create a New Form Based on a Template

{% raw %}

	Article: Q157854
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following program creates a new form (SCX) from a template without using the
	Options dialog box setting (accessed from the Tools menu).
	
	MORE INFORMATION
	================
	
	1. Create a program called Newscx.prg as follows:
	
	        LPARAMETERS tcFileName,tcClass,tcClassLibrary
	        LOCAL lcFileName,lcLastSetClassLib,oForm
	
	        IF EMPTY(tcFileName)
	           CREATE FORM "" NOWAIT
	           RETURN
	        ENDIF
	        lcFileName=ALLTRIM(tcFileName)
	        IF NOT "."$lcFileName
	           lcFileName=lcFileName+".SCX"
	        ENDIF
	        lcFileName=FULLPATH(lcFileName)
	        IF FILE(lcFileName) AND MESSAGEBOX(LOWER(lcFileName)+;
	           [ already exists.]+CHR(13)+;
	           [Do you want to replace it?],52+256)#6
	           RETURN .F.
	        ENDIF
	        IF EMPTY(tcClass)
	           CREATE FORM (lcFileName) NOWAIT
	           RETURN
	        ENDIF
	        IF EMPTY(tcClassLibrary)
	           oForm=CREATEOBJECT(tcClass)
	           IF TYPE("oForm")#"O"
	              RETURN .F.
	           ENDIF
	           SET SAFETY OFF  && Stop Save As dialog from appearing on next line
	           oForm.SaveAs(lcFileName)
	           SET SAFETY ON
	           IF NOT FILE(lcFileName)
	              RETURN .F.
	           ENDIF
	           MODIFY FORM (lcFileName) NOWAIT
	           RETURN
	        ENDIF
	        lcLastSetClassLib=SET("CLASSLIB")
	        SET CLASSLIB TO (tcClassLibrary) ADDITIVE
	        oForm=CREATEOBJECT(tcClass)
	        IF NOT lcLastSetClassLib==SET("CLASSLIB")
	           RELEASE CLASSLIB (tcClassLibrary)
	        ENDIF
	        IF TYPE("oForm")#"O"
	           RETURN .F.
	        ENDIF
	        SET SAFETY OFF    && Stop Save As dialog from appearing on next line
	        oForm.SaveAs(lcFileName)
	        SET SAFETY ON
	        IF NOT FILE(lcFileName)
	           RETURN .F.
	        ENDIF
	        MODIFY FORM (lcFileName) NOWAIT
	        RETURN
	
	2. Run the program from the command line, passing it parameters for the name of
	  the new form, the name of the form class on which the new form is based, and
	  the name of the class library where the form class is stored. This assumes a
	  class library containing at least one custom form class has already been
	  created in the current directory. For example, to create a new form based on
	  the "myform" class stored in a visual class library (VCX) called "myvcx,"
	  issue the following command from the command line:
	
	        =NewSCX("newform","myform","myvcx")
	
	3. The preceding step opens the "newform" in the Form Designer. Edit the form in
	  the Form Designer as usual.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
