---
layout: page
title: "Q186583: HOWTO: Use OLE Drag and Drop to Exchange Data Between Apps"
permalink: kb/186/Q186583/
---

## Q186583: HOWTO: Use OLE Drag and Drop to Exchange Data Between Apps

	Article: Q186583
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro now supports OLE Drag and Drop, a powerful and useful tool that
	allows creation of tools and applications that are more readily and seamlessly
	integrated with other applications. Using OLE drag and drop functionality, you
	can move data between applications that support the OLE drag and drop interface
	(such as Visual FoxPro, Visual Basic, Windows Explorer, Microsoft Word,
	Microsoft Excel, and so forth). This article illustrates one approach to
	exchanging data between applications.
	
	MORE INFORMATION
	================
	
	The OLE Drag and Drop features in Visual FoxPro 6.0 are designed to allow
	creation of tools and applications that are readily integrated with other
	Windows applications, Visual Studio components and the Windows desktop.
	
	The sample code in this article illustrates the process of exchanging data
	involving graphic data files between a Visual FoxPro application and other
	Windows applications.
	
	1. Create a program file named Oledemo.prg, using the following code:
	
	  
	
	        PUBLIC ox
	        ox=CREATEOBJECT("frmlist")
	        ox.SHOW
	
	        DEFINE CLASS frmlist AS FORM
	           AUTOCENTER=.T.
	           TOP = 0
	           LEFT = 0
	           HEIGHT = 200
	           WIDTH = 400
	           DOCREATE = .T.
	           OLEDRAGMODE = 1
	           OLEDROPMODE = 1
	           CAPTION = "OLE Drag And Drop Form"
	           NAME = "Form1"
	
	        ADD OBJECT list1 AS LISTBOX WITH ;
	           OLEDRAGMODE = 0, ;
	           OLEDROPMODE = 0, ;
	           HEIGHT = 156, ;
	           LEFT = 24, ;
	           MULTISELECT = .T., ;
	           TOP = 12, ;
	           WIDTH = 121, ;
	           NAME = "List1"
	
	        ADD OBJECT image1 AS IMAGE WITH ;
	           OLEDRAGMODE = 1, ;
	           OLEDROPMODE = 1, ;
	           HEIGHT = 180, ;
	           LEFT = 210, ;
	           TOP = 10, ;
	           WIDTH = 180, ;
	           NAME = "IMAGE1", ;
	           STRETCH=2
	
	        PROCEDURE INIT
	           THIS.getpicfiles()
	        ENDPROC
	
	        PROCEDURE LOAD
	           PUBLIC labmpfiles
	           DECLARE labmpfiles[1]
	        ENDPROC
	
	        PROCEDURE getpicfiles
	           =ADIR(labmpfiles,HOME(4)+'\BITMAPS\ASSORTED\*.BMP')
	           FOR i=1 TO ALEN(labmpfiles,1)
	              if UPPER(RIGHT(labmpfiles[i,1],3))="BMP"
	                 THISFORM.list1.ADDITEM(labmpfiles[i,1])
	              ENDIF
	           NEXT
	        ENDPROC
	
	        PROCEDURE list1.MOUSEDOWN
	           LPARAMETERS nbutton, nshift, nxcoord, nycoord
	           THIS.OLEDRAG(.t.)
	        ENDPROC
	
	        PROCEDURE list1.OLESTARTDRAG
	           LPARAMETERS odataobject, neffect
	           odataobject.CLEARDATA
	           odataobject.SETFORMAT( 15 )
	        ENDPROC
	
	        PROCEDURE list1.OLESETDATA
	           LPARAMETERS odataobject, eformat
	           LOCAL afiles[ 1 ], nlen, ctext
	           nlen = 0
	           IF eformat == 15 && Files
	              FOR i = 1 TO THIS.LISTCOUNT
	                 IF THIS.SELECTED(i)
	                    nlen = nlen + 1
	                    DIMENSION afiles[nLen]
	                   afiles[nLen] = HOME(4)+'BITMAPS\ASSORTED\'+THIS.LIST(i)
	                 ENDIF
	              NEXT
	              odataobject.SETDATA( @afiles, 15 )
	           ENDIF
	        ENDPROC
	
	        PROCEDURE image1.OLEDRAGDROP
	           LPARAMETERS odataobject, neffect, nbutton, nshift, nxcoord, ;
	              nycoord
	           LOCAL cfilename, afiles[ 1 ]
	           IF odataobject.GETFORMAT( 15 )
	              odataobject.GETDATA( 15, @afiles )
	              FOR EACH cfilename IN afiles
	                 THIS.PICTURE = cfilename
	                 INKEY( .5 )
	              NEXT
	           ENDIF
	        ENDPROC
	
	        PROCEDURE image1.OLEDRAGOVER
	           LPARAMETERS odataobject, neffect, nbutton, nshift, nxcoord, ;
	              nycoord, nstate
	           DO CASE
	              CASE nstate = 0 && Drag Enter
	                 IF odataobject.GETFORMAT(15)
	                       THIS.OLEDROPHASDATA = 1
	                       THIS.OLEDROPEFFECTS = 4
	                       neffect = 4
	                    ENDIF
	                 CASE nstate = 1 && DRAG_LEAVE
	                 CASE nstate = 2 && DRAG_OVER
	              ENDCASE
	              THISFORM.REFRESH
	           ENDPROC
	
	        ENDDEFINE
	
	2. In Command window, type the following:
	
	  
	
	        DO OLEDEMO
	
	3. Select any item in the list box appearing on the form. Holding the left mouse
	  button down, drag the selected item to the image control. The selected
	  graphic image appears in the image control.
	
	4. Select any item in the list box appearing on the form. Holding the left mouse
	  button down, drag the selected item to the Command window. The default Bitmap
	  Editor opens with the selected graphic image.
	
	5. Start Windows Explorer. Select any graphics file (ani, .bmp, .cur, .gif,
	  .ico, or .jpg). Holding the left mouse button down, drag the selected item
	  from Windows Explorer to the image control. The selected graphic image
	  appears in the image control.
	
	6. Start Microsoft Word. Select any item in the list box appearing on the form.
	  Holding the left mouse button down, drag the selected item to an open
	  Microsoft Word document. The selected graphic image appears in the open Word
	  document.
	
	REFERENCES
	==========
	
	Visual FoxPro Books Online: Programmer's Guide; Chapter 31 - Interoperability
	and the Internet; OLE Drag and Drop topic.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation
	
	
	Additional query words: FxinteropAccess FxinteropExcel FxinteropWinword FxprgGeneral kbVFp600 kbUIDesign
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
