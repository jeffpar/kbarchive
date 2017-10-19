---
layout: page
title: "Q176164: FIX: Optional Argument Default Value Breaks Binary Compatibility"
permalink: /kb/176/Q176164/
---

## Q176164: FIX: Optional Argument Default Value Breaks Binary Compatibility

	Article: Q176164
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the default value of an Optional String argument to vbNullString causes
	the following error when the project is compiled with Binary Compatibility:
	
	  "<procedure> in the <class> class module has arguments and/or a
	  return
	  type that is incompatible with a similar declaration in the
	  version-compatible component"
	
	RESOLUTION
	==========
	
	Use quotation marks instead of vbNullString. For example:
	
	     Optional myString as String = ""
	
	You may also see the error:
	
	  "Variable uses an automation type not supported in Visual Basic (Error 458)."
	
	This occurs when you attempt to set the default value of a Variant optional
	argument to Null. Avoid using any of the null-related constants (vbNull,
	vbNullString, etc.) when providing a default value for an optional argument.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	A project containing the specification of this default value returns an error
	stating that the method for which the argument is defined is not Binary
	Compatible. This problem is specific to the use of vbNullString. It does not
	affect default values for Optional arguments in general.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX DLL project.
	
	2. Insert the following code into Class1:
	
	        Public Function meth1(pf1 As String, Optional pf2 As String = _
	            vbNullString) As Boolean
	           'Sample method
	        End Function
	
	3. From the File menu, select Make Project1.DLL.
	
	4. From the Project menu, select Project1 Properties.
	
	5. Click the Component Tab.
	
	6. Set the Version Compatibility to Binary Compatibility.
	
	7. Verify that TestBinaryProject1.dll is listed in the File Location Box at the
	  bottom of the form.
	
	8. Close the Project Properties form, and select "Make TestBinary Project1.DLL"
	  from the File menu. Note that the error occurs at this point.
	
	9. Select "Make Project1.dll" from the File menu. Change the path to the DLL so
	  that it is in a different location than the originally compiled version of
	  project1.dll and click OK. The error occurs at this point.
	
	Additional query words: kbVBp500BUG kbVBp600fix kbAutomation kbVBp kbdsd KBCOMPILER kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
