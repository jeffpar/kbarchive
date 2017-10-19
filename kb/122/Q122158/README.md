---
layout: page
title: "Q122158: Configuring Sound in Visual C++ Development Environment"
permalink: /kb/122/Q122158/
---

## Q122158: Configuring Sound in Visual C++ Development Environment

	Article: Q122158
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Visual C++ will play different sounds at the end of a build, depending on the
	success of the build. Without a sound system installed, Visual C++ calls
	MessageBeep().
	
	If there is a sound system installed in the computer, Visual C++ calls
	sndPlaySound(), using the Multimedia API, with specific sound names. If the
	sound names listed below are not in the system's registry, Visual C++ does not
	make any sound at all.
	
	  Build State            sndPlaySound()      MessageBeep()
	                         Sound Name          Beep Type
	  -----------------------------------------------------------
	  Build is up to date    BuildUpToDate       MB_ICONASTERISK
	  Build has errors       BuildError          MB_ICONEXCLAMATION
	  Build has warnings     BuildWarning        MB_ICONQUESTION
	  Build complete         BuildComplete       MB_ICONASTERISK
	  Build cancelled        <nothing>           <nothing>
	
	In addition, Visual C++ version 4.0 supports the following sound states:
	
	  State                  sndPlaySound()      MessageBeep()
	                         Sound Name          Beep Type
	  -----------------------------------------------------------
	  Breakpoint Hit         MSVC_HitBP         <nothing>
	  Error in Output        MSVC_OutputError   <nothing>
	  Warning in Output      MSVC_OutputWarning <nothing>
	
	If a sound card is not installed, you can modify the system sounds by choosing
	the Sound icon from the Control Panel. If you have a sound card installed, you
	need to modify the registry to add the sndPlaySound() sound names to enable
	sound before you change the sounds in the Control Panel.
	
	MORE INFORMATION
	================
	
	Under Windows NT registry, the sounds need to be placed in:
	
	  HKEY_CURRENT_USER\Control Panel\Sounds
	
	You can use the following sample C program to automatically add these sounds, or
	you can use REGEDT32.EXE to directly modify the registry. After the
	modifications, your registry should contain the following lines for Visual C++
	2.x:
	
	  BuildComplete:REG_SZ:tada.wav,Build Complete
	  BuildUpToDate:REG_SZ:ding.wav,Build Up To Date
	  BuildError:REG_SZ:ding.wav,Build Error
	  BuildWarning:REG_SZ:ding.wav,Build Warning
	
	After the modifications, your registry should contain the following lines for
	Visual C++ 4.0:
	
	  BuildComplete : REG_SZ : tada.wav,MSDev: Build Complete
	  BuildUpToDate : REG_SZ : ding.wav,MSDev: Build Up To Date
	  BuildError : REG_SZ : ding.wav,MSDev: Build Error
	  BuildWarning : REG_SZ : ding.wav,MSDev: Build Warning
	
	
	Sample Code
	-----------
	
	  /* Compile options needed: Default build options for a console
	                    application.
	  */ 
	
	  #include <windows.h>
	  #include <stdio.h>
	  #include <string.h>
	
	  char *sound[4] = { "BuildComplete", "BuildUpToDate",
	                     "BuildError", "BuildWarning" };
	  #if _MSC_VER == 1000  // using Visual C++ 4.0
	  char *soundValue[4] = { "tada.wav,MSDev: Build Complete",
	                          "ding.wav,MSDev: Build Up To Date",
	                          "ding.wav,MSDev: Build Error",
	                          "ding.wav,MSDev: Build Warning" };
	  #else  // using Visual C++ 2.x
	  char *soundValue[4] = { "tada.wav,Build Complete",
	                          "ding.wav,Build Up To Date",
	                          "ding.wav,Build Error",
	                          "ding.wav,Build Warning" };
	  #endif
	
	  void main( void )
	  {
	  int i;
	  HKEY hCPanel;
	  HKEY hSounds;
	
	  if ((ERROR_SUCCESS != RegOpenKeyEx(HKEY_CURRENT_USER, "Control Panel",
	                         0, KEY_SET_VALUE, &hCPanel)) ||
	                  (ERROR_SUCCESS != RegOpenKeyEx(hCPanel, "Sounds",
	                   0, KEY_SET_VALUE, &hSounds)))
	     {
	      printf("Error opening HKEY_CURRENT_USER\\Control Panel\\Sounds\n");
	      exit(-1);
	     }
	
	  for (i=0; i<4; i++)
	         if (ERROR_SUCCESS != RegSetValueEx(hSounds, sound[i], 0, REG_SZ,
	          (unsigned char*) soundValue[i], strlen(soundValue[i]) + 1))
	         printf("Could not set sound: %s\n", sound[i]);
	
	  RegCloseKey(hSounds);
	  RegCloseKey(hCPanel);
	
	  printf("Sounds were successfully added\n");
	  exit(0);
	  }
	
	Additional query words: kbsound 2.00 2.10 4.00 beep sound blaster vwb visual workbench ide
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC200 kbVC210
	Version           : :2.0,2.1,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
