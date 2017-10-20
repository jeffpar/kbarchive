---
layout: page
title: "Q173668: SAMPLE: AVIRSCE.EXE Plays an AVI Stored in a Resource .dll File"
permalink: /kb/173/Q173668/
---

## Q173668: SAMPLE: AVIRSCE.EXE Plays an AVI Stored in a Resource .dll File

{% raw %}

	Article: Q173668
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbsound kbResourceEd kbVBp500 kbGrpDSVB kbDSupport
	Last Modified: 13-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to play an AVI file stored in a resource .dll file
	through Visual Basic. Although you can add an AVI file to a resource file in
	Visual Basic and then compile the Visual Basic project into a .dll file, the AVI
	file is accessible only through Visual Basic.
	
	An AVI file stored in a resource .dll file compiled in Visual C++ has two
	advantages:
	
	- The file is accessible from more than one application written in several
	  different programming languages, such as both Visual C and Visual Basic.
	
	- If you need to change the resource file because you need to change the AVI
	  file, you only have to change one file. That file can reside on a server and
	  become accessible to all programs using that file.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Avirsce.exe
	  (http://download.microsoft.com/download/vb50pro/utility1/1/WIN98/EN-US/Avirsce.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	When you run the self-extracting file Avirsce.exe, the following files are
	expanded into the directory, AVI Resource Sample Project, on your hard drive:
	
	- Avirsce.vbp (1Kb)-the project file
	- Avirsce.vbw (1Kb)-the workspace file
	- Form1.frm   (2Kb)-the form file
	- Module1.bas (5Kb)-the module file
	- Readme.txt       -you are reading this file
	
	Steps to Create the Sample
	--------------------------
	
	This sample assumes you have a compiled resource .dll file with an AVI file. You
	also need the Resource.h file for the resource .dll file in order to determine
	the identifier for the AVI file.
	
	Look for a line similar to this one in the Resource.h file to determine the AVI
	file identifier:
	
	     #define IDR_AVI1     101
	
	The identifier for the AVI file in this case is 101.
	
	To create a resource .dll file containing an AVI file, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q178199 HOWTO: Create a Resource DLL File Containing an AVI
	
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Add a CommandButton to Form1.
	
	3. Copy the following code to the Code window of the Form1 form. (Add the AVI
	  file identifier and the path to the resource .dll file in the lines marked
	  with the comment <<<< ):
	
	        Option Explicit
	        Private Sub Command1_Click()
	           Dim hRsrc As Long
	           Dim hGlobal As Long
	           Dim lpString As String
	           Dim strCmd As String, strReturnVal As String
	           Dim nbuf As Long
	
	           'Identifier for the AVI in the resource file from the resource.h
	           'file of the resource dll, which must be preceded by '#'.
	           lpString = "#101" '                                       <<<<
	
	           'Loads the resource
	           'Change the filename argument in the next line to the path and
	           'filename of your resource dll file.
	           hInst = LoadLibrary("<Path resource dll file name>") '    <<<<
	           hRsrc = FindResource(hInst, lpString, "AVI")
	           hGlobal = LoadResource(hInst, hRsrc)
	           lpData = LockResource(hGlobal)
	           fileSize = SizeofResource(hInst, hRsrc)
	
	           Call mmioInstallIOProc(MEY, AddressOf IOProc, _
	                                  MMIO_INSTALLPROC + MMIO_GLOBALPROC)
	           nbuf = 256
	
	           'Play the AVI file
	           strCmd = "open test.MEY+ type avivideo alias test"
	           strReturnVal = mciSendString(strCmd, 0&, 0&, 0&)
	           strCmd = "play test wait"
	           strReturnVal = mciSendString(strCmd, 0&, 0&, 0&)
	           strCmd = "close test"
	           strReturnVal = mciSendString(strCmd, 0&, 0&, 0&)
	
	           Call mmioInstallIOProc(MEY, vbNull, MMIO_REMOVEPROC)
	           FreeLibrary hInst
	        End Sub
	
	4. From the Project menu, click Add Module to create a new module.
	
	5. Copy the following code to the code window of the Module1 module.
	
	        Option Explicit
	        Public lpData As Long
	        Public fileSize As Long
	        Public hInst As Long
	
	        Public Const MMIO_INSTALLPROC = &H10000   'mmioInstallIOProc:install
	                                                  'MMIOProc
	
	        Public Const MMIO_GLOBALPROC = &H10000000 'mmioInstallIOProc: install
	                                                  'globally
	
	        Public Const MMIO_READ = &H0
	        Public Const MMIOM_CLOSE = 4
	        Public Const MMIOM_OPEN = 3
	        Public Const MMIOM_READ = MMIO_READ
	        Public Const MMIO_REMOVEPROC = &H20000
	        Public Const MMIOM_SEEK = 2
	        Public Const SEEK_CUR = 1
	        Public Const SEEK_END = 2
	        Public Const SEEK_SET = 0
	        Public Const MEY = &H2059454D   'This is the value of "MEY " run
	                                        'through FOURCC
	
	        'Create a user defined variable for the API function calls
	        Public Type MMIOINFO
	           dwFlags As Long
	           fccIOProc As Long
	           pIOProc As Long
	           wErrorRet As Long
	           htask As Long
	           cchBuffer As Long
	           pchBuffer As String
	           pchNext As String
	           pchEndRead As String
	           pchEndWrite As String
	           lBufOffset As Long
	           lDiskOffset As Long
	           adwInfo(4) As Long
	           dwReserved1 As Long
	           dwReserved2 As Long
	           hmmio As Long
	        End Type
	
	        'Finds the specified resource in an executable file. The function
	        'returns a resource handle that can be used by other functions used
	        'to load the resource.
	        Public Declare Function FindResource Lib "kernel32" _
	           Alias "FindResourceA" _
	           (ByVal hInstance As Long, _
	            ByVal lpName As String, _
	            ByVal lpType As String) _
	           As Long
	
	        'Returns a global memory handle to a resource in the specified
	        'module. The resource is only loaded after calling the LockResource
	        'function to get a pointer to the resource data.
	        Public Declare Function LoadResource Lib "kernel32" _
	           (ByVal hInstance As Long, _
	            ByVal hResInfo As Long) _
	            As Long
	
	        'Locks the specified resource. The function returns a 32-bit pointer
	        'to the data for the resource.
	        Public Declare Function LockResource Lib "kernel32" _
	           (ByVal hResData As Long) As Long
	
	        'Loads the specified dll file and maps the address space for the
	        'current process.
	        Public Declare Function LoadLibrary Lib "kernel32" _
	           Alias "LoadLibraryA" (ByVal lpLibFileName As String) As Long
	
	        'Frees the specified .dll file loaded with the LoadLibrary function.
	        Public Declare Function FreeLibrary Lib "kernel32" _
	           (ByVal hLibModule As Long) As Long
	
	        'Copies a block of memory from one location to another.
	        Public Declare Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" _
	           (hpvDest As Any, _
	            hpvSource As Any, _
	            ByVal cbCopy As Long)
	
	        'Installs or removes a custom I/O procedure. This function also
	        'locates an installed I/O procedure, using its corresponding
	        'four-character code.
	        Public Declare Function mmioInstallIOProc Lib "winmm" _
	           Alias "mmioInstallIOProcA" _
	           (ByVal fccIOProc As Long, _
	            ByVal pIOProc As Long, _
	            ByVal dwFlags As Long) _
	            As Long
	
	        'Sends the specified command string to an MCI device.
	        Public Declare Function mciSendString Lib "winmm.dll" _
	           Alias "mciSendStringA" _
	           (ByVal lpstrCommand As String, _
	            ByVal lpstrReturnString As Long, _
	            ByVal uReturnLength As Long, _
	            ByVal hwndCallback As Long) _
	           As Long
	
	        'Returns the size, in bytes, of the specified resource.
	        Public Declare Function SizeofResource Lib "kernel32" _
	           (ByVal hInstance As Long, _
	            ByVal hResInfo As Long) As Long
	
	        'Accesses a unique storage system, such as a database or file
	        'archive. Install or remove this callback function with the
	        'mmioInstallIOProc function.
	        Public Function IOProc _
	           (ByRef lpMMIOInfo As MMIOINFO, _
	            ByVal uMessage As Long, _
	            ByVal lParam1 As Long, _
	            ByVal lParam2 As Long) _
	            As Long
	
	        Static alreadyOpened As Boolean
	
	        Select Case uMessage
	           Case MMIOM_OPEN
	              If Not alreadyOpened Then
	                  alreadyOpened = True
	                  lpMMIOInfo.lDiskOffset = 0
	              End If
	              IOProc = 0
	
	           Case MMIOM_CLOSE
	              IOProc = 0
	
	           Case MMIOM_READ:
	              Call CopyMemory(ByVal lParam1, ByVal _
	                              lpData + lpMMIOInfo.lDiskOffset, lParam2)
	              lpMMIOInfo.lDiskOffset = lpMMIOInfo.lDiskOffset + lParam2
	              IOProc = lParam2
	
	           Case MMIOM_SEEK
	
	           Select Case lParam2
	              Case SEEK_SET
	                 lpMMIOInfo.lDiskOffset = lParam1
	
	              Case SEEK_CUR
	                 lpMMIOInfo.lDiskOffset = lpMMIOInfo.lDiskOffset + lParam1
	                 lpMMIOInfo.lDiskOffset = fileSize - 1 - lParam1
	
	              Case SEEK_END
	                 lpMMIOInfo.lDiskOffset = fileSize - 1 - lParam1
	           End Select
	
	           IOProc = lpMMIOInfo.lDiskOffset
	
	           Case Else
	              IOProc = -1 ' Unexpected msgs.  For instance, we do not
	                          ' process MMIOM_WRITE in this sample
	        End Select
	
	        End Function ' IOProc
	
	6. Press the F5 key to run the project. Click the command button to play the AVI
	  file.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q124947 Retrieving Palette Information From a Bitmap Resource
	
	  Q155360 How to use MCI to Play AVI/WAVE Files From Memory
	
	
	Visual Basic 5.0 Programmer's Guide to the Win32 API by Dan Appleman, ZD Press
	
	Platform SDK Reference Guide: Multimedia Functions
	
	Additional query words: Avirsce
	
	======================================================================
	Keywords          : kbfile kbsample kbsound kbResourceEd kbVBp500 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
