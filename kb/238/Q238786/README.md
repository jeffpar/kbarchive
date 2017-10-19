---
layout: page
title: "Q238786: HOWTO: Perform Remote Debugging With VB DCOM Servers"
permalink: /kb/238/Q238786/
---

## Q238786: HOWTO: Perform Remote Debugging With VB DCOM Servers

	Article: Q238786
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): KbClientServer kbDCOM kbDebug kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	At times it can be desirable to step through the code of a DCOM Server as it is
	being accessed by a remote client application. This article describes how to
	debug a DCOM server created with Visual Basic as it is being accessed by a
	client application on a second computer.
	
	MORE INFORMATION
	================
	
	This article assumes that the reader already knows how to create a DCOM server
	application and how to distribute and install the client on a remote computer.
	See the REFERENCES section for more information.
	
	The following steps discuss how to set up a client application and a DCOM server
	for remote access debugging.
	
	1. Create a DCOM Server, save the project and compile it.
	
	2. Create a client for your server. Save the project and compile it.
	
	3. Create the distribution files for the client.
	
	4. Install the client on a remote computer.
	
	5. Make all needed settings using Dcomcnfg on the client and server computers.
	
	6. Test the client with the compiled server to assure the DCOM connection is
	  working fine.
	
	7. Close the client. You are now ready to start debugging.
	
	8. Assure the server is not running. You can use Task Manager for this purpose.
	
	9. Start Visual Basic and open your Server project.
	
	10. From the Project menu, select Properties and choose the Component Tab.
	  Assure that Binary Compatibility is set.
	
	11. While still in Properties, select the Debugging tab. Check the Wait for
	  components to be created option and click OK.
	
	12. Place breakpoints as required.
	
	13. Press F5 to run the server.
	
	14. Start the client.
	
	15. At this point, you should be running the Server in the Visual Basic IDE. The
	  process will break as soon as a breakpoint is reached. You can now debug the
	  server as any other application in the IDE.
	
	16. Once you close the client, the server will continue to be loaded in the IDE.
	  To end the server, from the Run menu select End.
	
	Important Security Issues:
	
	When your server is running in Visual Basic's IDE, it runs in the security
	context of Visual Basic. This means that the settings you have chosen for your
	server using Dcomcnfg are not effective at this time. The identity of the server
	at this point will be the interactive user. In addition, you cannot set access
	rights to Visual Basic. As a consequence, the only user that can access the
	server running in the IDE is the user that is logged on to the computer where
	the server is running. In other words, the user logged on to the computer where
	the client is running must be the same user that is logged on to the computer
	where the server is running.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q266717 HOWTO: Create a DCOM Client/Server Application by Using Visual Basic
	
	  Q267836 HOWTO: Create a DCOM Client/Server with Events by Using Visual Basic
	
	  Q268550 HOWTO: Use Dcomcnfg for a Visual Basic DCOM Client/Server Application
	
	  Q269330 HOWTO: Troubleshoot DCOM for Visual Basic Client/Server Applications
	
	Additional query words:
	
	======================================================================
	Keywords          : KbClientServer kbDCOM kbDebug kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
