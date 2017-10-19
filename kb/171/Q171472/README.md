---
layout: page
title: "Q171472: FIX: Toggling PortOpen w/MSCOMM32.OCX Leaks Memory on Win95/98"
permalink: /kb/171/Q171472/
---

## Q171472: FIX: Toggling PortOpen w/MSCOMM32.OCX Leaks Memory on Win95/98

	Article: Q171472
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp500bug kbVS97fix kbVS97sp3fix kbGrpDSVB kbDSupport kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the PortOpen method of the MSCOMM32.OCX control, continuous or
	multiple uses of this method will produce a memory drain. The exact amount of
	memory and resources lost varies with different port drivers installed.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project.
	
	2. Add an instance of the mscomm32.ocx control to Form1.
	
	3. Add the following code to Form1.
	
	        Sub Form_Load()
	          Show
	          While True
	             MSComm1.Settings = "9600, N, 8, 1"
	             MSComm1.PortOpen = True
	             x = Timer
	             Do While x + 0.25 > Timer
	                 DoEvents: DoEvents: DoEvents
	             Loop
	             MSComm1.PortOpen = False
	             x = Timer
	             Do While x + 0.25 > Timer
	                 DoEvents: DoEvents: DoEvents
	             Loop
	          Wend
	        End Sub
	    
	
	4. Run the application by pressing the F5 Key.
	
	After about 100 iterations, memory will be reduced by about 4k.
	
	Additional query words: com port
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp500bug kbVS97fix kbVS97sp3fix kbGrpDSVB kbDSupport kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
