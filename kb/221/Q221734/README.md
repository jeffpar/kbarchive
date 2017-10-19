---
layout: page
title: "Q221734: FIX: C0000005 Fatal Error With Invalid Property Name"
permalink: /kb/221/Q221734/
---

## Q221734: FIX: C0000005 Fatal Error With Invalid Property Name

	Article: Q221734
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbAutomation kbOOP kbvfp600 kbvfp600bug kbVS600sp2fix kbVS600sp3fix kbGrp
	Last Modified: 01-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro terminates after displaying the following message:
	
	  Fatal error: Exception code = C0000005
	
	This behavior occurs when attempting to access an invalid property of an object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following steps require Microsoft Outlook to be installed on the computer
	that is running Visual FoxPro.
	
	1. Create a program named Getitems.prg using the following code:
	
	     oTraverse = CREATEOBJECT("traverseoutlook")
	     oTraverse.BeginTraverse
	
	     DEFINE CLASS TraverseOutlook AS CUSTOM
	        nNestingLevel = 0
	        oOutLookObject = NULL
	        olNameSpace = NULL
	
	        PROCEDURE INIT
	           WITH THIS
	              .oOutLookObject = CREATEOBJECT("Outlook.Application")
	              .olNameSpace = .oOutLookObject.GetNameSpace("MAPI")
	           ENDWITH
	        ENDPROC
	
	        PROCEDURE BeginTraverse
	           LOCAL folder
	           FOR EACH folder ;
	                 IN THIS.olNameSpace.Folders
	              THIS.ProcessFolder(folder)
	           NEXT folder
	        ENDPROC
	
	        PROCEDURE ProcessFolder(subfolder)
	           * The valid property is THIS.nNestingLevel
	           THIS.NestingLevel = THIS.NestingLevel + 1
	           ?REPLICATE(CHR(9),THIS.NestingLevel-1),subfolder.NAME
	           FOR EACH folder IN subfolder.Folders
	              THIS.ProcessFolder(folder)
	           NEXT folder
	           FOR EACH ITEM IN subfolder.Items
	              ?REPLICATE(CHR(9),THIS.NestingLevel),ITEM.subject
	           NEXT ITEM
	           THIS.NestingLevel = THIS.NestingLevel - 1
	        ENDPROC
	     ENDDEFINE
	
	2. In the Command window, type the following:
	
	DO GETITEMS
	
	3. Visual FoxPro terminates after displaying the following error message:
	
	  Fatal error: Exception code = C0000005
	
	4. Replace the ProcessFolder (subfolder) code with the following code:
	
	     THIS.nNestingLevel = THIS.nNestingLevel + 1
	     ?REPLICATE(CHR(9),THIS.nNestingLevel-1),subfolder.NAME
	     FOR EACH folder IN subfolder.Folders
	        THIS.ProcessFolder(folder)
	     NEXT folder
	      FOR EACH ITEM IN subfolder.Items
	        ?REPLICATE(CHR(9),THIS.nNestingLevel),ITEM.subject
	     NEXT ITEM
	     THIS.nNestingLevel = THIS.nNestingLevel - 1
	
	5. In the Command window, type the following:
	
	     DO GETITEMS
	
	6. Note that Visual FoxPro outputs information to the screen as the Outlook
	  folder hierarchy is traversed.
	
	Additional query words: kbDSE
	
	======================================================================
	Keywords          : kbservicepack kbAutomation kbOOP kbvfp600 kbvfp600bug kbVS600sp2fix kbVS600sp3fix kbGrpDSFox kbVS600SP1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
