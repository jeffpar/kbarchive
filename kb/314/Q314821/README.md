---
layout: page
title: "Q314821: FIX: Exception Error With For...Each Reference to Outlook Folder"
permalink: /kb/314/Q314821/
---

## Q314821: FIX: Exception Error With For...Each Reference to Outlook Folder

{% raw %}

	Article: Q314821
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbAutomation kbCOMt kbGrpDSFox kbDSupport kbvfp700 _IK283
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Visual FoxPro (VFP) For...Each loop to automatically iterate
	through a Microsoft Outlook folder collection, the following error message
	appears and VFP closes.
	
	  Fatal error: Exception code=C0000005
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Save the following code in a program (.prg) file and then run the program. Note
	that you must have Microsoft Outlook 2000 or later installed on your computer.
	
	  CLEAR
	  LOCAL loOutlook as Outlook.Application, ;
	  	loNameSpace as Object, ;
	  	loFolder as Object, ;
	  	loSelFolder as Object, ;
	  	loSubFolder as Object, ;
	  	loMsgs as Object
	
	  loOutlook = CREATEOBJECT('Outlook.Application')
	  loNameSpace = loOutlook.GetNameSpace("MAPI")
	  loFolder = NULL
	  loSelFolder = NULL
	  loSubFolder = NULL
	  loMsgs = NULL
	
	  FOR EACH loFolder IN loNameSpace.Folders
	  	FOR EACH loSubFolder IN loFolder.Folders
	  		IF ALLTRIM(loSubFolder.NAME) == "Inbox"
	  			loSelFolder = loSubFolder
	  			EXIT
	  		ENDIF
	  	ENDFOR
	  	IF !ISNULL(loSelFolder)
	  		EXIT
	  	ENDIF
	  ENDFOR
	
	  IF VARTYPE(loSelFolder) == "O"
	  	loMsgs = loSelFolder.Items
	  	? "You have " + TRANSFORM(loMsgs.Count) + ;
	                " message in your Outlook InBox"
	  ENDIF
	
	  loOutlook.Quit
	  RELEASE ALL
	
	After you install Visual FoxPro 7.0 Service Pack 1, the program runs successfully
	and the number of items in your Outlook Inbox prints to the screen.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbAutomation kbCOMt kbGrpDSFox kbDSupport kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
