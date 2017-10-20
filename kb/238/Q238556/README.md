---
layout: page
title: "Q238556: HOWTO: Notify Team When Changing Projects Under VSS"
permalink: /kb/238/Q238556/
---

## Q238556: HOWTO: Notify Team When Changing Projects Under VSS

{% raw %}

	Article: Q238556
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbProjManager kbSSafe kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro 6.0 ProjectHook object allows you to automatically perform
	actions when modifying the project. You can use these methods to notify your
	team members by e-mail that they need to update their project lists when working
	under source control.
	
	MORE INFORMATION
	================
	
	The following ProjectHook class enables you to automatically notify members of
	your team when you have changed the project.
	
	1. Copy the code below into a VCX.
	
	2. Create a ProjectHook class, and add the custom property ProjectEmail and the
	  custom methods SendMail and GetProjectName.
	
	3. Copy the code from here into the appropriate methods, and set the
	  ProjectEmail to the correct address. Height, Width, and Name are irrelevant
	  for these purposes.
	
	4. Attach it to a project by choosing Project Info from the Project menu. There
	  is a check box and text box at the bottom for Project Class. Fill in the
	  reference to the class you have created here.
	
	  DEFINE CLASS notifyhook AS projecthook
	
	     Height = 22
	     Width = 22
	     *-- This is the address to which notifications will be sent. Set it up as a mailing list before using this hook.
	     projectemail = "MyProjectGroup"
	     Name = "notifyhook"
	
	     PROCEDURE SendMail
	        LPARAMETER tcMessage
	        LOCAL loSession, loMessage, loRecip
	
	        *!* For more details on Messaging, see the MSDN library. 
	        *!* As of July 1999:
	        *!* Platform SDK
	        *!*   Messaging and Collaboration
	        *!*      CDO 1.2.1
	        *!*         CDO Library
	        *!*            Guide
	        *!*               Introduction
	        *!*                  Quick Start
	
	        loSession = CREATEOBJECT("MAPI.Session")
	
	        *!* Here you stuff an ENTER to the keyboard. This is used to
	        *!* bypass the Profile window. You can stop this window
	        *!* from coming up at all by passing the profile name you 
	        *!* wish to use to MAPI:
	        *!* loSession.Logon("<exchange profile name>").
	        *!* For more information on how to work with MAPI
	        *!* profiles, see the References section.
	
	        KEYBOARD "{ENTER}"
	        loSession.Logon()
	
	        loMessage = loSession.Outbox.Messages.Add()
	        loMessage.Subject = "VFP/VSS notification"
	        loMessage.Text = tcMessage
	
	        #DEFINE CDOTO 1
	        loRecip = loMessage.Recipients.Add()
	        loRecip.Name = This.ProjectEmail
	        loRecip.Type = CDOTO	&& This is a To, not a CC or BCC
	        loRecip.Resolve()	&& This will validate the name you put in above
	
	        loMessage.Update()
	        loMessage.Send()
	
	        loSession.LogOff()
	     ENDPROC
	
	     PROCEDURE getprojectname
	        LOCAL loProject, lcProjName
	
	        FOR EACH loProject IN _VFP.PROJECTS
	  	IF VARTYPE(loProject.PROJECTHOOK) = "O"
	  		IF loProject.PROJECTHOOK.NAME = THIS.NAME
	  *~~~~~  Found the project that has ME as its projecthook!
	  	           lcProjName = loProject.NAME
	                     EXIT
	  		ENDIF
	  	ENDIF
	        ENDFOR
	
	        RETURN ALLTRIM(JUSTSTEM(lcProjName))
	     ENDPROC
	
	     PROCEDURE QueryAddFile
	        LPARAMETERS cFileName
	        LOCAL lcMessage
	
	        lcMessage = "I have just added " + JUSTFNAME(cFileName) + " to " + ;
	        This.GetProjectName() + ". Please update your project list. Thank you."
	        This.SendMail(lcMessage)
	     ENDPROC
	
	     PROCEDURE QueryModifyFile
	        *!* Note: QueryModifyFile fires every time you click the Modify
	        *!* button, not every time you save changes. Using this code will
	        *!* send email to your teammates every time you modify a file.
	        *!* Please consider the effects on your team of all this extra mail.
	
	        LPARAMETERS oFile, cClassName
	        LOCAL lnNotify, lcMessage
	
	        *!* FoxPro.h constants (MODI FILE (HOME() + "foxpro.h"))
	        *!* You can include this file under Class:Include File...
	        *!* and delete the following lines.
	        #DEFINE MB_ICONQUESTION 32
	        #DEFINE MB_YESNO 4
	        #DEFINE MB_DEFBUTTON1 0
	        #DEFINE IDYES 6
	
	        lnNotify = MESSAGEBOX("Notify project team?", ;
	           MB_ICONQUESTION + MB_YESNO + MB_DEFBUTTON1, ;
	           "ProjectHook: Modify")
	
	        IF lnNotify = IDYES
	           lcMessage = "I am working on " + JUSTFNAME(oFile.Name) + " in " + ;
	              This.GetProjectName() + ". Please get the latest version before using. Thank you."
	
	           This.SendMail(lcMessage)
	        ENDIF
	     ENDPROC
	
	     PROCEDURE QueryRemoveFile
	        LPARAMETERS oFile, cClassName, lDeleteFile
	        LOCAL lcMessage
	
	        lcMessage = "I have just removed " + JUSTFNAME(oFile.Name) + " from " + ;
	           This.GetProjectName() + ". Please update your project list. Thank you."
	
	        This.SendMail(lcMessage)
	     ENDPROC
	
	  ENDDEFINE
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Garrett
	Fitzgerald, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	For additional information about working with MAPI profiles, please click on the
	article number to view it in the Microsoft Knowledge Base:
	
	  Q195850 HOWTO: Determine the Windows Messaging Subsystem Default
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProjManager kbSSafe kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbSSafeSearch kbAudDeveloper kbVFP600 kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
