---
layout: page
title: "Q188695: HOWTO: Select Remote Components for Client Projects w/PDW"
permalink: kb/188/Q188695/
---

## Q188695: HOWTO: Select Remote Components for Client Projects w/PDW

	Article: Q188695
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbwizard kbActiveX kbAppSetup kbDCOM kbVBp kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to select remote components for Visual Basic client
	applications using the Package and Deployment Wizard (PDW). This article applies
	to both Remote Automation and DCOM components.
	
	MORE INFORMATION
	================
	
	When creating a distribution set using the PDW for a remote client, the PDW will
	assume all ActiveX components are local, meaning that they will be installed
	onto the same machine as the client application. The following steps describe
	how to specify that the ActiveX server components used in your application
	should be accessed through DCOM or Remote Automation.
	
	Step-by-Step Procedures
	-----------------------
	
	These steps assume that you have already created client and server applications
	using Microsoft Visual Basic.
	
	1. Start the Package and Deployment Wizard.
	
	2. Select your client project, and click Package.
	
	3. Select the default Packaging script, and click Next.
	
	4. Select Standard Setup Package, and click Next.
	
	5. Select the folder where your package will be assembled, and click Next.
	
	6. The next screen lists the files that will be included with your application.
	  A check box appears next to each file. Since the ActiveX EXE server will be
	  remote, it should not be included with the distribution set. Deselect the
	  check box next to your ActiveX EXE server.
	
	7. Click Add to locate the .vbr file for your ActiveX EXE. Create a .vbr file
	  for your ActiveX components by selecting "Remote Server Files" in the project
	  properties. "Remote Server Files" will provide the information necessary to
	  register the remote component on client computers.
	
	8. Click Next.
	
	9. On the next screen, you specify the appropriate options for your remote
	  server components. You must specify the following options:
	
	     Net Address       Specify the server name where the remote component
	                       will be accessed. This is required for both DCOM
	                       and Remote Automation servers. (You can leave this
	                       blank--the end-user can enter this information when
	                       he or she installs the client.)
	
	     Connection        Specify DCOM or RA (Remote Automation).
	
	     Protocol          For RA servers only. Specify the network protocol
	                       to be used by the client to communicate with the RA
	                       server.
	
	     Authentication    For RA servers only. Specify the authentication
	                       used to connect to the RA Server.
	
	10. Proceed through the remaining steps of the Wizard as desired.
	
	======================================================================
	Keywords          : kbwizard kbActiveX kbAppSetup kbDCOM kbVBp kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
