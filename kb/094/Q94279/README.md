---
layout: page
title: "Q94279: Windows Err Msg: EMM386 Exception Error #6"
permalink: /kb/094/Q94279/
---

## Q94279: Windows Err Msg: EMM386 Exception Error #6

{% raw %}

	Article: Q94279
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbtool kberrmsg kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may receive the following error message while running an MS-DOS-based
	application under Windows or Windows for Workgroups:
	
	  EMM386 Exception Error #6
	
	This error message indicates that an MS-DOS-based application has caused the
	processor to execute an invalid instruction.
	
	Although the error message is provided by EMM386.EXE, it is not the cause, nor is
	it directly related to the problem. The error is probably caused by a corrupt
	.EXE file or a bad memory chip.
	
	MORE INFORMATION
	================
	
	When Windows starts, it turns off EMM386.EXE but leaves its error handler
	installed. When the CPU notifies Windows of a problem, it passes the error to
	the default handler, which in this case is EMM386.EXE.
	
	EMM386 Exception Error #6 indicates an "invalid opcode." According to
	"Microsoft's 80386/80486 Programming Guide" second edition (pages 122-123), this
	error can be caused by either of the following:
	
	- The processor tries to decode a bit pattern that does not correspond to any
	  legal machine instruction.
	
	- The processor tries to execute an instruction that contains invalid operands.
	
	Both situations indicate the same thing--the CPU is trying to execute
	instructions, but is being given random values from the wrong memory location.
	This can be caused by one of the following:
	
	- The application gave an invalid jump instruction, causing a jump to an
	  invalid memory location.
	
	- The application gave a correct jump, but the memory it jumped to is
	  corrupted.
	
	The most likely cause of these problems is either a corrupted file (.EXE, .DLL,
	or virtual device driver [VxD]) or a bad memory chip. If the problem occurs on
	more than one distinct program, it is probably caused by a bad memory chip. For
	example, if the problem occurs when you choose Open from the File menu in
	Microsoft Windows Write and Microsoft Windows Notepad, the error is probably
	being caused by a corrupted common dialog box .DLL file (COMMDLG.DLL). But if
	the problem occurs in two applications that do not share any .DLL files, the
	error is likely caused by a bad memory chip.
	
	If you are using MS-DOS 6.2 or later or Windows for Workgroups version 3.11, you
	may be able to correct this problem by removing HIGHSCAN from the EMM386.EXE
	command in your CONFIG.SYS file.
	
	This error can also be caused by upper memory conflicts. See the following
	article for more information:
	
	  Q112816 Locating and Excluding RAM/ROM Addresses in the UMA
	
	
	Exception Error #6 with Microsoft Backup for Windows
	----------------------------------------------------
	
	If you receive the "EMM386 Exception Error #6" while you are running Microsoft
	Backup for Windows, you may have an incompatible third-party virtual device
	driver (VxD).
	
	Use a text editor, such as Microsoft Windows Notepad, to edit the [386Enh]
	section of the SYSTEM.INI file and use a semicolon to remark out the following
	lines:
	
	       device=fastback.386
	
	-or-
	
	       device=virwt.386
	
	NOTE: VFINTD.386 is the virtual device driver for MS-DOS 6.x Backup for Windows
	and should not be removed.
	
	
	Exception Error #6 With Older Version of After Dark
	---------------------------------------------------
	
	This error can occur while running older version of Berkeley Systems' After Dark
	with other applications (such as Intuit's Quicken) in Microsoft Windows.
	
	To solve the problem, remove After Dark.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 mwbackup 006 6.0 6.00 6.2 6.20 3rdparty quickin afterdark ms-dos
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
