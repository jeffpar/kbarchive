---
layout: page
title: "Q141529: HOWTO: Adding or Removing Pages from a PageFrame"
permalink: kb/141/Q141529/
---

## Q141529: HOWTO: Adding or Removing Pages from a PageFrame

	Article: Q141529
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode kbvfp
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Visual FoxPro, you can use the PageCount property to add and remove pages
	from a pageframe easily.
	
	If, however, you use ADDOBJECT or REMOVEOBJECT to control the number of pages in
	the pageframe, you can take advantage of the methods and events of the page.
	
	MORE INFORMATION
	================
	
	There are advantages to defining a page class and using ADDOBJECT or
	REMOVEOBJECT instead of changing the PageCount property. Adding a page by
	increasing the page count by 1 won't allow changes to any methods or events
	associated with the page. All methods or events are read-only at run time.
	Defining a page class allows you to place code inside the methods or events and
	arrange a page exactly as needed before a page is added to the pageframe. The
	following example demonstrates how this is accomplished.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form.
	
	2. Add a pageframe to the form.
	
	3. Change the PageCount property of the pageframe to 0.
	
	4. Add three new properties to the form: Page1, Page2, and Page3.
	
	5. Type the following inside PAGEFRAME1.REFRESH
	
	     * The following refresh method will help automate the process
	     * of adding and removing pages from the pageframe.
	     *
	     *                         Display Page         Not Display Page
	
	     * THISFORM.Page1                .T.                .F.
	     * THISFORM.Page2                .T.                .F.
	     * THISFORM.Page3                .T.                .F.
	
	     IF THIS.PAGECOUNT > 0
	       DIMENSION lcPage(THIS.PAGECOUNT) && Array of names for visible pages
	       FOR lni=1 to THIS.PAGECOUNT
	         lcPage(lni)=UPPER(THIS.PAGES(lni).NAME)    && Does page exist
	       ENDFOR
	     ELSE
	       DIMENSION lcPage(1)
	       lcPage(1) = ""
	     ENDIF
	     FOR lni = 1 to 3         && Looping stops at 3 because we only have 3
	       lcx = "Page"+ALLTRIM(STR(lni))         && possible pages to display.
	       IF THISFORM.&lcx.                   && IF true display the page
	         lny=ASCAN(lcPage,UPPER(lcx))
	         IF lny=0               && If lny=0, then the page does not exist
	           THISFORM.PAGEFRAME1.ADDOBJECT(lcx,lcx)
	         ENDIF
	       ELSE                && ELSE (The page should NOT be displayed)
	         lny=ASCAN(lcPage,UPPER(lcx))
	         IF lny>0          && If lny>0, remove the page from the page frame
	
	           THISFORM.PAGEFRAME1.REMOVEOBJECT(lcx,lcx)
	         ENDIF
	       ENDIF
	     ENDFOR
	
	6. Create a program file that contains the following code:
	
	     SET PROCEDURE TO <this program>
	     DO FORM <form name>
	
	     * Three classes are defined as Page1, Page2, and Page3
	     * respectively. These are the pages that will be added
	     * with ADDOBJECT inside the PAGEFRAME1.REFRESH.
	
	     DEFINE CLASS Page1 AS PAGE
	        ADD OBJECT command1 AS COMMANDBUTTON
	        PROCEDURE CLICK
	           WAIT WINDOW "click" NOWAIT
	        ENDPROC
	     ENDDEFINE
	
	     DEFINE CLASS Page2 AS PAGE
	        ADD OBJECT command2 AS COMMANDBUTTON
	     ENDDEFINE
	
	     DEFINE CLASS Page3 AS PAGE
	        ADD OBJECT text1 AS TEXTBOX
	     ENDDEFINE
	
	7. Run the program. You should see a form with an empty pageframe.
	
	8. Make page1 and page2 visible by typing the following in the Command window:
	
	     _SCREEN.FORMS(1).PAGE1 = .T.
	     _SCREEN.FORMS(1).PAGE2 = .T.
	     _SCREEN.FORMS(1).PAGE3 = .F.
	     _SCREEN.FORMS(1).REFRESH
	
	9. Make page1 and page3 visible by typing the following in the Command window:
	
	     _SCREEN.FORMS(1).PAGE1 = .T.
	     _SCREEN.FORMS(1).PAGE2 = .F.
	     _SCREEN.FORMS(1).PAGE3 = .T.
	     _SCREEN.FORMS(1).REFRESH
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbhowto
	
	=============================================================================
	
