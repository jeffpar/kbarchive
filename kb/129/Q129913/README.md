---
layout: page
title: "Q129913: FIX: Browse Key Record Pointer Moves Incorrectly"
permalink: /kb/129/Q129913/
---

## Q129913: FIX: Browse Key Record Pointer Moves Incorrectly

	Article: Q129913
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a; MS-DOS:2.6a; UNIX:2.6; WINDOWS:2.6a,3.0,3.0b
	Operating System(s): 
	Keyword(s): kbOSUNIX kbvfp kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft FoxPro for Windows, version 2.6a 
	- Microsoft FoxPro for MS-DOS, version 2.6a 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Record Pointer moves to the last record in a Browse window when the Browse
	window is initially activated. The Record Pointer moves to the last record even
	if the GO TOP command is issued before or after the Browse window is activated.
	This situation occurs if both of the following conditions are true:
	
	- The Table being browsed is indexed in Descending Order.
	
	- The Browse is activated using the KEY clause with the Browse command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. The problem has been fixed in Visual FoxPro 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open the Customer table in the Tutorial directory under the Main FoxPro
	  directory and Index it using this code:
	
	     USE FoxPro\Tutorial\Customer.dbf
	
	     && For FoxPro v2.6 for UNIX use the following command
	     && USE \usr\FoxPro\tutorial\customer.dbf
	
	     INDEX ON State TAG State DESCENDING
	
	2. Issue this command:
	
	     BROWSE KEY "CA"
	
	3. Close the Browse window, and issue these commands:
	
	     GO TOP
	     BROWSE KEY "CA"
	
	4. With the Browse window open, issue "GO TOP" command from the Command window,
	  and then re-select the Browse window.
	
	Additional query words: 2.60 2.60a 3.00 3.00b
	
	======================================================================
	Keywords          : kbOSUNIX kbvfp kbvfp500fix kbbuglist kbfixlist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260a kbVFP300 kbVFP300b
	Version           : MACINTOSH:2.6a; MS-DOS:2.6a; UNIX:2.6; WINDOWS:2.6a,3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
