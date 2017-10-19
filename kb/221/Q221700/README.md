---
layout: page
title: "Q221700: FIX: CommandTargetExec Ignores Return Value"
permalink: /kb/221/Q221700/
---

## Q221700: FIX: CommandTargetExec Ignores Return Value

	Article: Q221700
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveDocs kbvfp600 kbvfp600bug kbVS600sp3fix kbvfp600sp3 kbGrpDSFox
	Last Modified: 14-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the ActiveDoc class of an ActiveDocument, the CommandTargetExec event ignores
	the value returned by the user in the RETURN command and returns CMD_OK under
	all circumstances. This means that the ActiveDocument host (normally Internet
	Explorer) assumes that the ActiveDocument handled any command called from the
	menu that was passed to the ActiveDocument.
	
	In addition, the return values defined in FoxPro.h are incorrect.
	
	RESOLUTION
	==========
	
	While the FoxPro.h values can be corrected, they are still not handled correctly
	in Visual FoxPro 6.0 Build 8167 (original release). You need to upgrade to
	Visual Studio 6.0 Service Pack 3 for this functionality to work.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Project, (aDoc.pjx).
	
	2. Create a new ADoc class (aDocTest in aDocClass.vcx) in aDoc.pjx.
	
	3. Select FoxPro.h in the Class:Include File dialog box, and create the
	  following procedures:
	
	  PROCEDURE CommandTargetExec
	  	LPARAMETERS nCommandID, nExecOption, eArgIn, eArgOut
	
	  	*!* The DO CASE is overkill in this sample, but it 
	  	*!* allows for handling different nCommandIDs.
	  	DO CASE
	  		CASE nCommandID = CMDID_PROPERTIES
	  			RETURN CMD_NOTSUPPORTED
	  	ENDCASE
	  ENDPROC
	
	  PROCEDURE Run
	  	LPARAMETERS cHyperLinkTarget
	
	  	DO FORM frmHiThere
	
	  	READ EVENTS
	  ENDPROC
	
	4. Create a new Form (frmHiThere.scx) and drop a label on it. Set the properties
	  as below and add the QueryUnload procedure:
	
	  DEFINE CLASS frmhithere AS form
	
	  	DoCreate = .T.
	  	Caption = "Hi there!"
	  	Name = "frmHiThere"
	
	  	ADD OBJECT lblhithere AS label WITH ;
	  		Caption = "Hi, neighbor, have a 'Gansett!", ;
	  		Height = 17, ;
	  		Left = 96, ;
	  		Top = 96, ;
	  		Width = 162, ;
	  		Name = "lblHiThere"
	
	  	PROCEDURE QueryUnload
	  		*!* QueryUnload fires when the Close (x) button in 
	  		*!* the upper right corner is clicked.
	
	  		CLEAR EVENTS
	  	ENDPROC
	  ENDDEFINE
	
	5. Build aDoc.pjx as an application (.APP).
	
	6. Open Internet Explorer. Go to the File:Open menu item, and choose aDoc.app.
	  Once it opens in the browser, choose File:Properties.
	
	If the application was built with Visual FoxPro 6.0 Build 8167, nothing happens
	because the ActiveDoc is improperly returning the "I handled it" value (CMD_OK).
	When the application is built with Visual FoxPro 6.0 in Visual Studio 6.0
	Service Pack 3, the About Visual FoxPro 6.0 Run-time dialog box appears.
	
	The FoxPro.h file is found in the Visual FoxPro home directory (=HOME(1)).
	
	The return values for CommandTargetExec are defined improperly.
	
	The lines reading:
	
	  *-- CommandTargetExec Return Values
	  #DEFINE CMD_NOTSUPPORTED             2  && Command is not supported by the Active Document
	  #DEFINE CMD_DISABLED                 3  && Command is disabled for the Active Document
	  #DEFINE CMD_NOHELP                   4  && No help is available for the command from the Active Document
	  #DEFINE CMD_CANCELED                 5  && The user canceled the execution of the command
	
	should be:
	
	  *-- CommandTargetExec Return Values
	  #DEFINE CMD_NOTSUPPORTED             1  && Command is not supported by the Active Document
	  #DEFINE CMD_DISABLED                 2  && Command is disabled for the Active Document
	  #DEFINE CMD_NOHELP                   3  && No help is available for the command from the Active Document
	  #DEFINE CMD_CANCELED                 4  && The user canceled the execution of the command
	
	REFERENCES
	==========
	
	For additional information about Active Documents, please click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q182579 HOWTO: Getting Started With Active Documents
	  Q182580 HOWTO: Set Up a Quick Menu for an ActiveDoc App
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveDocs kbvfp600 kbvfp600bug kbVS600sp3fix kbvfp600sp3 kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
