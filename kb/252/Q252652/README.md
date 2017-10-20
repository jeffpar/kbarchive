---
layout: page
title: "Q252652: HOWTO: Use the SHGetFolderPath Function from Visual Basic"
permalink: /kb/252/Q252652/
---

## Q252652: HOWTO: Use the SHGetFolderPath Function from Visual Basic

{% raw %}

	Article: Q252652
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2000,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbShellGrp kbVBp kbVBp400 kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWin
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the SHGetFolderPath function to get the path to Microsoft Windows
	special folders, which are identified by their CSIDL value. This article
	includes a code example on using the SHGetFolderPath function from Microsoft
	Visual Basic to get the path of the logged-in user's Application Data folder. A
	typical path for this folder might be:
	
	  C:\Winnt\Profiles\Broder\Local Settings\Application Data
	
	MORE INFORMATION
	================
	
	SHGetFolderPath is a new API function for Windows 2000. If you are not running
	Windows 2000, then the SHGetFolderPath function requires that you redistribute
	the SHFolder.dll file. The SHFolder.dll file is freely redistributable and can
	be obtained from the latest Platform Software Development Kit (SDK), which is
	available from the following Web site:
	
	  http://msdn.microsoft.com/downloads/default.asp?URL=/code/topic.asp?URL=/msdn-files/028/000/123/topic.xml
	
	Because the location of special folders can change from system to system,
	Microsoft recommends that you use the SHGetFolderPath function to determine the
	path for a special folder. For example, you might want to determine the user's
	Application Data folder to store user-specific data for your application. You
	can determine this at run time using the SHGetFolderPath function.
	
	Please refer to the MSDN documentation to determine which folders are supported
	by the SHGetFolderPath function.
	
	As an alternative, if you set a reference to Microsoft Scripting Runtime in the
	References dialog box, you can use the FileSystemObject's GetSpecialFolder
	method to obtain the locations of special folders.
	
	Step-by-Step Example
	--------------------
	
	1. In Visual Basic, start a new Standard EXE project. Form1 is created by
	  default.
	
	2. Add a CommandButton and a TextBox control to Form1.
	
	3. In the General Declarations Section of the code window for Form1, paste the
	  following code:
	
	  Option Explicit
	
	  Private Const S_OK = &H0                ' Success
	  Private Const S_FALSE = &H1             ' The Folder is valid, but does not exist
	  Private Const E_INVALIDARG = &H80070057 ' Invalid CSIDL Value
	
	  Private Const CSIDL_LOCAL_APPDATA = &H1C&
	  Private Const CSIDL_FLAG_CREATE = &H8000&
	
	  Private Const SHGFP_TYPE_CURRENT = 0
	  Private Const SHGFP_TYPE_DEFAULT = 1
	  Private Const MAX_PATH = 260
	
	  Private Declare Function SHGetFolderPath Lib "shfolder" _
	      Alias "SHGetFolderPathA" _
	      (ByVal hwndOwner As Long, ByVal nFolder As Long, _
	      ByVal hToken As Long, ByVal dwFlags As Long, _
	      ByVal pszPath As String) As Long
	
	  Private Sub Command1_Click()
	  Dim sPath As String
	  Dim RetVal As Long
	
	  ' Fill our string buffer
	  sPath = String(MAX_PATH, 0)
	
	  RetVal = SHGetFolderPath(0, CSIDL_LOCAL_APPDATA Or CSIDL_FLAG_CREATE, 0, SHGFP_TYPE_CURRENT, sPath)
	
	  Select Case RetVal
	      Case S_OK
	          ' We retrieved the folder successfully
	          
	          ' All C strings are null terminated
	          ' So we need to return the string upto the first null character
	          sPath = Left(sPath, InStr(1, sPath, Chr(0)) - 1)
	          Text1.Text = sPath
	      Case S_FALSE
	          ' The CSIDL in nFolder is valid, but the folder does not exist.
	          ' Use CSIDL_FLAG_CREATE to have it created automatically
	          MsgBox "The folder does not exist"
	      Case E_INVALIDARG
	          ' nFolder is invalid
	          MsgBox "An invalid folder ID was specified"
	      
	  End Select
	  End Sub
	
	4. Press the F5 key to run the project.
	
	5. Click the CommandButton control. The TextBox control is filled with the path
	  to the current user's Application Data folder.
	
	Note that the CSIDL_FLAG_CREATE flag is used. If the folder does not exist, then
	the SHGetFolderPath function creates it for you, fills the string buffer with
	the path, and returns S_OK. If you do not use the CSIDL_FLAG_CREATE flag, and
	the folder does not exist, then the SHGetFolder function returns S_FALSE and
	nothing is placed in your string buffer. To find the location of other special
	folders, you need to change the nFolder parameter to another CSIDL value. The
	constants for these values can be found on the MSDN.
	
	REFERENCES
	==========
	
	  MSDN Documentation on SHGetFolderPath
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q227051 HOWTO: Determine the Location of Files or Folders on Windows 2000
	
	Additional query words: SHGetSpecialFolderPath shell shlobj.h
	
	======================================================================
	Keywords          : kbAPI kbShellGrp kbVBp kbVBp400 kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :2000,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
