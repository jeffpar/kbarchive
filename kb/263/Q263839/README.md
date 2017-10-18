---
layout: page
title: "Q263839: HOWTO: Use Long File Names with ITC Execute Method"
permalink: kb/263/Q263839/
---

## Q263839: HOWTO: Use Long File Names with ITC Execute Method

	Article: Q263839
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,6.0 SP3
	Operating System(s): 
	Keyword(s): kbITC kbVBp600 kbGrpDSVBDB kbDSupport
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 6.0 SP3 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 6.0 SP3 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Internet Transfer control implements two widely used Internet protocols: the
	HyperText Transfer Protocol (HTTP) and the File Transfer Protocol (FTP). You can
	use the Internet Transfer control to connect to any site that uses one of these
	protocols, and you can use the Execute method to retrieve files.
	
	You can also use the GET command with the Execute method to copy files from a FTP
	site to a local hard disk drive. However, the command does not natively support
	a destination folder that has long file names and spaces within the path. The
	command executes but does not send the GET command to the FTP server. This
	article describes how you can save a file that has a long file name and spaces
	within the path from an FTP site to a local folder.
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	To save a file from the FTP site to a local folder, use the following code:
	
	  Private Sub Command1_Click()
	      Inet1.UserName = "Username"
	      Inet1.Password = "Password"
	      Inet1.URL = "ftp://YourFTPServer"
	      Inet1.Execute , "GET testfile.txt " & Chr(34) & "C:\Program Files\LongFileName.txt" & Chr(34)
	  End Sub
	
	Additional query words: GET Execute
	
	======================================================================
	Keywords          : kbITC kbVBp600 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP3
	Version           : :6.0,6.0 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
