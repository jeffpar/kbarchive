---
layout: page
title: "Q181511: FIX: Custom AppWizard May Ignore Changes to Predefined Macros"
permalink: /kb/181/Q181511/
---

## Q181511: FIX: Custom AppWizard May Ignore Changes to Predefined Macros

{% raw %}

	Article: Q181511
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbcode kbwizard kbVC400bug kbVC410bug kbVC420bug kbVC500fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Custom AppWizard based on standard AppWizard steps, the wizard framework
	may ignore changes that custom steps make to predefined wizard macros. The
	standard AppWizard steps define and use such predefined macros; for example, the
	macro VERBOSE conditionally generates elaborate comments in the destination
	project's source files.
	
	CAUSE
	=====
	
	A custom AppWizard's custom step usually makes changes to the macro table stored
	in m_Dictionary during OnDismiss, a function called when the user exits the
	page. However, clicking the Custom AppWizard's Finish button also sets the
	values of predefined macros, based on internal values stored by the standard
	AppWizard steps. If a custom step changes a macro that a standard step controls,
	the internal value stored by the standard step is unaffected. So, when Finish
	sets the predefined macros, such changes made by custom steps are effectively
	ignored.
	
	RESOLUTION
	==========
	
	Instead of modifying predefined macros in OnDismiss, override the virtual
	function CCustomAppWiz::ProcessTemplate. Alternatively, preset the macro's value
	in Init.
	
	These techniques also work in Visual C++ version 5, even though the bug is fixed
	in this version.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in the AppWizard included
	with Visual C++, 32-bit editions, version 5.0.
	
	MORE INFORMATION
	================
	
	The macros referred to in this article are the symbols that AppWizard reads from
	the m_Dictionary table. The AppWizard replaces occurrences of these symbols in
	source template files with the text value associated with them, or it tests them
	for existence. This article does NOT refer to VBScript macro commands.
	
	There are two types of macros that a Custom AppWizard can use:
	
	- Macros the standard AppWizard defines and uses.
	
	- Macros that custom steps define, used in the custom implementation.
	
	The Finish button sets the predefined macros again to properly synchronize them.
	For example, certain macros that control generating a doc-based application, are
	removed for dialog-based applications. If the user chooses a doc-based
	application, sets its options, then goes back and changes to a dialog-based
	application, macros used only by the doc-based application may still exist.
	There are many other cases, such as database applications without file support,
	or mini-servers, which render certain symbols senseless or require others.
	
	The Custom AppWizard may set or remove a macro in Init to modify the standard
	AppWizard default, so the user can choose to change it back in the standard
	step.
	
	For additional information, please see the following article here in the
	Microsoft Knowledge Base:
	
	  Q189073 Step 2 of the MFC AppWizard Does Not Set Macro Values
	
	Sample Code
	-----------
	
	  void CTestWizAppWiz::ProcessTemplate( LPCTSTR lpszInput, DWORD dwSize,
	                                        OutputStream* pOutput )
	  {
	     // The framework calls ProcessTemplate repeatedly,
	     // but the macro needs to be modified only once.
	     static BOOL bRemovedMacro = FALSE;
	
	     if ( !bRemovedMacro )
	     {
	           TestWizaw.m_Dictionary.RemoveKey("VERBOSE");
	           bRemovedMacro = TRUE;
	     }
	
	     CCustomAppWiz::ProcessTemplate( lpszInput, dwSize, pOutput );
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbwizard kbVC400bug kbVC410bug kbVC420bug kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : WINNT:4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
