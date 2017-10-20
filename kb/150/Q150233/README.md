---
layout: page
title: "Q150233: FIX: TopMost Window Does Not Stay on Top in Design Environment"
permalink: /kb/150/Q150233/
---

## Q150233: FIX: TopMost Window Does Not Stay on Top in Design Environment

{% raw %}

	Article: Q150233
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp500fix kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SetWindowPos API function can be used to set a window so that it stays on
	the top of all other windows. However, the window will not stay on top in the
	Visual Basic design environment.
	
	RESOLUTION
	==========
	
	There is no workaround to keep a window TopMost while in the Design Environment.
	However, when the application is compiled to an EXE, invoking the SetWindowPos
	function to keep a Visual Basic form TopMost will correctly work.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	In the Design environment, making a form TopMost causes it to stay on top of
	other Visual Basic Design Environment windows, such as the Properties window and
	Debug window until another application is switched to. Once another application
	has been made active, the form in Visual Basic loses its TopMost attribute, and
	when the focus returns to Visual Basic, it even stays behind the other windows
	within Visual Basic.
	
	To see how the SetWindowPos API function can be applied to keep a window TopMost,
	please see the CallDLLs sample located in the vb\samples\calldlls directory. The
	declaration for the function is in the Declares.bas file, and the call to
	SetWindowPos is located in the mnuSysInfo_Click event contained in the frmMenus
	form.
	
	Steps To Reproduce
	------------------
	
	1. In Visual Basic, open the vb\samples\CallDLLs sample.
	
	2. Press F5 to run the project. Click on the picture of the computer with the
	  right mouse button, and then select the "Always on Top" menu item from the
	  pop-up menu. Now notice that other Visual Basic windows cannot be dragged
	  over the CallDLLs form. Now switch to another application by pressing
	  ALT+TAB. Notice that the other application can cover up the CallDLLs window.
	  Now switch back to Visual Basic, and notice that now the other Visual Basic
	  Design environment windows can cover up the CallDLLs form.
	
	To correct this behavior, the sample can be compiled as an EXE, and then after
	selecting the Always on Top menu item, the window will correctly stay on top of
	other windows.
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbNoKeyWord
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp500fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
