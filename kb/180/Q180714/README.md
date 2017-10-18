---
layout: page
title: "Q180714: HOWTO: Pass a Picture Object Remotely Using COM"
permalink: kb/180/Q180714/
---

## Q180714: HOWTO: Pass a Picture Object Remotely Using COM

	Article: Q180714
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 05-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to use the Component Object Model (COM) to pass
	objects remotely. This process is commonly referred to as cross-process object
	marshaling. The article also examines the difference between passing objects by
	reference (ByRef) and by value (ByVal), and demonstrates a custom marshaling
	approach to remotely pass a Picture object from one machine to another (ByVal)
	using COM.
	
	MORE INFORMATION
	================
	
	You can pass objects to a remote machine using COM, but you must pass the
	objects ByRef. (Note: An ActiveX Data Objects (ADO) recordset is the current
	exception to this rule because a custom proxy was built for this object type.)
	However, passing an object by reference requires network traffic for each
	subsequent method call because the object resides on the remote machine. You can
	work around this limitation using the Variant data type. The following sample
	passes a Picture object to a remote machine using a COM callback and the Variant
	data type.
	
	Step-by-Step Procedure
	----------------------
	
	The following sections contain the sample code for the server and client
	projects.
	
	The Server Project:
	
	1. Start a new ActiveX EXE project. Class1 is added by default.
	
	2. From Project menu, click Project Properties, and change the Project Name to
	  "PicServer" (without the quotation marks).
	
	3. In the Name property of the Class1 module, change the name to clsPassPicture.
	
	4. Paste the following code into clsPassPicture's code section:
	
	  Option Explicit
	
	  Private gbconnected As Boolean
	  Private objClient As Object
	
	  ' Receive the callback reference from the client.
	  Public Function AddObjectReference(Caller As Object) As Boolean
	     On Error GoTo AddObjectReferenceError
	
	     ' Store the remote client reference for later use.
	     Set objClient = Caller
	     AddObjectReference = True
	     gbconnected = True ' Global connected flag.
	
	     Exit Function
	
	  AddObjectReferenceError:
	    #If DEBUG_ON Then
	     MsgBox Error$, vbOKOnly + vbExclamation, _
	         "AddObjectReference - Error " & Err.Number
	    #End If
	    AddObjectReference = False
	    Exit Function
	
	  End Function
	
	  ' Receive the drop request from the client and destroy the
	  ' reference.
	  Public Function DropObjectReference(Caller As Object) As Boolean
	     On Error GoTo DropObjReferenceError
	
	     If objClient Is Caller Then
	        Set objClient = Nothing
	        gbconnected = False
	        DropObjectReference = True
	     Else
	        ' Debug.Print "Caller not the same as ObjRef. Unable to
	        ' quit."
	        DropObjectReference = False
	     End If
	     Exit Function
	
	  DropObjReferenceError:
	     #If DEBUG_ON Then
	        MsgBox Error$, vbOKOnly + vbExclamation, _
	          "DropObjectReference - Error" & Str$(Err)
	     #End If
	     DropObjectReference = False
	     Exit Function
	
	  End Function
	
	  ' Public function that receives the pass picture request from
	  ' the client.
	  Public Function ServerIcon() As Boolean
	     Dim i As Integer
	     Dim MyFile As String
	     Dim tb() As Byte
	
	     On Error GoTo IconError
	     If gbconnected Then     ' Test for existing client reference.
	         MyFile = "C:\TestPass.bmp"
	         Load MyForm
	         SavePicture MyForm.Image1.Picture, MyFile  ' Save to temp
	                                                    ' file.
	         Open MyFile For Binary As #1   ' Read into byte array.
	         i = 0
	         i = LOF(1)                     ' Get the file size.
	         ReDim tb(i + 1) As Byte        ' Resize the array.
	         i = 0
	         Do Until EOF(1)
	            Get #1, , tb(i)             ' Read data into array.
	            i = i + 1
	         Loop
	         Close #1
	         Kill MyFile ' Clean up the temp file.
	         Unload MyForm 'Unload the Form
	         objClient.ReceivePic tb   ' Pass the array to the client
	                                   ' using a reference.
	         ServerIcon = True
	      End If
	   Exit Function
	
	  IconError:
	     #If DEBUG_ON Then
	     MsgBox Error$, vbOKOnly + vbExclamation, _
	          "Get Server Icon - Error" & Str$(Err)
	     #End If
	     ServerIcon = False
	  End Function
	
	5. From Project menu, click Add Form to add a new form, and change the name and
	  caption of the Form to "MyForm" (without the quotation marks).
	
	6. Add an Image control to MyForm, Image1 is added by default. Set the Picture
	  property to a .bmp file on your computer.
	
	7. Compile the Project into an executable file.
	
	The Client Project:
	
	1. Start a new ActiveX EXE project. Class1 is added by default.
	
	2. From Project menu, click Project Properties, and change the Project Name to
	  "PicClient" (without the quotation marks).
	
	3. From the Project menu, click References, and then click PicServer.
	
	4. In the Name property of the Class1 module, change the name to
	  "clsReceivePicture" (without the quotation marks).
	
	5. Add the following code to clsReceivePicture's code section:
	
	  Option Explicit
	
	  Public Sub ReceivePic(PassedPic As Variant)
	     Dim i As Integer, j As Integer
	     Dim MyFile As String
	     Dim tb() As Byte
	     ' This public sub routine shows how to pass an object using an
	     ' icon.
	
	     On Error GoTo BadObj
	     i = UBound(PassedPic)
	     ' Repack the variant into the byte array for binary write.
	     ReDim tb(i) As Byte
	
	     For j = LBound(PassedPic) To UBound(PassedPic)
	        tb(j) = PassedPic(j)
	     Next j
	
	     ' Write to a local file.
	     MyFile = "C:\TestPass.bmp"
	     Open MyFile For Binary As #1
	
	     For j = LBound(tb) To UBound(tb)
	        Put #1, , tb(j)
	     Next j
	     Close #1
	
	     ' Recreate the object from a file.
	     Set frmDCOMDemoClient.picPassIcon.Picture = LoadPicture(MyFile)
	     Kill MyFile
	     Exit Sub
	
	  BadObj:
	     MsgBox Err.Number & ": " & Err.Description & _
	          " - " & "Object Pass    Failed..."
	  End Sub
	
	6. From Project menu, click Add Form to add a new form, and change the name and
	  caption of the Form to "frmDCOMDemoClient" (without the quotation marks).
	
	7. Add a Command button to frmDCOMDemoClient. Change its name property to
	  "cmdGetObject" (without the quotation marks), and change its Caption property
	  to "Get Server Icon" (without the quotation marks).
	
	8. Add a PictureBox control to frmDCOMDemoClient, and change its Name property
	  to "picPassIcon" (without the quotation marks).
	
	9. Paste the following code into frmDCOMDemoClient's code section:
	
	  Option Explicit
	
	  Public mbIsConnected As Boolean
	  Public objMyClassInstance As Object
	  Private oServer As PicServer.clsPassPicture
	
	  Private Sub cmdGetObject_Click()
	     ' This subroutine calls the server to initiate the icon pass.
	     Dim rf As Boolean
	
	     ' Connect to your server, selected in the Project References
	     ' dialog box.
	     Set oServer = New PicServer.clsPassPicture
	     ServerConnect                 'Set up the callback.
	     If mbIsConnected Then
	        rf = oServer.ServerIcon    'Call remote server method.
	        If rf Then
	           MsgBox "Icon Passed Successfully..."
	        Else
	           MsgBox "Icon Pass Failed..."
	        End If
	        ServerDisconnect           ' Clean up after the callback.
	     Else
	        MsgBox "Callback Connection Failed"
	     End If
	  End Sub
	
	  Public Sub ServerConnect()
	     Dim bsuccess As Integer
	     Dim bRetVal As Boolean
	     Dim iCounter As Integer
	
	     ' Used by the OLE Collision Handler.
	     Dim nCurErrorCount As Integer
	     Const MAX_ERROR_COUNT = 10
	
	     On Error GoTo cmdButtonError
	     Screen.MousePointer = vbHourglass
	     Set objMyClassInstance = New clsReceivePicture
	     If oServer.AddObjectReference(objMyClassInstance) Then
	          mbIsConnected = True
	     Else
	         mbIsConnected = False
	     End If
	     Screen.MousePointer = vbDefault
	     Exit Sub
	
	  cmdButtonError:
	  ' When using asynchronous callbacks between two objects, you need
	  ' this error checking code to deal with the possibility of a
	  ' collision. This collision can occur when a client and server
	  ' attempt to call each other at the same time. This error handler
	  ' forces the client to wait for a random period of time and retry the
	  ' failed operation. During this time, the server should complete its
	  ' call to the client, allowing the client to succeed when it retries
	  ' the call to the server. You should also include the same error
	  ' handling code in the server object.
	
	  If Erl = 100 And Err = &H80010001 Then
	     If nCurErrorCount >= MAX_ERROR_COUNT Then
	        MsgBox "Unable to obtain server reference.  Retry later.", _
	        vbExclamation, "Remote Server Connect Error"
	        Resume EndOfError
	     Else
	        For iCounter = 1 To 2000 * Rnd()
	           DoEvents
	        Next iCounter
	        Resume
	     End If
	  End If
	  Screen.MousePointer = vbDefault
	  MsgBox Error$, vbCritical, "cmdButton Error"
	  EndOfError:
	
	  End Sub
	
	  Public Sub ServerDisconnect()
	     Dim bsuccess As Integer
	     Dim bRetVal As Boolean
	     Dim iCounter As Integer
	
	     ' Used by the OLE Collision Handler.
	     Dim nCurErrorCount As Integer
	     Const MAX_ERROR_COUNT = 10
	
	     On Error GoTo cmdButtonError
	     Screen.MousePointer = vbHourglass
	     If oServer.DropObjectReference(objMyClassInstance) Then
	        mbIsConnected = False
	       'Dereference the local object.
	        Set objMyClassInstance = Nothing
	        Set oServer = Nothing
	        MsgBox "Disconnect Successful..."
	     Else
	        MsgBox "Disconnect Failed..."
	     End If
	     Screen.MousePointer = vbDefault
	     Exit Sub
	
	  cmdButtonError:
	     If Erl = 100 And Err = &H80010001 Then
	        If nCurErrorCount >= MAX_ERROR_COUNT Then
	          MsgBox "Unable to release server reference.  Retry later.", _
	          vbExclamation, "Remote Server Disconnect Error"
	          Resume EndOfError
	        Else
	           For iCounter = 1 To 2000 * Rnd()
	               DoEvents
	           Next iCounter
	           Resume
	        End If
	     End If
	     Screen.MousePointer = vbDefault
	     MsgBox Error$, vbCritical, "cmdButton Error"
	  EndOfError:
	     
	  End Sub
	
	10. From the Project menu, click Add Module. Module1 is added by default.
	
	11. Paste the following code into Module1's code section:
	
	  Option Explicit
	
	  Sub Main()
	    Load frmDCOMDemoClient
	    frmDCOMDemoClient.Show
	  End Sub
	
	12. From the Project menu, click PicClient Properties. On the General tab,
	  change Startup Object to Sub Main. On the Component tab, change Start Mode
	  to Standalone.
	
	13. Compile the Project into an executable.
	
	14. Run PicClient.exe. Click Get Server icon. You should see the icon appear in
	  the PictureBox.
	
	15. In order to distribute the server project to another machine, please refer
	  to the following articles in the Microsoft Knowledge Base:
	
	  Q266717 HOWTO: Create a DCOM Client/Server Application by Using VB
	
	  Q161837 HOWTO: Create a DCOM Client/Server Application in VB5
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q183607 HOWTO: Configure DCOM for Visual Basic 5.0 Using DCOMCNFG.EXE
	
	  Q266717 HOWTO: Create a DCOM Client/Server Application by Using Visual Basic
	
	  Q267836 HOWTO: Create a DCOM Client/Server with Events by Using Visual Basic
	
	  Q268550 HOWTO: Use Dcomcnfg for a Visual Basic DCOM Client/Server Application
	
	  Q269330 HOWTO: Troubleshoot DCOM for Visual Basic Client/Server Applications
	
	Additional query words: callback marshaling
	
	======================================================================
	Keywords          : kbcode kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
