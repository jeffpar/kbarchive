---
layout: page
title: "Q155903: WD97: Error Inserting ActiveX Control"
permalink: /kb/155/Q155903/
---

## Q155903: WD97: Error Inserting ActiveX Control

	Article: Q155903
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbole word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You get the following error message when you attempt to run an ActiveX control
	in Word 97.
	
	  The server application, source file, or item cannot be found. Make sure the
	  application is properly installed, and that it has not been deleted, moved or
	  renamed.
	
	CAUSE
	=====
	
	This problem occurs when you attempt to use an ActiveX control, such as the
	Microsoft FTP Control, which is installed by the Microsoft ActiveX Internet
	Controls setup program. This problem also occurs when you attempt to use an
	ActiveX control from Microsoft Office 97 Developer Edition Tools. These controls
	are not currently supported by Word 97. This error message may occur when you
	attempt to use other Microsoft or third-party ActiveX Controls.
	
	
	Word 97 currently supports a number of ActiveX controls to help you build
	interactive forms and for data access. You can install these controls if you
	choose a complete/custom installation of Word 97 or Office 97.
	
	The use of third-party or other Microsoft ActiveX controls that are not shipped
	with Word 97 are not supported by Microsoft Technical Support.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	The following are included in the Microsoft ActiveX Internet Controls package:
	
	  Winsock TCP ActiveX Control
	  Winsock UDP ActiveX Control
	  FTP Client ActiveX Control
	  HTTP ActiveX Control
	  HTML ActiveX Control
	  POP ActiveX Control
	  SMTP ActiveX Control
	  NNTP ActiveX Control
	
	These ActiveX controls are designed for use with Microsoft Access, Visual Basic,
	Visual C++, and Visual FoxPro.
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbole word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
