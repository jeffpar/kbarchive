---
layout: page
title: "Q150221: FIX: DLLs Not Shown in the Add Reference...Browse Dialog Box"
permalink: kb/150/Q150221/
---

## Q150221: FIX: DLLs Not Shown in the Add Reference...Browse Dialog Box

	Article: Q150221
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,95,98
	Operating System(s): 
	Keyword(s): kbDLL kbVBp kbVBp400bug kbVBp500bug kbVBp600fix kbOSWin95 kbOSWin98 kbGrpDSVB
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Add References dialog box (on the Tools menu, select References, then
	select the Browse button), DLLs are not shown. This behavior occurs even if the
	Files of Type option includes "*.dll" and the All Files ("*.*") option is
	selected.
	
	RESOLUTION
	==========
	
	From the View menu in Windows Explorer, select Options. Then select the View
	tab, and choose the Show all Files button.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	The user can choose whether to view DLL files in Windows Explorer from the View
	menu, by selecting Options, selecting the View tab, and then choosing either the
	Show all Files button or the Hide Files of these types: button. If the latter is
	chosen, then system files are not displayed in Windows Explorer, and they are
	also not displayed in Common Dialogs invoked in applications such as the Add
	Reference dialog in Visual Basic.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Make sure the setting mentioned in the workaround above is set for Hide files
	  of these types:.
	
	2. In Visual Basic, from the Tools menu, select References, and choose the
	  Browse button. DLL files are unavailable.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDLL kbVBp kbVBp400bug kbVBp500bug kbVBp600fix kbOSWin95 kbOSWin98 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : :4.0,5.0,95,98
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
