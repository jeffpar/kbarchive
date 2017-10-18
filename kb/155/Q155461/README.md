---
layout: page
title: "Q155461: MSD Fails w/ Application Error After Clicking OS Version"
permalink: kb/155/Q155461/
---

## Q155461: MSD Fails w/ Application Error After Clicking OS Version

	Article: Q155461
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT Diagnostics (Winmsd.exe) may fail after you click
	the operating system version button. The following error message appears:
	
	  An application error has occurred
	  and an application log is being generated.
	  WINMSD.EXE
	  Exception: access violation (0xC0000005, Address 0x021a9720)
	
	In addition, if Drwtsn32.exe is set up to create a Drwtsn32.log, the following
	text will appear in the header.
	
	  Application exception occurred:
	
	          App: winmsd.DBG (pid=113)
	          When: 8/15/1996 @ 16:14:44.592
	          Exception number: c0000005 (access violation)
	
	NOTE: The address and pid you have may differ from those in the example.
	
	CAUSE
	=====
	
	When the computer was installed, the date and time of the computer were out of
	the range supported by the ctime library function in the C language. This
	function handles dates in the range January 1, 1970 to January 18, 2038
	(inclusive). The registry contains an entry that has an invalid Hex number that
	is out of range. In most instances this value was found to be improperly set to
	REG_DWORD 0xFFFFFFFF. The following is the registry key that causes the
	problem:
	
	  \SOFTWARE\Microsoft\Windows NT\InstallDate
	
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SOFTWARE\Microsoft\Windows NT
	
	2. Select the InstallDate value and change it to a valid Hex Dword representing
	  an appropriate date and time.
	
	  a. Sunday, January 01, 1995, 12:00:00 AM = 2f0636d0
	
	  b. Monday, January 01, 1996, 12:00:00 AM = 30e76a50
	
	  c. Use the registry entry value from another computer.
	
	  d. Write a small C program using ctime to calculate the exact value.
	
	3. Quit the Registry Editor and run Windows NT Diagnostics.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5x. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The function name and the instruction with the FAULT will appear exactly as
	shown below in the Drwtsn32.log file, if the Windows NT Debug Symbols have been
	set up.
	
	State Dump for Thread Id 0x76
	
	eax=00000000 ebx=00345cf0 ecx=0012f8f8 edx=00000000 esi=021ae1d8
	edi=021ae1dc
	eip=021a9720 esp=0012f8ec ebp=0012f960 iopl=0         nv up ei pl nz na pe
	nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	efl=00000202
	
	function: GetOsVersionData
	021a96ff 53               push    ebx
	021a9700 e8401e0000       call    QueryNextValue (021ab545)
	021a9705 85c0             test    eax,eax
	021a9707 744d             jz      GetOsVersionData+0x8f (021a9756)
	021a9709 ff731c           push    dword ptr [ebx+0x1c]
	021a970c 817ffc11270000   cmp dword ptr [edi-0x4],0x2711
	021a9713 7523             jnz     GetOsVersionData+0x71 (021a9738)
	021a9715 e8b6240000       call    ctime (021abbd0)
	021a971a 83c404           add     esp,0x4
	021a971d 8d4d98           lea     ecx,[ebp-0x68]
	FAULT ->021a9720 c6401800         mov     byte ptr [eax+0x18],0x0
	021a9724 6a32             push    0x32
	021a9726 51               push    ecx
	021a9727 6aff             push    0xff
	021a9729 50               push    eax
	021a972a 6a01             push    0x1
	021a972c 6a00             push    0x0
	021a972e ff15b0111a02
	call dword ptr [_imp__MultiByteToWideChar (021a11b0)]
	021a9734 8d4d98           lea     ecx,[ebp-0x68]
	021a9737 51               push    ecx
	021a9738 e83f240000       call    _wcsdup (021abb7c)
	021a973d 83c404           add     esp,0x4
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	0012f960 021a998b 021ae1d8 0012f990 004d03cc 004d0438
	winmsd!GetOsVersionData
	0012f978 77ea18cf 000300ba 00000110 000200b6 00000000
	winmsd!OsVersionDlgProc
	0012f9a8 77f8a2e1 004d044c 004d0438 77f8a38f 004d0438 user32!_GetWindowLong
	
	Additional query words: prodnt 3.5 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
