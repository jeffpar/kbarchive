---
layout: page
title: "Q160697: WD97: Macro Name Truncated in Customize Dialog Box"
permalink: kb/160/Q160697/
---

## Q160697: WD97: Macro Name Truncated in Customize Dialog Box

	Article: Q160697
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you view the Commands list in the Customize dialog box, the right-most
	characters in the command or macro names are truncated.
	
	NOTE: When you select a Word command instead of a macro, you can click the
	Description button to view the full command name. This option is not available
	when you select a macro.
	
	CAUSE
	=====
	
	This problem occurs when the command name or macro name that you select is so
	long that it is not fully visible in the Commands list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Microsoft Word appends additional information to the macro name to better define
	the macro. For example, Word might append a macro called "InsertMergeFields"
	with "Normal.NewMacros." so that when it appears in the Commands list it
	resembles the following:
	
	  Normal.NewMacros.InsertMergeFields
	
	Or, Word might append a macro called "DoubleSpacingMacro" with
	"TemplateProject.NewMacros." so that when it appears in the Commands list it
	resembles the following:
	
	  TemplateProject.NewMacros.DoubleSpacingMacro
	
	The full macro name appears when you add the macro to a menu or a toolbar button.
	
	Additional query words: 8.0 word97 chopped clipped missing truncated gone incomplete wrong
	
	======================================================================
	Keywords          : kbmacro word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
