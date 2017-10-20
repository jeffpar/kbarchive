---
layout: page
title: "Q269445: FIX: Unloading Form from Control Array Event Causes Error"
permalink: /kb/269/Q269445/
---

## Q269445: FIX: Unloading Form from Control Array Event Causes Error

{% raw %}

	Article: Q269445
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0 SP4
	Operating System(s): 
	Keyword(s): kbVBp600 kbDSupport kbVS600sp4bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 SP4 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 SP4 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 SP4 
	- Microsoft Visual Studio 6.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a Visual Basic project that has a form with control array. You unload
	the form inside of control array's event handler and when the form unloads, you
	set the form to be Nothing. The project works fine with Visual Studio 6.0
	Service Pack 3 installed. However, if Visual Studio 6. 0 Service Pack 4 is
	installed on the computer, the application stops responding when the control
	array's event to unload the form is fired.
	
	RESOLUTION
	==========
	
	- To work around the problem for scenarios 1 and 2 (as described in the "More
	  Information" section of this article), don't set the form to nothing when the
	  form is unloaded.
	
	- To work around the problem for scenario 3, make a form-level reference to the
	  form that will not lose scope while the form is active. To do so, add the
	  following to the General Declarations section:
	
	  Private f as Form
	         
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	There are at least three scenarios in which this bug appears.
	
	Steps to Reproduce the Problem
	------------------------------
	
	Scenario #1
	
	1. Create a Standard EXE Visual Basic Project under Visual Basic 6.0 with Visual
	  Studio 6 Service Pack 4 installed. Form1 is created automatically.
	
	2. Press CTRL+T, and the add any non-intrinsic control into the components
	  dialog box. For example, add "Sheridan 3D Controls" or "Microsoft Windows
	  Common Controls 6.0 (SP4)".
	
	3. Add an instance of SSCommand to Form1. Use the default name, which is
	  SSCommand1.
	
	4. Create a control array by giving the control an index of 0.
	
	5. Add the following code to Form1:
	
	  Private Sub Form_Unload(Cancel As Integer)
	      'The following line causes a fault under SP4, when 'Unload Me' 
	      'is called from an event in a control array.
	      'Comment this out to work around the bug.
	      Set Form1 = Nothing
	  End Sub
	
	  Private Sub SSCommand1_Click(Index As Integer)
	      Unload Me
	  End Sub
	
	6. Save the project, and press F5 to run it.
	
	7. Click the command button. Visual Basic stops responding and displays the
	  following error message:
	
	  The instruction at "0x004051ba" referenced memory at "0x0000007a". The Memory
	  could not be "written".
	
	8. Open the project in the Visual Basic integrated development environment
	  again.
	
	9. Comment out the following line:
	
	  Set Form1 = Nothing
	
	10. Save the project, and then press F5 to run it. Click the command button. The
	  form closes without a problem.
	
	Scenario #2
	
	1. Create a new UserControl.
	
	2. Add the following code:
	
	  Public Event Click()
	           
	  Private Sub UserControl_MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
	      RaiseEvent Click
	  End Sub
	
	3. From the File menu, select Add Project, and then select Standard EXE.
	
	4. Press CTRL+R to display the Project Explorer.
	
	5. Right-click Project1, and select Set as Start Up.
	
	6. Double-click Form1 to open the Form Designer, and then drop an instance of
	  the newly created User Control on it. Use the default name of UserControl11.
	
	7. Create a control array by giving the control an index of 0.
	
	8. Add the following code:
	
	  Private Sub UserControl11_Click(Index As Integer)
	      Unload Me
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	      Set Form1 = Nothing
	  End Sub
	
	9. Save the project and press F5 to run it.
	
	10. Click the UserControl. Visual Basic fails and displays the following error
	  message:
	
	  The instruction at "0x004051ba" referenced memory at "0x0000007a". The Memory
	  could not be "written".
	
	11. Open the project in Visual Basic again.
	
	12. Comment out the line:
	
	  Set Form1 = Nothing
	
	13. Save the project, and then press F5 to run it.
	
	14. Click the UserControl. The form closes without a problem.
	
	Scenario #3
	
	1. Create a new Standard EXE.
	
	2. Add a command button to Form1. Use the default name, which is Command1.
	
	3. Add the following code:
	
	  Private Sub Command1_Click()
	      Dim f As New Form2
	      f.Show
	  End Sub
	        
	
	4. Add Form2 to the project.
	
	5. Press CTRL+T, and then add any non-intrinsic control into the components
	  dialog box, such as "Sheridan 3D Controls" or "Microsoft Windows Common
	  Controls 6.0 SP4)".
	
	6. Add an instance of SSCommand to Form2. Use the default name, which is
	  SSCommand1.
	
	7. Create a control array by giving the control an index of 0.
	
	8. Add the following code to Form2:
	
	  Private Sub SSCommand1_Click(Index As Integer)
	      Unload Me
	  End Sub
	        
	
	9. Save the project, and then press F5 to run it.
	
	10. Click Command1. Form2 appears.
	
	11. Click SSCommand1. Visual Basic stops responding and displays the following
	  with error message:
	
	  The instruction at "0x004051ba" referenced memory at "0x0000007a". The Memory
	  could not be "written".
	
	12. Open the project in Visual Basic again.
	
	13. Change the line
	
	  Dim f as New Form2
	        
	
	  in Form1 to:
	
	  Set f = New Form2
	        
	
	  Add the following code to the General Declarations section of Form1:
	
	  Private f as Form2
	        
	
	14. Save the project, and then press F5 to run it.
	
	15. Click Command1. Form2 appears.
	
	16. Click SSCommand1. The form closes without a problem.
	
	Additional query words: 0x004051ba 0x0000007a
	
	======================================================================
	Keywords          : kbVBp600 kbDSupport kbVS600sp4bug 
	Technology        : kbVSsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVS600SP4 kbVB600SP4 kbVS600Search
	Version           : :6.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
