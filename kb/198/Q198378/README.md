---
layout: page
title: "Q198378: HOWTO: Use the VB DataEnvironment In Your MTS Components"
permalink: kb/198/Q198378/
---

## Q198378: HOWTO: Use the VB DataEnvironment In Your MTS Components

	Article: Q198378
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,6.0
	Operating System(s): 
	Keyword(s): kbMTS200 kbVBp600 kbDataEnv kbGrpDSVBDB
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Transaction Server 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual Basic DataEnvironment was designed, tested, and configured to run as
	end-user product on a client workstation. It assumes an interactive desktop and
	user profile, and does not provide the level of reentrancy or security that is
	necessary to meet the needs of server-side components that are designed to run
	unattended. Microsoft does not currently recommend, and does not support,
	running the VB DataEnvironment from any unattended, non-interactive server
	application.
	
	If you want to use the Visual Basic DataEnvironment to communicate with your
	database in your Transaction Server components, be sure to set the connection
	objects so that no prompt occurs if the attempt to connect fails.
	
	MORE INFORMATION
	================
	
	By default, the DataEnvironment sets connections so that if the attempt to login
	fails, a dialog box appears to inform the user of the problem and allow the user
	to try to connect successfully.
	
	If you are building a Transaction Server component, you do not want to use this
	feature for the following reasons:
	
	- Your Microsoft Transaction Server (MTS) component is usually running on
	  another server and the user never sees this dialog box.
	
	- Connection pooling does not support this type of login.
	
	- Transaction Server will not enlist this connection in the component's
	  transaction.
	
	If you use ActiveX Data Objects (ADO) code, rather than the DataEnvironment to
	connect to your database, these problems will not occur. By default, ADO
	connections generate errors.
	
	Here are two ways to make sure that your DataEnvironment connection will not
	display a dialog box if the login fails:
	
	- At design time, use the Properties Window (rather than the properties pages)
	  to set the RunPromptBehavior property of the DataEnvironment connection to 4
	  - adPromptNever.
	
	- At run-time, set the Prompt property of the connection object as in the
	  following code:
	
	        DataEnvironment1.cnPubs.Properties("Prompt").Value = adPromptNever
	        DataEnvironment1.cnPubs.Open
	
	REFERENCES
	==========
	
	c) Microsoft Corporation 1998, All Rights Reserved. Contributions by David
	Sceppa, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMTS200 kbVBp600 kbDataEnv kbGrpDSVBDB 
	Technology        : kbVBSearch kbMTSsearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbMTS200
	Version           : :2.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
