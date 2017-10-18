---
layout: page
title: "Q107771: PC Forms: Err Msg: Illegal Function Call"
permalink: kb/107/Q107771/
---

## Q107771: PC Forms: Err Msg: Illegal Function Call

	Article: Q107771
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose the Select E-Form command from the Mail menu of versions 3.0,
	3.0b, or 3.2 of Microsoft Mail for Windows, you may receive the following error
	message:
	
	  Illegal Function Call
	
	You may also receive this error message when you select the Route command in
	Microsoft Word or Excel.
	
	CAUSE
	=====
	
	This error sometimes indicates that a universal naming convention (UNC) path is
	defined for the SharedExtensionsDir in the MSMAIL.INI file. The Browser
	application code that parses a UNC shared extensions path may fail if the UNC
	path does not contain a backslash (\) as the last character in its definition.
	For example, the following MSMAIL.INI entry may generate the above error:
	
	  SharedExtensionsDir=\\servername\share
	
	RESOLUTION
	==========
	
	To solve the problem, add a "\" to the end of the path definition:
	
	  SharedExtensionsDir=\\servername\share\ 
	
	MORE INFORMATION
	================
	
	You can also solve this problem by modifying the Browser application code that
	handles UNC paths. To do so:
	
	1. Open the BROWSER.MAK project in Visual Basic (VB\EFORMS\MEFBROWS).
	
	2. From the Project window, select BROWSER.FRM. Click the View Code button.
	
	3. From the Proc: list box, select fConnectShared.
	
	4. Modify the code as follows:
	
	        If Left(szSharedDir, 2) = "\\" Then
	           ' Handle UNC path and obtain connection substring length
	           ' Ensure that the path doesn't end in a trailing slash
	           If (Right(szSharedDir, 1) = "\") Then
	               szSharedDir = Left(szSharedDir, Len(szSharedDir) - 1)
	           End If
	           iShare = InStr(3, szSharedDir, "\")
	           iPath = Len(szSharedDir)
	
	           ' see if a connection already exists
	           szNetDrive = SzExistingConnection(Left(szSharedDir, iPath))
	
	           If szNetDrive = "" Then
	           ' No previous connection exists, find a free drive letter
	              szNetDrive = GetFreeDrive()
	           ' and connect if a drive is free
	              If szNetDrive = "" Then
	                 ' No free drive is available to connect
	                 FConnectShared = False
	                 Exit Function
	              ElseIf WNetAddConnection(Left(szSharedDir, iPath), "",
	        szNetDrive) <> 0 Then
	                 ' Connection failed
	                 FConnectShared = False
	                 Exit Function
	              End If
	           End If
	           szSharedDir = szNetDrive & Right(szSharedDir,
	        Len(szSharedDir) - iPath)
	        End If
	
	NOTE: Code that wraps to a new line here should be entered on the same line in
	Visual Basic. Also, this is not the most streamlined code for this procedure, it
	requires the fewest changes from the original.
	
	1. Choose Make .EXE File from the File menu and replace the existing
	  MEFBROWS.EXE in the WINDOWS subdirectory.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.0b,3.2
	
	=============================================================================
	
