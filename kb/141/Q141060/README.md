---
layout: page
title: "Q141060: VB3 Using Visual Basic 3.0 to Play WAVE Files Stored in a DLL"
permalink: kb/141/Q141060/
---

## Q141060: VB3 Using Visual Basic 3.0 to Play WAVE Files Stored in a DLL

	Article: Q141060
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbmm
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By calling the necessary Windows API, a Visual Basic program can access and play
	wave files stored in a dynamic-link library (DLL). Generally, a DLL that
	contains only resources such as wave files is referred to as a resource-only
	library.
	
	NOTE: Visual Basic 3.0 does not support the insertion of resources such as wave
	files into a DLL. A third-party tool such as the Microsoft C++ Compiler and its
	accompanying Resource Compiler are needed to accomplish this.
	
	MORE INFORMATION
	================
	
	The following example shows how to create a resource-only library using
	Microsoft Visual C++ 1.5. For this example, the resource-only library contains
	the two wave files Ding.wav and Chimes.wav.
	
	1. Create a text file and place the following lines of code in it:
	
	     #include <windows.h>
	     int FAR PASCAL LibMain(HANDLE hInstance, WORD wDataSeg, WORD wHeapSize,
	     LPSTR lpszCmdLine)
	     {
	        if (wHeapSize > 0)
	           UnlockData(0);
	        return 1;
	     }
	
	2. Save the above file with the extension .c.
	
	3. Create another file and place the following text in it (the lines below
	  assume that both wave files are currently located in the c:\windows
	  directory):
	
	      Sound1 WAVE c:\windows\ding.wav
	      Sound2 WAVE c:\windows\chimes.wav
	
	4. Save this file with the extension .rc. This will identify it as a resource
	  file.
	
	5. From within Visual C++ version 1.5, click New on the Project menu to specify
	  the name of your project. Then set the Project Type to "Windows dynamic-link
	  library (.DLL)" and click OK.
	
	6. Use the Edit dialog box that appears next to add the .c and .rc files created
	  in steps 1-3.
	
	7. On the Project menu, click Build. This will take the files created above and
	  generate the resource-only library from them. This DLL contains the two wave
	  files Ding.wav and Chimes.wav.
	
	The following Visual Basic 3.0 code can then be used to play the wave files
	imbedded in the DLL created above:
	
	1. In the Visual Basic programs "General Declaration" section add the following
	  code:
	
	     Declare Function sndPlaySound Lib "mmsystem.dll" (ByVal lpRes As Any,
	     ByVal wflags As Integer) As Integer
	
	     Declare Function LoadLibrary Lib "kernel" (ByVal lpLibFileName As
	     String) As Integer
	
	     Declare Function FindResource Lib "kernel" (ByVal hInstance As Integer,
	     ByVal lpname As String, ByVal lpType As Any) As Integer
	
	     Declare Function LoadResource Lib "kernel" (ByVal hInstance As Integer,
	     ByVal hResInfo As Integer) As Integer
	
	     Declare Function LockResource Lib "kernel" (ByVal hResData As Integer)
	     As Long
	
	     Declare Function FreeResource Lib "kernel" (ByVal hResData As Integer)
	     As Integer
	
	     Declare Sub FreeLibrary Lib "kernel" (ByVal hInstance As Integer)
	
	     Const SND_MEMORY = 4
	
	2. In a subroutine add the following Visual Basic code. This is the code that
	  actually opens the DLL and plays the Ding.wav file:
	
	     Dim hInstance As Integer
	     Dim hResInfo As Integer
	     Dim hRes As Integer
	     Dim lpRes As Long
	     Dim iReturn As Integer
	
	     hInstance = LoadLibrary("c:\wavedll.dll")
	     hResInfo = FindResource(hInstance, "Sound1", "WAVE")
	     hRes = LoadResource(hInstance, hResInfo)
	     lpRes = LockResource(hRes)
	     iReturnVal = sndPlaySound(lpRes, SND_MEMORY)
	
	     iReturnVal = FreeResource(hRes)
	     FreeLibrary(hInstance)
	
	3. You can then call the subroutine the code in step 9 was added to whenever you
	  want the sound played.
	
	Additional query words: 3.00 vb3 vbasic
	
	======================================================================
	Keywords          : kbmm 
	Technology        : kbVBSearch kbAudDeveloper kbWin3xSearch kbZNotKeyword6 kbZNotKeyword2 kbSDKSearch kbVB300Search kbVB300 kbWinSDKSearch kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
