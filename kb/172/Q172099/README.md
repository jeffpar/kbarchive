---
layout: page
title: "Q172099: PRB: T-SQL - Running Remote and Local SQL Debugging"
permalink: kb/172/Q172099/
---

## Q172099: PRB: T-SQL - Running Remote and Local SQL Debugging

	Article: Q172099
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0,97
	Operating System(s): 
	Keyword(s): kbAPI kbRegistry kbVBp kbVBp500 kbVBp600 kbVS97 kbGrpDSVBDB _IK
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install both SQL Server and Visual Basic Enterprise Edition on your
	local computer, you can perform local SQL debugging. When you run the local SQL
	debugger after remote debugging (Visual Basic and SQL Server reside on two
	different computers), the T-SQL debugger starts to skip breakpoints that are set
	in the SQL stored procedure with the following error message:
	
	  "The query could not be debugged due to a problem coordinating events with
	  the server. Check the server and client log to find the exact cause, fix the
	  problem and try again."
	
	The Event Viewer application log on the server reveals the following error
	message with a source of MSDEVSDI:
	
	  "CreateDispatch failed (Class not registered). Check to make sure Automation
	  manager is running on debugger machine."
	
	CAUSE
	=====
	
	When you install the T-SQL Debugger client-side component, Visual Basic creates
	several registry keys for VBSDISERVR.SDIEVENT under HKEY_CLASSES_ROOT in the
	registry. The LocalServer32 key for VBSDISERVR.SDIEVENT's CLSID is one of the
	keys that local SQL debugging uses. When you perform remote debugging from
	another computer, this key is deleted, and some other keys for inprocServer are
	created. If you perform local SQL debugging after a remote SQL debugging session
	has been performed, Automation Manager cannot find the LocalServer32 key in the
	registry, which results in the above-mentioned error message.
	
	RESOLUTION
	==========
	
	To temporarily work around this problem, you can use Regedit.exe to add the
	LocalServer32 key manually to enable the next local SQL debugging instance;
	however, this key is deleted again after another remote SQL debugging.
	
	Steps to Add the LocalServer32 Key:
	-----------------------------------
	
	1. From the Start menu, click Run, and type "regedit.exe" (without the quotation
	  marks) to start Registry Editor.
	
	2. Select the following key:
	
	  HKEY_CLASSES_ROOT\CLSID\{124765AA-7866-11CF-BF3B-00A0D10003FA}\
	
	3. On the Edit menu, click Add Key, and type "LocalServer32" (without the
	  quotation marks) in the Key Name box.
	
	4. Click to select the new LocalServer32 key in the right pane. On the Edit
	  menu, click Modify, and type the following value for the LocalServer32 key:
	
	  In Visual Basic 5.0:
	
	  "C:\Program Files\DevStudio\VB\Tsql\Vbsdicli.exe" (without the quotation
	  marks)
	
	  In Visual Basic 6.0:
	
	  "C:\Program Files\Microsoft Visual Studio\VB98\Tsql\Vbsdicli.exe" (without
	  the quotation marks)
	
	  NOTE: Make sure that you type the appropriate path for your Vbsdicli.exe file.
	
	You can also add this registry key in Visual Basic code by calling the Registry
	application programming interface (API). For additional information on how to
	implement this, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q145679 HOWTO: Use the Registry API to Save and Retrieve Setting
	
	MORE INFORMATION
	================
	
	This problem only occurs with local debugging; it does not occur during remote
	debugging.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbRegistry kbVBp kbVBp500 kbVBp600 kbVS97 kbGrpDSVBDB _IK 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0,97
	Issue type        : kbprb
	
	=============================================================================
	
