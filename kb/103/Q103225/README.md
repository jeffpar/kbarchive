---
layout: page
title: "Q103225: SmallCap.exe - Process Nonclient Msgs w/Msg Blaster Ctrl"
permalink: /kb/103/Q103225/
---

## Q103225: SmallCap.exe - Process Nonclient Msgs w/Msg Blaster Ctrl

	Article: Q103225
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile kbsample kbvbp200
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Smallcap is a sample application created by Randall Kern and Jim Cash that
	accompanies the "Message Blaster: Processing Messages in Visual Basic" technical
	article on the MicrosoftDeveloper Network CD.
	
	The Microsoft Visual Basic development environment is not based on a
	message-driven programming model. Instead, Visual Basic supports a predefined
	set of events for each object (form or control) that you create. An application
	written in Visual Basic cannot respond to messages from Microsoft Windows(TM)
	that are not handled directly by a Visual Basic event. The Message Blaster is a
	Visual Basic control that addresses this restriction by allowing you to catch
	and process Windows messages from Visual Basic.
	
	You can use the Message Blaster control to process any message from Windows
	except for WM_CREATE and WM_NCCREATE messages. The Smallcap sample application
	shows how you can process WM_NC* (nonclient) messages to create captions.
	
	Smallcap was built and tested under Microsoft Windows version 3.1 and Microsoft
	Visual Basic version 2.0.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Smallcap.exe
	  (http://download.microsoft.com/download/vb30/Sample22/1/W9XNT4/EN-US/Smallcap.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbvbp200 
	Technology        : kbVBSearch kbAudDeveloper
	Version           : :
	
	=============================================================================
	
