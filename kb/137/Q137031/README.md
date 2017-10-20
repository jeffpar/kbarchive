---
layout: page
title: "Q137031: PRB: OLE Servers Don't Unload When Last Object Set to Nothing"
permalink: /kb/137/Q137031/
---

## Q137031: PRB: OLE Servers Don't Unload When Last Object Set to Nothing

{% raw %}

	Article: Q137031
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
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
	
	An OLE Automation server created with Visual Basic fails to unload from memory
	when the last instance of the object is destroyed.
	
	CAUSE
	=====
	
	A Visual Basic client can destroy the last instance of a Visual Basic OLE server
	it created by:
	
	- Setting it to Nothing (the preferred method).
	
	- Shutting down by unloading the last form (acceptable, but not as good).
	
	- Ending the program by using the End statement (this is not recommended; it
	  can cause problems because the QueryUnload, Unload, and Terminate events
	  don't fire)
	
	If the OLE server has a non-visible form still loaded when the last instance is
	destroyed, the OLE server is not destroyed. This is usually handled in the
	Terminate event of the OLE server.
	
	RESOLUTION
	==========
	
	OLE servers are responsible for cleaning up any objects that they create or
	load. When an OLE server is unloaded, the Terminate event will be fired. This is
	where code should be located to unload any forms that the OLE server has in
	memory.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior in Visual Basic 4.0
	-----------------------------------------------
	
	1. Begin with a minimal OLE server and client application. For information on
	  how to do this, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q129801 How to Create and Use a Minimal OLE Automation Server
	
	2. Add a form (Form1) to the OLE server.
	
	3. Add a timer control (Timer1) to Form1.
	
	4. Set the following properties:
	
	  Object   Property    Value
	  --------------------------
	  Form1    Visible     False
	  Timer1   Enabled     True
	  Timer1   Internal    2000
	
	5. Add the following code to the Timer1_Timer event procedure:
	
	     Private Sub Timer1_Timer ()
	        Beep
	     End Sub
	
	6. Add the following code to the General Declarations section of Class1:
	
	     Dim frmX As New Form1
	
	7. Add the following line to the existing MyClass_Initialize event procedure:
	
	     Load frmX
	
	8. Start the OLE server program by pressing the F5 key.
	
	9. Minimize Visual Basic.
	
	10. Start a second instance of Visual Basic.
	
	11. Open (or create) the OLE client application described in Phase 2 of the
	  article referenced in step 1.
	
	12. Start the OLE client program running by pressing the F5 key.
	
	13. Click Form1 of the OLE client program. The OLE server is created and begins
	  beeping every two seconds.
	
	14. Close the OLE client application. Notice that the OLE server continues to
	  beep.
	
	Steps to Resolve the Failure to Unload
	--------------------------------------
	
	With the above OLE server add the following code to the MyClass_Terminate event:
	
	     Private Sub MyClass_Terminate ()
	        Unload frmX
	     End Sub
	
	When the OLE server is terminated, the Terminate event fires, and the hidden form
	is unloaded.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
