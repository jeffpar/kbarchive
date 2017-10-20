---
layout: page
title: "Q185193: PRB: Clireg32 Fails to Register the Type Library of DCOM Server"
permalink: /kb/185/Q185193/
---

## Q185193: PRB: Clireg32 Fails to Register the Type Library of DCOM Server

{% raw %}

	Article: Q185193
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbDCOM kbGrpDSVB kbDSupport kbControl
	Last Modified: 06-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Clireg32.exe to register the type library (.tlb file) of a DCOM
	server, the type library entries are not entered in the registry. This problem
	also occurs during the Internet download of usercontrols that reference DCOM
	servers. When this problem occurs, you will receive one of the following error
	messages while trying to run the DCOM client application:
	
	  The instruction at '0x00000000' referenced memory at '0x00000000'. The
	  memory could not be 'read'
	
	  -or-
	
	  An application error has occurred and an application error log is being
	  generated. '<Client.exe>' Exception: access violation (0xc0000005),
	  address: 0x00000000
	
	CAUSE
	=====
	
	The Clireg32.exe utility fails to register the type library when the DCOM option
	is selected.
	
	RESOLUTION
	==========
	
	To resolve this issue, modify the DCOM Server .vbr file, and then use
	CliReg32.Exe to reregister the DCOM Server, first as a remote automation
	component, then as a DCOM component, as detailed below.
	
	Step-By-Step Procedure
	----------------------
	
	1. Open the DCOM Server .vbr file in Notepad or any text editor.
	
	2. Both the ProxyStubClsid and ProxyStubClsid32 keys for the DCOM Server ClassId
	  must modified. (In the sample below, the underscore character (_) is used as
	  a line-continuation character; the line does not appear in this way in your
	  .vbr file.)
	
	  Change the following
	
	  HKEY_CLASSES_ROOT\INTERFACE\{<Server ClsId>} _
	  \ProxyStubClsid\{00020420-0000-0000-c000-00000000046}
	
	  to the following:
	
	  HKEY_CLASSES_ROOT\INTERFACE\{<Server ClsId>} _
	  \ProxyStubClsid\{00020424-0000-0000-c000-00000000046}
	
	  Make the same change for ProxyStubClsid32.
	
	3. On the Windows Start menu, click Run, and type the following command:
	
	  "CLIREG32 DCOMSERVER.VBR -T DCOMSERVER.TLB -S SERVERMACHINENAME" (without the
	  quotation marks)
	
	  NOTE: In the above command, "DCOMSERVER" is the name of your DCOM server, and
	  "SERVERMACHINENAME" is the name of the server where the DCOM component will
	  reside. Choose Remote Automation from Remote Transport options.
	
	4. Now, run the command again:
	
	  "CLIREG32 DCOMSERVER.VBR -T DCOMSERVER.TLB -S SERVERMACHINENAME" (without the
	  quotation marks)
	
	  This time, choose Distributed COM from Remote Transport options.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: This article assumes that you are familiar with creating and deploying DCOM
	client and server applications.
	
	Create the DCOM Server:
	
	1. Create a new ActiveX EXE project in Visual Basic 5; Class1 is created by
	  default.
	
	2. Rename Class1 to "CDCOMServer".
	
	3. On the Project menu, click Project Properties, and rename the project to
	  DCOMServer.
	
	4. Click the Component tab, and then click Remote Server Files.
	
	5. Add the following code to the CDCOMServer class module:
	
	      Private mName As String
	
	      Public Property Let sName(str As String)
	          mName = str
	      End Property
	
	      Public Property Get sName() As String
	          sName = mName
	      End Property
	
	      Private Sub Class_Initialize()
	          mName = "DCOM Server"
	      End Sub
	
	6. Create the ActiveX EXE.
	
	Create the Client:
	
	1. Create a new ActiveX Control project in Visual Basic 5.0; UserControl1 is
	  created by default.
	
	2. Rename UserControl1 to "CtlDownload" (without the quotation marks).
	
	3. Add a TextBox, a CommandButton, and a Label to the control.
	
	4. On the Project menu, click References, and then click DCOMServer.
	
	5. Place the following code in the user control's code pane:
	
	      Private Sub Command1_Click()
	          Dim svr As New DCOMServer.CDCOMServer
	          svr.sName = Text1.Text
	          Label1.Caption = svr.sName
	      End Sub
	
	6. [Optional] For testing, create a Standard EXE project to test the ActiveX
	  control. Whenever you enter something in the TextBox and click Command1, the
	  same text should be displayed on the Label.
	
	7. Create the CtlDownload OCX.
	
	Create Installation Programs for the Client and the Server:
	
	1. Use the Application Setup Wizard to create a setup program for DCOMServer
	  project.
	
	2. Create an Internet Component Download Setup for the client (CtlDownload). Be
	  sure to add the DCOMServer.vbr file.
	
	  NOTE: To have a successful download, please refer to the following Microsoft
	  Knowledge Base article:
	
	  Q168429 PRB: Component Download Fails for DCOM Projects
	
	Install the Server and Test the Client:
	
	1. Install the DCOMServer on a Windows 2000 (Professional or Server) or Windows
	  NT 4.0 (workstation or server) with Service Pack 3 installed.
	
	2. From a client computer, open the CtlDownLoad.htm file in the control's setup
	  folder.
	
	3. Click the CommandButton on the control to reproduce one of the
	  above-mentioned errors.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q161837 HOWTO: Create a DCOM Client/Server Application
	
	  Q168429 PRB: Component Download Fails for DCOM Projects
	
	  Q266717 HOWTO: Create a DCOM Client/Server Application by Using VB
	
	  Q267836 HOWTO: Create a DCOM Client/Server with Events by Using Visual Basic
	
	  Q268550 HOWTO: Use Dcomcnfg for a Visual Basic DCOM Client/Server Application
	
	  Q269330 HOWTO: Troubleshoot DCOM for Visual Basic Client/Server Applications
	
	Additional query words: DCOM Internet Download CliReg32.exe
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbDCOM kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
