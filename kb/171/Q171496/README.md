---
layout: page
title: "Q171496: FIX: Bad Filename or Number with Get of UDT"
permalink: /kb/171/Q171496/
---

## Q171496: FIX: Bad Filename or Number with Get of UDT

{% raw %}

	Article: Q171496
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An error occurs when reading fixed-length strings into a UDT.
	
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
	
	1. Create a new Standard EXE project in Visual Basic 5.0.
	
	2. Add a new module to the project.
	
	3. Inside this module, cut and paste the following code:
	
	        Option Explicit
	
	        Type config_rec
	          cnf_sync_byte As Integer
	          cnf_sysout    As String * 8
	          cnf_mode      As String * 8
	          cnf_period    As Integer
	          cnf_cmp_print As Integer
	          cnf_version   As String * 7
	          cnf_prog_id   As Integer
	          cnf_cond_code As Integer
	          cnf_parity    As Integer
	        End Type
	
	        Sub TestFile(Config As config_rec)
	
	          Dim FileNum As Integer
	          Dim cnfgfile As String
	
	          FileNum = FreeFile
	
	          cnfgfile = "Test.Dat"
	
	          On Error GoTo WriteErrHandler
	
	          Open cnfgfile For Binary As FileNum
	          Put #FileNum, 1, Config
	          Close #FileNum
	
	          Open cnfgfile For Binary Access Read As FileNum
	          Get #FileNum, 1, Config
	
	          Close #FileNum
	
	          Exit Sub
	
	          WriteErrHandler:
	              MsgBox "Error : " & Err & " (" & Error & ")"
	
	        End Sub
	
	4. Add a CommandButton to Form1.
	
	5. In the CommandButton's click event, add the following code:
	
	        Dim Config As config_rec
	        TestFile Config
	
	6. Save and run project. There will be an error, and a MsgBox will pop up with
	  the error number (52) and message (Bad File Name Or File Number).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
