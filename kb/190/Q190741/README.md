---
layout: page
title: "Q190741: HOWTO: Get User Information Using ADSI"
permalink: /kb/190/Q190741/
---

## Q190741: HOWTO: Get User Information Using ADSI

	Article: Q190741
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0; winnt:2.5
	Operating System(s): 
	Keyword(s): kbcode kbADSI kbCOMt kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Active Directory Service Interfaces, version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Active Directory Service Interfaces (ADSI) can be used to obtain network
	user information from within Visual FoxPro. This article shows an example of how
	to obtain this information.
	
	
	MORE INFORMATION
	================
	
	NOTE: In order to use the following example, the Active Directory Service
	Interfaces must be installed from the following Web site or the MSDN CD:
	
	  http://www.microsoft.com/windows/server/Technical/directory/
	
	ADSI is a COM-based interface for accessing directory services. Each element of
	the network, such as users, printers and computers, can be treated as an object.
	Accessing the user object's properties allows the developer to get information
	about the user. The following code demonstrates how to do this. Save the
	following code to a program file and run the program.
	
	Sample Code
	-----------
	
	  *-- Code begins here.
	  PUBLIC oform1
	  ON ERROR DO errorhnd
	  oform1=NEWOBJECT("form1")
	  oform1.Show
	  RETURN
	
	  PROCEDURE errorhnd
	
	     DO CASE
	     CASE ERROR() = 1426
	        *-- We have an OLE error code.
	        *-- Insert code to handle it as needed.
	     OTHERWISE
	        *-- We have an error not related to ADSI.
	        *-- Error handling would normally be placed here.
	        =MESSAGEBOX(STR(ERROR()) +": " + MESSAGE(), 0, "Error")
	     ENDCASE
	
	  ENDPROC
	
	  DEFINE CLASS form1 AS form
	
	     Height = 253
	     Width = 457
	     DoCreate = .T.
	     AutoCenter = .T.
	     Caption = "Form1"
	     Name = "form1"
	
	     ADD OBJECT text1 AS textbox WITH ;
	        Value = "WinNT://MyServer", ;
	        Height = 23, ;
	        Left = 12, ;
	        Top = 206, ;
	        Width = 238, ;
	        Name = "Text1"
	
	     ADD OBJECT label1 AS label WITH ;
	        Caption = "ADS Path to Server:", ;
	        Height = 25, ;
	        Left = 12, ;
	        Top = 181, ;
	        Width = 202, ;
	        Name = "Label1"
	
	     ADD OBJECT cmdfind AS commandbutton WITH ;
	        Top = 192, ;
	        Left = 283, ;
	        Height = 37, ;
	        Width = 97, ;
	        Caption = "\<Find", ;
	        Name = "cmdFind"
	
	     ADD OBJECT list1 AS listbox WITH ;
	        Height = 152, ;
	        Left = 24, ;
	        Top = 12, ;
	        Width = 156, ;
	        Name = "List1"
	
	     ADD OBJECT lblfullname AS label WITH ;
	        Caption = "", ;
	        Height = 17, ;
	        Left = 204, ;
	        Top = 27, ;
	        Width = 248, ;
	        Name = "lblFullName"
	
	     ADD OBJECT label2 AS label WITH ;
	        Caption = "Last Login:", ;
	        Height = 17, ;
	        Left = 203, ;
	        Top = 60, ;
	        Width = 72, ;
	        Name = "Label2"
	
	     ADD OBJECT lbllastlogin AS label WITH ;
	        Caption = "", ;
	        Height = 17, ;
	        Left = 314, ;
	        Top = 60, ;
	        Width = 132, ;
	        Name = "lblLastLogin"
	
	     ADD OBJECT label3 AS label WITH ;
	        Caption = "Last Logoff:", ;
	        Height = 17, ;
	        Left = 203, ;
	        Top = 83, ;
	        Width = 73, ;
	        Name = "Label3"
	
	     ADD OBJECT lbllastlogoff AS label WITH ;
	        Caption = "", ;
	        Height = 17, ;
	        Left = 314, ;
	        Top = 83, ;
	        Width = 132, ;
	        Name = "lblLastLogoff"
	
	     ADD OBJECT chkdisabled AS checkbox WITH ;
	        Top = 140, ;
	        Left = 202, ;
	        Height = 17, ;
	        Width = 123, ;
	        Caption = "Account Disabled", ;
	        ReadOnly = .T., ;
	        Name = "chkDisabled"
	
	     ADD OBJECT label4 AS label WITH ;
	        Caption = "Password Expires:", ;
	        Height = 17, ;
	        Left = 203, ;
	        Top = 107, ;
	        Width = 106, ;
	        Name = "Label4"
	
	     ADD OBJECT lblexpire AS label WITH ;
	        Caption = "", ;
	        Height = 17, ;
	        Left = 314, ;
	        Top = 107, ;
	        Width = 68, ;
	        Name = "lblExpire"
	
	     PROCEDURE cmdfind.Click
	
	         *-- This could take a while, so update the status bar.
	         ThisForm.lblFullName.Caption = "Searching..."
	        ThisForm.List1.Clear
	
	         *-- Find the server object.
	        oADSobj = GETOBJECT(ALLTRIM(ThisForm.Text1.Text))
	
	         *-- Populate the list with the users on the server.
	         *-- We need to filter to get just the users, otherwise
	         *-- the list will include every object from that server,
	         *-- such as printers and groups.
	        FOR EACH Child IN oADSobj
	           IF Child.Class = "User"
	              thisform.list1.additem(Child.Name)
	           ENDIF
	        ENDFOR
	         ThisForm.lblFullName.Caption = ""
	     ENDPROC
	
	     PROCEDURE list1.Click
	
	        *-- Clear the labels in case we can't get
	        *-- the values.
	        ThisForm.lblFullName.Caption   = ""
	        ThisForm.lblLastLogin.Caption  = ""
	        ThisForm.lblLastLogoff.Caption = ""
	        ThisForm.chkDisabled.Value     = 0
	        ThisForm.lblExpire.Caption     = ""
	
	        *-- Find the selected item in the list.
	        FOR nCnt = 1 TO ThisForm.List1.ListCount
	           IF ThisForm.List1.Selected(nCnt)
	
	                   *-- Get the user object by building an ADS path
	                   *-- from the server path entered in the text box
	                   *-- and the user name selected from the list.
	                   oUser = GETOBJECT(ALLTRIM(ThisForm.Text1.Text) + ;
	                     "/" +    ALLTRIM(ThisForm.List1.Value))
	
	                   *-- Get the user information and populate the
	                   *-- label controls.
	              ThisForm.lblFullName.Caption   = oUser.FullName
	              ThisForm.lblLastLogin.Caption  = DTOC(oUser.LastLogin)
	              ThisForm.lblLastLogoff.Caption = DTOC(oUser.LastLogoff)
	              ThisForm.chkDisabled.Value     = oUser.AccountDisabled
	              ThisForm.lblExpire.Caption     =  ;
	                     DTOC(oUser.PasswordExpirationDate)
	           ENDIF
	        ENDFOR
	     ENDPROC
	
	     PROCEDURE Destroy
	        ON ERROR
	     ENDPROC
	
	  ENDDEFINE
	  *-- Code ends here.
	
	In the text box, enter the Active Directory Services (ADS) path to the user's
	server, using the text in the text box as a template. In place of MyServer, put
	the name of the server you wish to search and click the Find button. It may take
	some time to populate the list. Once the list is populated, click on a user. The
	user's account information displays.
	
	REFERENCES
	==========
	
	Visual Studio MSDN Library, version 6.0; search on: "ADSI User Object"
	
	For more information about ADSI, please see the following Web site:
	
	http://www.microsoft.com/windows/server/Deploy/directory/
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike Stewart, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbADSI kbCOMt kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbADSISearch kbADSI250 kbVFP600
	Version           : WINDOWS:6.0; winnt:2.5
	Issue type        : kbhowto
	
	=============================================================================
	
