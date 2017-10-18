---
layout: page
title: "Q168060: PRB: TreeView Control HitTest Method Returns Empty String"
permalink: kb/168/Q168060/
---

## Q168060: PRB: TreeView Control HitTest Method Returns Empty String

	Article: Q168060
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a 6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The TreeView control that is contained within the COMCTL32.OCX, version
	1.0.2908, returns NULL from the TreeView HitTest method when there is no Node at
	the specified coordinates. Version 5.00.3714 of the OCX returns an empty string
	in Visual FoxPro.
	
	RESOLUTION
	==========
	
	The best resolution to this is to disable ActiveX dual interface (VTABLE
	binding) support. Issue the =SYS(2333,0) command prior to the instantiation of
	the TreeView control. After the control is instantiated, ActiveX dual interface
	support can be turned back on if desired. See the SYS(2333) Online Help topic in
	Visual FoxPro for more information. Microsoft Technical Support has found that
	it is usually best to leave ActiveX dual interface support disabled.
	
	If disabling the ActiveX dual interface support is not desired, the ISBLANK()
	function can be used in the TreeView HitTest method to return a NULL value. For
	example, =IIF(ISBLANK(xHitTest),.NULL.,xHitTest). See the More Information
	section below for an example of using this technique.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Comctl32.ocx, version 1.0.2908, returns NULL in the TreeView HitTest method when
	there is no Node at the specified coordinates. Version 5.00.3714 returns an
	empty string. In Visual Basic, both versions of the OCX return nothing (NULL).
	Visual FoxPro appears to be handling the return value differently. The behavior
	occurs in both Visual FoxPro 5.0 and Visual FoxPro 5.0a. The newest version of
	the OCX ships with Visual FoxPro 5.0a. The following code illustrates the
	behavior:
	
	     =SYS(2333,1)                && to make sure VTABLE binding is on
	     *=SYS(2333,0)               && as a test, unremark this and rerun code
	     frmOLEForm=CREATEOBJECT('form')
	     frmOLEForm.Show
	     =MessageBox('In the next dialog box, choose the "Insert Control" '+ ;
	        'button and then the "Microsoft TreeView Control" from the list.',0)
	     frmOLEForm.AddObject('OLETree1','olecontrol')
	     frmOLEForm.OLETree1.Visible = .T.
	     =SYS(2333,1)                && this is optional
	
	     ACTIVATE SCREEN
	
	     xHitTest=frmOLEForm.OLETree1.HitTest(1,1)
	     ? TYPE("xHitTest")
	     ? IIF(ISBLANK(xHitTest), 'Empty', xHitTest)
	     * The following is the workaround if VTABLE binding is not disabled
	     ? IIF(ISBLANK(xHitTest), .NULL., xHitTest)
	
	TYPE("xHitTest") should return "O" for object, because, according to the Help
	file, the HitTest method returns an object reference. In the newest version of
	the OCX and with ActiveX Dual Interface support enabled, xHitTest will return a
	Character type ("C") with a value of blank or "empty."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : 5.0 5.0a 6.0
	
	=============================================================================
	
