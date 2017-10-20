---
layout: page
title: "Q316988: PRB: &quot;Parameter Not Optional&quot; Err with Outlook 2000 Move Method"
permalink: /kb/316/Q316988/
---

## Q316988: PRB: &quot;Parameter Not Optional&quot; Err with Outlook 2000 Move Method

{% raw %}

	Article: Q316988
	Product(s): Microsoft FoxPro
	Version(s): 7.0,7.0 SP1
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 14-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 7.0, 7.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are automating Microsoft Outlook 2000 from Visual FoxPro 7.0, when you
	call the Move method of a folder item, you may receive the following error
	message:
	
	  OLE error code 0x8002000f: Parameter not optional.
	
	RESOLUTION
	==========
	
	To resolve this problem in Visual FoxPro 7.0, use one of the following methods:
	
	- Preface the Move method call with an equal sign (=) character. For example:
	
	  =loFldr1.items(i).Move(loFldr2)
	
	- Upgrade to Microsoft Outlook 2002.
	
	NOTE: This problem can occur with methods other than the item Move method. Apply
	the equal sign resolution in those scenarios to resolve the problem.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Run the following code from a program (.prg) file in Visual FoxPro 7.0 or
	  Visual FoxPro 7.0 Service Pack 1 (SP1):
	
	  #DEFINE olFolderDrafts    16
	  #DEFINE olFolderInbox      6
	  loApp = CREATEOBJECT("Outlook.Application")
	  loSpace = loApp.GetNameSpace("MAPI")
	  loFldr1 = loSpace.GetDefaultFolder(olFolderInbox)
	  loFldr2 = loSpace.GetDefaultFolder(olFolderDrafts)
	  *!* Try to move 3 messages into the Drafts folder 
	  FOR i = 1 to 3
	     *!* Following line fails with the message:
	     *!* Program Error - OLE error code 0x8002000f: Parameter Not Optional
	     loFldr1.items(i).Move(loFldr2) && Move to "Drafts" folder
	  ENDFOR
	  RETURN
	
	2. This program moves three messages from your Outlook Inbox to your Drafts
	  folder. When the program has completed, move the messages back manually.
	
	  Notice that you receive the error message that is listed in the "Symptoms"
	  section. This error occurs on the loFldr1.items(i).Move(loFldr2) line.
	
	3. To resolve this problem, preface the call to the Move method with an equal
	  sign (=):
	
	  =loFldr1.items(i).Move(loFldr2)
	
	Additional query words: equals automation Office
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700 kbVFP700SP1
	Version           : :7.0,7.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
