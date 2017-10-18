---
layout: page
title: "Q115445: X400: Network Name Field Refuses to Accept Character Input"
permalink: kb/115/Q115445/
---

## Q115445: X400: Network Name Field Refuses to Accept Character Input

	Article: Q115445
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Network Name field refuses to accept character input with code page settings
	other than 437.
	
	CAUSE
	=====
	
	The gateway supports code page 437 only.
	
	RESOLUTION
	==========
	
	Use a previous Admin file and consult the documentation on how to edit this file
	manually.
	
	STEPS TO REPRODUCE BEHAVIOR
	---------------------------
	
	On an MS-DOS machine:
	
	1. Set up with code page 850 and country code German:
	
	2. Run X400ADM.EXE.
	
	3. Select Address Conversion.
	
	4. In the Network Name field try to type any Ext. Char. from the German
	  keyboard.
	
	Notice that the field doesn't accept character input.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
