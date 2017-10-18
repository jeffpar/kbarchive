---
layout: page
title: "Q80897: Windows 3.1 Application Compatibility (part 2 of 7)"
permalink: kb/080/Q80897/
---

## Q80897: Windows 3.1 Application Compatibility (part 2 of 7)

	Article: Q80897
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Application Compatibility Document for Windows 3.1
	--------------------------------------------------
	
	Due to the amount of information in this document, it has been broken into seven
	pieces. To find all seven pieces of this document and the Windows 3.1
	Compatibility Test checklist, query this knowledge base on the words:
	
	  " prod(winsdk) and 31compattest " (without the quotation marks)
	
	Multimedia and Sound
	--------------------
	
	Windows version 3.1 includes multimedia and sound drivers. Most of these
	enhancements should affect only applications that use the sound functions.
	Applications that use unusual drivers, such as fax machine applications, should
	also test to be sure the sound drivers don't interfere.
	
	MS-DOS SOUND APPLICATIONS
	-------------------------
	
	Potential Problem
	-----------------
	
	Some MS-DOS-based applications that use audio cards, such as SoundBlaster, may
	not run correctly in virtual machines or may run incorrectly after Windows
	terminates.
	
	Test
	----
	
	Carry out each of the following steps. Be sure your application runs correctly as
	you complete each step:
	
	1. Run the MS-DOS-based application in a virtual machine.
	
	2. Exit Windows and run your application under MS-DOS.
	
	WINDOWS SOUND APPLICATIONS
	--------------------------
	
	Potential Problem
	-----------------
	
	Although Windows sound functions are 100 percent backward compatible, some
	Windows-based applications may not function properly with the new functions.
	
	Test
	----
	
	Run your application and try all the sound capabilities.
	
	UNUSUAL DRIVERS
	---------------
	
	Potential Problem
	-----------------
	
	Applications requiring unusual drivers, such as WinFax, may not be compatible
	with Multimedia extensions.
	
	Test
	----
	
	Run your application and try the functions of your application that the driver
	supplies.
	
	Window Management
	-----------------
	
	The window management (User module) enhancements may affect Windows 3.0
	applications. To test this, perform as many operations as possible that will
	move, size, scroll, and repaint your application windows. The following sections
	list a few basic methods to try, but also try as many other methods as
	possible.
	
	In some cases, Windows version 3.1 will ensure compatibility with existing
	Windows version 3.0 applications by supporting both the Windows versions 3.0 and
	3.1 implementations. If an application's Windows version as set by Resource
	Compiler (RC) is 3.0, Windows version 3.1 carries out the Windows 3.0
	implementation; that is, the Windows version 3.1 enhancement has no impact on an
	existing Windows version 3.0 application. However, if a Windows version 3.0
	application's Windows version is changed to 3.1 without corresponding changes to
	the application code, the application may encounter problems wherever Windows
	version 3.1 carries out the 3.1 implementation.
	
	MOVING AND SIZING
	-----------------
	
	For Windows 3.0 applications, the SetWindowPos function assumes that SWP_NOMOVE
	and SWP_NOSIZE are set if SWP_HIDEWINDOW or SWP_SHOWWINDOW was set. Thus, hiding
	and showing a window and changing its size and position are not possible in an
	atomic operation. Windows version 3.1 applications are not so limited.
	
	Potential Problem
	-----------------
	
	Any Windows version 3.0 application whose version number is changed to 3.1 may
	make unnecessary calls to SetWindowPos.
	
	In a Windows version 3.0 application, if you call SetWindowPos with
	SWP_SHOWWINDOW when the window is already visible, SetWindowPos always causes
	the entire window to be redrawn. This also affects the operation of ShowWindow.
	In a Windows version 3.1 application, a call to SetWindowPos with SWP_SHOWWINDOW
	on a window that is already visible will not redraw (unless other areas must be
	updated as a result of a size, move, or z-order operation specified in addition
	to SWP_SHOWWINDOW).
	
	Potential Problem
	-----------------
	
	Any Windows version 3.0 application whose version number is changed to 3.1 may
	encounter problems if it depends on redrawing on each call to SetWindowPos with
	SWP_SHOWWINDOW set.
	
	MoveWindow is shorthand for a call to SetWindowPos with the SWP_NOZORDER and
	SWP_NOACTIVATE flags set. If the MoveWindow fRedraw parameter is FALSE, then
	SWP_NOREDRAW is also set. In a Windows 3.0 application, when MoveWindow is
	called on a top-level window with fRedraw set to FALSE, Windows calls
	SetWindowPos without setting the SWP_NOREDRAW flag and then calls ValidateRect
	to prevent the client area from repainting. However, WM_NCPAINT and
	WM_ERASEBKGND messages will have been sent, even though fRedraw was FALSE. In a
	Windows version 3.1 application, MoveWindow no longer makes this special case.
	
	Potential Problem
	-----------------
	
	Any Windows version 3.0 application whose version number is changed to 3.1 may
	encounter problems if it depends on receiving WM_NCPAINT and WM_ERASEBKGND
	messages after a call to MoveWindow.
	
	In a Windows version 3.0 application, Windows always redraws a window's frame
	completely when the window is moved or sized. In a Windows version 3.1
	application, Windows no longer redraws a window's frame completely in all cases.
	For example, the following code sequence will not redraw the window border:
	
	     MoveWindow(hwnd, ..., FALSE);
	         .
	         .
	         .
	     InvalidateRect(hwnd, NULL, TRUE);
	
	Potential Problem
	-----------------
	
	Any Windows version 3.0 application whose version number is changed to 3.1 may
	have an incomplete window frame if it depends on Windows redrawing the frame
	completely after moving and sizing.
	
	Tests
	-----
	
	1. Start your application in its default state. Maximize and minimize it; be
	  sure it paints correctly after each operation.
	
	2. Move your application as far right and left as you can in small increments,
	  watching for repaint problems each time you stop moving.
	
	3. Resize your application using the mouse to drag the border.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
