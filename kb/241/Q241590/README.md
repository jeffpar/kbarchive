---
layout: page
title: "Q241590: HOWTO: Use SHFileInfo to Get the Associated Icon for Files"
permalink: /kb/241/Q241590/
---

## Q241590: HOWTO: Use SHFileInfo to Get the Associated Icon for Files

{% raw %}

	Article: Q241590
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbShellGrp kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Whenever you want to drag and drop files from the Microsoft Windows Explorer and
	want to display the icon associated with the files (for example, in a listview),
	there is no built-in way to get the icon that is associated with a file.
	However, you can accomplish this by using the Windows API.
	
	MORE INFORMATION
	================
	
	1. Create a new Visual Basic Standard EXE Project. Form1 is created by default.
	
	2. From the Project menu, select Components, select Microsoft Rich Text Box
	  Control and Microsoft Windows Common Controls, and click OK.
	
	3. Add a ListView control to Form1, and name it "lvFileList" (without the
	  quotation marks).
	
	4. Add a RichTextbox control to Form1, and name it "rtBox" (without the
	  quotation marks).
	
	5. Add two PictureBoxes, and name them picInvisiblePictureBox and
	  picDummyPictureBox.
	
	6. Add an ImageList control, and name it ilImages.
	
	7. Paste the following code into the code window of Form1:
	
	  Option Explicit
	
	  Private Const SHGFI_DISPLAYNAME = &H200
	  Private Const SHGFI_EXETYPE = &H2000
	  Private Const SHGFI_SYSICONINDEX = &H4000   ' system icon index
	  Private Const SHGFI_LARGEICON = &H0         ' large icon
	  Private Const SHGFI_SMALLICON = &H1         ' small icon
	  Private Const ILD_TRANSPARENT = &H1         ' display transparent
	  Private Const SHGFI_SHELLICONSIZE = &H4
	  Private Const SHGFI_TYPENAME = &H400
	  Private Const BASIC_SHGFI_FLAGS = SHGFI_TYPENAME Or _
	               SHGFI_SHELLICONSIZE Or SHGFI_SYSICONINDEX Or _
	               SHGFI_DISPLAYNAME Or SHGFI_EXETYPE
	
	  Private Const MAX_PATH = 260
	
	  Private Type SHFILEINFO
	     hIcon          As Long
	     iIcon          As Long
	     dwAttributes   As Long
	     szDisplayName  As String * MAX_PATH
	     szTypeName     As String * 80
	  End Type
	
	  Private Declare Function ImageList_Draw Lib "comctl32.dll" _
	     (ByVal himl As Long, _
	      ByVal i As Long, _
	      ByVal hDCDest As Long, _
	      ByVal x As Long, _
	      ByVal y As Long, _
	      ByVal flags As Long) As Long
	
	  Private Declare Function SHGetFileInfo Lib "shell32.dll" _
	     Alias "SHGetFileInfoA" _
	     (ByVal pszPath As String, _
	      ByVal dwFileAttributes As Long, _
	      psfi As SHFILEINFO, _
	      ByVal cbSizeFileInfo As Long, _
	      ByVal uFlags As Long) As Long
	      
	  Private Sub Form_Load()
	      ' Set the properties of items on the form
	      With picDummyPictureBox
	          .AutoRedraw = True
	          .AutoSize = True
	          .Height = 495
	          .Width = 495
	          .Appearance = 0 'flat
	          .Visible = False
	      End With
	      
	      With picInvisiblePictureBox
	          .AutoRedraw = True
	          .AutoSize = True
	          .Height = 495
	          .Width = 495
	          .Appearance = 0 'flat
	          .Visible = False
	      End With
	      
	      rtBox.OLEDropMode = rtfOLEDropManual
	      
	      ' It doesn't matter what icon you use here. Adjust this path to point 
	      ' to an icon on your system. The important thing is to make sure the 
	      ' size is correct.
	      picDummyPictureBox.Picture = LoadPicture("C:\Program Files\Microsoft Visual Studio\Common\Graphics\Icons\Flags\flgusa01.ico")
	      
	      ' Put the icon onto the list box to initialize it
	      Set lvFileList.SmallIcons = Nothing
	      ilImages.ListImages.Clear
	      ilImages.ListImages.Add , "dummy", picDummyPictureBox.Picture
	      Set lvFileList.Icons = ilImages      
	  End Sub
	
	  Private Sub rtBox_OLEDragDrop(Data As RichTextLib.DataObject, Effect As Long, Button As Integer, Shift As Integer, x As Single, y As Single)
	
	      Dim nCounter As Integer
	      Dim lBoundary As Long
	      
	      ' Take the files that are dropped, and put them into the listview.
	      For nCounter = 1 To Data.Files.Count
	          StickIconOntoListView Data.Files(nCounter)
	      Next nCounter
	  End Sub
	
	  Private Sub StickIconOntoListView(strFile As String)
	
	      Dim hImgLarge As Long
	      Dim hFile As Long
	      Dim strFileType As String
	      Dim strListImageKey As String
	      Dim imgX As ListImage
	      Dim hEXEType As Long
	      Dim tEXEType As Long
	      Dim lRet As Long
	      Dim itmX As ListItem
	      Dim shinfo As SHFILEINFO
	      
	      ' Get the icon data from the file
	      hImgLarge = SHGetFileInfo(strFile, 0&, shinfo, Len(shinfo), BASIC_SHGFI_FLAGS Or SHGFI_LARGEICON)
	        
	      ' lcase the filename so it looks nice in the listview.
	      ' Remove the nulls at the end of the string
	      strFileType = LCase(StripNulls(shinfo.szTypeName))
	        
	      If hImgLarge > 0 Then
	          ' Pull the icon out of the file
	          lRet = vbAddFileItemIcon(hImgLarge, shinfo)
	          
	          ' once you get the icon out of the file, you need to add it to the 
	          ' image list so that we can stick it into the listview.
	
	          ' NOTE: If the file dropped in is an EXE that has an icon in it 
	          ' already, this won't work. You can look at the strFileType 
	          ' variable here and handle that differently.
	          ' This also raises an error if you try to add the same file twice.
	          Set imgX = ilImages.ListImages.Add(, strFile, _
	             picInvisiblePictureBox.Picture)
	          strListImageKey = strFile
	      Else
	          ' Error!
	      End If
	       
	      ' Add the icon to the list image
	      Set itmX = lvFileList.ListItems.Add(, , LCase(strFile))
	      itmX.Icon = ilImages.ListImages(strListImageKey).Key
	      
	      Set itmX = Nothing
	  End Sub<BR/>
	
	  Private Function vbAddFileItemIcon(hImage As Long, sInfo As SHFILEINFO) As Long
	
	      Dim lRet As Long
	        
	      ' clear the PictureBox
	      picInvisiblePictureBox.Picture = LoadPicture()
	      
	      ' put the icon onto the PictureBox
	      lRet = ImageList_Draw(hImage, sInfo.iIcon, _
	         picInvisiblePictureBox.hDC, 0, 0, ILD_TRANSPARENT)
	      
	      picInvisiblePictureBox.Picture = picInvisiblePictureBox.Image
	      picInvisiblePictureBox.Height = 495
	      picInvisiblePictureBox.Width = 495
	      
	      vbAddFileItemIcon = lRet
	  End Function
	
	  Private Function StripNulls(strItem As String) As String
	
	      Dim nPos As Integer
	      
	      nPos = InStr(strItem, Chr$(0))
	      If nPos Then
	          strItem = Left$(strItem, nPos - 1)
	      End If
	      StripNulls = strItem
	  End Function
	
	8. Run the project. Using Windows Explorer, drag some files and drop them onto
	  the RichTextbox. They should show up in the ListView control.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbShellGrp kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
