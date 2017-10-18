---
layout: page
title: "Q252459: Retrieve Properties of User Objects with ADSI and ADO"
permalink: kb/252/Q252459/
---

## Q252459: Retrieve Properties of User Objects with ADSI and ADO

	Article: Q252459
	Product(s): Microsoft Exchange
	Version(s): 2.5
	Operating System(s): 
	Keyword(s): kbADSI kbExchange kbMsg kbVBp kbGrpDSMsg kbDSupport kbATM
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Active Directory Service Interfaces, version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a Microsoft Visual Basic code sample that demonstrates how
	to programmatically retrieve the properties of a User object with Active
	Directory Service Interfaces (ADSI) and ActiveX Data Objects (ADO).
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates how to identify the Lightweight Data
	Access Protocol (LDAP) properties that are displayed by the Users and Computers
	snap-in when you view the User object's Exchange General and Exchange Advanced
	tabs.
	
	To create and run the sample program, perform the following steps:
	
	1. Create a new Visual Basic project called Project1.vbp.
	
	2. Paste the following code in the code window:
	
	  Sub Main()
	
	  Dim oRootDSE As IADs
	  Dim oDomain As IADs
	  Dim obj As IADs
	  Dim objUser As IADsUser
	  Dim dacl As IADsAccessControlList
	  Dim ace As IADsAccessControlEntry
	  Dim oConnection As New ADODB.Connection
	  Dim oCommand As New ADODB.Command
	  Dim RS As ADODB.Recordset
	  Dim RS2 As ADODB.Recordset
	  Dim strQuery As String, strAlias As String, mystring As String
	  Dim varDomainNC As Variant, Desc As Variant, varReports As Variant
	  Dim PropArray As Variant, Prop As Variant, DescList As Variant
	  Dim Everyone As Boolean
	  Dim i As Integer
	
	  Const RIGHT_DS_DELETE = &H10000
	  Const RIGHT_DS_READ = &H20000
	  Const RIGHT_DS_CHANGE = &H40000
	  Const RIGHT_DS_TAKE_OWNERSHIP = &H80000
	  Const RIGHT_DS_MAILBOX_OWNER = &H1
	  Const RIGHT_DS_SEND_AS = &H2
	  Const RIGHT_DS_PRIMARY_OWNER = &H4
	
	  On Error Resume Next
	  ' To do: change to the alias for the mailbox you are looking for.
	  strAlias = "EmailAlias"
	
	  ' Get the Configuration Naming Context.
	  Set oRootDSE = GetObject("LDAP://RootDSE")
	  varDomainNC = oRootDSE.Get("defaultNamingContext")
	  ' Open the Connection
	  oConnection.Provider = "ADsDSOObject"
	  oConnection.Open "ADs Provider"
	
	  ' Build the query to find the user based on their alias.
	  strQuery = "<LDAP://" & varDomainNC & ">;(mailNickName=" & strAlias & ");adspath;subtree"
	
	  oCommand.ActiveConnection = oConnection
	  oCommand.CommandText = strQuery
	  Set RS = oCommand.Execute
	  If RS.RecordCount = 0 Then
	      Debug.Print strAlias, " is not a valid email alias"
	  Else
	  ' Iterate through the results.
	      While Not RS.EOF
	      ' Retrieve the properties and display in debug window.
	          Set objUser = GetObject(RS.Fields("adspath"))
	          Debug.Print "*************************************************"
	          Debug.Print "Information From the Exchange GENERAL Tab:"
	          Debug.Print "*************************************************"
	          Debug.Print "Mailbox Store:", objUser.homeMDB
	          Debug.Print "Alias:", objUser.mailNickname
	          Debug.Print "Delivery Restrictions:"
	          Debug.Print "    Outgoing Message Size Limit:"
	          If objUser.submissionContlength > 0 Then
	              Debug.Print "       No Limit: Is Not Selected"
	              Debug.Print "       Maxumum Size KB:  Is Selected"
	              Debug.Print "       Maximum Size KB: ", objUser.submissionContlength
	          Else
	              Debug.Print "       No Limit: Is selected"
	              Debug.Print "       Maximum Size KB: Is not Selected"
	          End If
	      
	          Debug.Print "    Incoming Message Size:"
	          If objUser.delivContLength > 0 Then
	              Debug.Print "       No Limit: Is Not Selected"
	              Debug.Print "       Maximum Size: Is Selected"
	              Debug.Print "       Maximum Size:", objUser.delivContLength
	          Else
	              Debug.Print "       No Limit: Is Selected"
	              Debug.Print "       Maximum Size: Is Not Selected"
	          End If
	      
	          Debug.Print "    Message Restriction:"
	          Debug.Print "       Accept Messages from:"
	          Everyone = True
	  ' Initialize the array of properties to pass to GetInfoEx.
	          PropArray = Array("authOrig", "unauthOrig", "dlMemSubmitPerms", "dlMemRejectPerms")
	  ' Make the array a single variant for passing to GetInfoEx.
	          Prop = PropArray
	          objUser.GetInfoEx Prop, 0
	          Err.Clear
	          DescList = objUser.Get("dlMemSubmitPerms")
	          If Err.Number <> -2147463155 Then
	              Debug.Print "           From Everyone: IS Not Selected"
	              Debug.Print "           Only From:"
	              For Each Desc In DescList
	         ' Print the descriptions.
	                  Debug.Print "                    ", (Desc)
	              Next
	              Everyone = False
	          End If
	          DescList = Null
	          Err.Clear
	          DescList = objUser.Get("authOrig")
	          If Err.Number <> -2147463155 Then
	              For Each Desc In DescList
	             ' Print the descriptions.
	                  Debug.Print "                   ", (Desc)
	              Next
	              Everyone = False
	          End If
	          DescList = Null
	          Err.Clear
	          DescList = objUser.Get("dlMemRejectPerms")
	          If Err.Number <> -2147463155 Then
	              Debug.Print "           From Everyone Except:"
	              For Each Desc In DescList
	              ' Print the descriptions.
	                  Debug.Print "                    ", (Desc)
	              Next
	              Everyone = False
	          End If
	          DescList = Null
	          DescList = objUser.Get("unauthOrig")
	          If Err.Number <> -2147463155 Then
	              For Each Desc In DescList
	             ' Print the descriptions.
	                  Debug.Print "                   ", (Desc)
	              Next
	              Everyone = False
	          End If
	          If Everyone = True Then
	              Debug.Print "           From Everyone: Is Selected"
	          End If
	          Debug.Print "Delivery Options:"
	          Debug.Print "    Delegates:"
	          Debug.Print "       Grant Permission to:"
	          DescList = Null
	          Err.Clear
	          DescList = objUser.Get("publicDelegates")
	          If Err.Number <> -2147463155 Then
	              For Each Desc In DescList
	             ' Print the descriptions.
	                  Debug.Print "                   ", (Desc)
	              Next
	          Else
	              Debug.Print "                        Not Set"
	          End If
	          Debug.Print "       Forwarding Address:", objUser.altRecipient
	          If objUser.deliverAndRedirect = True Then
	              Debug.Print "        Deliver message to both forwarding address and mailbox: Checked"
	          Else
	              Debug.Print "        Deliver message to both forwarding address and mailbox: Not Checked"
	          End If
	          Debug.Print "    Recipient Limits:"
	          Err.Clear
	          DescList = objUser.Get("msExchRecipLimit")
	          If Err.Number <> -2147463155 Then
	              For Each Desc In DescList
	                  Debug.Print "           Maximum users:", objUser.msExchRecipLimit
	              Next
	          Else
	              Debug.Print "                        Not Set"
	          End If
	      
	          Debug.Print "Storage Limits:"
	          Debug.Print "    Use mailbox store defaults:", objUser.mdbusedefaults
	          Debug.Print "    When mailbox exceeds the indicated amount:"
	          Debug.Print "       Issue warning at:", objUser.mdbstoragequota
	          Debug.Print "       Prohibit send at:", objUser.mdbOverquotalimit
	          Debug.Print "       Prohibit send and receive at:", objUser.mdbOverhardquotalimit
	          Debug.Print "       Maximum Size:", objUser.MaxStorage
	          Debug.Print "    Deleted items retension:"
	          If objUser.deletedItemflags > 0 Then
	              Debug.Print "       Use mailbox store defaults:  is Not Checked"
	          Else
	              Debug.Print "       Use mailbox store defaults:  is Checked"
	          End If
	          Debug.Print "       Keep deleted items for days:", objUser.garbageCollPeriod / 86400
	          If objUser.deletedItemflags = 3 Then
	              Debug.Print "       Don't permenently delete until the store has been backed up: is Checked"
	          Else
	              Debug.Print "       Don't permenently delete until the store has been backed up: is Not Checked"
	          End If
	          Debug.Print "*************************************************"
	          Debug.Print "Information From the Exchange Advanced Tab:"
	          Debug.Print "*************************************************"
	          Debug.Print "Simple Display Name:", objUser.displayNamePrintable
	          Debug.Print "Hide from Exchange Address list", objUser.msExchHidefromAddressLists
	          varReports = objUser.securityProtocol
	          If varReports(3) <> 0 Then
	              Debug.Print "Downgrade high priority mail bound for X400:  Is Checked"
	          Else
	              Debug.Print "Downgrade high priority mail bound for X400:  Is Not Checked"
	          End If
	          Debug.Print "Custom Attributes:"
	          Debug.Print "                  extensionAttribute1:", objUser.extensionAttribute1
	          Debug.Print "                  extensionAttribute2:", objUser.extensionAttribute2
	          Debug.Print "                  extensionAttribute3:", objUser.extensionAttribute3
	          Debug.Print "                  extensionAttribute4:", objUser.extensionAttribute4
	          Debug.Print "                  extensionAttribute5:", objUser.extensionAttribute5
	          Debug.Print "                  extensionAttribute6:", objUser.extensionAttribute6
	          Debug.Print "                  extensionAttribute7:", objUser.extensionAttribute7
	          Debug.Print "                  extensionAttribute8:", objUser.extensionAttribute8
	          Debug.Print "                  extensionAttribute9:", objUser.extensionAttribute9
	          Debug.Print "                  extensionAttribute10:", objUser.extensionAttribute10
	          Debug.Print "                  extensionAttribute11:", objUser.extensionAttribute11
	          Debug.Print "                  extensionAttribute12:", objUser.extensionAttribute12
	          Debug.Print "                  extensionAttribute13:", objUser.extensionAttribute13
	          Debug.Print "                  extensionAttribute14:", objUser.extensionAttribute14
	          Debug.Print "                  extensionAttribute15:", objUser.extensionAttribute15
	          Debug.Print "Protocol Setting:"
	          DescList = Null
	          Err.Clear
	          DescList = objUser.Get("protocolsettings")
	          If Err.Number <> -2147463155 Then
	              For Each Desc In DescList
	                  i = InStr(1, Desc, "<A7>", vbTextCompare)
	                  If Left(Desc, i - 1) = "HTTP" Then
	                      Desc = Right(Desc, Len(Desc) - i)
	                      If Left(Desc, 1) = "1" Then
	                          Debug.Print "       HTTP: is enabled for mailbox"
	                      Else
	                          Debug.Print "       HTTP: is not enabled for mailbox"
	                      End If
	                      Desc = Right(Desc, Len(Desc) - 2)
	                      If Left(Desc, 1) = "1" Then
	                          Debug.Print "       HTTP: Use protocol defaults"
	                      Else
	                          Debug.Print "       HTTP: Do not use protocol defaults"
	                      End If
	                  ElseIf Left(Desc, i - 1) = "IMAP4" Then
	                      Desc = Right(Desc, Len(Desc) - i)
	                      If Left(Desc, 1) = "1" Then
	                          Debug.Print "       IMAP4: is enabled for mailbox"
	                      Else
	                          Debug.Print "       IMAP4: is not enabled for mailbox"
	                      End If
	                      Desc = Right(Desc, Len(Desc) - 2)
	                      If Left(Desc, 1) = "1" Then
	                          Debug.Print "       IMAP4: Use server defaults"
	                      Else
	                          Debug.Print "       IMAP4: Do not use server defaults"
	                      End If
	                      Debug.Print "       IMAP4 MIME Encoding:"
	                      Desc = Right(Desc, Len(Desc) - 2)
	                      If Left(Desc, 1) = "0" Then
	                          Debug.Print "                      Message should be MIME-encoded with both text and HTML body parts"
	                      ElseIf Left(Desc, 1) = "1" Then
	                          Debug.Print "                      Message should be MIME-encoded with text only body parts"
	                      ElseIf Left(Desc, 1) = "4" Then
	                          Debug.Print "                      Message should be MIME-encoded with HTML only body parts"
	                      End If
	                      Desc = Right(Desc, Len(Desc) - 2)
	                      i = InStr(1, Desc, "<A7>", vbTextCompare)
	                      Debug.Print "                Default Character set:", Left(Desc, i - 1)
	                  'The last 4 values are not documented.
	                  'Setting these programmatically is not supported.
	
	                  ElseIf Left(Desc, i - 1) = "POP3" Then
	                      Desc = Right(Desc, Len(Desc) - i)
	                      If Left(Desc, 1) = "1" Then
	                          Debug.Print "       POP3: is enabled for mailbox"
	                      Else
	                          Debug.Print "       POP3: is not enabled for mailbox"
	                      End If
	                      Desc = Right(Desc, Len(Desc) - 2)
	                      If Left(Desc, 1) = "1" Then
	                          Debug.Print "       POP3: Use server defaults"
	                      Else
	                          Debug.Print "       POP3: Do not use protocol defaults"
	                      End If
	                      Debug.Print "       POP3 MIME Encoding:"
	                      Desc = Right(Desc, Len(Desc) - 2)
	                      If Left(Desc, 1) = "0" Then
	                          Debug.Print "                      Message should be MIME-encoded with both text and HTML body parts"
	                      ElseIf Left(Desc, 1) = "1" Then
	                          Debug.Print "                      Message should be MIME-encoded with text only body parts"
	                      ElseIf Left(Desc, 1) = "2" Then
	                          Debug.Print "       POP3 UUencoding: Is Enabled "
	                          Debug.Print "       POP3 UUencoding: Use Binhex for macintosh is enabled"
	                      ElseIf Left(Desc, 1) = "3" Then
	                          Debug.Print "       POP3 UUencoding: Is Enabled "
	                      ElseIf Left(Desc, 1) = "4" Then
	                          Debug.Print "                      Message should be MIME-encoded with HTML only body parts"
	                      End If
	                      Desc = Right(Desc, Len(Desc) - 2)
	                      i = InStr(1, Desc, "<A7>", vbTextCompare)
	                      Debug.Print "                Default Character set:", Left(Desc, i - 1)
	                      i = InStr(1, Desc, "<A7>", vbTextCompare)
	                      Desc = Right(Desc, Len(Desc) - i)
	                      If Left(Desc, 1) = "0" Then
	                          Debug.Print "                     Use Rich Text is not enabled"
	                      Else
	                          Debug.Print "                     Use Rich Text is enabled"
	                      End If
	                  End If
	              Next
	          End If
	          mystring = "<A7>"
	          i = Asc(mystring)
	          Debug.Print "ILS Settings"
	          i = InStr(1, objUser.autoReplyMessage, "/", vbTextCompare)
	          Debug.Print "             ILS Server:", Left(objUser.autoReplyMessage, i - 1)
	          Debug.Print "             ILS Account:", Right(objUser.autoReplyMessage, Len(objUser.autoReplyMessage) - i)
	      
	          DescList = Null
	          Err.Clear
	          Debug.Print "Mailbox Rights"
	          
	          ' msExchMailboxSecurityDescriptoris a copy of what is in the MDB.
	          ' It cannot be modified programmatically.
	          
	          objUser.GetInfoEx "msExchMailboxSecurityDescriptor", 0
	          Dim objsd As IADsSecurityDescriptor
	          Set objsd = objUser.Get("msExchMailboxSecurityDescriptor")
	            '----Enumerate an ACE in DACL----
	          Set dacl = objsd.DiscretionaryAcl
	          For Each ace In dacl
	
	              '----TRUSTEE----
	
	              mystring = ace.Trustee
	
	              '----ACE TYPE-----
	
	              If (ace.AceType = ADS_ACETYPE_ACCESS_ALLOWED) Then
	                  mystring = "             " & mystring & " is allowed:"
	              ElseIf (ace.Type = ADS_ACETYPE_ACCESS_DENIED) Then
	                    mystring = "             " & mystring & " is denied:"
	              End If
	
	              '----ACE MASK----
	
	              If (ace.AccessMask And RIGHT_DS_SEND_AS) Then
	                   mystring = mystring & " -send mail as"
	              End If
	
	              If (ace.AccessMask And RIGHT_DS_CHANGE) Then
	                  mystring = mystring & " -modify user attributes"
	              End If
	
	              If (ace.AccessMask And RIGHT_DS_DELETE) Then
	                  mystring = mystring & " -delete mailbox store"
	              End If
	
	              If (ace.AccessMask And RIGHT_DS_READ) Then
	                  mystring = mystring & " -read permissions"
	              End If
	              If (ace.AccessMask And RIGHT_DS_TAKE_OWNERSHIP) Then
	                  mystring = mystring & " -take ownership of this object"
	              End If
	              If (ace.AccessMask And RIGHT_DS_MAILBOX_OWNER) Then
	                  mystring = mystring & " -is mailbox owner of this object"
	              End If
	              If (ace.AccessMask And RIGHT_DS_PRIMARY_OWNER) Then
	                  mystring = mystring & " -is mailbox Primary owner of this object"
	              End If
	              
	              Debug.Print mystring
	
	          Next
	          RS.MoveNext
	      Wend
	      obj = Nothing
	      objUser = Nothing
	      dacl = Nothing
	      ace = Nothing
	      
	      End If
	      oRootDSE = Nothing
	      oDomain = Nothing
	      Set oConnection = Nothing
	      Set oCommand = Nothing
	      Set RS = Nothing
	      Set RS2 = Nothing
	  End Sub
	
	3. Modify the code to set the value of the strAlias variable to the email alias
	  of the user for whom you want to retrieve properties.
	
	4. Reference the project with the ActiveX Data Objects 2.5 Libraries.
	
	5. Run the project in debug mode.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADSI kbExchange kbMsg kbVBp kbGrpDSMsg kbDSupport kbATM 
	Technology        : kbAudDeveloper kbExchangeSearch kbADSISearch kbExchange2000Search kbADSI250 kbExchange2000Serv
	Version           : :2.5
	Issue type        : kbinfo
	
	=============================================================================
	
