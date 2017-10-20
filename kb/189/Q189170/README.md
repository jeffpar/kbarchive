---
layout: page
title: "Q189170: HOWTO: Package HiWord/LoWord Values Into a Long Parameter"
permalink: /kb/189/Q189170/
---

## Q189170: HOWTO: Package HiWord/LoWord Values Into a Long Parameter

{% raw %}

	Article: Q189170
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For some API functions, such as SendMessage or PostMessage, you may need to
	package two short Integer values into a Long variable to pass them as a single
	parameter. This article demonstrates how to package such Integers and how to
	unpack them if necessary.
	
	MORE INFORMATION
	================
	
	The trick to packing values is bit shifting. Because Visual Basic does not
	provide bit shift operators to use, you need to do things the old fashioned way;
	through multiplication. To make an Integer the high word for a Long value, you
	need to multiply it by &H10000. This has the effect of shifting the bit
	values 16-bits (2-bytes) to the left, making room for the low word value you
	want to add.
	
	Before you can add the low word value, however, you need to make an adjustment.
	Remember that Visual Basic Integer types are signed values, but the low word
	value needs to be unsigned if you plan to add it to your high word value. To
	make sure Visual Basic treats the low word as an unsigned integer, you need to
	perform a bitwise "And" on the value using &HFFFF& as a mask. In effect,
	this saves the value as a Long integer with the high (signed) bit cleared but
	keeps the original Integer's bit value preserved.
	
	With this in mind, here is a Visual Basic function that creates a Long value from
	two Integers:
	
	     Function MakeDWord(LoWord As Integer, HiWord As Integer) As Long
	        MakeDWord = (HiWord * &H10000) Or (LoWord And &HFFFF&)
	     End Function
	
	Only a few API functions require that you unpack a double word into two short
	Integers. If you find that you need to perform such a task, you can use
	conversion routines similar to these:
	
	     Function LoWord(DWord As Long) As Integer
	        If DWord And &H8000& Then ' &H8000& = &H00008000
	           LoWord = DWord Or &HFFFF0000
	        Else
	           LoWord = DWord And &HFFFF&
	        End If
	     End Function
	
	     Function HiWord(DWord As Long) As Integer
	        HiWord = (DWord And &HFFFF0000) \ &H10000
	     End Function
	
	Both these functions simply mask the portion of the Long integer they want to
	return using the bitwise "And" operator. The HiWord function shifts this value
	right 16-bits by dividing it by &H10000. The LoWord function can simply
	return the value of the "And" operation in most cases. However, because Visual
	Basic Integers are signed, any low word value that has its high bit set must be
	converted back into a negative value using the "Or" operator and a mask of
	&HFFFF0000.
	
	Sample Code
	-----------
	
	1. Open a new Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Add a CommandButton to the lower-right corner of Form1.
	
	3. Add the following code to the General Declaration section for Form1:
	
	        Private Declare Function SendMessage Lib "user32" _
	           Alias "SendMessageA" (ByVal hwnd As Long, _
	                                 ByVal wMsg As Long, _
	                                 ByVal wParam As Long, _
	                                 ByVal lParam As Long) As Long
	
	        Private Const MK_LBUTTON = &H1
	        Private Const WM_LBUTTONDOWN = &H201
	
	        Function MakeDWord(LoWord As Integer, HiWord As Integer) As Long
	           MakeDWord = (HiWord * &H10000) Or (LoWord And &HFFFF&)
	        End Function
	
	        Private Sub Form_MouseDown(Button As Integer, Shift As Integer, _
	        X As Single, Y As Single)
	           Form1.Cls
	           Form1.Print "Button Click Event Fired"
	           Form1.Print "Position X:" & Str$(X / Screen.TwipsPerPixelX)
	           Form1.Print "Position Y:" & Str$(Y / Screen.TwipsPerPixelY)
	        End Sub
	
	        Private Sub Command1_Click()
	           Dim nMousePosition As Long
	           ' nMousePosition stores the x (hiword) and y (loword) values
	           ' of the mouse cursor as measured in pixels.
	
	           Let nMousePosition = MakeDWord(16, 18)
	           Call SendMessage(Me.hwnd, WM_LBUTTONDOWN, MK_LBUTTON, _
	           nMousePosition)
	        End Sub
	
	4. Press the F5 key to run the project.
	
	  You will notice that anywhere you click on the Form, the values of the mouse
	  cursor are displayed (in pixels). When you click the CommandButton, the
	  SendMessage call simulates a mouse click at the location 16 pixels right of
	  the left side of the Form and 18 pixels down from the top, causing the
	  Form_MouseDown event to fire.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q112651 HOWTO: Mimic HIWORD, LOWORD, HIBYTE, LOBYTE C Macros in VB
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbAPI kbSDKWin32 kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
