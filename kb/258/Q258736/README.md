---
layout: page
title: "Q258736: FIX: Multi-Threaded DLL Is Slow to Release Connection Under MTS"
permalink: /kb/258/Q258736/
---

## Q258736: FIX: Multi-Threaded DLL Is Slow to Release Connection Under MTS

	Article: Q258736
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbMTS kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbVS600sp4fix kbVS600sp4 kbVS60
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A dynamic-link library (DLL) created with Visual FoxPro and running under
	Microsoft Transaction Server is slow to release connections. This behavior
	occurs when a DLL is running under Microsoft Transaction Server (MTS) or COM+
	with Transaction Support marked as either "Required" or "Requires New."
	
	CAUSE
	=====
	
	Releasing a COM server launched from a DLL under MTS or COM+ with Transaction
	Support marked as either "Required" or "Requires New," initiates a call to
	CoFreeUnusedLibraries. When CoFreeUnusedLibraries is called, COM+ calls the
	DllCanUnloadNow function in every COM DLL in the process. If that call returns
	TRUE, then COM unloads the DLL.
	
	RESOLUTION
	==========
	
	Using Visual FoxPro 6.0 with Microsoft Visual Studio 6.0 Service Pack 4 or
	later, add the following line of code to the Init method of the code used to
	create the multi-threaded DLL:
	
	  =SYS(2339,0)
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Visual Studio 6.0 Service Pack 4 and later for Visual FoxPro 6.0 include the
	SYS(2339) function call. This function call may be used in single-threaded or
	multi-threaded DLLs to toggle when COM servers are released. The syntax for
	using SYS(2339) is:
	
	  SYS(2339,1) && Default setting CoFreeUnusedLibraries called after a COM server is released.
	  SYS(2339,0) && CoFreeUnusedLibraries is not called after a COM server is 
	  released.
	
	Setting SYS(2339,0) can improve scalability.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create project named "SLOWDLL" (without the quotation marks).
	
	2. Create a program file named SLOWDLL.PRG using the following code:
	
	  DEFINE CLASS MTDLLDemo AS SESSION OLEPUBLIC
	
	     PROCEDURE foot
	
	        oMTX = CREATEOBJ('MTXAS.APPSERVER.1')
	        oContext = oMTX.GetObjectContext()
	
	        loCommand = CREATEOBJ('ADODB.Command')
	        loRecordSet = CREATEOBJ('ADODB.RecordSet')
	        loConnection = CREATEOBJ('ADODB.Connection')
	        loConnection.CursorLocation = 3
	
	        *!* Note Adjust the name of the server used in the next line
	        lcConnectionStr = "Driver=SQL SERVER;SERVER=MY_SERVER;DATABASE=PUBS;UID=SA;PWD="
	        lcCommandStr = [SELECT Authors.au_id, Authors.au_lname, Authors.au_fname ] + ;
	           [FROM dbo.authors Authors]
	
	        loConnection.OPEN(lcConnectionStr)
	        loCommand.ActiveConnection = loConnection
	        loCommand.CommandText = lcCommandStr
	
	        IF loRecordSet.State = 1
	           loRecordSet.CLOSE()
	        ENDIF
	        loRecordSet.OPEN(loCommand)
	
	        loRecordSet.ActiveConnection = NULL
	        loCommand.ActiveConnection = NULL
	        loCommand = NULL
	        loConnection.CLOSE
	
	        lnStart = SECONDS()
	        loConnection = NULL  &&problem here
	        lnStop = SECONDS()
	
	        oContext.SetComplete
	
	        RETURN STR((lnStop-lnStart),6,2)+" seconds to disconnect"
	
	     ENDPROC
	
	  ENDDEFINE
	
	3. Build either a single-threaded or multi-threaded DLL.
	
	4. Open the Microsoft Transaction Server/COM+ Management Console and create a
	  new COM+ package named SLOWDLL.
	
	5. Open the Components folder of the SLOWDLL package.
	
	6. Right-click on the Components folder, select New from the pop-up menu, and
	  then select Component.
	
	7. In the COM Component Install Wizard, select Import component(s) that are
	  already registered and add the SLOWDLL.MTDLLDemo component.
	
	8. After adding the component, right-click on the component and select the
	  Properties option from the pop-up menu.
	
	9. Select the Transactions tab and then select either the "Required" or
	  "Requires New" button.
	
	10. From the Visual FoxPro Command window, run the following code:
	
	  OX=NEWOBJECT('SLOWDLL.MTDLLDemo')
	  ? OX.FOOT
	  RELEASE OX
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbCOMt kbMTS kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbVS600sp4fix kbVS600sp4 kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
