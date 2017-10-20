---
layout: page
title: "Q178527: PRB: VB5 SP2 and SP3 Give Incorrect Floating Point Results"
permalink: /kb/178/Q178527/
---

## Q178527: PRB: VB5 SP2 and SP3 Give Incorrect Floating Point Results

{% raw %}

	Article: Q178527
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVBDB
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
	
	Some calculations yield differing results depending on the prior state of the
	floating point processor.
	
	RESOLUTION
	==========
	
	Run a simple calculation, such as D = Int(D), to reset the floating point
	control registers prior to doing floating point calculations. Note that you may
	have to do this prior to each calculation sequence, depending on what external
	calls are made between calculation sequences.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual Basic 5.0 (without Visual Studio 97 Service Packs 2 or 3) on a
	  clean machine.
	
	2. Make a project with two CommandButton and the following code:
	
	        Private Sub Command1_Click()
	        Dim K0 As Double, K1 As Double, K2 As Double, N As Double
	          K0 = 0.029204
	          K1 = -1.0508
	          K2 = -0.34226
	          N = 0#
	          Do While N <= 2.75
	            N = N + 0.02
	          Loop
	          MsgBox -(K1 + 2# * K2 * N) * Exp(K0 + K1 * N + K2 * N ^ 2) - 0.012
	        End Sub
	
	        Private Sub Command2_Click()
	          Dim D As Double
	          D = Int(D)
	        End Sub
	
	3. Run the program in the IDE and click the CommandButtons in the following
	  order:
	
	  Command1
	  Command2
	  Command1
	
	  The result of the calculation in each case is: 2.80181002613759E-04.
	
	4. Install Visual Basic 5.0 with the Visual Studio 97 SP2 or SP3, and rerun the
	  program. Note that the result of the calculation is different:
	
	   - Prior to clicking Command2: 2.80181002613761E-04
	
	   - After clicking Command2: 2.80181002613759E-04
	
	Notes
	-----
	
	1. Simply setting N to 2.76 does not cause a problem with the calculation; it
	  must be iterated for the problem to occur.
	
	2. Running a compiled EXE seems to give the correct results, but this may be due
	  to different start-up sequences and is no guarantee of repeatable results if
	  the floating point control registers are altered by a DLL or other call.
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
