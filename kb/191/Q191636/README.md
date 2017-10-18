---
layout: page
title: "Q191636: FIX: Access Violation or Page Fault with Multiple Toolbars"
permalink: kb/191/Q191636/
---

## Q191636: FIX: Access Violation or Page Fault with Multiple Toolbars

	Article: Q191636
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running code that instantiates, docks, and releases multiple toolbars, you
	may see an error similar to the following under Windows NT:
	
	  Exception: access violation (0xc0000005), Address: 0x77f7d514
	
	The following error occurs under Windows 95:
	
	  VFP caused an invalid page fault in module KERNEL32.DLL at 0137:bff78053
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        #DEFINE    ARRAYSIZE       14
	        DIMENSION oRef[ARRAYSIZE]
	        FOR lni = 1 TO ARRAYSIZE
	           oRef[lni] = CREATEOBJECT("Toolbar")
	           oRef[lni].SHOW
	           oRef[lni].DOCK(1)
	           WAIT WINDOW "Creating "+ STR(lni) NOWA
	        ENDFOR
	        WAIT CLEAR
	        FOR lni = 1 TO ARRAYSIZE
	           WAIT WINDOW "Releasing "+ STR(lni) NOWA
	           oRef[lni] = .NULL. && Use this in VFP 5, 3.0b
	        ENDFOR
	        WAIT CLEAR
	
	2. Under Windows NT, you see an error like the following:
	
	  Exception: access violation (0xc0000005), Address: 0x77f7d514
	
	  Under Windows 95, you will see an error like the following:
	
	  VFP caused an invalid page fault in module KERNEL32.DLL at 0137:bff78053
	
	NOTE: It may take multiple runs of the preceding program before you see the error
	occur in Windows 95.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp300bbug kbVFp500abug kbVFp600fix kbXBase kbfvp600fix
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
