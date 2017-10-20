---
layout: page
title: "Q133452: How to Use Macro Substitution in Object Referencing"
permalink: /kb/133/Q133452/
---

## Q133452: How to Use Macro Substitution in Object Referencing

{% raw %}

	Article: Q133452
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Macro substitution treats the contents of a memory variable or array element as
	a character string literal. When an ampersand (&) precedes a Character-type
	memory variable or array element, the contents of the variable or element
	replace the macro reference. You can use macro substitution in any command or
	function that accepts a character string literal.
	
	MORE INFORMATION
	================
	
	In the Language Reference, page 8, the (&) Ampersand command is explained.
	One area of amplification to the Macro Substitution command is the .cExpression,
	which allows for a continuation of the command.
	
	Here is an example showing how objects can be referenced using macro
	substitution:
	
	    frmForm = CREATEOBJECT("Form")
	     frmForm.SHOW
	     X="frmForm"
	     cMemvarIs="Visible"
	     &X.&cMemvarIs =.F. && Nothing happens due to improper syntax
	     &X..&cMemvarIs=.F. && The form should disappear
	     WAIT WINDOW "Form should have disappeared."
	     madd="AddObject"
	     &X..Visible=.T. && The form should reappear
	     &X..&madd("cmdMyButton2","cmdMyButton")
	     myb="cmdMyButton2"
	     &X..&myb..&mvis=.t.
	     READ EVENTS
	
	     DEFINE CLASS cmdMyButton AS CommandButton
	        PROCEDURE Click
	        ThisForm.RELEASE
	        CLEAR EVENTS
	        ENDPROC
	     ENDDEFINE
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
