---
layout: page
title: "Q282233: BUG: Access Denied Recompiling VB Project with Public UDT"
permalink: /kb/282/Q282233/
---

## Q282233: BUG: Access Denied Recompiling VB Project with Public UDT

{% raw %}

	Article: Q282233
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 16-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a project and do anything that uses IntelliSense, you receive a
	"permission denied" error message when you try to recompile the project. The
	project defines a public User Defined Type (UDT) that it uses as a parameter to
	a public function, and binary compatibility is set.
	
	RESOLUTION
	==========
	
	Save the changes, and close your project. Then, reopen your project and compile
	it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Note that there are other situations where you expect to receive a "permission
	denied" error message. For example, if you run another application to test your
	.dll, you are not able to recompile your .dll until the other application is
	closed and the .dll is released.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic, create a new ActiveX DLL project. Class1 is created by
	  default.
	
	2. Add the following code to Class1:
	
	  Public Type MyType
	     type1 as integer
	     type2 as integer
	  End Type
	
	  Public Function F1 (t as MyType)
	  End Function
	
	3. On the File menu, save the project.
	
	4. On the File menu, select Make to compile the project.
	
	5. On the Project menu, select Properties, select the Component tab, and then
	  set the Binary Compatibility to the compiled .dll.
	
	6. Close Visual Basic.
	
	7. Reopen Visual Basic, and reload the .dll project you just created.
	
	8. Drop down the list in the upper-left of the Class1 code window where it says
	  "(General)," and select Class. This puts your cursor in the Class_Initialize
	  procedure. Type "Err." (without the quotation marks) to see the IntelliSense.
	  You can now press the BACKSPACE key to delete Err.. (You just want to view
	  the IntelliSense, not add a line of code to the project.)
	
	9. Try to recompile the project, and note that you receive the "permission
	  denied" error message.
	
	10. Save the project, and then close Visual Basic.
	
	11. Reopen Visual Basic, reload the project, and note that you are able to
	  recompile it.
	
	NOTE: Instead of closing Visual Basic in the preceding steps, you can also start
	a new Standard EXE (or any other project type), and then reload the ActiveX DLL
	project.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
