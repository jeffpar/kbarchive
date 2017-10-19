---
layout: page
title: "Q259547: PRB: BROWSE LAST Affected by SET COMPATIBLE"
permalink: /kb/259/Q259547/
---

## Q259547: PRB: BROWSE LAST Affected by SET COMPATIBLE

	Article: Q259547
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport
	Last Modified: 18-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the SET COMPATIBLE ON command, the BROWSE LAST (or BROWSE NOINIT)
	command does not show the previous settings of the Browse window.
	
	RESOLUTION
	==========
	
	Use the SET COMPATIBLE OFF command if the BROWSE LAST command behavior is more
	important than the other features affected by the SET COMPATIBLE command. The
	SET COMPATIBLE command is also controlled by Tools:Options:General:dBase
	compatibility.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Type the following code into the Command window:
	
	  USE HOME() + "labels"
	  BROWSE
	  *!* Move the first column to the end and close the window
	  BROWSE LAST
	  *!* Note that the columns are as you left them
	  SET COMPATIBLE ON
	  BROWSE LAST
	
	Note that the columns are now in their original order.
	
	REFERENCES
	==========
	
	For more information about the BROWSE and SET COMPATIBLE commands, please see
	the Visual FoxPro Help files.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
