---
layout: page
title: "Q142392: FIX: Drag Icon Property Ignored on Outline Control OCX"
permalink: /kb/142/Q142392/
---

## Q142392: FIX: Drag Icon Property Ignored on Outline Control OCX

	Article: Q142392
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When manual drag is initiated on an Outline control (or any OLE Container
	Control) the standard box icon is used rather than the icon you set in the
	DragIcon property.
	
	CAUSE
	=====
	
	This is caused by the OLE Container Control ignoring the event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro
	version 3.0b for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Add an Outline .ocx control to a form.
	
	2. Set the DragIcon property to be a valid cursor file such as:
	
	  C:\Vfp\Samples\Graphics\Cursors\Palette.cur
	
	3. Set the DragMode property to 1 for manual drag. (This is necessary as the
	  outline control doesn't support automatic drag. If it did, you wouldn't be
	  able to access the outline items.)
	
	4. Initiate manual drag in the DblClick or PictureDblClick events using the
	  following line of code:
	
	     THIS.Drag
	
	5. Run the form, and double-click the text or folder icon.
	
	6. Note which drag cursor you see.
	
	Running the following code in Visual FoxPro 3.0 causes the error to occur. This
	problem is corrected in version 3.0b. Double-click the item to initiate drag.
	
	  PUBLIC oForm1
	  oForm1=CREATEOBJECT("Form1")
	  oForm1.Show()
	
	  *************************
	  *-- Form:         form1
	  *
	  DEFINE CLASS Form1 AS Form
	       DoCreate = .T.
	       Caption = "Form1"
	       Name = "Form1"
	
	       ADD OBJECT OLEControl1 AS OLEControl WITH ;
	            Top = 24, ;
	            Left = 72, ;
	            Height = 100, ;
	            Width = 100, ;
	            DragIcon = "SAMPLES\GRAPHICS\CURSORS\PALETTE.CUR", ;
	            DragMode = 1, ;
	            OLETypeAllowed=-2,;
	            OleClass="MSOutl.Outline",;
	            OleLCID=1033,;
	            Name = "OLEControl1"
	
	       PROCEDURE DragDrop
	            LPARAMETERS oSource, nXCoord, nYCoord
	            IF oSource.ListIndex>=0
	                 newvar = 'lbl' + ALLTRIM(STR(nXCoord)) + '_' + ;
	                          ALLTRIM(STR(nYCoord))
	                 THIS.ADDOBJECT(newvar,'label')
	                 WITH THIS.&newvar.
	                      .Top=nycoord
	                      .Left=nXCoord
	                      .Caption=oSource.List(oSource.ListIndex)
	                      .Visible=.T.
	                 ENDWITH
	            ENDIF
	       ENDPROC
	
	       PROCEDURE OLEControl1.DblClick
	            THIS.Drag
	       ENDPROC
	
	       PROCEDURE OLEControl1.PictureDblClick
	            LPARAMETERS ListIndex
	            THIS.Drag
	       ENDPROC
	
	       PROCEDURE OLEControl1.Init
	            THIS.AddItem('text1')
	            THIS.AddItem('text2')
	            THIS.AddItem('text3')
	            THIS.AddItem('text4')
	       ENDPROC
	  ENDDEFINE
	  *
	  *-- EndDefine: form1
	  *************************
	
	Additional query words: VFoxWin buglist3.00 fixlist3.00b
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
