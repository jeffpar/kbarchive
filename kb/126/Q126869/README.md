---
layout: page
title: "Q126869: DocErr: Media Player Command-Line Switches"
permalink: /kb/126/Q126869/
---

## Q126869: DocErr: Media Player Command-Line Switches

	Article: Q126869
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.1,3.11,3.5,3.51
	Operating System(s): 
	Keyword(s): kbmm kbdocerr
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	Media Player (both the 16-bit MPLAYER.EXE and the 32-bit MPLAY32.EXE)
	supports the following command-line syntax:
	
	  MPLAYER /play /close /embedding file
	
	All of the command-line switches and the file name are optional. Their
	meanings are as follows:
	
	  /play       Play file right away.
	  /close      Close after playing (only valid with /play).
	  /embedding  Run as an OLE server.
	  file        The file or device to open.
	
	This information was inadvertently omitted from the Windows documentation.
	
	In Windows 95 and Windows NT 3.5 and higher, the Media Player also supports
	the following switch:
	
	  /open       Open the file if specified; otherwise, show the File Open
	              dialog.
	
	In addition, the following switches can be used to ensure that the
	specified file is of a particular type:
	
	  /AVI        The file must be a Video for Windows (.AVI) file.
	  /MID        The file must be a MIDI (.MID) file.
	  /WAV        The file must be a Wave Audio (.WAV) file.
	
	Additional query words: 3.10 3.50 4.00 undocumented win31 wfw wfwg
	
	======================================================================
	Keywords          : kbmm kbdocerr 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin3xSearch kbSDKSearch kbWFWSearch kbWFW310 kbWFW311 kbWinSDKSearch kbWinSDK310
	Version           : :3.1,3.11,3.5,3.51
	
	=============================================================================
	
