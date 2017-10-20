---
layout: page
title: "Q157049: HOWTO: Debug Remote Automation Servers in Visual FoxPro 5"
permalink: /kb/157/Q157049/
---

## Q157049: HOWTO: Debug Remote Automation Servers in Visual FoxPro 5

{% raw %}

	Article: Q157049
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbAutomation kbvfp500 kbvfp600
	Last Modified: 03-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses general directions on how to debug remote server
	applications.
	
	MORE INFORMATION
	================
	
	Visual FoxPro 5.0 allows you to create remote OLE Automation servers. Unlike
	servers deployed locally, which can either be an .exe file or a .dll file,
	remote servers must have an .exe file extension. One of the advantages with .exe
	type servers is that they have their own event loop, so you can process events.
	However, in a typical remote situation, your server is non-visual (typically a
	business object in a three-tier situation).
	
	Debugging your .exe servers should be straight forward. For the most part, you
	should be able to test your servers locally before deploying them remotely. Most
	of the servers run the same in both situations. The approach you should take in
	creating and debugging a remote server is as follows:
	
	1. Create your server as an internal Visual FoxPro class. Assuming you have a
	  project called Books, which has a custom class called taxes that calculates
	  the state/province sales tax for your mail order book sales business, you
	  might have your class loosely structured as follows:
	
	        * TaxLib.PRG
	        DEFINE CLASS taxes AS custom
	        PROCEDURE gettaxes
	           LPARAMETER cState
	           DO CASE
	           CASE m.cState = "CA"
	             RETURN .08
	           CASE m.cState = "WA"
	             RETURN .07
	           CASE m.cState = "NY"
	             RETURN .10
	           OTHERWISE
	             RETURN 0
	           ENDCASE
	        ENDPROC
	        ENDCLASS
	
	  Your application can test this class within Visual FoxPro internally with code
	  similar to the following:
	
	        cState = "CA"
	        nBookPrice = 19.95
	        SET PROCEDURE TO TaxLib    && can also use SET CLASS
	        oTaxes = CreateObject("Taxes")
	        nBookTax = oTaxes.GetTaxes(m.cState) * m.nBookPrice
	        ? "Book total: "+ALLTRIM(STR(m.nBookPrice+m.nBookTax))
	
	  The advantage here is that you are working within the Visual FoxPro
	  development environment so you can take advantage of the debugger for common
	  errors such as "Syntax Error."
	
	2. Change your class definitions to OLEPUBLIC and test locally. Theoretically,
	  you have already debugged for most of the common errors. Now, you want to
	  test the class as an OLE Server. In order to do this, update the class
	  definition to make it OLE Public and rebuild the project, selecting the Build
	  EXE option. The following shows this using a class defined in a .prg file:
	
	  Change:
	
	        DEFINE CLASS taxes AS custom
	
	  To:
	
	        DEFINE CLASS taxes AS custom OLEPUBLIC
	
	  NOTE: If you are using a visual class created in a .vcx file, you would go
	  into the Class Info dialog box to select the OLE Public check box.
	
	  Once you have created your OLE Automation Server, you can update your test
	  code as follows (notice that you no longer need a SET CLASSLIB or SET PROC
	  statement--the class is automatically registered in the Registry as an OLE
	  class):
	
	        cState = "CA"
	        nBookPrice = 19.95
	        oTaxes = CreateObject("Books.Taxes")
	        nBookTax = oTaxes.GetTaxes(m.cState) * m.nBookPrice
	        ? "Book total: "+ALLTRIM(STR(m.nBookPrice+m.nBookTax))
	
	  You should not encounter many problems beyond step 1; however, there are a few
	  things to look out for. Since the OLE Server uses the run-time version, not
	  all the language is supported (especially some of the user interface and
	  designers). Make sure you avoid commands that do not work with the run-time
	  version (these are documented in the Visual FoxPro Professional Features
	  Guide, under "Distributing Applications").
	
	3. Deploy the OLE Server remotely. You have already created your OLE server.
	  Now, you need to register it remotely. The easiest way to do this is through
	  the Remote Automation Connection Manager (RacMan). RacMan allows you to
	  switch an existing OLE Server, which you already have registered locally, to
	  being registered remotely. In order to do this, make sure your remote machine
	  has that server installed and registered properly and access rights are
	  properly made available to the client. Finally, to create an instance of that
	  server, you must be running DCOM (Distributed COM or Network OLE) between
	  your machines (NT 4.0 or later) or be running the Automation Manager program
	  that ships with Visual FoxPro on the server. See Visual FoxPro documentation
	  for more details on setting up for remote automation and using RacMan.
	
	  Many of the problems associated with using remote automation servers are not
	  with the servers themselves but rather configuring them properly with valid
	  network address, protocol and access rights.
	
	  The biggest concern at this stage is checking for wait states that might stop
	  the client. For example, a MessageBox() call that brings up a dialog box on
	  your server can be closed only when someone manually goes over to the server
	  and closes it. Meanwhile, your application is locked in a busy loop waiting
	  for the server to complete the command.
	
	Strategies
	----------
	
	- Error handlers. Error handling is probably one of the more common problems
	  with remote servers. It is imperative that your error handlers avoid using
	  dialog boxes that can place your server in a modal state. Your error handlers
	  should return an error code (possibly message) to the client for proper
	  handling.
	
	  Depending on how conservative you are with your code, you can either check
	  after each automation call to the server for an error, or let your error
	  routine handle it.
	
	- Wait states. In general, your remote servers should be non-visual. There may
	  be extraneous wait state code such as BROWSE, MODIFY MEMO, WAIT WINDOW that
	  relies on user input. Make sure to avoid this type of code, which can place
	  the client in an endless loop.
	
	- Application object properties. There are several properties you can use in
	  your client applications to more effectively handle problems with OLE
	  Servers, including the following:
	
	     OLEServerBusyTimeout
	     OLERequestPendingTimeout
	     OLEServerBusyRaiseError
	     StartMode
	
	- Blocking with OLE Callbacks. Visual FoxPro supports the ability for remote
	  servers to make OLE Callbacks into your clients. An object reference on the
	  client can be passed to a remote server. The remote server can then call a
	  method or set a property on this object. When this happens in a remote
	  situation, the Automation Manager is automatically launched on the client
	  machine. A common problem with OLE Callbacks is when you have the client pass
	  an object reference to a method on the server. This method then tries to make
	  a callback on that object. A blocking problem occurs (Error: Call was
	  rejected by callee) because the client is waiting for the method to complete
	  execution even though the server is trying to call back into the client. Here
	  is a simple example:
	
	        * Client code
	        x=create("myproj.myserver")
	        y=create("form")
	        x.test(y)      &&generates error because of blocking
	
	        * Server code in project Myproj
	        DEFINE CLASS myserver AS custom OLEPUBLIC
	          PROCEDURE test
	            PARAMETER oForm
	            oForm.Caption = "Hello World"
	          ENDPROC
	        ENDDEFINE
	
	  There are a number of ways to successfully handle OLE Callbacks. One is with
	  the use of Timers (see the Pool Manager sample located in Samples\Servers).
	
	Common Errors with Remote Automation
	------------------------------------
	
	- Error: OLE error code 0x800706d9: There are no more endpoints available from
	  the endpoint mapper.
	
	  Possible causes: Automation Manager/DCOM not started (running) on server.
	
	  Remedy: If you are using Automation Manager, make sure to launch the program.
	  With DCOM, check DCOM documentation for possible problems configuring it. If
	  a successful connection is made, the Automation Manager window indicates so.
	
	- Error: OLE error code 0x800706a7: The RPC protocol sequence is not
	  supported.
	
	  Possible causes: The Network Protocol specified on the client machine for the
	  remote server is not supported.
	
	  Remedy: On the client machine, launch the Remote Automation Connection Manager
	  and go into the Server Connection tab. Select a Network Protocol that is
	  supported such as TCP/IP.
	
	- Error: OLE error code 0x80070005: Access is denied.
	
	  Possible causes: This is often due to improper client access set on the
	  server.
	
	  Remedy: On the server machine, launch the Remote Automation Connection Manager
	  and choose the Client Access tab. Make sure the System Security Policy is set
	  correctly. If this does not work, try using one of the other Policy options
	  such as Allow All Remote Creates.
	
	- Error: OLE error code 0x800706e4: The requested operation is not supported.
	
	  Possible causes: This is often due to improper client access set on the server
	  when the System Security Policy is set to Allow Remote Creates by ACL.
	
	  Remedy: On the server machine, launch the Remote Automation Connection Manager
	  and choose the Client Access tab. The third option should already be selected
	  (Allow Remote Creates by ACL). Make sure The ACL (Access Control List)
	  privileges are set correctly to allow for client access via the Edit ACL
	  button. If this does not work, try using one of the other Policy options such
	  as Allow All Remote Creates.
	
	- Error: OLE error code 0x80010001: Call was rejected by callee.
	
	  Possible causes: A block in OLE Callback.
	
	  Remedy: Make sure that callbacks are made independent of the client's actions.
	  Use a timer as in the Pool Manager example.
	
	- Error: Server busy or mousepointer endlessly busy
	
	  Possible causes: This is often due to some wait state in the server such as an
	  error dialog box, message box, browse, and so forth.
	
	  Remedy: Avoid using code that requires user input.
	
	- Error: Feature not available.
	
	  Possible causes: Command or function is not available in run-time version.
	
	  Remedy: Do not use these commands.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbinterop kbAutomation kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
