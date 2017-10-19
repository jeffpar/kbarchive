---
layout: page
title: "Q263520: HOWTO: Programmatically Create a Distribution List Using ADSI"
permalink: /kb/263/Q263520/
---

## Q263520: HOWTO: Programmatically Create a Distribution List Using ADSI

	Article: Q263520
	Product(s): Microsoft Exchange
	Version(s): 2.5,5.5
	Operating System(s): 
	Keyword(s): kbADSI kbMsg kbVBp kbGrpDSMsg kbDSupport
	Last Modified: 19-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Active Directory Service Interfaces, version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ADSI can be used to create or modify Distribution Lists on Microsoft Exchange
	Servers. This article provides sample code to create a Distribution List with
	multiple members.
	
	NOTE: In this article, the processes of creating a Distribution List and then
	adding members are separated so that they can be used individually for
	Distribution List management.
	
	MORE INFORMATION
	================
	
	1. Create a new Microsoft Visual Basic standard EXE project.
	
	2. In the Project References dialog box, check the references for the following:
	
	   - Active DS Type Library
	   - ADsSecurity 2.5 Type Library
	
	3. On the default Form1, add three CommandButtons: CommandButton1,
	  CommandButton2, and CommandButton3.
	
	4. Add the following code to the form's code module:
	
	  Option Explicit
	
	  Const RIGHT_DS_MODIFY_USER_ATT = &H2
	  Const RIGHT_MAIL_SEND_AS = &H8
	  Const RIGHT_MAIL_RECEIVE_AS = &H10
	
	  ' Custom type for Distribution List properties.
	  Private Type DLTemplate
	      Domain as String        ' Network domain name.
	      Server As String        ' Microsoft Exchange server name.
	      Org As String           ' Microsoft Exchange Organization name.
	      Site As String          ' Microsoft Exchange Site name,
	      Container As String     ' such as Recipients.
	      Name As String
	      DisplayName As String   ' DL's Display name.
	      Alias As String         ' DL's Alias name.
	      DirectoryName As String ' DL's Directory name.
	      UserName As String      ' User's logon name and domain.
	      Password As String      ' User's domain password.
	      SMTPAddr As String
	      X400Addr As String
	      Owner As String
	      Hide As Boolean         ' Hide DL from address book.
	      OtherAddresses(10) As String
	      Members(10) As String   ' Increase array elements for more members.
	  End Type
	
	  Dim NewDL As DLTemplate     ' Public to all procedures in module.
	
	  Private Sub CommandButton1_Click()
	  ' Fill Distribution List "template".
	
	  ' Set vars to get container.
	  '*** change Domain, Server, Org and Site information as appropriate.
	  NewDL.Domain = "myDomain.com"
	  NewDL.Server = "myServer"      
	  NewDL.Org = "Orgname"     ' Microsoft Exchange Organization
	  NewDL.Site = "sitename"   ' Microsoft Exchange Site
	
	  ' Place new DL in Recipients container.
	  NewDL.Container = "Recipients"
	
	  '*** set DL named properties as appropriate.
	  NewDL.Alias = "DL47"
	  NewDL.DisplayName = "Distribution List 47"
	  NewDL.SMTPAddr = NewDL.Alias & "@" & NewDL.Domain 
	  NewDL.Hide = False  'default is False
	  ' Use distinguished name of owner.
	  NewDL.Owner = "cn=user1,cn=Recipients,ou=NORTHAMERICA,o=DS Messaging"
	
	  'Set required X400 address
	  'Create a DL manually and use properties as a guide
	  '   Country (c) is required
	  '   ADMD (a) is required, the default is a zero-length string ""
	  '   PRMD (p) is not required, but if included the default is a zero-length string
	  '   Surname (s) is required
	  '   the trailing semi-colon is required
	  NewDL.X400Addr = "c=US;a= ;p=" & CStr(NewDL.Org) & ";o=" & Str(NewDL.Site)&
	   ";s=" & CStr(NewDL.Alias) & ";"
	
	  NewDL.OtherAddresses(0) = CStr("MS$" + NewDL.Org + "/" + NewDL.Site + "/" + NewDL.Alias)
	  NewDL.OtherAddresses(1) = CStr("CCMAIL$" + NewDL.Alias + " at " + NewDL.Site)
	
	  ' Fill array of addresses (i.e. MSMail, CCMail).
	  Dim OtherAddresses(1)
	  OtherAddresses(0) = CStr("MS$" + NewDL.Org + "/" + NewDL.Site + "/" + NewDL.Alias)
	  OtherAddresses(1) = CStr("CCMAIL$" + NewDL.Alias + " at " + NewDL.Site)
	
	  ' Set Members using their Distinguished Names.
	  NewDL.Members(0) = "LDAP://myServer/o=myOrg/ou=mySite/cn=Recipients/cn=confrm11"
	  NewDL.Members(1) = "LDAP://myServer/o=myOrg/ou=mySite/cn=Recipients/cn=confrm12"
	  NewDL.Members(1) = "LDAP://myServer/o=myOrg/ou=mySite/cn=Recipients/cn=confrm13"
	
	  End Sub
	
	  Private Sub CommandButton2_Click()
	  ' This routine creates a distribution list, but it does not add members.
	
	  ' Call function to create DL.
	  ' Uses global DLTemplate previously filled.
	
	  Dim lResult As Long
	  lResult = CreateDL(NewDL, True)
	  Select Case lResult
	      Case -1: ' Succeeded.
	          MsgBox "DL created"
	      Case 0: ' Failed, unknown error.
	          MsgBox "Unknown error creating DL"
	      
	      Case Else: ' Get error number from return value.
	          
	          Select Case Hex(lResult)
	              Dim strText As String, strTitle As String
	              Case 80071392: 'already exists
	                  strText = " - Item Alredy Exists"
	              Case Else: 'unknown error
	                  strText = "- Unknown"
	          End Select
	          strTitle = "Error creating DL"
	          strText = "Error: " & lResult & " (" & Hex(lResult) & ")" & strText
	          MsgBox strText, vbExclamation, strTitle
	  End Select
	
	  End Sub
	
	  Private Sub CommandButton3_Click()
	
	  ' Call function to add DL members.
	  ' Uses DLTemplate previously filled.
	
	  Dim lResult As Long
	  lResult = AddDLMembers(NewDL, True)
	  Select Case lResult
	      Case -1: ' Succeeded.
	          MsgBox "Members added"
	      Case 0: ' Failed, unknown error.
	          MsgBox "Unknown error adding members"
	      Case Else: ' Get error number from return value.
	          MsgBox "Error adding members: " & lResult
	  End Select
	
	  End Sub
	
	  Private Function AddDLMembers(DL As DLTemplate, DebugMode As Boolean) As Long
	
	  AddDLMembers = 1  'default value
	
	  Dim strADsPath As String
	  Dim DistList As Object
	
	  On Error GoTo Error_AddMembers
	
	  '-- Build adspath to container, usually Recipient container:
	  '   LDAP://myserver/O=Org/OU=Site/CN=Recipients
	  strADsPath = "LDAP://" + DL.Server
	  strADsPath = strADsPath + "/O=" & DL.Org
	  strADsPath = strADsPath + "/OU=" & DL.Site
	  strADsPath = strADsPath + "/CN=" & DL.Container
	  strADsPath = strADsPath + "/CN=" & DL.Alias
	
	  If DebugMode Then Debug.Print "ADsPath: " & strADsPath
	
	  ' Get reference to Distribution List.
	  Set DistList = GetObject(strADsPath)
	  Debug.Print DistList.Name
	
	  ' Loop through Members array until null found.
	  Dim i As Integer
	  Do Until DL.Members(i) = ""
	      ' Add user to Distribution List.
	      DistList.Add DL.Members(i)
	      ' If the entry is already a member of the DL,
	      ' error 8007200d occurs.
	      If DebugMode Then
	          Debug.Print "Adding Member: " & i
	          Debug.Print "Member: " & DL.Members(i)
	          If Err.Number = 0 Then
	              Debug.Print "Member added"
	          Else: ' Error.
	              Debug.Print "Error occurred: " & Err.Number
	              Debug.Print "Reason: " & Err.Description
	          End If
	      End If
	      i = i + 1
	  Loop
	
	  Exit_AddDLMembers:
	  ' Explicitly release objects.
	  Set DistList = Nothing
	  Exit Function
	
	  Error_AddMembers:
	      ' Set return value for known error.
	      If Err.Number = &H8007200D Then
	          MsgBox "Already a member: " & DL.Members(i)
	      End If
	      AddDLMembers = Err.Number
	      If DebugMode Then
	          Debug.Print "Error in AddDLMembers(): " & Err.Number
	          Debug.Print "Error Description: " & Err.Description
	      End If
	      Resume Exit_AddDLMembers
	
	  End Function
	
	  Private Function CreateDL(DL As DLTemplate, DebugMode As Boolean) As Long
	
	  ' Vars used to get container.
	  Dim strADsPath As String
	  Dim objContainer As Object
	  Dim objNewDL As Object
	
	  ' Set default value for failed, unknown error.
	  CreateDL = 0
	
	  On Error GoTo Err_CreateDL
	
	  '-- Build adspath to container, usually Recipient container:
	  '   LDAP://myserver/O=Org/OU=Site/CN=Recipients
	  strADsPath = "LDAP://" + DL.Server
	  strADsPath = strADsPath + "/O=" & DL.Org
	  strADsPath = strADsPath + "/OU=" & DL.Site
	  strADsPath = strADsPath + "/CN=" & DL.Container
	
	  If DebugMode Then Debug.Print "ADsPath: " & strADsPath
	
	  ' Get container.
	  Set objContainer = GetObject(strADsPath)
	  If DebugMode Then Debug.Print "Got container: " & objContainer.Name
	
	  ' Create a new DL in the container.
	  ' A Distribution List is known as a "groupOfNames".
	  Set objNewDL = objContainer.Create("groupOfNames", "cn=" & DL.Alias)
	  If DebugMode Then Debug.Print "objNewDL created for: " & DL.Alias
	
	  ' Set the DL props from the custom type structure.
	  objNewDL.Put "cn", CStr(DL.DisplayName)   ' cStr() may be required to make Unicode values.
	  If DebugMode Then Debug.Print "set DisplayName property: " & DL.DisplayName
	
	  objNewDL.Put "uid", CStr(DL.Alias)
	  If DebugMode Then Debug.Print "set Alias property: " & DL.Alias
	  objNewDL.Put "Owner", CStr(DL.Owner)
	  If DebugMode Then Debug.Print "set Owner property: " & DL.Owner
	
	  ' Alternate way to set property using simplest assignment technique.
	  objNewDL.mail = DL.SMTPAddr
	  If DebugMode Then Debug.Print "set SMTP Address property: " & DL.SMTPAddr
	
	  'set required X400 address
	  objNewDL.Put "textencodedORaddress", CStr(DL.X400Addr)
	  If DEBUGMODE Then Debug.Print "set X400 Address property: " & DL.X400Addr
	
	  ' Set optional properties only if not default values.
	  If DL.Hide Then objNewDL.Put "Hide-DL-Membership", DL.Hide
	  If DebugMode Then Debug.Print "set Hide from GAL property: " & DL.Hide
	
	  ' Use array to hold multi-value property values.
	  ' Use Put to set the multi-values (overwrite whatever was there).
	  ' Use PutEx to append additional values, etc.
	
	  ' Create other addresses (ie. MSMail, CCMail).
	
	  'objNewDL.PutEx ADS_PROPERTY_APPEND, "otherMailbox", aOtherMailbox
	  'objNewDL.Put "OtherMailbox", DL.OtherAddresses
	
	  Dim aOtherMailbox(1)
	  aOtherMailbox(0) = CStr(DL.OtherAddresses(0))
	  aOtherMailbox(1) = CStr(DL.OtherAddresses(1))
	  'objNewDL.PutEx ADS_PROPERTY_APPEND, "otherMailbox", aOtherMailbox
	  objNewDL.Put "OtherMailbox", aOtherMailbox
	  If DebugMode Then Debug.Print "set other addresses property"
	
	  ' NOTE: members are not added as the DL is created.
	  ' Members are added separately.
	
	  objNewDL.SetInfo  ' Save changes.
	  If DebugMode Then Debug.Print "New DL saved"
	     
	  '------------------------------------------------------------------------
	  '-- SET PERMISSION ON THE OWNER TO MODIFY AND SEND AS/RECEIVE
	  '-- REQUIRES THE ADSI RESOURCE TOOL KIT INSTALL (IADsSecurity)
	  '-------------------------------------------------------------------------
	  strADsPath = strADsPath + "/cn=" & DL.Alias
	  If DebugMode Then Debug.Print "Add owner: " & DL.Owner
	
	  Dim sec As New ADsSecurity
	  ' You can also use -- Set sec = CreateObject("ADsSecurity") for late binding.
	  Dim sd As IADsSecurityDescriptor
	  Dim dacl As IADsAccessControlList
	  Dim ace As New AccessControlEntry
	
	  Set sd = sec.GetSecurityDescriptor(strADsPath)
	  ' An error in the ADsPath may cause a fatal error in Set dacl line!
	  If DebugMode Then Debug.Print "SD.Owner: " & sd.Owner
	  Set dacl = sd.DiscretionaryAcl
	
	  ace.AccessMask = RIGHT_DS_MODIFY_USER_ATT Or RIGHT_MAIL_SEND_AS Or RIGHT_MAIL_RECEIVE_AS
	  ace.Trustee = "mydomain\user2"
	  dacl.AddAce ace
	  sd.DiscretionaryAcl = dacl
	  sec.SetSecurityDescriptor sd
	
	  ' Set return value for success.
	  CreateDL = -1
	
	  Exit_CreateDL:
	  ' Explicitly release objects.
	  Set sd = Nothing
	  Set dacl = Nothing
	  Set objNewDL = Nothing
	  Set objContainer = Nothing
	  Exit Function
	
	  Err_CreateDL:
	      ' Set return value for known error.
	      CreateDL = Err.Number
	      If DebugMode Then
	          Debug.Print "Error in CreateDL(): " & Err.Number & " (" & Hex(Err.Number) & ")"
	          Debug.Print "Error Description: " & Err.Description
	      End If
	      Resume Exit_CreateDL
	
	  End Function
	
	5. In the CommandButton1_Click procedure, change the values for server,
	  organization, site, and so on, to match your environment and the properties
	  of the Distribution List to be created.
	
	6. Save and then run the project. Use the first button to fill the Distribution
	  List template. Use the second button to create the Distribution List, without
	  members. Use the third button to add members.
	
	Additional query words: xmrp
	
	======================================================================
	Keywords          : kbADSI kbMsg kbVBp kbGrpDSMsg kbDSupport 
	Technology        : kbAudDeveloper kbExchangeSearch kbADSISearch kbExchange550 kbZNotKeyword2 kbADSI250
	Version           : :2.5,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
