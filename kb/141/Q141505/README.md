---
layout: page
title: "Q141505: HOWTO: Use LoadResData with Binary Data"
permalink: kb/141/Q141505/
---

## Q141505: HOWTO: Use LoadResData with Binary Data

	Article: Q141505
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbVBp400 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic 4.0 introduces a new function called LoadResData, which can be used
	to retrieve binary data from a resource (.res) file. The sample in this document
	demonstrates how to create a resource file and use binary data from it in all
	versions of Visual Basic 4.0.
	
	MORE INFORMATION
	================
	
	The following code is a resource script that can be compiled by using the 16-bit
	and 32-bit versions of Rc.exe.
	
	      ////////////////////////////////////////////////////////////////////// 
	      ////// 
	      // Myres.rc - 16 & 32 bit script. This must be compiled into two                        
	      //.res files using the 16 & 32 bit versions of RC.
	      /////////////////////////////////////////////////////////////////////// 
	      ////// 
	      // Wave Resources - You must copy these files from your \Windows
	      // directory to the directory where your .rc script resides.
	
	       CHIMES                  WAVE    DISCARDABLE     "Chimes.wav"
	       DING                    WAVE    DISCARDABLE     "Ding.wav"
	
	Steps to Create a Resource File
	-------------------------------
	
	1. Save the preceding code in Notepad as Myres.rc in the directory where Rc.exe
	  exists on your hard disk.
	
	2. Copy Chimes.wav and Ding.wav from your Windows directory (\Windows\Media
	  directory in Windows 95 and Windows 98 or \WinNT\Media directory in Windows
	  NT and Windows 2000) to the same directory where you saved the Myres.rc file.
	
	3. At the command line, type "RC -r Myres.rc." If you want a 16-bit and 32- bit
	  version of your resource file, then you will have to save two copies of your
	  resource file as Myres32.rc and Myres16.rc, and compile each separately with
	  the appropriate resource compiler.
	
	Steps to Run the Sample Application
	-----------------------------------
	
	1. Create a new project and add a command button to Form1.
	
	2. Add the following code to Form1:
	
	  '*********************************************************************
	
	        ' Form1.frm - Calls PlayWaveRes to play a wave resource file.
	
	  '*********************************************************************
	
	        Sub Command1_Click()
	           PlayWaveRes "Chimes"
	           PlayWaveRes "Ding"
	        End Sub
	
	3. Add your resource file to the project.
	
	4. Type the following code in a new code module:
	
	  **********************************************************************
	
	        ' Baswave.bas - Plays a wave file from a resource using LoadResData.
	
	  '*********************************************************************
	
	        Option Explicit
	        #If Win32 Then
	          Private Declare Function sndPlaySound Lib "winmm" Alias _
	             "sndPlaySoundA" (lpszSoundName As Any, ByVal uFlags As Long) _
	             As Long
	        #Else
	          Private Declare Function sndPlaySound Lib "MMSYSTEM" ( _
	                             lpszSoundName As Any, ByVal uFlags%) As Integer
	        #End If
	
	  '*********************************************************************
	
	        ' Flag values for wFlags parameter.
	
	  '*********************************************************************
	
	        Public Const SND_SYNC = &H0        ' Play synchronously (default).
	        'Public Const SND_ASYNC = &H1      ' Play asynchronously (see
	                                           ' note below).
	        Public Const SND_NODEFAULT = &H2   ' Do not use default sound.
	        Public Const SND_MEMORY = &H4      ' lpszSoundName points to a
	                                           ' memory file.
	        Public Const SND_LOOP = &H8        ' Loop the sound until next
	                                           ' sndPlaySound.
	        Public Const SND_NOSTOP = &H10     ' Do not stop any currently
	                                           ' playing sound.
	
	  '*********************************************************************
	
	        ' Plays a wave file from a resource.
	
	  '*********************************************************************
	
	        Public Sub PlayWaveRes(vntResourceID As Variant, Optional vntFlags)
	        '-----------------------------------------------------------------
	        ' WARNING:  If you want to play sound files asynchronously in
	        '           Win32, then you MUST change bytSound() from a local
	        '           variable to a module-level or static variable. Doing
	        '           this prevents your array from being destroyed before
	        '           sndPlaySound is complete. If you fail to do this, you
	        '           will pass an invalid memory pointer, which will cause
	        '           a GPF in the Multimedia Control Interface (MCI).
	        '-----------------------------------------------------------------
	        Dim bytSound() As Byte ' Always store binary data in byte arrays!
	
	        bytSound = LoadResData(vntResourceID, "WAVE")
	
	        If IsMissing(vntFlags) Then
	           vntFlags = SND_NODEFAULT Or SND_SYNC Or SND_MEMORY
	        End If
	
	        If (vntFlags And SND_MEMORY) = 0 Then
	           vntFlags = vntFlags Or SND_MEMORY
	        End If
	
	        sndPlaySound bytSound(0), vntFlags
	        End Sub
	
	REFERENCES
	==========
	
	For information on how to store any file type in a resource file and retrieve
	the file for use at run-time in Visual Basic versions 5.0 and 6.0, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q194409 SAMPLE: RESFILE.EXE Stores Any File Type in a Resource File
	
	Additional query words: WAVE LOADRESDATA RESOURCES RC BYTE SND_ASYNC kbdsd
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbVBp400 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
