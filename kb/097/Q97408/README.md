---
layout: page
title: "Q97408: DDEEXEC Demonstrates DDE Execute Strings"
permalink: kb/097/Q97408/
---

## Q97408: DDEEXEC Demonstrates DDE Execute Strings

	Article: Q97408
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbDDE
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The dynamic data exchange (DDE) protocol includes a feature designed to allow a
	DDE client application to send commands to a DDE server. The syntax of these
	execute requests and the way they should be handled by servers is not well
	documented and, consequently, varies slightly with different implementations.
	
	The current DDE protocol has no provision for returning result information from
	an execute request, so a client application can only tell that the request
	failed, not why it failed.
	
	This article proposes a consistent way to handle DDE execute command requests and
	a mechanism that allows result information to be returned. This article covers
	the following points:
	
	- DDE execute command syntax
	
	- Special characters in command arguments
	
	- Unicode considerations for Microsoft Windows NT
	
	- The returning of result information
	
	DDEEXEC is a dynamic data exchange (DDE) server that supports an Execute command
	set. The commands allow DDE client applications to draw pictures in the main
	window of the server. The following sample client applications use the DDEExec
	server and are included with this application:
	
	- EXEC is a Visual Basic(TM) version 2.0 application that allows any Execute
	  command to be sent to a given topic of a DDE server. This sample client
	  application tests the basic command set of a DDE server and ensures that the
	  server reports command errors correctly.
	
	- BUNNY is a Visual Basic 2.0 application that uses the server to draw a
	  picture of a bunny rabbit.
	
	- WBUNNY.DOC is a Word for Windows(TM) document based on the WBUNNY.DOT
	  template that uses Word's embedded Basic language to draw yet another bunny
	  picture.
	
	- XLART.XLM is a sample Microsoft Excel macro sheet that shows how you can use
	  Microsoft Excel as a DDE client to draw fascinatingly complex pictures.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Ddeexec.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words: softlib DDEEXEC.EXE
	
	======================================================================
	Keywords          : kbfile kbDDE 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
