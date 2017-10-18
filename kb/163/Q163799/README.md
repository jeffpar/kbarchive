---
layout: page
title: "Q163799: PRB: Olegraph.scx Sample Fails if Graph 8 Is Installed"
permalink: kb/163/Q163799/
---

## Q163799: PRB: Olegraph.scx Sample Fails if Graph 8 Is Installed

	Article: Q163799
	Product(s): Microsoft FoxPro
	Version(s): 5.00 5.00a
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the Visual FoxPro Olegraph.scx sample (samples\solution\ole) after
	installing one of the Office 97 products, you receive the following error:
	
	  "OLE error code 0x8002005 type mismatch"
	
	CAUSE
	=====
	
	This error occurs because Visual FoxPro includes Microsoft Graph Version 5 with
	the product but Office 97 ships with Microsoft Graph Version 8.
	
	The Olegraph.scx sample in Visual FoxPro uses a graph function called AutoFormat.
	Graph 8 has no such function. Graph 8 uses a property called ChartType for
	setting or reading the type of graph you are using.
	
	RESOLUTION
	==========
	
	To set the type of graph in Graph 8, use the ChartType property. To fix the
	sample so it will run with Graph 8, you need to perform the following steps:
	
	1. Modify the Olegraph.scx form (located under samples\solution\ole).
	
	2. In the init of the form, change the line that reads:
	
	        THIS.OleBoundControl1.autoformat(11,1)
	
	  -to-
	
	        THIS.OleBoundControl1.ChartType = 60
	
	3. In the Optiongroup1 Click event, change the 3 lines that read:
	
	        THISFORM.OleBoundControl1.autoformat(11,1)
	        THISFORM.OleBoundControl1.autoformat(12,1)
	        THISFORM.OleBoundControl1.autoformat(14,7)
	
	  -to-
	
	        THISFORM.OleBoundControl1.ChartType = 60
	        THISFORM.OleBoundControl1.ChartType = 54
	        THISFORM.OleBoundControl1.ChartType = -4102
	
	4. Save the form as Olegraph8.scx and then run it.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	In the Command Window, enter the following command:
	
	     * Assumes that VFP is your default directory
	     DO FORM HOME()+"samples\solution\ole\Olegraph.scx"
	
	REFERENCES
	==========
	
	Microsoft Graph Visual Basic Help File (vbagrp8.hlp)
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Brian Combs, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.00 5.00a
	
	=============================================================================
	
