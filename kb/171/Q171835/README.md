---
layout: page
title: "Q171835: FIX: Crash When Viewing Data Tips on ParamArray"
permalink: kb/171/Q171835/
---

## Q171835: FIX: Crash When Viewing Data Tips on ParamArray

	Article: Q171835
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A crash may occur while trying to display Data Tips in the IDE. This can occur
	when you have a variant that contains an array of non-variants and pass the
	element of that array to a ParamArray.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE Project in Visual Basic 5.0.
	
	2. Click on Project | Add Module to add a basic module to the project. Note that
	  if you have Visual Basic 5.0 set up to automatically include "Option
	  Explicit" to new modules, remove this line.
	
	3. In the General Declarations area of the module, add the following code:
	
	        Sub main()
	            Dim x(5) as integer
	            v = x
	            r = Formt("????", v(5))
	        End Sub
	
	        Public Function Formt(str As String, ParamArray rgArgs()) As String
	            Dim var As Variant
	            Dim iPos As Integer, iLastPos As Integer
	            Dim strRet As String
	
	            iPos = 0
	            iLastPos = 1
	            For Each var In rgArgs
	                iPos = InStr(iPos + 1, str, "?")
	                If iPos < 1 Then Exit For
	                strRet = strRet & Mid(str, iLastPos, iPos - iLastPos)
	                strRet = strRet & var
	                iLastPos = iPos + 1
	            Next
	
	            If Len(str) > iPos Then strRet = _
	                          strRet & Right(str, Len(str) - (iPos))
	
	            Formt = strRet
	        End Function
	
	4. From the Project menu select the Project1.Properties. On the General tab,
	  make Sub Main the Startup Object.
	
	5. Press the F5 key to run this program.
	
	6. You will get a Type Mismatch error. Click on the dialog's Debug button.
	
	7. In the following line of code:
	
	        strRet = strRet & Mid(str, iLastPos, iPos - iLastPos)
	
	  move the mouse pointer over the variable str to display the Data Tips. Once
	  the Data Tip for this variable has been displayed, move to the next variable,
	  iLastPos, to display its Data Tip. Go back and forth between the two
	  variables several times.
	
	8. Go to the following line of code:
	
	         Public Function Format(str As String, ParamArray rgArgs()) _
	                 As String
	
	  and move the mouse pointer over rgArgs. At this point an Invalid Page Fault
	  and an application error in Visual Basic is displayed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
