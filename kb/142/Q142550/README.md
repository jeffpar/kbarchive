---
layout: page
title: "Q142550: How to Easily Remark or Unremark Multiple Lines of Code"
permalink: kb/142/Q142550/
---

## Q142550: How to Easily Remark or Unremark Multiple Lines of Code

	Article: Q142550
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Programmers often need to remark and unremark multiple lines of code. Automating
	this process is explained below.
	
	MORE INFORMATION
	================
	
	The program below will cut selected text to the clipboard, manipulate the text,
	and paste the code back to your program.
	
	1. Create a new program called Remark that contains the following code:
	
	     ***************** Begin REMARK.PRG ********************
	     SET PROCEDURE TO remark
	     DO remark1
	
	     PROCEDURE remark1
	        DEFINE BAR 1 OF _medit ;
	           PROMPT "Remark" ;
	           AFTER _med_clear ;
	           KEY ctrl+k, "Ctrl+K";
	           MESSAGE "Remark lines of Code" ;
	           SKIP FOR remark4()
	
	        DEFINE BAR 2 OF _medit ;
	           PROMPT "Un-Remark" ;
	           AFTER 1 ;
	           KEY ctrl+u, "Crtl+U";
	           MESSAGE "Remove Remarked lines of Code"
	
	        ON SELECTION BAR 1 OF _medit DO remark2 WITH 1
	        ON SELECTION BAR 2 OF _medit DO remark2 WITH 0
	        RETURN
	
	     PROCEDURE remark2
	        PARAMETERS xxx
	        PUBLIC yyy
	        yyy=xxx
	        _cliptext=""
	        ON KEY LABEL F12 DO remark3
	        KEYBOARD '{ctrl+x}{f12}{ctrl+v}'
	        RETURN
	
	     PROCEDURE remark3
	        IF yyy=1
	           _cliptext='* '+STRTRAN(_cliptext,chr(13),chr(13)+'* ')
	           IF RIGHT(_cliptext,2)="* "
	             _cliptext=SUBSTR(_cliptext,1,LEN(_cliptext)-2)
	           ENDIF
	        ELSE
	           _cliptext=STRTRAN(_cliptext,CHR(13)+'* ',CHR(13))
	           IF LEFT(_cliptext,2)="* "
	              _cliptext=SUBSTR(_cliptext,3)
	           ENDIF
	        ENDIF
	        RETURN
	
	     FUNCTION remark4
	        IF SKPBAR('_medit',_med_copy)
	           SET SKIP OF BAR 1 OF _medit .T.
	           SET SKIP OF BAR 2 OF _medit .T.
	           x=.t.
	        ELSE
	           SET SKIP OF BAR 1 OF _medit .F.
	           SET SKIP OF BAR 2 OF _medit .F.
	           IF SKPBAR('_medit',1)
	              DO remark
	           ENDIF
	           x=.f.
	        ENDIF
	        RETURN x
	
	     ***************** End REMARK.PRG **********************
	
	2. In the Command window, type:
	
	  " DO REMARK " (without the quotation marks)
	
	3. Remark and UnRemark are now available as options under the FoxPro Edit menu.
	
	4. Open any program file other than Remark.prg.
	
	5. Select (highlight) a block of code, and then on the Edit menu, click Remark.
	  The lines of code are automatically changed to Remark Statements with an
	  asterisk (*) at the beginning of each highlighted line.
	
	6. Select the block of code again, and then on the Edit menu, click UnRemark.
	  The asterisk (*) is removed from the beginning of each highlighted line.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
