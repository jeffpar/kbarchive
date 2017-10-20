---
layout: page
title: "Q269170: PRB: Set of DEFAULT Changed After MAPI.SESSION Logon"
permalink: /kb/269/Q269170/
---

## Q269170: PRB: Set of DEFAULT Changed After MAPI.SESSION Logon

{% raw %}

	Article: Q269170
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbMAPI kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programmers often maintain a default directory in Microsoft Visual FoxPro
	applications. They use this directory for the creation of temporary tables, work
	files, and so forth. However, if a Microsoft Visual FoxPro application also
	makes use of MAPI functions to send or receive mail, the default directory may
	change without warning.
	
	RESOLUTION
	==========
	
	In order to maintain the default directory and still use MAPI functionality,
	store the current directory to a variable and switch back to it after you are
	finished with the MAPI process with the following code:
	
	  LOCAL loMAPISession, lcCurDir
	  lcCurDir = SYS(5) + SYS(2003)
	  *!* Create a MAPI Session object, logon then logoff
	  loMAPISession = CREATEOBJECT("MAPI.Session")
	  loMAPISession.Logon()
	  *!* Perform mail functions here.
	  loMAPISession.LogOff()
	  CD (lcCurDir)
	  RELEASE loMAPISession, lcCurDir
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To demonstrate this behavior, save the following code to a new program file on a
	computer with Microsoft Visual FoxPro version 5.0 or higher and Microsoft
	Outlook.
	
	When it is run, the program will first Change Directory (using the CD command) to
	the directory in which the program file is located. It then prints the current
	directory to the screen. The program creates a MAPI.SESSION object, logs in, and
	then logs out. Finally, the current directory is printed once more: notice that
	it has changed.
	
	NOTE: This problem also occurs when you choose SEND from the File menu on the
	main Microsoft Visual FoxPro menu. To demonstrate this, comment the first line
	in the following code and run it. Close the Compose Mail screen when it appears,
	and note that the current directory has changed.
	
	  #DEFINE InCode
	
	  CD JUSTPATH(SYS(16))
	  CLEA
	  ? "Current Directory Before Message: "
	  CD
	
	  #IFDEF InCode
	  	LOCAL loMAPISession
	  	*!* Create a MAPI Session object, logon then logoff
	  	loMAPISession = CREATEOBJECT("MAPI.Session")
	  	loMAPISession.Logon()
	  	loMAPISession.LogOff()
	  	RELEASE loMAPISession
	  	? ""
	  	? "Current Directory After MAPI Logon: "
	  	CD
	
	  #ELSE
	  	*!* Call the compose mail window via File>Send
	  	KEYBOARD '{ALT+F}'
	  	KEYBOARD '{D}'
	  	DOEVENTS
	  	? ""
	  	? "Current Directory After MAPI Logon: "
	  	CD
	
	  #ENDIF
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q244343 PRB: Microsoft MAPI Control Changes the Current Working Director
	
	  Q299843 Using The Send Menu Changes The Current Directory
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbMAPI kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
