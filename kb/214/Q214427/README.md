---
layout: page
title: "Q214427: FIX: &quot;Prompt To Save Changes&quot; Setting Crashes VB IDE Upon Saving"
permalink: /kb/214/Q214427/
---

## Q214427: FIX: &quot;Prompt To Save Changes&quot; Setting Crashes VB IDE Upon Saving

{% raw %}

	Article: Q214427
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbVBp600bug kbIDEProject kbGrpDSVB kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable the "Prompt to Save Changes" setting in a Visual Basic IDE and
	open a project and site a TextBox with its DataFormat property set to a value
	other than default, the Visual Basic IDE crashes upon saving the project files
	when the application is started from the Sub Main of a module.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Place a TextBox on Form1. Set Text1's DataFormat property to anything other
	  than the default (Number, for instance), and then click Apply.
	
	3. From the Project menu, add a Standard module to the project and paste the
	  following code into Module1:
	
	  Public Sub Main()
	     Form1.Show
	  End Sub
	
	4. On the Tools menu, click Options. Select the Environment tab and make sure
	  that Prompt to Save Changes is selected.
	
	5. On the Project menu, click Project1 Properties. Set the Startup object as Sub
	  Main.
	
	6. Press the F5 key to run the project. Visual Basic will prompt you to save the
	  files (frm, bas, and vbp). Accept the defaults and click OK. Once the save is
	  completed, Visual Basic will crash with an error message and the IDE is shut
	  down. The exact error message may differ, but should be similar to the
	  following:
	
	  VB6.EXE - Application Error
	  The Instruction at "0x001a09b2" referenced memory at "0x00000000". The memory
	  could not be "read"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbVBp600bug kbIDEProject kbGrpDSVB kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
