---
layout: page
title: "Q171134: WD97: CALL Statement Cannot Accept Variable Argument"
permalink: /kb/171/Q171134/
---

## Q171134: WD97: CALL Statement Cannot Accept Variable Argument

	Article: Q171134
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Word, you can use the Microsoft Visual Basic for Applications CALL
	statement to run another subroutine; however, you cannot specify the name of the
	subroutine by using a string variable or concatenated strings. Attempting to do
	so may result in the following error:
	
	  Compile Error: Syntax error
	
	WORKAROUND
	==========
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	If the variable strMacroName contains the name of the macro, use this statement:
	
	     Application.Run strMacroName
	
	Or, if you are using literal strings:
	
	     Application.Run "Normal.Module1.MAIN"
	
	     Application.Run "MyProject.MyModule.MyProcedure"
	
	     Application.Run "'My Document.doc'!ThisModule.ThisProcedure"
	
	If you specify the document or template name, your code can run macros only in
	documents or templates related to the current context; it cannot run any macro
	in any document or template.
	
	Although Visual Basic code can call a macro directly (without using this method),
	this method is useful when the macro name is stored in a variable. The following
	two statements are functionally equivalent:
	
	    <ProjectName>.<ModuleName>.<MacroName>
	
	     Application.Run MacroName:="<ProjectName>.<ModuleName>.<MacroName>"
	
	In cases where you call a literal string such as "AutoExec.Main", you must remove
	the quotation marks, as shown in the following example:
	
	     CALL AutoExec.Main
	
	NOTE: You cannot pass parameters to a macro by using the Run method.
	
	MORE INFORMATION
	================
	
	The CALL statement uses the following syntax to call another subroutine
	
	     CALL <subroutinename>
	
	where <subroutinename> is the name of the subroutine.
	
	In Visual Basic for Applications, you can use the following command
	
	     Call [<ProjectName>].[<ModuleName>].<Macro_or_ProcedureName>
	
	where <Project> is the name of the template or document, <Module> is
	the name of the module, and <Macro_or_ProcedureName> is the name of the
	macro or procedure.
	
	In all cases, the argument for the CALL statement must be explicitly defined. For
	example, both
	
	  CALL <subroutinename>
	
	where <subroutinename> is the name of the subroutine.
	
	In Visual Basic for Applications, you can use the following command
	
	     Call [<ProjectName>].[<ModuleName>].<Macro_or_ProcedureName>
	
	where <Project> is the name of the template or document, <Module> is
	the name of the module, and <Macro_or_ProcedureName> is the name of the
	macro or procedure.
	
	In all cases, the argument for the CALL statement must be explicitly defined. For
	example, both
	
	     CALL strMacroName
	
	-and-
	
	     CALL "AutoExec.main"
	
	cause the error:
	
	  Compile Error: Syntax error
	
	For more information about the Call Statement, from the Visual Basic Editor,
	click the Office Assistant, type "Call" (without the quotation marks), click
	Search, and then click to view "Call Statement."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	For more information about the Call statement, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q164058 Passing Procedure Arguments in Visual Basic for Applications
	
	  Q165518 Calling Macros Using OLE from MS Visual Basic Applications
	
	  Q114696 Error Using Call Statement with Function Procedure
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	Additional query words: offcon vb vba vbe
	
	======================================================================
	Keywords          : kberrmsg kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
