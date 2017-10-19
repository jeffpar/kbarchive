---
layout: page
title: "Q126583: PRB: Printer Setup Is Disabled When Using _MFI_SETUP in Menu"
permalink: /kb/126/Q126583/
---

## Q126583: PRB: Printer Setup Is Disabled When Using _MFI_SETUP in Menu

	Article: Q126583
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Printer Setup option of your menu is disabled.
	
	CAUSE
	=====
	
	The system menu option "_MFI_SETUP" exists as a menu command in your menu. When
	there is no text to be printed in the active window, FoxPro disables the Printer
	Setup option menu choice, and because the _MFI_SETUP variable is context-aware,
	it is enabled and disabled accordingly.
	
	WORKAROUND
	==========
	
	Use one of the following three workarounds:
	
	- Use the SYS(1037) function. This is the best workaround, but it works only if
	  you are using version 2.6 or later of FoxPro for Windows or version 2.5 or
	  later of FoxPro for Macintosh.
	
	  To invoke the printer setup dialog regardless of what is displayed on the
	  screen, use the following code as a Command in your menu:
	
	     ? SYS(1037)
	
	  The Help file for FoxPro version 2.6 and 2.6a, in both the MS-DOS and Windows
	  versions, is partially incorrect in that it states that this command is
	  Macintosh-specific and will be ignored in the Windows and MS-DOS Versions of
	  FoxPro. SYS(1037) works in FoxPro versions 2.6 and 2.6a for Windows, but not
	  in other versions.
	
	-or-
	
	- Issue the command "Set PDSETUP TO '?'" (without the quotation marks) as the
	  command for your menu pad. This invokes the MS-DOS printer driver setup
	  without invoking the Windows Printer Setup.
	
	-or-
	
	- Issue the RUN command as in this example:
	
	     RUN /N7 CONTROL MAIN.CPL PRINTERS
	
	  This invokes the Control Panel, Printers option. However this is a less
	  desirable workaround because, as noted in article Q101154, this causes the
	  control panel to flash momentarily in the background. This command is
	  specific to Windows only.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create and run a program containing the following code:
	
	     **---------------------------------------------------------**
	     ** Place this code in a file called MENU.MPR               **
	     **---------------------------------------------------------**
	     SET SYSMENU TO
	     SET SYSMENU AUTOMATIC
	     DEFINE PAD testpad OF _msysmenu PROMPT "System" COLOR SCHEME 3
	     ON PAD testpad OF _msysmenu ACTIVATE POPUP SYSTEM
	     DEFINE POPUP SYSTEM MARGIN RELATIVE SHADOW COLOR SCHEME 4
	     DEFINE BAR _mfi_setup OF SYSTEM PROMPT "Printer Setup..."
	
	     **--------------------------------------------------------**
	     ** Place this code in a file called MENU.PRG              **
	     **--------------------------------------------------------**
	     Terminate = .F.
	     ON KEY LABEL f5 Do Stopit
	     DO menu.mpr
	     READ VALID terminate
	     SET SYSMENU TO DEFAULT
	
	     Procedure Stopit
	     STORE .T. TO terminate
	     clear Read
	
	While running the program, you can access the menu pad labeled SYSTEM, but the
	Printer Setup option is disabled.
	
	Additional query words: VFoxWin FoxWin 2.50 _MFI_SETUP PDSETUP print menu setup exe disabled
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300
	Version           : MACINTOSH:2.5b,2.5c,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	Issue type        : kbprb
	
	=============================================================================
	
