---
layout: page
title: "Q140694: How to Restart the Macintosh from Within FoxPro"
permalink: /kb/140/Q140694/
---

## Q140694: How to Restart the Macintosh from Within FoxPro

{% raw %}

	Article: Q140694
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases, you may need to provide a FoxPro application with the ability to
	restart the computer. FoxPro doesn't have the capability to do this directly, so
	it needs to call functions at the operating system level.
	
	On the Macintosh, this can be done with either Apple Script commands or by using
	C code in a shared library (MLB) or external command (XCMD).
	
	MORE INFORMATION
	================
	
	Method One
	----------
	
	1. Launch the Script Editor, which is an Apple application used to create
	  scripts. Type the following in the script:
	
	     Tell application "Finder"
	        restart
	     End tell
	
	2. Save the script in your Microsoft FoxPro folder as RestartMe.
	
	3. Call the script from within FoxPro with this command:
	
	     RUNSCRIPT "MyHardDrive:Microsoft FoxPro 2.6:restartme"
	
	  This does the same thing as clicking Restart on the Special menu.
	
	4. To turn off the Macintosh from within FoxPro, use these commands:
	
	     Tell application "Finder"
	        shutdown
	     End tell
	
	Method Two
	----------
	
	You can get similar performance from an XCMD or from an MLB that calls routines
	in the Shutdown Manager (in particular ShutDwnStart() to restart, and
	ShutDwnPower() to shut down the machine).
	
	The following C code can be used to create an MLB that can be called from within
	FoxPro:
	
	  #include <pro_ext.h>
	  #include <shutdown.h>
	  void FAR goodbye( ParamBlk FAR *parm )
	
	  {
	
	       ShutDwnStart();
	
	  }
	
	  FoxInfo myFoxInfo[]={
	
	       {"GOODBYE", (FPFI) goodbye, 0, ""}
	
	  };
	
	  FoxTable _FoxTable={
	
	       (FoxTable FAR *) 0,
	       sizeof(myFoxInfo) / sizeof(FoxInfo),
	       myFoxInfo
	
	  };
	
	Once this is created, placed in a Shared Library such as Restart.mlb, and saved
	to the Extensions Folder in the System Folder, it can be called with the
	following code in FoxPro:
	
	     SET LIBRARY TO restart.mlb
	     =goodbye()
	
	NOTE: Under Windows, you can co this with the ExitWindows API as referenced in
	the the following articles in the Microsoft Knowledge Base:
	
	  Q109607 How to Reboot the System from Within FoxPro
	
	  Q110254 How to Restart Windows from Within FoxPro
	
	Additional query words: VFoxMac FoxMac MAC shutdown shut down
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,2.6a,3.0b
	
	=============================================================================
	

{% endraw %}
