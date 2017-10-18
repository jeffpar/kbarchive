---
layout: page
title: "Q174966: PRB: DDE With Word 97 Returns 'Ambiguous Name Detected: TmpDDE'"
permalink: kb/174/Q174966/
---

## Q174966: PRB: DDE With Word 97 Returns 'Ambiguous Name Detected: TmpDDE'

	Article: Q174966
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0,97
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the DDEExecute() function to send a WordBasic command to Word 97 from
	FoxPro, Visual Basic for Applications returns the following error message:
	
	  Ambiguous Name Detected: TmpDDE
	
	CAUSE
	=====
	
	This message is returned by Visual Basic for Applications when the Word Global
	Template (Normal.dot) contains a macro named TmpDDE, and an attempt is made to
	execute a Word command using the FoxPro DDEExecute( ) function.
	
	RESOLUTION
	==========
	
	This problem may be resolved by any of the following methods:
	
	- Deleting the TmpDDE macro from the MS Word Global Template (Normal.dot) file.
	
	-or-
	
	- Renaming the Microsoft Word Global Template (Normal.dot) file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When DDEExecute(nChannel,"[WordCommand]") is used to pass a command to Word 97,
	Word 97 attempts to create a new TmpDDE macro in the Global Template
	(Normal.dot) file. The TmpDDE macro is released after the Word Command passed by
	DDEExecute() is executed. Word 97 is unable to create the TmpDDE macro if the
	Global Template (Normal.dot) contains an existing macro of the same name. This
	behavior is not observed when macros with names other than TmpDDE are present in
	the Global Template (Normal.dot) file
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open Microsoft Word 97.
	
	2. Create a Word document named Testdoc.doc and save it in the c:\program
	  files\microsoft office\office folder.
	
	3. From the File menu, select Open and select Normal.dot usually located in the
	  c:\program files\microsoft office\templates folder.
	
	4. From the Tools menu, select Macro, and click Macros.
	
	5. In the "Macros in" box of the Macros dialog box, select Normal.dot(global
	  template).
	
	6. Enter TmpDDE in the Macro Name Field.
	
	7. Click Create to open the Visual Basic for Applications Code window.
	
	8. Save the macro.
	
	9. Exit Visual Basic for Applications and Word 97.
	
	10. Open FoxPro for Windows 2.x or Visual FoxPro 3.0x or 5.0x.
	
	11. Create a program file called test, containing the following code:
	
	        RUN /n "c:\program files\microsoft office\office\winword.exe"
	        wordchannel = DDEInitiate("Winword","System")
	        docname = "c:\program files\microsoft office\office\testdoc.doc"
	        =DDEExecute(wordchannel, '[FileOpen .name="'+docname+'"]')
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q165860 OFF97 Err Msg: "Ambiguous Name Detected" Appears When Faxing
	
	Additional query words: OFF97 WORD97 DDE
	
	======================================================================
	Keywords          : kberrmsg kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbWordSearch kbVFPsearch kbAudDeveloper kbWord97 kbWord97Search kbFoxproSearch kbZNotKeyword2 kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0,97
	Issue type        : kbprb
	
	=============================================================================
	
