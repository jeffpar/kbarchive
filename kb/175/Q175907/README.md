---
layout: page
title: "Q175907: FIX: Hide Event Doesn't Fire Correctly in Internet Explorer 4.0"
permalink: kb/175/Q175907/
---

## Q175907: FIX: Hide Event Doesn't Fire Correctly in Internet Explorer 4.0

	Article: Q175907
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Internet Explorer (Programming) version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Code placed in the Hide event of a UserDocument or a UserControl does not
	execute under Internet Explorer 4.0. The Hide event does not fire correctly for
	the following:
	
	- ActiveX DLL UserDocument with Apartment-threading
	
	- ActiveX DLL UserDocument with Single-threading and absence of Active Desktop
	
	- ActiveX Control OCX with Apartment-threading
	
	- ActiveX Control OCX with Single-threading and absence of Active Desktop
	
	CAUSE
	=====
	
	The Hide event is not getting fired for UserControl and UserDocument objects
	because these objects are being released before receiving the Hide event.
	Internet Explorer 3.0 does not have this problem because it maintains a
	four-page cache. Internet Explorer 4.0 does not have a four- page cache.
	
	RESOLUTION
	==========
	
	Add the following code to your UserDocument or UserControl module. The self-
	reference will keep your object in memory long enough to receive the hide event,
	at which point you can free the object reference:
	
	1. To the General/Declarations section of your code module, add:
	
	       Private objMe As Object
	
	2. To the UserDocument_Show or UserControl_Show event, add:
	
	       Set objMe = Me
	
	3. To the UserDocument_Hide or UserControl_Hide event, add:
	
	       Set objMe = Nothing
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX DLL project.
	
	2. From the Project properties, General, change threading model to be "Apartment
	  Threaded."
	
	3. Create a procedure to write debug messages to a file in your project
	  directory. Cut and paste the following code into your UserDocument:
	
	        Sub OutputDebug(iStr As String)
	            Dim H As Integer
	
	            H = FreeFile
	            Open App.Path + "\" + App.EXEName + "_Debug.TXT" For Append As #H
	            Print #H, iStr
	            Close #H
	        End Sub
	
	4. Add the following code to the Show and Hide events of your UserDocument:
	
	        Private Sub UserDocument_Hide()
	            OutputDebug "UserDocument_Hide"
	        End Sub
	
	        Private Sub UserDocument_Show()
	            OutputDebug "UserDocument_Show"
	        End Sub
	
	5. Save your project.
	
	6. Compile the ActiveX DLL. Go into the Project Properties, Component and set
	  Binary Compatibility to your ActiveX DLL.
	
	7. Save your project again.
	
	8. From Internet Explorer 4.0, navigate to .VBD file for your project. Wait for
	  your UserDocument to display.
	
	9. From Internet Explorer 4.0, navigate to a new location such as
	  www.microsoft.com.
	
	10. Exit Internet Explorer 4.0.
	
	11. Examine the PROJNAME_debug.txt file in your project directory. Note that
	  there is no Hide event message in the file. This indicates that the Hide
	  event was never fired.
	
	Additional query words: VBD Hide OCX KBiNETdEV kbVBp500bug kbIE400 kbdsi kbVBp600fix
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbIEsearch kbAudDeveloper kbZNotKeyword6 kbSDKIESearch kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3 kbSDKIE400
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
