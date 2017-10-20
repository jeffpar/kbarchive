---
layout: page
title: "Q129229: BUG: READ DEACTIVATE Runs When BROWSE Called From VALID of GET"
permalink: /kb/129/Q129229/
---

## Q129229: BUG: READ DEACTIVATE Runs When BROWSE Called From VALID of GET

{% raw %}

	Article: Q129229
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a READ with a DEACTIVATE clause, calling a BROWSE from the VALID clause of a
	GET triggers the READ DEACTIVATE clause.
	
	CAUSE
	=====
	
	As the active window changes, the READ DEACTIVATE is executed. In FoxPro version
	2.x, the READ DEACTIVATE is not called when the BROWSE is executed from the
	VALID clause of the GET.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	RESOLUTION
	==========
	
	An alternative is to modify your code to use a Form and a Grid instead of the
	BROWSE command. The Grid object is part of the form and interacts with all of
	the objects in a form. Another option is to code a special case in the READ
	DEACTIVATE clause. For example, you could set a flag when the BROWSE is first
	activated. In the READ DEACTIVATE, verify the value of the variable, and if the
	BROWSE has been called, RETURN .F. from the READ DEACTIVATE. The following
	sample code illustrates this method:
	
	     *Declare a variable that will control whether the READ DEACTIVATE
	     * returns .T.
	     cDeactBrow=.f.
	     CREATE TABLE test (one c(6) , two C(20))
	     APPEND BLANK
	
	     DEFINE WINDOW wintest FROM 1,1 TO 20,20 FLOAT GROW ZOOM
	     ACTIVATE WINDOW wintest
	     @ 1,1 GET nvar DEFAULT 1 PICTURE "@*N Show Browse" VALID browser()
	     READ CYCLE MODAL ;
	     DEACTIVATE readdeact()
	
	     CLEAR WINDOWS
	
	     PROCEDURE browser
	     cDeactBrow=.f.
	     BROWSE NORMAL
	
	     PROCEDURE readdeact
	     WAIT WINDOW "READ DEACT Shouldn't be called"
	     IF cDeactBrow=.F. &&Case where you are in the VALID clause of the GET
	         RETURN .F.
	         cDeactBrow=.T. && Reset the variable
	         ELSE
	         RETURN .T.
	     ENDIF
	
	MORE INFORMATION
	================
	
	This illustrates a behavioral difference between FoxPro versions 2.x and Visual
	FoxPro version 3.0 for Windows. Because the BROWSE window is different from the
	READ window, the behavior exhibited in Visual FoxPro for Windows seems more
	logical.
	
	For more information about differences between FoxPro 2.x and Visual FoxPro
	version 3.0, search for "Differences Between FoxPro 2.6 and Visual FoxPro" using
	the FoxPro Help menu.
	
	Additional query words: grid kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbcode kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
