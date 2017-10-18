---
layout: page
title: "Q199856: FIX: SIZE Command Does Not Work in Internet Transfer Control"
permalink: kb/199/Q199856/
---

## Q199856: FIX: SIZE Command Does Not Work in Internet Transfer Control

	Article: Q199856
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbDSupport
	Last Modified: 15-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Internet Transfer Control to run the SIZE command,
	icResponseCompleted is not returned to the StateChanged event, and you cannot
	obtain a size.
	
	CAUSE
	=====
	
	This problem occurs because the Internet Transfer Control is not properly
	handling the WM_INET_FTPSIZE message.
	
	RESOLUTION
	==========
	
	To obtain a file size through a Visual Basic application, you can use the
	FtpFindFirstFile and InternetFindNextFile WinInet functions directly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Internet Transfer Control that shipped with Microsoft
	Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	The following code illustrates the problem:
	
	  Private Sub Command1_Click()
	      Inet1.Execute "ftp://server", "size /"
	  End Sub
	
	  Private Sub Inet1_StateChanged(ByVal State As Integer)
	      Dim vtData As Variant ' Data variable.
	      Select Case State
	      ' ... Other cases are not shown.
	
	      Case icResponseCompleted ' 12
	          vtData = Inet1.GetChunk(1024)
	      End Select
	
	      Text1.Text = vtData
	  End Sub
	
	An example of the code that is necessary to implement the workaround is available
	in the VBFTP.exe sample, which is available from the following Microsoft
	Knowledge Base article:
	
	  Q175179 SAMPLE: VBFTP.EXE: Implementing FTP Using WinInet API from VB
	
	This sample uses the FtpFindFirstFile and InternetFindNextFile functions to
	populate a tree view of the files that are available on the FTP server. A
	WIN32_FIND_DATA structure is passed to these functions that, after the function
	is run, will contain the size of the found file. The WIN32_FIND_DATA structure
	contains the nFileSizeHigh and nFileSizeLow members, which represent the size of
	the file. The Win32 Software Development Kit (SDK) describes these members as
	follows:
	
	  nFileSizeHigh
	  Specifies the high-order DWORD value of the file size, in bytes. This value is
	  zero unless the file size is greater than MAXDWORD. The size of the file is
	  equal to (nFileSizeHigh * MAXDWORD) + nFileSizeLow.
	
	  nFileSizeLow
	  Specifies the low-order DWORD value of the file size, in bytes.
	
	MAXDWORD is defined in WinNT.h as follows:
	
	  #define MAXDWORD    0xffffffff
	
	This can be defined in Visual Basic as follows:
	
	  Public Const MAXDWORD = &Hffffffff
	
	IMPORTANT: WinInet uses a LIST command to gather information about the files on
	an FTP server. Some FTP servers do not return data in a format that WinInet can
	parse. In this case, the above work around will not work.
	
	Additional query words: broken
	
	======================================================================
	Keywords          : kbnokeyword kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
