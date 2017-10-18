---
layout: page
title: "Q179294: FIX: Record In Use Message Editing in Browse and Using Find"
permalink: kb/179/Q179294/
---

## Q179294: FIX: Record In Use Message Editing in Browse and Using Find

	Article: Q179294
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp kbvfp600fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you Browse a table and use the Find dialog box to locate records for
	editing, the following error message appears when you are editing records:
	
	  Record is in use by another user.
	
	CAUSE
	=====
	
	This behavior occurs under the three following conditions:
	
	- A table has been opened for browsing with buffering enabled.
	
	  -or-
	
	- The Find dialog box (CTRL-F) is used to locate records for editing.
	
	  -or-
	
	- Successive records are found and then edited.
	
	RESOLUTION
	==========
	
	Here are three workarounds for this behavior:
	
	- Move the record pointer off an edited record before finding the next record.
	
	  -or-
	
	- Use the default buffering mode.
	
	  -or-
	
	- Use a SEEK or LOCATE command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	This behavior occurs after buffering has been enabled. After the "Record is in
	use by another user" message appears, subsequent attempts to edit the record
	continue to fail regardless of the buffering mode until the table is closed and
	reopened. This behavior does not occur if the record pointer is moved off the
	edited record (via the keyboard or mouse) before finding the next record.
	Likewise, a record where the error has occurred can be successfully edited if
	you move the record pointer off and back onto the record.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the FoxPro Command window, type the following commands:
	
	        USE HOME()+"\samples\data\customer"
	        SET MULTILOCKS ON
	        =CURSORSETPROP('BUFFERING',2,'customer')
	        BROWSE
	
	  a. Press CTRL+F to open the Find dialog box.
	
	  b. Enter ANATR, and then click Find Next. Press escape and edit the record.
	
	  c. Press CTRL+F to open the Find dialog box.
	
	  d. Enter ANTON, and then click Find Next. Press escape and edit the record.
	
	     When the second record is edited, the following error message appears:
	
	  Record is in use by another user.
	
	2. Click the OK button and then press the escape key to return to the FoxPro
	  Command window.
	
	3. From the Command window type the following commands:
	
	        =CURSORSETPROP('BUFFERING',1,'customer')
	        BROWSE
	
	  Attempt to edit the record.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbvfp600fix 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
