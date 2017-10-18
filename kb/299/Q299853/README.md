---
layout: page
title: "Q299853: HOWTO: Modify the Default Web Browser and E-mail Client"
permalink: kb/299/Q299853/
---

## Q299853: HOWTO: Modify the Default Web Browser and E-mail Client

	Article: Q299853
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbVBp kbGrpDSVB kbDSupport
	Last Modified: 13-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows XP 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows XP 
	-------------------------------------------------------------------------------
	
	This article discusses a Beta release of a Microsoft product. The 
	information in this article is provided as-is and is subject to change
	without notice.
	
	No formal product support is available from Microsoft for this Beta 
	product. For information about obtaining support for a Beta release, 
	please see the documentation included with the Beta product files, or 
	check the Web location from which you downloaded the release.
	
	SUMMARY
	=======
	
	On a Windows XP-based computer, Windows XP sets the default Start menu Internet
	browser to Microsoft Internet Explorer and e-mail client to Microsoft Outlook
	Express. The Start menu Internet browser only controls the application that is
	started when you click the Internet or E-mail icon on the Start menu. This is
	separate from the default Web browser or e-mail client that is used to start
	arbitrary URLs from anywhere in the system. You can programmatically change the
	defaults for the system or individually for each user.
	
	MORE INFORMATION
	================
	
	By default, Windows XP uses a global setting in the HKeyLocalMachine (HKLM)
	Registry key to set an initial, default e-mail and Web browser client from the
	Start menu. Windows XP also implements new registry keys in HKeyCurrentUser
	(HKCU) to store individual internet and e-mail client information for each user
	as part of their profile if users select a different client than the default.
	The following code sample adds a Web browsing and e-mail client to the available
	options on the system and shows how to modify both the global and the current
	user:
	
	  Const REG_SZ As Long = 1
	  Const HKEY_CURRENT_USER = &H80000001
	  Const HKEY_LOCAL_MACHINE = &H80000002
	  Const KEY_SET_VALUE = &H2
	  Const KEY_ALL_ACCESS = &H3F
	  Const REG_OPTION_NON_VOLATILE = 0
	  Const HWND_BROADCAST = &HFFFF
	  Const WM_SETTINGCHANGE = &H1A
	
	  Declare Function RegCloseKey Lib "advapi32.dll" _
	    (ByVal hKey As Long) As Long
	  Declare Function RegCreateKeyEx Lib "advapi32.dll" _
	    Alias "RegCreateKeyExA" (ByVal hKey As Long, _
	    ByVal lpSubKey As String, ByVal Reserved As Long, _
	    ByVal lpClass As String, ByVal dwOptions As Long, _
	    ByVal samDesired As Long, ByVal lpSecurityAttributes As Long, _
	    phkResult As Long, lpdwDisposition As Long) As Long
	  Declare Function RegOpenKeyEx Lib "advapi32.dll" _
	    Alias "RegOpenKeyExA" (ByVal hKey As Long, _
	    ByVal lpSubKey As String, ByVal ulOptions As Long, _
	    ByVal samDesired As Long, phkResult As Long) As Long
	  Declare Function RegSetValueExString Lib "advapi32.dll" _
	    Alias "RegSetValueExA" (ByVal hKey As Long, _
	    ByVal lpValueName As String, ByVal Reserved As Long, _
	    ByVal dwType As Long, ByVal lpValue As String, _
	    ByVal cbData As Long) As Long
	  Declare Function SendMessage Lib "user32" _
	    Alias "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, _
	    ByVal wParam As Long, lparam As String) As Long
	  Public Function SetClient(iClient As Integer, sDisplayName As String, _
	    sClientCommandLine As String, sClientResourceDLL As String, _
	    iLocalization As Integer, bGlobalClient As Boolean, _
	    Optional sCLParameters As String, Optional bMakeDefault As Boolean) As Integer
	    
	    ' iClient - 1 for internet browser, 2 for e-mail client
	    ' sDisplayName - the name to be displayed on the menu for the client
	    ' sClientCommandLine - the path and filename of the e-mail client
	    '
	    ' The next two parameters are included for localization of the client.
	    ' For backwards compatibility with applications that do not support localized
	    ' strings, the name of the application in the installed language should be set
	    ' as the Default value for the key.
	    ' sClientResourceDLL - provides a path to an EXE or DLL containing the
	    '   localized strings for the client.
	    ' iLocalization - a string resource ID within the DLL whose value is
	    '   to be displayed to the user allowing the same registration to
	    '   be used for multiple languages.  For each language, provide a
	    '   different Resource DLL, and the dynamic loading of the string
	    '   from the DLL results in the correct strings being displayed, depending
	    '   on the language.
	    '
	    ' bGlobalClient - sets the value for either all users (True) or the
	    '   current user (False)
	    ' sCLParameters - additional parameters on the command line to be passed to the
	    '   browser or e-mail client.
	    ' bMakeDefault - (Optional) set the browser or e-mail application as the default
	    
	    Dim iStatus As Integer
	    Dim hHandle As Long
	    Dim hGRegKey As String
	    Dim hLRegKey As String
	    Dim sCommand As String
	    Dim sKey As String
	    Dim sAll As String
	    Dim sRoot As String
	    Dim hKey As Long
	    Dim sLoc As String
	    hGRegKey = HKEY_LOCAL_MACHINE
	    hLRegKey = HKEY_CURRENT_USER
	    
	    If iClient = 1 Then
	      sRoot = "Software\Clients\StartMenuInternet"
	    Else
	      sRoot = "Software\Clients\Mail"
	    End If
	    
	    ' Create and null terminate needed strings
	    sCommand = "shell\open\command"
	    sKey = sRoot & "\" & sDisplayName
	    sAll = sKey & "\" & sCommand
	    sLoc = "@" & sClientResourceDLL & "," & iLocalization & Chr$(0)
	    sClientLocation = """" & sClientCommandLine & """" & _
	      IIf(sCLParameters <> "", " ", "") & Trim(sCLParameters) & Chr$(0)
	    sDisplayName = sDisplayName & Chr$(0)
	    
	    ' Create a registry key for the new client
	    iStatus = RegCreateKeyEx(hGRegKey, sKey, 0&, vbNullString, _
	      REG_OPTION_NON_VOLATILE, KEY_ALL_ACCESS, 0&, hNewKey, lRetVal)
	    iStatus = RegCreateKeyEx(hGRegKey, sAll, 0&, vbNullString, _
	      REG_OPTION_NON_VOLATILE, KEY_ALL_ACCESS, 0&, hNewKey, lRetVal)
	    If iStatus = ERROR_NONE Then
	      iStatus = RegOpenKeyEx(hGRegKey, sAll, 0, KEY_SET_VALUE, hKey)
	      iStatus = RegSetValueExString(hKey, "", 0&, REG_SZ, sClientLocation, _
	        Len(sClientLocation))
	      iStatus = RegCloseKey(hKey)
	      iStatus = RegOpenKeyEx(hGRegKey, sKey, 0, KEY_SET_VALUE, hKey)
	      iStatus = RegSetValueExString(hKey, "", 0&, REG_SZ, sDisplayName, _
	        Len(sDisplayName))
	      ' Add the localization string
	      iStatus = RegSetValueExString(hKey, "LocalizedString", 0&, REG_SZ, _
	          sLoc, Len(sLoc))
	      iStatus = RegCloseKey(hKey)
	    Else
	      SetClient = iStatus
	      Exit Function
	    End If
	    
	    '  Sets browser as local or global default if specified
	    If bMakeDefault Then
	      If bGlobalClient Then
	        iStatus = RegOpenKeyEx(hGRegKey, sRoot, 0, KEY_SET_VALUE, hKey)
	        iStatus = RegSetValueExString(hKey, "", 0&, REG_SZ, sDisplayName, _
	          Len(sDisplayName))
	        iStatus = RegCloseKey(hKey)
	      Else
	        iStatus = RegCreateKeyEx(hLRegKey, sRoot, 0&, vbNullString, _
	          REG_OPTION_NON_VOLATILE, KEY_ALL_ACCESS, 0&, hNewKey, lRetVal)
	        iStatus = RegSetValueExString(hNewKey, "", 0&, REG_SZ, _
	          sDisplayName, Len(sDisplayName))
	        iStatus = RegCloseKey(hNewKey)
	      End If
	      UpdateMenus
	    End If
	  End Function
	  Private Sub UpdateMenus()
	    ' Refresh the menu choices with the updated client
	    Dim iRetVal As Integer
	    iRetVal = SendMessage(HWND_BROADCAST, WM_SETTINGCHANGE, 0, _
	      "SOFTWARE\Clients\mail")
	    iRetVal = SendMessage(HWND_BROADCAST, WM_SETTINGCHANGE, 0, _
	      "SOFTWARE\Clients\StartMenuInternet")
	  End Sub
	
	Here are some examples of calling this function:
	
	  Dim x As Integer
	  '  Sets up a browser for the current user and makes it default
	  x = SetClient(1, "My Browser", "C:\Program Files\MyBrowser\mybrowser.exe", "C:\Program Files\MyBrowser\localization.dll", -123, True, "-homepage", False)
	  '  Sets up an e-mail client for the current user and makes it default
	  x = SetClient(2, "My E-mail", "C:\Program Files\MyEmail\myemail.exe", "C:\Program Files\MyEmail\localization.dll", -456, True, "-inbox", False)
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q145679 HOWTO: Use the Registry API to Save and Retrieve Setting
	
	  Q297878 BETA-HOWTO: Register an Internet Browser or E-mail Client With the
	  Windows XP Start Menu
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbVBp kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
