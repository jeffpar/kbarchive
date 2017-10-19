---
layout: page
title: "Q184286: BUG: Enumerated Type Parameters Break Binary Compatibility"
permalink: /kb/184/Q184286/
---

## Q184286: BUG: Enumerated Type Parameters Break Binary Compatibility

	Article: Q184286
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500bug kbGrpDSVB
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
	
	When developing an ActiveX DLL or ActiveX EXE, Visual Basic might erroneously
	report that you have broken Binary Compatibility when you try to compile your
	project. This could happen even if you have not changed a single line of code in
	your project.
	
	CAUSE
	=====
	
	The most common cause for this problem is a known bug, in which ENUMS is used as
	a function parameter.
	
	For example, if you have the following line of code in an ActiveX DLL:
	
	     Public Property Get MyProp(NewValue As MyEnum) as clsMyClass
	
	When you try to compile this code with Binary Compatibility turned on, you might
	receive the following error:
	
	  MyProp in the MyClass Class Module has arguments and a return type that is
	  incompatible with a similar declaration in version component.
	
	When you receive the error, you can click the "Show Declaration" command button
	(which shows you the version-compatible declaration of the function and the
	declaraton in the current project). Note that the two declarations are exactly
	the same, even though Visual Basic gives the error.
	
	Service Pack 3 for Microsoft Visual Studio addresses this issue, but does not
	always fix the bug.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q171819 FIX: Invalid Enum Value Causes Incompatible Binary Compatible
	
	RESOLUTION
	==========
	
	The following are three suggested workarounds for this bug:
	
	- Do not use Binary Compatibility. This is NOT a good workaround because any
	  client using the ActiveX component must be recompiled each time modifications
	  are made to the component.
	
	- Rename all Enum statements as Long. For example, change the following code
	  from:
	
	  Public Property Get MyProp(NewValue As MyEnum) As clsMyClass
	
	  -to-
	
	  Public Property Get MyProp(NewValue As Long) as clsMyClass
	
	  This workaround eliminates the Binary Compatibility bug problem; however,
	  there is an associated problem. You lose the "Intellisense" feature when you
	  are programming the ActiveX component.
	
	- Place all ENUMS into a separate DLL, and reference the DLL to get the Type
	  Library information about the ENUMS. This workaround ensures that
	  compatibility is kept, and maintains the "Intellisense" feature. This
	  workaround is described in more detail below.
	
	Steps to Implement the Type Library Workaround
	----------------------------------------------
	
	The Binary Compatibility bug usually occurs with very large projects, and late in
	development. However, if you do start receiving broken Binary Compatibility
	error messages, you should do the following:
	
	1. Copy all ENUM declarations into a new ActiveX DLL.
	
	2. Go to the select Project Properties from the Project menu and select the
	  Component tab.
	
	3. Select the Remote Server Files option. This will make sure that a TLB file is
	  generated when the ActiveX DLL is compiled. A TLB file contains the Type
	  Library for the ActiveX Component it is associated with.
	
	4. Save the ActiveX DLL for future use.
	
	5. Compile the ActiveX DLL
	
	6. Unregister the ActiveX DLL you just compiled by doing the following, select
	  Run from the Windows Start menu and type in the following command:
	
	  " <Path to RegSvr32>\Regsvr32.Exe /u <Path to
	  Project>\ProjectName.DLL" (without the quotation marks)
	
	7. Load up the actual ActiveX Server that is raising the broken Binary
	  Compatibility error message.
	
	8. Make sure all the ENUM declarations have been removed.
	
	9. Select References from the Project menu.
	
	10. From References, select the "Browse" button.
	
	11. Locate and select your newly created TLB file.
	
	12. Compile your ActiveX server. The error message will no longer appear.
	
	You can also bypass unregistering the ActiveX DLL which contains the ENUM
	declares, and reference the DLL itself instead of the TLB file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: kbDSupport kbdss vb6test
	
	======================================================================
	Keywords          : kbVBp500bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
