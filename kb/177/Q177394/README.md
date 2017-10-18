---
layout: page
title: "Q177394: HOWTO: Troubleshoot Run-Time Error '429' in DCOM Applications"
permalink: kb/177/Q177394/
---

## Q177394: HOWTO: Troubleshoot Run-Time Error '429' in DCOM Applications

	Article: Q177394
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbtophit kbDCOM kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Attempting to access a DCOM Server from a remote client application sometimes
	results in the following error:
	
	  Run-time error '429':
	  ActiveX component can't create object
	
	This article describes the most common scenarios in which this error is raised.
	
	MORE INFORMATION
	================
	
	The following is a list of possible causes of Run-time error 429. It is by no
	means a complete or definitive list. For additional troubleshooting steps, see
	the following article in the Microsoft Knowledge Base:
	
	  Q269330 HOWTO: Troubleshoot DCOM for Visual Basic Client/Server Applications
	
	Problem with Server Run Location
	--------------------------------
	
	This scenario applies to Microsoft Windows 2000, Windows NT, Windows 95, Windows
	98, and Windows Me servers.
	
	1. On the Server machine, run the DCOM Config utility (Dcomcnfg.exe).
	
	2. Select the DCOM Server from the Applications tab and choose the Properties
	  button.
	
	3. Select the Location tab.
	
	4. Ensure that the Run application on this computer setting is checked.
	
	Incorrect Server Specified in Client Registry
	---------------------------------------------
	
	On the client machine, use the following steps to verify that the DCOM Server
	machine is properly delegated. This scenario applies to Windows 2000, Windows
	NT, Windows 95, Windows 98, and Windows Me clients.
	
	1. On the client machine, run the DCOM Config utility (Dcomcnfg.exe).
	
	2. Select the DCOM Server from the Applications tab and choose Properties.
	
	3. On the General tab, be sure that there is an entry for Remote Computer and
	  that the remote computer name is correct.
	
	4. If the computer name is incorrect, select the Location tab.
	
	5. Ensure the Run application on the following computer setting is checked. In
	  the dialog box beneath this selection, type in the correct computer name for
	  your DCOM Server.
	
	You can also use the following steps to verify the remote computer name by using
	the Windows Registry:
	
	1. Run RegEdit.exe.
	
	2. The remote server name is specified in the following registry key:
	
	     HKEY_CLASSES_ROOT\ 
	        APPID\ 
	           {The CLSID of the DCOM Server}\ 
	              RemoteServerName
	
	Enable Remote Connections is Disabled
	-------------------------------------
	
	On Windows 95, Windows 98, and Windows Me servers only, you must be sure remote
	connections are enabled in order for a remote application to get access to and
	execute a serving application. Use one of the following series of steps to
	perform this task:
	
	Series 1:
	
	1. Run DCOM Config (Dcomcnfg.exe).
	
	2. Select the Default Security tab.
	
	3. Select the Enable remote connection check box.
	
	Series 2:
	
	1. Run RegEdit.exe.
	
	2. Locate the following registry key:
	
	     HKEY_LOCAL_MACHINE\ 
	        Software\ 
	           Microsoft\ 
	              OLE\ 
	                 EnableRemoteConnect
	
	3. Ensure the EnableRemoteConnect value is set to "Y" for Yes.
	
	Remote Component not Started
	----------------------------
	
	On Windows 95, Windows 98, and Windows Me servers only, the DCOM Server
	application must be started before a remote client can access it. DCOM Server
	applications on Windows NT and Windows 2000 servers do not have this
	limitation.
	
	Binary Compatibility is Broken
	------------------------------
	
	1. Open the DCOM Server project.
	
	2. From the Project menu, choose the project Properties.
	
	3. On the Component tab, ensure that Binary Compatibility is selected.
	
	If Binary Compatibility is not set, a new GUID (a.k.a ClassID) is not created
	each time the DCOM Server project is compiled. If you do not recompile the
	Client application after a new GUID is assigned, the DCOM clients break.
	
	Use the following steps to resolve this issue:
	
	1. Set the DCOM Server project to Binary Compatibility.
	
	2. Recompile both the Server and Client application.
	
	In the future, if you make any interface changes to your DCOM Server that might
	break compatibility, the Visual Basic compiler warns you that the component is
	no longer binary compatible. If you proceed to compile the DCOM Server, thus
	breaking compatibility, you must recompile any client applications that refer to
	that server. For more information about compatibility see the REFERENCES section
	below.
	
	REFERENCES
	==========
	
	For additional information, please click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q161137 HOWTO: Use Project and Binary Compatibility
	
	  Q176799 INFO: Using DCOM Config (DCOMCNFG) on Windows NT
	
	  Q193143 BUG: DCOM Client Hangs and Then Gives Error 429
	
	  Q266717 HOWTO: Create a DCOM Client/Server Application by Using Visual Basic
	
	  Q267836 HOWTO: Create a DCOM Client/Server with Events by Using Visual Basic
	
	  Q268550 HOWTO: Use Dcomcnfg for a Visual Basic DCOM Client/Server Application
	
	  Q269330 HOWTO: Troubleshoot DCOM for Visual Basic Client/Server Applications
	
	For more information, refer to the following book:
	
	  Ted Pattison Programming Distributed Applications with COM+ and Microsoft
	  Visual Basic 6.0, Second Edition
	  (http://www.microsoft.com/redirect.asp?PageID=159&PARAM=BOKPSS60&TARGET=http://www1.fatbrain.com/asp/bookinfo/bookinfo.asp?theisbn=073561010X%2526p=netskills%2526s=69196)
	  Microsoft Press, 2001
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtophit kbDCOM kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
