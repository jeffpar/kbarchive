---
layout: page
title: "Q298144: HOWTO: Associate a Graphic with a Menu Item"
permalink: /kb/298/Q298144/
---

## Q298144: HOWTO: Associate a Graphic with a Menu Item

{% raw %}

	Article: Q298144
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbBitmap kbGDI kbMenu kbSDKWin32 KbUIDesign kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 29-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Windows XP Home Edition 
	- Microsoft Windows XP Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to associate a graphic with a menu item.
	
	MORE INFORMATION
	================
	
	In Visual Basic, menu items already have two graphics associated with them: an
	unchecked image, which is the default image and has no check mark, and a checked
	image, which you can set in Menu Editor by selecting the Checked check box of
	the menu item. To add your own image and associate it with a menu item, you can
	change the original images through a call to the SetMenuItemBitmaps function.
	
	However, before you call this function, you must get the handle to the submenu.
	This requires that you call the GetMenu function, which returns a handle to the
	main menu, and the GetSubMenu function, which returns a handle to the submenu.
	
	After you obtain a handle to the submenu, to specify the position of the menu
	item that you want to change, you must pass that handle to SetMenuItemBitmaps to
	associate the bitmap with the unchecked menu item graphic. You can use the
	constant MF_BYPOSITION to specify that position as the zero-based, relative
	position of the menu item.
	
	The following sample also uses the LoadImage function to load a bitmap into
	memory and return a handle to it. You could also use a hidden PictureBox control
	as follows:
	
	  Set Picture1.Picture = LoadPicture(App.Path & "\MenuImg.bmp")
	  hMenuImg = Picture1.Picture.Handle
	
	Step-By-Step Example
	--------------------
	
	1. Open a new Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Place one CommandButton control, Command1, onto Form1.
	
	3. From the Tools menu, click Menu Editor, and add three menu items to the form
	  as follows:
	
	  a. For the first item, type "Menu" (without the quotation marks) in the
	     Caption text box, type "mnuMenu" (without the quotation marks) in the Name
	     text box, and ensure that the Visible check box is selected.
	
	  b. For the second item, click Next, type "SubOne" (without the quotation
	     marks) in the Caption text box, type "mnuOne" (without the quotation
	     marks) in the Name text box, and click the right arrow button to indent
	     the item one level so that it appears as a submenu of the first item.
	
	  c. For the third item, click Next, type "SubTwo" (without the quotation
	     marks) in the Caption text box, type "mnuTwo" (without the quotation
	     marks) in the Name text box, and leave it indented one level so that it is
	     also appears a submenu of the first item. Click OK. Note that the form now
	     has a menu bar.
	
	4. From the File menu, click Save As to save the form and project to a location
	  of your choice.
	
	5. Open Microsoft Paint or your favorite graphics application, and create the
	  bitmap image that you want to use as your menu graphic. The bitmap must be a
	  10-by-10 pixel square in order to appear properly. To set the size in
	  Microsoft Paint, click Attributes from the Image menu. It is also recommended
	  that you use monochrome bitmaps for best results.
	
	6. Save the bitmap as MenuImg.bmp to your project directory.
	
	7. Return to Visual Basic, and add the following code to the Form1 code window:
	
	  Option Explicit
	
	  Private Declare Function GetMenu Lib "user32" (ByVal hwnd As Long) As Long
	
	  Private Declare Function GetSubMenu Lib "user32" (ByVal hMenu As Long, _
	     ByVal nPos As Long) As Long
	
	  Private Declare Function SetMenuItemBitmaps Lib "user32" _
	     (ByVal hMenu As Long, ByVal nPosition As Long, ByVal wFlags As Long, _
	      ByVal hBitmapUnchecked As Long, ByVal hBitmapChecked As Long) As Long
	
	  Private Declare Function LoadImage Lib "user32" Alias "LoadImageA" _
	     (ByVal hInst As Long, ByVal lpsz As String, ByVal un1 As Long, _
	     ByVal n1 As Long, ByVal n2 As Long, ByVal un2 As Long) As Long
	
	  ' Constant for SetMenuItemBitmaps
	  Private Const MF_BYPOSITION = &H400&
	
	  ' Constants for LoadImage
	  Private Const IMAGE_BITMAP = &O0
	  Private Const LR_LOADFROMFILE = 16
	  Private Const LR_CREATEDIBSECTION = 8192
	
	  Private Sub Command1_Click()
	     Dim hMenu As Long
	     Dim hSubMenu As Long
	     Dim hMenuImg As Long
	     Dim sFileName As String
	
	  ' Get the bitmap.
	     sFileName = App.Path & "\MenuImg.bmp"
	     hMenuImg = LoadImage(0, sFileName, IMAGE_BITMAP, 0, 0, _
	                LR_LOADFROMFILE Or LR_CREATEDIBSECTION)
	  ' Get the menu item handle.
	      hMenu = GetMenu(Me.hwnd)
	      hSubMenu = GetSubMenu(hMenu, 0)
	  ' Set the "mnuTwo" bitmap to the one that is loaded in memory.
	      Call SetMenuItemBitmaps(hSubMenu, 1, MF_BYPOSITION, hMenuImg, 0)
	  End Sub
	
	8. Run the project. Click Command1, and then select the menu. The image that you
	  created appears next to the second menu item, SubTwo.
	
	REFERENCES
	==========
	
	For additional information on how to associate a graphic with a menu item in
	16-bit Visual Basic, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q71281 How to Implement a Bitmap Within a Visual Basic Menu
	
	Additional query words: menu bitmap icon image graphical graphics API
	
	======================================================================
	Keywords          : kbAPI kbBitmap kbGDI kbMenu kbSDKWin32 KbUIDesign kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbWinXPHome kbWinXPPro kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbWinXPProSearch kbWinXPHomeSearch kbWinXPSearch
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
