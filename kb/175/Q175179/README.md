---
layout: page
title: "Q175179: SAMPLE: VBFTP.EXE: Implementing FTP Using WinInet API from VB"
permalink: kb/175/Q175179/
---

## Q175179: SAMPLE: VBFTP.EXE: Implementing FTP Using WinInet API from VB

	Article: Q175179
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbAPI kbFTP kbVBp kbVBp400 kbVBp500 kbVBp600 kbInetDev kbDSupport KbDSI
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Windows Internet Services (WinInet) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VBFTP.EXE is a sample that implements FTP connection, download, and upload using
	the WinInet FTP API from Visual Basic. It demonstrates the APIs and techniques
	to set FTP connection attributes and transfer mode that are not exposed inthe MS
	Internet Transfer Control.
	
	The sample requires Visual Basic 5 Service Pack 2 or later or Visual Studio
	Service Pack 2 installed to run because it uses the updated comctl32.ocx from
	those Service Packs.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  VBFTP.exe
	  (http://download.microsoft.com/download/VB60Pro/VBFTP/2/Win98/En-US/VBFTP.exe)
	
	Release Date: August 15, 2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	When adding FTP functionality to your application, it is important to understand
	the capability and limitation of each of the different Internet technologies. At
	the lowest level, you could use the Microsoft Winsock Control to send commands
	directly to FTP server port 21. The sequence and syntax of the commands you send
	to the server would have to follow the specification of the FTP protocol. The
	WinInet FTP API wraps the socket code and most low-level FTP commands and
	provides a set of much simpler task-oriented APIs that do not require detailed
	knowledge of FTP protocol. However, there is a chance that some FTP servers use
	FTP commands not implemented by WinInet. If this happens, you have to use the
	Microsoft Winsock Control to communicate with the server directly at the
	protocol level. Test your FTP server with the VBFTPJR sample before you decide
	whether to choose WinInet API or the Winsock Control. The Microsoft Internet
	Transfer Control, on the other hand, offers a more simplified interface than
	WinInet but offers less flexibility and cannot be used if you want to customize
	the connection and transfer mode.
	
	If you are using a proxy to access an FTP server, the proxy has to be capable of
	handling FTP commands and cannot be a CERN proxy. Please see the following
	article in the Microsoft Knowledge Base for more information:
	
	  Q166961 : HOWTO: FTP with CERN-Based Proxy Using WinInet API
	
	Additional query words: VBFTP
	
	======================================================================
	Keywords          : kbfile kbSample kbAPI kbFTP kbVBp kbVBp400 kbVBp500 kbVBp600 kbInetDev kbDSupport KbDSI 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
