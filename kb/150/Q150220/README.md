---
layout: page
title: "Q150220: FIX: Invalid Page Fault or GPF Results When Making an EXE File"
permalink: /kb/150/Q150220/
---

## Q150220: FIX: Invalid Page Fault or GPF Results When Making an EXE File

{% raw %}

	Article: Q150220
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0;
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp500fix kbGrpDSVB
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Application Description field (on the Tools menu, select Options dialog,
	and select Project tab) contains more than 101 characters, then making an EXE
	file for the project causes a General Protection Fault or Invalid Page Fault.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual Basic
	version 5.0 for Windows.
	
	WORKAROUND
	==========
	
	Avoid the problem by ensuring that the Application Description is less than 101
	characters in length. Descriptions of this length are not recommended in any
	case, because some Object Browsers can truncate the string due to its size.
	
	MORE INFORMATION
	================
	
	This problem only occurs if the Remote Server Support files are generated for
	the project. This is controlled in the Options for the EXE file which can be
	obtained by pressing the Options button in the Make EXE dialog box.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. From the Insert menu, select Class Module to create the module.
	
	3. Press F4 to invoke the Properties for the Class module, change the Instancing
	  property to 2-Createable MultiUse, and change the Public property to True.
	
	4. From the Tools menu, select Options. Then select the Project tab, and type in
	  an Application Description that is greater than 101 bytes long. For example:
	
	  0123456789012345678901234567890123456789012345678901234567890123456789
	  01234567890123456789012345678901
	
	5. From the File menu, select Make EXE, and in the dialog box, select the
	  Options button. Select the Remote Server Support Files check box. Click OK,
	  and then attempt to make the EXE file. An Invalid Page Fault or a General
	  protection Fault occurs.
	
	Additional query words: kbNoKeyword kbCompiler
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp500fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0;
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
