---
layout: page
title: "Q190846: BUG: Calling AsyncRead on a File Twice Causes Error 698"
permalink: kb/190/Q190846/
---

## Q190846: BUG: Calling AsyncRead on a File Twice Causes Error 698

	Article: Q190846
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the all of the following conditions are true:
	
	- You are calling AsyncRead on local files.
	
	- You are using the same value for the PropertyName argument.
	
	- You make the two calls successively.
	
	the following error message is displayed:
	
	  
	
	  Error 698: PropertyName parameter conflicts with the PropertyName of
	             an AsyncRead in progress
	
	Because the AsyncRead is being performed on a local file, the download should be
	happening synchronously. This means that it should be okay to issue AsyncRead
	twice in succession.
	
	RESOLUTION
	==========
	
	If you wish to force Synchronous download, use the AsyncReadOption:
	"vbAsyncReadSynchronousDownload" in your call to AsyncRead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a ActiveX Document DLL project in Visual Basic.
	
	2. Put the following code into your Userdocument_Click() handler:
	
	        AsyncRead "c:\windows\Triangles.bmp", vbAsyncTypePicture, "def"
	        AsyncRead "c:\windows\Triangles.bmp", vbAsyncTypePicture, "def"
	
	3. Compile the project into a DLL.
	
	4. Start Internet Explorer 4.x and navigate to your .VBD file.
	
	5. Click on the Document and note that you see the above-mentioned error
	  message.
	
	Additional query words: kbDSupport kbVBp600bug kbdsi kbVBp kbInternet kbNoKeyWord
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
