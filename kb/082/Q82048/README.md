---
layout: page
title: "Q82048: Windows 3.0 Err Msg: Second Instance of Windows"
permalink: /kb/082/Q82048/
---

## Q82048: Windows 3.0 Err Msg: Second Instance of Windows

{% raw %}

	Article: Q82048
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a second instance of Microsoft Windows 3.0 is started from another
	application (including an MS-DOS virtual session, the MS-DOS Shell, or certain
	Windows applications), one of the following error messages may be displayed:
	
	  Cannot run second instance of Windows, exit this instance of Windows and run
	  from the original version of Windows.
	
	  -or-
	
	  Cannot run a non-Windows application from the second instance of Windows;
	  exit this instance of Windows and run your application from the original
	  instance.
	
	  -or-
	
	  Insufficient memory to run application; close one or more applications to
	  increase available memory and try again.
	
	Microsoft recommends that you do not start Windows from within a shell utility or
	from menu program.
	
	NOTE: The information in this article applies to Windows 3.0 and 3.0a; it does
	not apply to later versions of Windows.
	
	MORE INFORMATION
	================
	
	Second Instance of Windows Started from MS-DOS Prompt
	-----------------------------------------------------
	
	A second (or additional) instance of Windows is created if you issue the WIN
	command from an application running within Windows, including the MS-DOS prompt
	and MS-DOS batch files. If this happens, the following error may be displayed:
	
	  Cannot run second instance of Windows, exit this instance of Windows and run
	  from the original version of Windows.
	
	For example, if you start an MS-DOS session from the MS-DOS Prompt within
	Windows,you have access to all MS-DOS commands and statements. If you then type
	"WIN" (without the quotation marks) and press ENTER, a second instance of
	Windows is started and the error message is displayed.
	
	To end your MS-DOS session and return to Windows, type "EXIT" (without quotation
	marks) and then press ENTER. To return to Windows without ending your MS-DOS
	session, press ALT+TAB.
	
	Second Instance of Windows Started from MS-DOS Shell
	----------------------------------------------------
	
	Although it is not recommended, you can run Windows from the MS-DOS Shell.
	However, if you attempt to execute an MS-DOS application within Windows and you
	have the MS-DOS Task Swapper option enabled, the following error message may be
	displayed:
	
	  Cannot run a non-Windows application from the second instance of Windows;
	  exit this instance of Windows and run your application from the original.
	
	In the MS-DOS Shell, the Enable Task Swapper option should be displayed (that is,
	it should not have a check mark beside Enable Task Swapper on the Option menu).
	This option is a toggled selection: choosing Enable Task Swapper the first time
	enables it; choosing it again disables it.
	
	The following error may be displayed if you try to run Windows in 386 enhanced
	mode from within the MS-DOS Shell (regardless of the Enable Task Swapper option
	status):
	
	  Insufficient memory to run application; close one or more applications to
	  increase available memory and try again.
	
	At this point, exit Windows, exit MS-DOS Shell, and start Windows from the MS-DOS
	command prompt.
	
	Second Instance of Windows Started from an Application
	------------------------------------------------------
	
	Starting a Windows application such as Microsoft Excel, Microsoft Project, or
	Microsoft PowerPoint from an MS-DOS batch file inside Windows starts another
	instance of Windows.
	
	Large Windows applications such as these start an instance of Windows when the
	application's executable filename is invoked. Smaller Windows applications, such
	as Notepad, do not start another instance of Windows.
	
	For example, if you type "EXCEL" (without the quotation marks) at an MS-DOS
	command prompt, Microsoft Excel starts as does a new instance of Windows. If you
	type "NOTEPAD" (without the quotation marks) at an MS-DOS command prompt,
	Notepad does not start unless you type WIN before the command (that is, WIN
	NOTEPAD ).
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
