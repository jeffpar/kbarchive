---
layout: page
title: "Q316914: BUG: Menu Generated With SKIP FOR that Contains .F. Is Missing S"
permalink: kb/316/Q316914/
---

## Q316914: BUG: Menu Generated With SKIP FOR that Contains .F. Is Missing S

	Article: Q316914
	Product(s): Microsoft FoxPro
	Version(s): 7.0,7.0 SP1
	Operating System(s): 
	Keyword(s): kbBuilder kbXBase kbGrpDSFox kbCodeSnippet
	Last Modified: 19-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 7.0, 7.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Menu Designer to create a menu (.mpr) file that has one or more
	SKIP FOR expressions that contain a .F., and you generate the menu, the .mpr
	file does not contain the correct SKIP FOR clause, and you receive the following
	error message:
	
	  Function argument value, type, or count is invalid
	
	CAUSE
	=====
	
	A SKIP FOR expression contains a .F. before the first space in the expression.
	
	RESOLUTION
	==========
	
	To resolve this program, make sure that the string contains a space before the
	first .F.
	To do this, follow these steps:
	
	1. Paste the following code in a program (.prg) file, and then run the program
	  from the Command window to update the menu generator program:
	
	  NOTE:The menu generator is contained in a program file named Genmenu.prg,
	  which is located in the Visual FoxPro home directory.
	
	  LOCAL lcGenMenu, lcOldText, lcNewText, lcFileText, ;
	  	lnStartFileSize, lcSafety  
	  * Get the file name.
	  lcGenMenu = HOME()+'genmenu.prg'
	  IF NOT FILE(lcGenMenu)
	  	MESSAGEBOX('File '+ lcGenMenu + ' does not exist.')
	  	RETURN 
	  ENDIF 
	  * Make a backup.
	  COPY FILE (lcGenMenu) TO (ADDBS(JUSTPATH(lcGenMenu))+ ;
	  	JUSTSTEM(lcGenMenu)+'backup_for_q316914.prg')
	
	  * Store the original text.
	  lcOldText = [   IF ATC(".F.",GETWORDNUM(m.skip,1)) # 0]
	
	  * Store the replacement text.
	  TEXT TO lcNewText NOSHOW 
	     lcWord1 = UPPER(GETWORDNUM(ALLTRIM(m.skip),1))
	     lcWord2 = UPPER(GETWORDNUM(ALLTRIM(m.skip),2))
	     IF lcWord1==".F." AND !EMPTY(lcWord2) AND !INLIST(lcWord2,"AND",".AND.","OR",".OR.")
	  ENDTEXT
	
	  * Store the genmenu contents in a string variable.
	  lcFileText = FILETOSTR(lcGenMenu)
	  * Store the original length for later comparison.
	  lnStartFileSize = LEN(lcFileText)
	  * Replace the original string with the new string.
	  lcFileText = STRTRAN(lcFileText,lcOldText,lcNewText) 
	  * Write back to the file when you are finished.
	  IF (LEN(lcFileText)- lnStartFileSize) = ;
	  		(LEN(lcNewText) - LEN(lcOldText))
	  	lcSafety = SET('safety')
	  	SET SAFETY OFF 
	  	=STRTOFILE(lcFileText, lcGenMenu,0) 
	  	SET SAFETY &lcSafety 
	  	MESSAGEBOX("Patch successfully applied!",48)
	  ELSE 
	  	MESSAGEBOX("Patch NOT successfully applied, ;
	  original file unchanged!",16)
	  ENDIF 
	  RETURN 
	
	2. Generate the menu again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows, versions 7.0, 7.0 SP1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. To create a new menu, run the following code from the Command window:
	
	  CREATE MENU MENUTEST
	
	2. In the New Menu dialog box, click Menu.
	
	3. Under Prompt, type "Test" (without the quotation marks), and then click
	  Command in the Result list.
	
	4. Type "?"test"" (without the quotation marks) in the Command text box.
	
	5. Click Options, and then paste the following text in the Skip For text box:
	
	  lnTest1=.F. and lnTest2=.T.
	
	6. Click OK.
	
	7. On the Menu menu, click Generate.
	
	8. To open the .mpr file, run the following code from the Command window:
	
	  MODIFY COMMAND MENUTEST.MPR
	
	9. Examine the DEFINE PAD command in the .mpr file, and observe that it contains
	  the following:
	
	  DEFINE PAD _0l10tlzkl OF _MSYSMENU PROMPT "test" COLOR SCHEME 3 ;
	  	KEY ALT+T, "" ;
	  	and lnTest2=.T.
	
	10. Run the .mpr file, and note that you receive the error message that is
	  described in the "Symptoms" section. Also note that the SKIP FOR clause is
	  omitted, and all of the characters before and including the first .F. are
	  omitted.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbBuilder kbXBase kbGrpDSFox kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700 kbVFP700SP1
	Version           : :7.0,7.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
