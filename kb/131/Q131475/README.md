---
layout: page
title: "Q131475: Use #INCLUDE to Add Header Files to a Visual FoxPro Proj"
permalink: /kb/131/Q131475/
---

## Q131475: Use #INCLUDE to Add Header Files to a Visual FoxPro Proj

{% raw %}

	Article: Q131475
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By using the #INCLUDE directive, you can instruct Visual FoxPro to include the
	contents of another file such as a header file (.H file) in your code during
	compilation. Header files have useful items such as standard constants that you
	can use in your Visual FoxPro code. This ability has existed in the C
	programming language. Now it is also available to Visual FoxPro developers.
	
	MORE INFORMATION
	================
	
	Benefits of Using #INCLUDE
	--------------------------
	
	Coding problems can be minimized when the #INCLUDE generator directive is used to
	include header files. Constants can be given values once in the header file, and
	these constants can be used anywhere in FoxPro code.
	
	By definition, the value of PI is 3.14. If a named constants header file is
	created with a #DEFINE for PI, the word PI could be used rather than typing
	3.14. Using the named constant, Visual FoxPro replaces all occurrences of PI
	with 3.14 at compile time.
	
	Using English words like PI in code improves readability and can make
	localization for non-English countries easier. For example, a single constants
	file could be created that contains application messages as follows:
	
	     #DEFINE CANCELENTRY "Are you sure you want to cancel this record?"
	
	Then, use CANCELENTRY in your Visual FoxPro code. To translate your program for a
	different country, all you need to do is translate a copy of the constants file
	into the different language. No changes to your Visual FoxPro code are
	necessary.
	
	Example One: COMMON.H
	---------------------
	
	A Named Constants file (FOXPRO.H) comes with Visual FoxPro. It contains the named
	constants for most Visual FoxPro functions. You can extend this concept of named
	constants even further by creating a COMMON.H file to define a number of
	standard types of constants such as the character values required for a carriage
	return/linefeed.
	
	The following sample header file demonstrates this concept:
	
	  * COMMON.H
	
	  *-- ASCII
	
	  #DEFINE LF              CHR(10)
	  #DEFINE CR              CHR(13)
	  #DEFINE CRLF            CR+LF
	
	If you use #INCLUDE to include this COMMON.H file in your Visual FoxPro project,
	you can use the text CRLF at any point in your program code where a carriage
	return/linefeed combination is needed. You no longer need to type
	CHR(13)+CHR(10). While either choice (CRLF or CHR(13)+CHR(10)) is valid, if a
	defined constant should change values, it need only be changed in a single
	location for that change to be reflected at all locations in your code where the
	constant is referenced.
	
	Example Two: TESTFILE.PRG
	-------------------------
	
	Building on the COMMON.H file, the following code provides a simple demonstration
	of the use of a COMMON.H file and constants referenced in code:
	
	  *-----------------------------------------------------------*
	  * Sample program :  TESTFILE.PRG                            *
	  *-----------------------------------------------------------*
	  #INCLUDE "COMMON.H"  && Use definitions from COMMON.H file
	
	  ACTIVATE SCREEN
	  CLEAR
	  ? 'Line 1'+CRLF+'Line 2'
	  =TestUDF()
	
	  FUNCTION TestUDF
	  ? DRAG_ENTER            && refer to FOXPRO.H file
	  RETURN
	  *-----------------------------------------------------------*
	
	  *-----------------------------------------------------------*
	  * Sample Header File: COMMON.H                              *
	  *-----------------------------------------------------------*
	  *-- ASCII
	  #DEFINE LF              CHR(10)
	  #DEFINE CR              CHR(13)
	  #DEFINE CRLF            CR+LF
	
	  *-- Header files
	  #INCLUDE "FOXPRO.H"  ** If not in current directory, you
	                       ** must qualify this file with the
	                       ** appropriate path location
	  *----------------------------------------------------------*
	
	Example Three: Using FOXPRO.H that Comes with Visual FoxPro
	-----------------------------------------------------------
	
	Here's another example use of named constants in code. As found in the FOXPRO.H
	file, the following constants for the MessageBox function can be used in place
	of the numeric equivalents. This list has been abbreviated for space
	considerations:
	
	  *-- Function Parameters
	  *-- MessageBox parameters
	  #DEFINE MB_YESNO          4    && Yes and No buttons
	  #DEFINE MB_ICONQUESTION   32   && Warning query
	  #DEFINE MB_DEFBUTTON2     256  && Second button is default
	
	  *-- MsgBox return values
	  #DEFINE IDYES             6    && Yes button pressed
	  #DEFINE IDNO              7    && No button pressed
	
	Given the above definitions, a sample dialog box written without the named
	constants might read as follows:
	
	     cMessageTitle = 'My App'
	     cMessageText  = 'Record not found. Would you like to search again?'
	     nDialogType   = 4 + 32 + 256  && The appearance of the message box
	     *    4 = Yes and No buttons
	     *   32 = Question mark icon
	     *  256 = Second button is default
	     nAnswer = MESSAGEBOX(cMessageText, nDialogType, cMessageTitle)
	
	     IF (nAsnswer = 6)   && Yes was selected
	       && Execute some other code
	     ENDIF
	
	The nDialogType code could be recast using named constants as this:
	
	     cMessageTitle = 'My App'
	     cMessageText  = 'Record not found. Would you like to search again?'
	     nDialogType   = MB_YESNO + MB_ICONQUESTION + MB_DEFBUTTON2
	
	     nAnswer = MESSAGEBOX(cMessageText, nDialogType, cMessageTitle)
	
	     IF (nAnswer=IDYES)
	       && Execute some other code
	     ENDIF
	
	Both ways are equally valid, but by using words as opposed to numbers, the code
	is easier to understand and maintain.
	
	REFERENCES
	==========
	
	Additional information about the #INCLUDE directive and related topics can be
	found in the Visual FoxPro Help file under the following topics:
	
	- #INCLUDE preprocessor directive
	
	- Including Predefined Constants in a Form or Form Set
	
	- #DEFINE...#UNDEF
	
	- #IF...#ENDIF
	
	- #IFDEF | #IFNDEF...#ENDIF
	
	Additional query words: VFoxWin Preprocessor
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
