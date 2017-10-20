---
layout: page
title: "Q257496: FIX: Optimized Code Incorrectly Compares Floating Point Numbers"
permalink: /kb/257/Q257496/
---

## Q257496: FIX: Optimized Code Incorrectly Compares Floating Point Numbers

{% raw %}

	Article: Q257496
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5f
	Last Modified: 21-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running an application as a compiled EXE and a comparison of numeric data
	types is evaluated, incorrect results may be returned when the comparison
	involves numbers of the data type Single or Double and the application was
	compiled with optimizations.
	
	CAUSE
	=====
	
	This bug is caused by a problem in the way the compiler creates optimized code
	for floating point comparisons. However, the problem does not always occur just
	by simply comparing one floating point value to another. It is affected by the
	additional code that surrounds the actual code that performs the calculation.
	For example, in the Steps to Reproduce Behavior in the "More Information"
	section of this article, it is the combination of the following that produces
	the incorrect results:
	
	- A comparison is performed involving values of the Single or Double data type.
	
	- The compiler is set to use compiler optimizations.
	
	- The comparison occurs in a called sub-routine.
	
	- An array is referenced.
	
	- An IF..THEN..ELSEIF code construct is used.
	
	Other conditions can lead to the miscalculation, such as the use of a
	SELECT..CASE statement instead of IF..THEN..ELSEIF.
	
	RESOLUTION
	==========
	
	There are two possible means to solve this issue. The recommended way is to
	install the latest service pack for Visual Studio 6.0. An alternative way is to
	recompile the executable with no compiler optimizations.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add two TextBox controls to Form1.
	
	3. Add a CommandButton control to Form1.
	
	4. Paste the following code into Form1's code window:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	      ' Call procedure to make calculations and comparisons
	      Test Val(Text1.Text), 0.8801
	  End Sub
	
	  Private Sub Form_Load()
	      ' Initialize textbox values
	      Me.Text1 = ""
	      Me.Text2 = ""
	  End Sub
	
	5. From the Project menu, add a new standard module to the project.
	
	6. Paste the following code into the code module:
	
	  Option Explicit
	
	  ' Dimension a private array
	  Private Arr(1 To 3) As Integer
	
	  Public Sub Test(x As Integer, y As Single)
	      Dim z As Single
	      If x = 1 Then z = 6.2
	      If x = 2 Then z = 9.7
	      If x = 3 Then z = 15
	      
	      If z <= 8.5 * y Then
	          Arr(x) = 1
	      ElseIf z <= 13 * y Then
	          Arr(x) = 2
	      Else
	          Arr(x) = 3
	      End If
	      
	      ' Put result into second textbox
	      Form1.Text2 = Arr(x)
	  End Sub
	
	7. From the Project menu, select the project's properties, click the Compile
	  tab, and then select Compile to Native Code and Optimize for Fast Code.
	
	8. Run the sample in the Visual Basic design environment.
	
	9. In the first TextBox, type "1" (without the quotation marks), "2" (without
	  the quotation marks), and "3" (without the quotation marks), pressing the
	  CommandButton after each entry. The results in the second TextBox should be
	  1, 2, and 3, respectively.
	
	10. From the File menu, choose Make Project1.exe to compile the project to an
	  EXE.
	
	11. Run the compiled program.
	
	12. Again, type the values "1" (without the quotation marks), "2" (without the
	  quotation marks), and "3" (without the quotation marks) into the first
	  TextBox. This time the results in the second TextBox are 1, 3, and 3.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbCompiler kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
