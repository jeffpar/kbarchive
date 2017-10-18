---
layout: page
title: "Q168054: PRB: &quot;Cannot activate OLE Server&quot; or &quot;Moniker cannot open file&quot;"
permalink: kb/168/Q168054/
---

## Q168054: PRB: &quot;Cannot activate OLE Server&quot; or &quot;Moniker cannot open file&quot;

	Article: Q168054
	Product(s): Microsoft FoxPro
	Version(s): 2.6a 3.0 3.0b 5.0 5.0a 6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	- Microsoft FoxPro for Windows, version 2.6a, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When double-clicking to edit an object stored in a General field, one of the
	following error messages is displayed:
	
	  "Cannot activate OLE Server"
	
	  -or-
	
	  "OLE error code 0x800401ea: Moniker cannot open file"
	
	CAUSE
	=====
	
	The linked file has been deleted, renamed, moved, or may be damaged.
	
	RESOLUTION
	==========
	
	If the file has been renamed or moved, open the general field, but do not
	double-click the OLE object. Select "Links" from the Edit menu, then click
	"Change Source" to point to another file or update the link.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table with a general field.
	
	2. Add a new record.
	
	3. In the command window issue the following command:
	
	        APPEND GENERAL <field> FROM "C:\Windows\Cars.bmp" LINK
	
	  -or-
	
	  Select Insert Object from the Edit menu. Click "Create from File," check the
	  Link box, and then click on the Browse button to find the file.
	
	4. Rename Cars.bmp to xxxxcars.bmp.
	
	5. Open the general field and double-click the image.
	
	NOTE: In step 5 above, once the file is renamed or deleted, FoxPro may select an
	adjacent file in the folder in which the original file was located, therefore it
	will not produce an error but will display the incorrect file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : 2.6a 3.0 3.0b 5.0 5.0a 6.0
	
	=============================================================================
	
