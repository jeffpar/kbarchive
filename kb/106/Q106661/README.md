---
layout: page
title: "Q106661: How to Determine the Shape of the Mouse Cursor"
permalink: /kb/106/Q106661/
---

## Q106661: How to Determine the Shape of the Mouse Cursor

	Article: Q106661
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,2.5b,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In FoxPro for Windows, the cursor (mouse pointer) can change shape depending on
	where it is located on the screen. There isn't a function in FoxPro that tells
	you the current shape of the cursor. The code example below shows one method of
	determining the cursor's shape.
	
	MORE INFORMATION
	================
	
	Several functions in the Microsoft Windows Software Development Kit (SDK) can be
	used to control and get information about the current Windows cursor. The two
	that this program (IBEAM.PRG) uses are LoadCursor() and GetCursor(). The REGFN()
	and CALLFN() routines within FOXTOOLS.FLL are used to call the SDK cursor
	functions.
	
	     * IBEAM.PRG starts here:
	
	     #DEFINE idc_arrow       (32512)
	     #DEFINE idc_ibeam       (32513)
	     #DEFINE idc_wait        (32514)
	     #DEFINE idc_cross       (32515)
	     #DEFINE idc_uparrow     (32516)
	     #DEFINE idc_size        (32640)
	     #DEFINE idc_icon        (32641)
	     #DEFINE idc_sizenwse    (32642)
	     #DEFINE idc_sizenesw    (32643)
	     #DEFINE idc_sizewe      (32644)
	     #DEFINE idc_sizens      (32645)
	
	     SET LIBRARY TO SYS(2004)+'foxtools.fll'
	
	     * Register the LoadCursor function to find out the resource
	     * number for IDC_IBEAM.
	
	     fnhand=regfn('LoadCursor',"IL","I")
	     cursor_res=callfn(fnhand,0,idc_ibeam)
	
	     * Find out what the current cursor resource number is.
	
	     fn2hand=regfn('GetCursor',"","I")
	     CURSOR=callfn(fn2hand)
	
	     * Test to see if the current cursor resource number equals
	     * that of IDC_IBEAM (or whatever we change it to).
	
	     IF cursor_res = CURSOR
	        WAIT WINDOW "That's the I-Beam Cursor!"
	     ELSE
	        WAIT WINDOW "That's not an I-Beam Cursor!"
	     ENDIF
	
	To run IBEAM.PRG, type the following line in the Command window. When you press
	F4, IBEAM.PRG will be called and will tell you whether the cursor is in the
	I-beam shape or not, depending on the position of the mouse.
	
	  ON KEY LABEL F4 DO IBEAM.PRG
	
	REFERENCES
	==========
	
	Microsoft Windows SDK "Programmer's Reference, Volume 2: Functions"
	
	FOXTOOLS.WRI in the FoxPro version 2.5 for Windows FOXPROW\GOODIES\FOXTOOLS
	directory
	
	Additional query words: VFoxWin FoxWin 2.50 arrow foxtools foxtools.fll
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : WINDOWS:2.5,2.5a,2.5b,3.0
	
	=============================================================================
	
