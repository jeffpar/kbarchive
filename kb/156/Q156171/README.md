---
layout: page
title: "Q156171: DOCERR: Help Topic &quot;Switching Views&quot; Is Incorrect in VFP 3.0"
permalink: /kb/156/Q156171/
---

## Q156171: DOCERR: Help Topic &quot;Switching Views&quot; Is Incorrect in VFP 3.0

{% raw %}

	Article: Q156171
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The example in the Visual FoxPro Help under "Switching Between Local and Remote
	Data at Run Time" has an error. Step 7 states the following incorrectly:
	
	  In the Init event code for the data environment, call the data environment's
	  OpenTables method:
	
	        THIS.OpenTables
	
	MORE INFORMATION
	================
	
	For the example to work correctly, step 7 should be changed to the following:
	
	  In the Load event code for the form, call the data environment's OpenTables
	  method:
	
	        THISFORM.Dataenvironment.OpenTables
	
	You must also change step 8, which states the following incorrectly:
	
	  In the Init event code for the cursor, set the CursorSource property to the
	  appropriate view, based on the setting of the user-defined form property.
	
	  For example, the following code checks the form property and accordingly sets
	  the CursorSource to a remote or local view:
	
	        IF THISFORM.UseRemote = .T.
	           THIS.CursorSource = RemoteView
	        ELSE
	           THIS.CursorSource = LocalView
	        ENDIF
	
	Change step 8 to the following:
	
	  In the OpenTables method code for the data environment, set the CursorSource
	  property of the cursor to the appropriate view, based on the setting of the
	  user-defined form property.
	
	  For example, the following code checks the form property and accordingly sets
	  the CursorSource to a remote or local view:
	
	        IF THISFORM.UseRemote = .T.
	           THIS.Cursor1.CursorSource = RemoteView
	        ELSE
	           THIS.Cursor1.CursorSource = LocalView
	        ENDIF
	
	NOTE: The topic "Switching Between Local and Remote Data at Run Time" does not
	appear in the Visual FoxPro 5.0 Help.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
