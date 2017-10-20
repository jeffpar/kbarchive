---
layout: page
title: "Q129846: How to Use the Professional Edition's Documenting Wizard"
permalink: /kb/129/Q129846/
---

## Q129846: How to Use the Professional Edition's Documenting Wizard

{% raw %}

	Article: Q129846
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, Professional Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Earlier versions of FoxPro relied on FOXDOC.APP to document applications. Visual
	FoxPro no longer includes FOXDOC.APP; is has Documenting wizard that you can use
	to document applications. This article describes the Documenting wizard and how
	to use it.
	
	MORE INFORMATION
	================
	
	Documenting Wizard
	------------------
	
	The Documenting wizard documents projects and program files. The wizard can also
	create an analysis of your code and clean up the formatting in your files. The
	Documenting Wizard is included only with the Professional Edition of Visual
	FoxPro.
	
	By default, the wizard does not modify your existing files. However, you can
	choose to do this in the final step. The wizard prompts you as you go through
	these steps:
	
	1. Source File: Enter the name of a project file or a specific program file.
	
	2. Capitalization: Keywords are all the reserved words in the Visual FoxPro
	  programming language. Symbols are the variables and names that you define in
	  your code.
	
	3. Indentation: Select the desired options to enforce conformity in the
	  indentation of your code.
	
	4. Headings: Headings are comments about the code that are relevant to the code
	  they precede. They can be placed at the beginning of files, procedures, class
	  definitions, and methods to make your formatted code easier to read.
	
	5. Reports: The reports that the wizard creates are actually text files. The
	  wizard creates the following types of reports:
	
	     Report Type       File Name    Remarks
	     ------------------------------------------------------------
	     Action Diagram    project.ACT  Shows the hierarchical
	                                    relations within your code. If
	                                    you are not working with ASCII
	                                    code page 1250 and ANSI code
	                                    page 1252, see the directive
	                                    "*# document ACTIONCHARS" in
	                                    Customizing the Documenting
	                                    Wizard.
	
	     Cross-Reference   XREF.LST     Lists all the user-defined
	                                    symbols.
	
	     File Listing      FILES.LST    Lists all the files in the
	                                    project.
	
	     Source Code       project.LST  Puts all formatted code in a
	                                    single Listing file.
	
	     Tree Diagram      TREE.LST     Shows the procedure calling
	                                    tree.
	
	  The wizard also automatically creates the following files:
	
	     File Name    Description
	     --------------------------------------------------------------
	     FILES.DBF    Table with a record for each file in the project.
	
	     FDXREF.DBF   Table with a record for each instance of user
	                  symbols in the code.
	
	  The FDXREF.DBF file contains a field named Flag for identifying the
	  keywords. The identifiers are as follows:
	
	     Flag  Description
	     -------------------------------------------------------------
	     B     Base class
	     C     Class name
	     D     Defined PROC or FUNC (not method)
	     F     Function call: myproc( ) or DO myproc
	     K     Keyword
	     M     Method definition
	     N     Name of file
	     O     Object
	     P     Property of an object
	     R     User symbol reference
	     V     User symbols (variable) definition (PARA, PRIV, PUBL, DIME)
	
	6. Finish.
	
	By default, the wizard does not overwrite your existing files. Select the
	Overwrite Existing Files option to overwrite your existing code files with the
	new ones that the wizard saves.
	
	If you select the Place Files In A Single Directory option and then click Finish,
	the wizard prompts you to choose a single directory where it will save all the
	files it creates.
	
	If you select the Place Files In A New Directory Tree and then click Finish, the
	wizard prompts you to choose a directory where it will create a copy of the
	project's source tree. It then saves the new, formatted program files in the
	appropriate directories of the new tree.
	
	If you select the Cross-Reference Keywords option, the wizard adds records to
	FDXREF.DBF for each instance of Visual FoxPro keywords in your code. Depending
	on the size of your code, this option may enlarge FDXREF.DBF by a large number
	of records. When this option is selected, the wizard matches keywords in your
	code with the first field, named Token, in the file FDKEYWRD.DBF. The second
	column, Code, in FDKEYWRD.DBF contains an identifier that tells the wizard how
	to treat the keyword when analyzing your code.
	
	The following table describes the identifier codes:
	
	 Code   Description
	 ---------------------------------------------------------
	 I      Indent
	 U      Undent (Remove indent)
	 R      Reset indentation to 0 (or 1 if InDefineClass)
	 F      Proc or function
	 D      While or Case: DO clause
	 O      Object (Spinner,CommandButton)
	 P      Property (Scalemode,DecimalPoints)
	 M      Method (Init,KeyPress)
	 C      ClauseUsed only as a Clause: can't start a statement
	
	Customizing the Documenting Wizard
	----------------------------------
	
	In addition to the options that you choose when running the Documenting Wizard,
	you can customize additional options outside the wizard.
	
	Indentation in CASE Structures
	------------------------------
	
	By default, the wizard looks for the following indentation in a CASE structure:
	
	     DO CASE
	     CASE case1=1
	         case2=2
	     CASE case3=3
	         case4=4
	     ENDCASE
	
	Some developers prefer to indent the lines between DO CASE and ENDCASE an
	additional level as shown here:
	
	     DO CASE
	         CASE case1=1
	              case2=2
	         CASE case3=3
	              case4=4
	     ENDCASE
	
	If you indent your CASE structures to look like the second example, specify this
	in FDKEYWRD.DBF. To specify this coding style in FDKEYWRD.DBF, change the value
	of the Code field to "UU" in the ENDCASE record.
	
	Documenting Wizard Directives
	-----------------------------
	
	You can place special directives in your code files to instruct the Documenting
	wizard to perform specific tasks when analyzing the code. These directives can
	go in two places. Place them in:
	
	- Your project's main program file to instruct the wizard how to analyze all
	  code files in the project.
	
	- Individual code files to instruct the wizard how to analyze specific files.
	
	Each directive begins with an asterisk, so Visual FoxPro treats them as comments
	and ignores them when compiling programs. The directives are not
	case-sensitive.
	
	The syntax of the directives is:
	
	  *# document directive
	
	It is a good idea to place the directives near the beginning of the main program
	file so that the Documenting wizard encounters the instruction when it begins
	analyzing. The remaining sections in this article explain these directives.
	
	*# document ACTIONCHARS "abcdef"
	--------------------------------
	
	By default, when the Documenting Wizard creates an Action Diagram or a Tree
	Diagram, the wizard uses six characters that appear as lines and square corners
	when viewed under ASCII code page 1250 or under ANSI code page 1252 in FoxFont.
	Not all the characters map to line characters when viewed under other code
	pages.
	
	The six default characters and their corresponding FoxFont characters are listed
	below as a, b, c, d, e, and f.
	
	          Default        As viewed
	 abcdef   Chr( ) Value   in FoxFont
	 ----------------------------------------------------
	 a        32             (space)
	 b        196             -
	 c        179             |
	 d        218             Upper left corner bracket
	 e        192             Lower left corner bracket
	 f        195             Sideways "T" (similar to "|-")
	
	NOTE: The FoxFont characters needed for this table were not displayable in this
	font, so a description of the characters was used instead.
	
	When using other code pages, insert the following code in your main program file
	to ensure that the lines in your diagrams map to line-like characters:
	
	     *# document ACTIONCHARS " -|+++"
	
	NOTE: Tthe first character of the string enclosed in quotation marks is a space.
	For a list of supported code pages, please see the "Code Pages Supported by
	Visual FoxPro" topic in the Visual FoxPro Help file.
	
	*# document XREF cMode
	----------------------
	
	This directive tells Visual FoxPro whether to enable cross-referencing of
	variables. The default is ON.
	
	  cMode     Description
	  ------------------------------------------------------------------------
	  ON        enables cross referencing of variables
	  OFF       disables cross-referencing of variables
	  SUSPEND   Disables cross-referencing of variables in the current file
	            until the Documenting wizard encounters the next instance
	            of: *# document XREF ON
	
	*# document EXPANDKEYWORDS cMode
	--------------------------------
	
	This directive tells Visual FoxPro whether to enable the expansion of keywords.
	For example, "DEFINE WIND" could be expanded to "DEFINE WINDOW." The default is
	OFF.
	
	WARNING: Not all keywords in Visual FoxPro begin with a unique string of four
	characters. For example, "REPL" could be short for "REPLACE" or "REPLICATE." Be
	careful if you include this directive, which will overwrite existing files.
	
	  cMode     Description
	  -----------------------------------------------------------------------
	  ON        Enables keyword expansion
	  OFF       Disables keyword expansion
	  SUSPEND   Disables keyword expansion in the current file until the next
	            instance of: *# document EXPANDKEYWORDS ON
	
	*# document XREFKEYWORDS cMode
	------------------------------
	
	This directive corresponds to the Cross Reference Keywords option on "Step 6 -
	Finish" in the Documenting wizard. The default is OFF.
	
	 cMode     Description
	 ------------------------------------------------------------------------
	 ON        Enables cross referencing of keywords
	 OFF       Disables cross-referencing of keywords
	 SUSPEND   Disables cross-referencing of keywords in the current file
	           until the next instance of: *# document XREFKEYWORDS ON
	
	*# document ARRAYBRACKETS cMode
	-------------------------------
	
	The default is OFF.
	
	 cMode     Description
	 -----------------------------------------------------------------------
	 ON        The Documenting Wizard assumes that square brackets are used
	           for arrays and that parentheses are used for functions and
	           methods.
	 OFF       The Documenting Wizard treats both square brackets and
	           parentheses as arrays.
	
	*# document ACTIONINDENTLENGTH nSpace
	-------------------------------------
	
	In this directive, nSpace is the number of character spaces that you want the
	Documenting Wizard to use for indentation. The minimum value allowed is 2.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper
	Version           : :
	
	=============================================================================
	

{% endraw %}
