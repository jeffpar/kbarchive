---
layout: page
title: "Q263685: BUG: AV in VB IDE Compiling ADODB.Connection.Execute Method"
permalink: /kb/263/Q263685/
---

## Q263685: BUG: AV in VB IDE Compiling ADODB.Connection.Execute Method

{% raw %}

	Article: Q263685
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbVBp kbVBp500bug kbVBp600bug kbIDEProject kbGrpDSVBDB kbGrpDSMDAC kbDSuppor
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are compiling a project by using the ADODB.Connection.Execute method in
	Visual Basic 5.0 or Visual Basic 6.0, the Integrated Development Environment
	(IDE) may shut down or get an Access Violation (AV) with the following error
	message:
	
	  The instruction at "0x0fbdf239" referenced memory at "0x11c92028". The memory
	  could not be "read".
	
	RESOLUTION
	==========
	
	Pass a Variant variable instead of an Array element as the second argument for
	the Execute method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, click References, click to select Microsoft ActiveX
	  Data Objects 2.5 Library, and then click OK.
	
	3. Put the following code in the code window of Form1:
	
	  Dim cn As Connection
	  Private Sub Foot(v As Variant)
	      cn.Execute "", v(0)
	  End Sub
	
	4. Save and compile the project in Native code (which is the default.) To
	  confirm that you are compiling to Native code, on the Project menu, click
	  Project1 Properties, and then click on the Compile tab. Note that the Access
	  Violation described in the "Symptoms" section appears.
	
	5. To work around the problem, replace the code inside Foot() with the
	  following:
	
	      Dim x as Variant
	      cn.Execute "", x
	      v(0) = x
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbVBp kbVBp500bug kbVBp600bug kbIDEProject kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 kbADO260 kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
