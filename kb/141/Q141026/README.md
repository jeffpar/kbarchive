---
layout: page
title: "Q141026: How to Fill a List Box with Snapshot When Contents are Unknown"
permalink: /kb/141/Q141026/
---

## Q141026: How to Fill a List Box with Snapshot When Contents are Unknown

	Article: Q141026
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to fill a list box with a snapshot when the
	contents of the snapshot are unknown at design time. The example uses TAB
	characters to create a columnar display, and it adds a horizontal scroll bar so
	the user can view the entire record.
	
	MORE INFORMATION
	================
	
	When handling result sets from database queries that produce variable result
	sets, you may find it useful to have a generic function display the contents in
	a list box.
	
	The following example defines a Sub (Fill_List) that accepts a list-box control
	and snapshot as parameters and fills the list box with the contents of the
	snapshot. The function can be easily modified to accept a table or dynaset
	object as well.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q71067 How to Set Tab Stops in a List Box in Visual Basic
	
	Step-by-Step Instructions for Creating the Program
	--------------------------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a command button (Command1) and a list box (List1) to the form. Set the
	  caption property of Command1 to "Fill list."
	
	3. Add the following code to the form's general declarations section:
	
	  (For the code below to work correctly, the user must have a reference to
	  either the "Microsoft DAO 3.0 Object Library" or to the "Microsoft DAO
	  2.5/3.0 Compatibility Library)."
	
	     Option Explicit
	     Const WM_USER = &H400
	     #If Win16 Then
	       Const LB_SETTABSTOPS = WM_USER + 19
	       Const LB_SETHORIZONTALEXTENT As Long = WM_USER + 21
	       Private Declare Function SendMessage Lib "User" (ByVal hwnd As _
	         Integer,ByVal wMsg As Integer, ByVal wParam As Integer, _
	         lParam As Any) As Long
	
	       Dim scrollbarwidth  As Integer ' Width of horizontal scrollbar.
	       Dim numtabs As Integer         ' Number of tabs needed.
	       Dim tabstops() As Integer      ' Array of value of tab stop of columnn
	
	     #Else
	       Const LB_SETTABSTOPS = &H192         ' Has changed in Win32.
	       Const LB_SETHORIZONTALEXTENT As Long = &H194   ' Has changed in Win32.
	       Private Declare Function SendMessage Lib "user32" Alias _
	         "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, _
	         ByVal wParam As Long, lParam As Long) As Long
	       Dim scrollbarwidth  As Long    ' Width of horizontal scrollbar.
	       Dim numtabs As Long            ' Number of tabs needed.
	       Dim tabstops() As Long         ' Array of value of tab stop of columnn
	
	     #End If
	
	     Private Sub Fill_List(lb As ListBox, sn As Recordset)
	       Const NUMCHARS = 2  ' Amount of white space between columns.
	
	       ' Temporary variables to preserve form font settings:
	       Dim hold_fontname As String, hold_fontsize As Integer
	       Dim hold_fontbold As Integer, hold_fontitalic As Integer
	       Dim hold_fontstrikethru As Integer, hold_fontunderline  As Integer
	
	       Dim whiteSpace As Integer, accumtabstops As Integer, _
	         dialogUnits As Integer
	       Dim fieldVal As String, listline As String
	       Dim avgWidth As Single
	
	       Dim i As Integer                ' Used in For Next loops.
	       Dim biggest_value() As Single   ' Array of longest string of columns.
	       Dim retval As Long              ' Return value of SendMessage function
	
	       ' Save form's font settings so we can use the form to calculate the
	       ' TextWidth / Height of the strings to go into the list box.
	       hold_fontname = Me.FontName
	       hold_fontsize = Me.FontSize
	       hold_fontbold = Me.FontBold
	       hold_fontitalic = Me.FontItalic
	       hold_fontstrikethru = Me.FontStrikethru
	       hold_fontunderline = Me.FontUnderline
	
	       ' Set form font settings to be identical to list box.
	       Me.FontName = lb.FontName
	       Me.FontSize = lb.FontSize
	       Me.FontBold = lb.FontBold
	       Me.FontItalic = lb.FontItalic
	       Me.FontStrikethru = lb.FontStrikethru
	       Me.FontUnderline = lb.FontUnderline
	
	       ' Get the average character width of the current list box font
	       ' (in pixels) using the form's TextWidth width method.
	       avgWidth = Me.TextWidth _
	         ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
	       avgWidth = avgWidth / Screen.TwipsPerPixelX / 52
	
	       ' Set the white space you want between columns.
	       whiteSpace = avgWidth * NUMCHARS
	
	       ReDim biggest_value(0 To sn.Fields.Count - 1)
	       ReDim tabstops(1 To sn.Fields.Count)
	
	       lb.Clear
	
	       ' Loop through the field values for each record in the snapshot.
	       ' Calculate the width required for that field value to fit in the list
	       ' box. Also, build each line of the list box and add it to the list as
	       ' you go.
	       While Not sn.EOF
	         For i = 0 To sn.Fields.Count - 1
	           fieldVal = sn(i) & ""       ' Append "" in case of a null field.
	
	           ' The LB_SETTABSTOP message requires coordinates in dialog units
	           ' (roughly 4 *, the average character width in pixels).
	           dialogUnits = ((Me.TextWidth(fieldVal) / Screen.TwipsPerPixelX + _
	             whiteSpace) \ avgWidth) * 4
	           If dialogUnits > biggest_value(i) Then
	             biggest_value(i) = dialogUnits
	           End If
	
	           listline = listline & sn(i) & vbTab
	         Next i
	
	         lb.AddItem listline
	         listline = ""
	         sn.MoveNext
	       Wend
	
	       ' Fill the tabstops() array with the position of each tab stop.
	       For i = 0 To sn.Fields.Count - 1
	         accumtabstops = accumtabstops + biggest_value(i)
	         tabstops(i + 1) = accumtabstops
	       Next i
	
	       ' numtabs must be a Long for Win32, Integer for Win16.
	       numtabs = i
	       ' Send LB_SETTABSTOP to the list box to set the position of each
	       ' column.
	
	       retval& = SendMessage(lb.hwnd, LB_SETTABSTOPS, numtabs, tabstops(1))
	
	       ' Set the horizontal extent just wider than the first tab stop.
	       ' This produces a horizontal scroll bar on the list box.
	       ' This message requires coordinates in pixels, so we convert the tab
	       ' stop coordinate back from dialog units to pixels.
	
	       ' scrollbarwidth must be a Long for Win32, Integer for Win16
	       scrollbarwidth = (tabstops(i) \ 4) * avgWidth
	       retval& = SendMessage(lb.hwnd, LB_SETHORIZONTALEXTENT, _
	                   scrollbarwidth, 0&)
	
	       ' Restore form's original font property settings.
	       Me.FontName = hold_fontname
	       Me.FontSize = hold_fontsize
	       Me.FontBold = hold_fontbold
	       Me.FontItalic = hold_fontitalic
	       Me.FontStrikethru = hold_fontstrikethru
	       Me.FontUnderline = hold_fontunderline
	     End Sub
	
	     Private Sub Command1_Click()
	       MousePointer = vbHourglass
	       Dim db As Database
	       Dim rs As Recordset
	
	       Set db = DBEngine.Workspaces(0).OpenDatabase("BIBLIO.MDB")
	       Set rs = db.OpenRecordset("Select * From Publishers", dbOpenSnapshot)
	       Fill_List List1, rs
	
	       rs.Close
	       db.Close
	       Set rs = Nothing
	       Set db = Nothing
	       MousePointer = vbDefault
	     End Sub
	
	4. Press the F5 key to run the program. Click the Fill List button. The list box
	  now contains evenly spaced columns that display the contents of the
	  Publishers table. The scroll bar enables you to see the entire line. Alter
	  the NUMCHARS constant to allow more white space between columns if you want.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	
	=============================================================================
	
