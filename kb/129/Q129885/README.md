---
layout: page
title: "Q129885: FIX: OLE Server Terminate Not Fired If Client Uses 'End'"
permalink: /kb/129/Q129885/
---

## Q129885: FIX: OLE Server Terminate Not Fired If Client Uses 'End'

	Article: Q129885
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbole kbVBp kbVBp400bug kbOSWin98fix kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An OLE Server with loaded forms does not unload when the client program
	terminates by using the End statement, even if the OLE server is programmed to
	unload its forms in the Terminate event.
	
	CAUSE
	=====
	
	When you use End to shut down an object application, the Terminate events of
	objects are NOT executed. (This is analogous to forms -- if you use End, the
	QueryUnload, Unload, and Terminate events of forms are NOT executed.)
	
	RESOLUTION
	==========
	
	This behavior occurs under Microsoft Windows 95, Microsoft Windows version 3.X,
	and Microsoft Windows for Workgroups version 3.11. It does not occur under
	Microsoft Windows 98 or Microsoft Windows NT.
	
	Good programming uses the Terminate event of a class module to clean up and
	release dependent object references. This is true for client applications that
	create OLE objects as well. The Terminate, QueryUnload, or Unload events
	gracefully close down any objects or forms that were created or loaded during
	the session.
	
	The End statement is convenient, but it does NOT go through the complete sequence
	of cleaning up after your application. You should use it cautiously and
	sparingly when developing applications.
	
	A Visual Basic client can destroy the last instance of an OLE Server it creates
	by:
	
	- Setting it to Nothing (the preferred method).
	
	- Shutting down by unloading the last form (acceptable, but not as desirable).
	
	- Ending the program by executing the End statement (this can cause problems).
	
	STATUS
	======
	
	This problem has been fixed in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a minimal OLE server and client application. If you need more
	  information on how to do this, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q129801 How to Create and Use a Minimal OLE Automation Server
	
	2. In the OLE server application, add the following code to the Class1_Terminate
	  event:
	
	        Sub Class1_Terminate ()
	           MsgBox "I exited normally."
	        End Sub
	
	3. Run the OLE server and minimize Visual Basic.
	
	4. Load or create the minimal OLE Client. If you need more information on how to
	  do this, please see the article mentioned above.
	
	5. Add a CommandButton (Command1) to Form1.
	
	6. Add the following code to the Command1_Click event:
	
	        Sub Command1_Click ()
	           Dim X As Object
	           Set X = CreateObject("Project1.Class1")
	           End
	        End Sub
	
	7. Start the program by choosing Start from the Run menu or by pressing the F5
	  key.
	
	8. Click the Command1 button. The OLE server is created, and the End statement
	  executes. When this happens, the Terminate event is NOT fired on the OLE
	  server object.
	
	Example Resolution for Failure to Fire Terminate
	------------------------------------------------
	
	Add the following statement before the End statement in step 6:
	
	     Set X = Nothing
	
	This explicitly unloads the OLE server, which fires the correct Terminate event.
	While the End statement is still not optimal, it will no longer cause problems
	with this OLE server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbVBp kbVBp400bug kbOSWin98fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
