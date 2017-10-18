---
layout: page
title: "Q259211: PRB: COMRETURNERROR() Only Works Properly if Error Has Occurred"
permalink: kb/259/Q259211/
---

## Q259211: PRB: COMRETURNERROR() Only Works Properly if Error Has Occurred

	Article: Q259211
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 12-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The COMRETURNERROR() function populates the COM exception structure with
	information that Automation clients can use to determine the source of Visual
	FoxPro Automation errors. However, if this function is called without an error
	having occurred, it does not properly populate the structure. Visual FoxPro
	clients display the information that was sent, but other clients may display
	only a generic "Automation Error" message.
	
	RESOLUTION
	==========
	
	One resolution to this problem is to always call the COMRETURNERROR function
	from the Error method of your Automation server. The ERROR cErrorMessage command
	throws Error 1098 (User-defined error) when used. You can test for this in the
	Error method and call the COMRETURNERROR function with the cErrorMessage
	command.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project and save it as "ThrowErr.pjx" (without the quotation
	  marks).
	
	2. On the the Code tab, click New.
	
	3. Save the following code as "ThrowErr.prg" (without the quotation marks):
	
	  DEFINE CLASS RetErr AS custom OLEPUBLIC
	
	  	Name = "RetErr"
	  	
	  	PROCEDURE ThrowErrBad
	  		COMRETURNERROR("ThrowErr", "109")
	  	ENDproc
	  	
	  	PROCEDURE ThrowErrGood
	  		ERROR "109"
	  	ENDproc
	  	
	  	PROCEDURE Error
	  		LPARAMETERS nError, cMethod, nLine
	
	  		IF nError = 1098
	  		   COMRETURNERROR("ThrowErr", MESSAGE())
	  		ENDif
	  	ENDproc
	  ENDdefine
	
	4. On the Build menu, select Multi-threaded COM server, and save it as
	  "ThrowErr.dll" (without the quotation marks).
	
	5. To test this in FoxPro, run the following code in the Command window. You
	  should see the same error box pop up both times.
	
	  loServer = CREATEOBJECT("ThrowErr.RetErr")
	  loServer.ThrowErrBad()
	  loServer.ThrowErrGood()
	
	6. To test this in Microsoft Access, create a new database and a new form. Put
	  two CommandButtons named Command1 and Command2 and three Labels named Label1,
	  Label2, and Label3 on the form.
	
	7. In Command1, put the following code:
	
	  Private Sub Command1_Click()
	  On Error Resume Next
	  Set x = CreateObject("ThrowErr.RetErr")
	  Call x.ThrowErrBad
	  Label1.Caption = Str(Err.Number)
	  Label2.Caption = Err.Source
	  Label3.Caption = Err.Description
	  End Sub
	
	8. In Command2, put the following code:
	
	  Private Sub Command2_Click()
	  On Error Resume Next
	  Set x = CreateObject("ThrowErr.RetErr")
	  Call x.ThrowErrGood
	  Label1.Caption = Str(Err.Number)
	  Label2.Caption = Err.Source
	  Label3.Caption = Err.Description
	  End Sub
	
	9. Run the form, click Command1, and then click Command2. Command1 displays 440
	  for the Error Number, the name of the database for the Error Source, and
	  Automation Error for the Error Description.
	
	  Command2 displays 98 for the Error Number, ThrowErr for the Error Source, and
	  109 for the Error Description.
	
	  Further clicks on Command1 display the correct error information.
	
	REFERENCES
	==========
	
	For more information about COMRETURNERROR(), the ERROR command, or building COM
	servers, please see the Visual FoxPro documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
