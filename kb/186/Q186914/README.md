---
layout: page
title: "Q186914: HOWTO: Implement Additional Interfaces in an ActiveX Control"
permalink: /kb/186/Q186914/
---

## Q186914: HOWTO: Implement Additional Interfaces in an ActiveX Control

{% raw %}

	Article: Q186914
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to implement an additional interface in a Visual
	Basic ActiveX control. ActiveX EXE and DLL components are better suited for this
	purpose, but it may be desirable, for example, to implement a custom interface
	that is present in all of your ActiveX controls. That is the approach taken in
	the example shown in this article.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Start a new ActiveX DLL project in Visual Basic. Change the name of the
	  project to BaseClass. Change the name of Class1 to CustomInterface. Insert
	  the following code into the CustomInterface class module:
	
	        Public Function testCustomInterface()
	        End Function
	
	2. On the File menu, click Add Project to add a new ActiveX Control project.
	  Click References on the Project menu, and check the reference to BaseClass.
	  Insert the following code into the General Declarations section of the
	  UserControl's code module:
	
	        Implements BaseClass.CustomInterface
	
	        Private Function CustomInterface_testCustomInterface() As Variant
	           CustomInterface_testCustomInterface = _
	                                 "Custom Interface test successful."
	        End Function
	
	        Public Function testStandardInterface() As Variant
	           testStandardInterface = "Standard Interface test successful."
	        End Function
	
	3. Change the name of the project to interfacesControl. Click Add Project on the
	  File menu to add a new Standard EXE project. Right-click on Project1 in the
	  Project window and select the Set as Start Up option.
	
	4. On the Project menu, click References, and then check the reference to
	  BaseClass. Place the UserControl (interfacesControl) on Form1. Add a
	  CommandButton to Form1.
	
	5. Insert the following code into the General Declaration section of Form1:
	
	         Private Sub Command1_Click()
	
	            Debug.Print Me.UserControl11.testStandardInterface
	
	            Dim obj As BaseClass.CustomInterface
	            Set obj = Me.UserControl11.Object
	            Debug.Print obj.testCustomInterface
	
	         End Sub
	
	6. Run the project, click Command1 and note that both interfaces responded in
	  the Immediate Window,.
	
	Additional query words: kbDSupport kbDSD kbActiveX kbClientServer kbVBp500 kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
