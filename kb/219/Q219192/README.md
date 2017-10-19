---
layout: page
title: "Q219192: FP: Publishing to UNIX May Produce Broken Hyperlinks"
permalink: /kb/219/Q219192/
---

## Q219192: FP: Publishing to UNIX May Produce Broken Hyperlinks

	Article: Q219192
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- FrontPage 2002 Server Extensions from Microsoft 
	- Microsoft FrontPage 2000 
	- FrontPage 2000 Server Extensions from Microsoft 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you publish a Web to a UNIX-based server that includes hyperlinks to pages
	that are in upper case or mixed case format, the links are broken.
	
	For example, when you create a hyperlink to a page within your Web named
	<FileName.htm>, and then publish to a UNIX server, the file is renamed to
	<filename.htm>. However, the hyperlinks to the file are not updated to
	reflect the new filename and the links are broken.
	
	CAUSE
	=====
	
	UNIX operating systems are case sensitive. Because of this, files called
	<filename.htm> and <FileName.htm> are recognized as different files
	and may produce broken hyperlinks.
	
	WORKAROUND
	==========
	
	To work around this problem, you can use the following sample Visual Basic for
	Applications macro to change the case for all files, folders, and hyperlinks in
	your Web.
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	Add the Sample Macro to FrontPage:
	
	1. Start FrontPage.
	
	2. Start the Visual Basic Editor. To do this, point to Macro on the Tools menu,
	  and then click Visual Basic Editor.
	
	3. Add a new module. To do this, right-click Microsoft_FrontPage in the Project
	  window, point to Insert, and then click Module.
	
	4. Type or paste the following Visual Basic code into the new module:
	
	  Option Explicit
	
	  ' Set up global constants.
	  Const strValid = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	  Const intTempNameLength = 16
	
	  Sub ToLowerCase()
	    On Error Resume Next
	    ' ************************************************************
	    ' You must open a Web for this macro to work.  To see if a
	    ' Web is open, check the Caption property of the FrontPage
	    ' application.  If the root Web on a server named MYWEBis open,
	    ' the caption will be "Microsoft FrontPage - http://MYWEB".
	    ' If no Web is open, the caption will be "Microsoft FrontPage".
	    ' ************************************************************
	
	    ' Set up all the variables.
	    Dim objWebFile As WebFile
	    Dim objWebFolder As WebFolder
	    Dim objSubFolder As WebFolder
	    Dim strBaseFolder As String
	    Dim lngFolderCount As Long
	    Dim lngBaseCount As Long
	    
	    With Application
	        
	      ' Check the caption of the application to see if a Web is open.
	      If .ActiveWebWindow.Caption = "Microsoft FrontPage" Then
	        ' If no Web is open, display an informational message...
	        MsgBox "Please open a Web before you run this function.", vbCritical
	        ' ... and end the macro.
	        Exit Sub
	      ' Check to make sure that no pages are open.
	      ElseIf .ActiveWeb.ActiveWebWindow.PageWindows.Count <> 0 Then
	        ' If any pages are open, display an informational message...
	        MsgBox "Please close all files before running this macro.", vbCritical
	        ' ... and end the macro.
	        Exit Sub
	      End If
	    
	      ' Change the Web view to folder view.
	      .ActiveWeb.ActiveWebWindow.ViewMode = fpWebViewFolders
	      ' Refresh the Web view and recalculate the Web.
	      .ActiveWeb.Refresh
	      .ActiveWeb.RecalcHyperlinks
	      
	      ' Define the initial values for the folder counters.
	      lngFolderCount = 1
	      lngBaseCount = 0
	    
	      ' Dimension an array to hold the folder names.
	      ReDim strFolders(1) As Variant
	    
	      ' Get the URL of the root folder for the Web...
	      strBaseFolder = .ActiveWeb.RootFolder.Url
	      ' ... and store the URL in the array.
	      strFolders(1) = strBaseFolder
	      
	      ' Loop while there are folders to process.
	      While lngFolderCount <> lngBaseCount
	        ' Set up a WebFolder object to a base folder.
	        Set objWebFolder = .ActiveWeb.LocateFolder(strBaseFolder)
	        ' Loop through the collection of subfolders for the base folder.
	        For Each objSubFolder In objWebFolder.Folders
	          ' Check to make sure that the subfolder is not a Web.
	          If objSubFolder.IsWeb = False Then
	            ' Increment folder count.
	            lngFolderCount = lngFolderCount + 1
	            ' Increase array size.
	            ReDim Preserve strFolders(lngFolderCount)
	            ' Rename the subfolder.
	            RenameFolderToLowerCase objSubFolder, True
	            ' Store the renamed folder name in the array.
	            strFolders(lngFolderCount) = objSubFolder.Url
	          End If
	        Next
	        ' Increment the base folder counter.
	        lngBaseCount = lngBaseCount + 1
	        ' Get the name of the next folder to process.
	        strBaseFolder = strFolders(lngBaseCount + 1)
	      Wend
	              
	      ' Loop through the array of folder names.
	      For lngBaseCount = 1 To lngFolderCount
	        ' Set up a WebFolder object for each folder.
	        Set objWebFolder = .ActiveWeb.LocateFolder(strFolders(lngBaseCount))
	        ' Loop through the files collection for each folder.
	        For Each objWebFile In objWebFolder.Files
	          ' Rename each file in the folder.
	          RenameFileToLowerCase objWebFile, True
	        Next
	      Next
	        
	      ' Refresh the Web view and recalculate the Web.
	      .ActiveWeb.RecalcHyperlinks
	      .ActiveWeb.Refresh
	
	    End With
	
	    MsgBox "Conversion to lower case is complete.", vbInformation
	
	  End Sub
	
	  Function CreateTempName(intLength As Integer) As String
	    On Error Resume Next
	    
	    ' Initialize the random number generator.
	    Randomize Timer
	    
	    ' Set up some local variables.
	    Dim intCount As Integer
	    Dim strTemp  As String
	    
	    ' Loop to create the random temporary name.
	    For intCount = 1 To intLength
	      ' Get a random valid character and add it to the temporary name.
	      strTemp = strTemp & Mid(strValid, Int(Rnd(1) * Len(strValid)) + 1, 1)
	    Next
	    
	    ' End the temporary name with an extension to denote it is temporary.
	    CreateTempName = strTemp & ".tmp"
	
	  End Function
	
	  Sub RenameFileToLowerCase(objFile As WebFile, boolIgnoreHidden As Boolean)
	    On Error Resume Next
	    
	    ' Set up some local variables.
	    Dim strOldName As String
	    Dim strNewName As String
	    
	    ' Store the current file name.
	    strOldName = objFile.Name
	    
	    ' Ignore hidden files.
	    If boolIgnoreHidden Then
	      ' Exit if it's a "hidden" file.
	      If Left(strOldName, 1) = "_" Then Exit Sub
	    End If
	    
	    ' See if you need to convert the file name.
	    If strOldName <> LCase(strOldName) Then
	      ' Get a random temporary name.
	      strNewName = CreateTempName(intTempNameLength)
	      ' Rename the file to the temporary name.
	      Call objFile.Move(LCase(strNewName), True, True)
	      ' Rename the file to it's original name with the converted case.
	      Call objFile.Move(LCase(strOldName), True, True)
	    End If
	
	  End Sub
	
	  Sub RenameFolderToLowerCase(objFolder As WebFolder, boolIgnoreHidden As Boolean)
	    On Error Resume Next
	    
	    ' Set up some local variables.
	    Dim strOldName As String
	    Dim strNewName As String
	    Dim strTmpPath As String
	    
	    ' Store the current folder name.
	    strOldName = objFolder.Name
	    
	    ' Ignore hidden folders.
	    If boolIgnoreHidden Then
	      ' Exit if it's a "hidden" folder.
	      If Left(strOldName, 1) = "_" Then Exit Sub
	    End If
	    
	    ' See if you need to convert the folder name.
	    If strOldName <> LCase(strOldName) Then
	      ' Get a random temporary name.
	      strNewName = CreateTempName(intTempNameLength)
	      ' Get the URL path to the folder.
	      strTmpPath = Mid(objFolder.Url, Len(objFolder.Web.RootFolder.Url) + 2)
	      strTmpPath = Left(strTmpPath, Len(strTmpPath) - Len(strOldName))
	      ' Rename the folder to the temporary name.
	      Call objFolder.Move(strTmpPath & LCase(strNewName), True, True)
	      ' Rename the folder to it's original name with the converted case.
	      Call objFolder.Move(strTmpPath & LCase(strOldName), True, True)
	    End If
	
	  End Sub
	
	5. On the File menu, click Save.
	
	6. On the File menu, click Close and Return to Microsoft FrontPage.
	
	Run the Sample Macro in FrontPage:
	
	1. Open your Web in FrontPage.
	
	2. On the Tools menu, point to Macro, and then click Macros.
	
	3. In the Macro name box, select ToLowerCase, then click Run.
	
	4. When the macro is finished, FrontPage displays a message box informing you
	  that the case conversion is completed.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q216746 FPSE2000: Uppercase Links to Files Are Broken Publishing to UNIX
	  Server
	
	  Q246924 FP: Error Message: The Destination File System Ignores Case
	
	Additional query words: fp2k front page fp2000 fp2002 fp2k2 fp10 bsdi hpux solaris
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPageServXSearch kbZNotKeyword2 kbFrontPage2000Search kbFrontPage2002Search kbFrontPage2000ServX kbFrontPage2002ServX kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
