---
layout: page
title: "Q131346: HOWTO: Hide and Restore (Unhide) System Toolbars"
permalink: kb/131/Q131346/
---

## Q131346: HOWTO: Hide and Restore (Unhide) System Toolbars

	Article: Q131346
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbDesigner kbvfp300 kbvfp500 kbvfp600
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By using the two short programs (TBSAVE.PRG and TBREST.PRG) listed in this
	article, you can hide and restore system toolbars.
	
	- TBSAVE.PRG hides the system toolbars. It first saves the status of all known
	  Visual FoxPro toolbars to an array (gaTbsets). The array (gaTbsets) should be
	  scoped to your application, although it is automatically redimensioned.
	
	- TBREST.PRG restores (unhides) the system toolbars that were hidden by the
	  TBSAVE.PRG program. It uses the gaTbsets array created by the TBSAVE.PRG
	  program to restore the hidden toolbars.
	
	MORE INFORMATION
	================
	
	For more information about how to include Report toolbars in a distributed
	application, please see the following article in the Microsoft Knowledge Base:
	
	  Q138969 How to Include Report Toolbars in a Distributed Application
	
	Step-by-Step Example
	--------------------
	
	1. From the File menu, choose New. Select the Program option, and choose the New
	  File button to bring up the Modify Program window.
	
	2. Enter the following source code:
	
	     ****************************************************
	     * PROGRAM NAME: TBSAVE.PRG                         *
	     *--------------------------------------------------*
	     * This routine saves the status of the system      *
	     * toolbars in the global array gaTbsets. Call the  *
	     * procedure TBREST to restore the system toolbars  *
	     * to their saved state                             *
	     ****************************************************
	     PROCEDURE TBSAVE
	       PUBLIC gaTbsets
	       PRIVATE lnCnt,lnTB
	       lnTB=11
	
	       DIMENSION gaTbsets[lnTB,2]
	
	       gaTbsets[1,1]="Color Palette"
	       gaTbsets[2,1]="Database Designer"
	       gaTbsets[3,1]="Form Controls"
	       gaTbsets[4,1]="Form Designer"
	       gaTbsets[5,1]="Layout"
	       gaTbsets[6,1]="Print Preview"
	       gaTbsets[7,1]="Query Designer"
	       gaTbsets[8,1]="Report Controls"
	       gaTbsets[9,1]="Report Designer"
	       gaTbsets[10,1]="Standard"
	       gaTbsets[11,1]="View Designer"
	
	       FOR lnCnt=1 TO lnTB
	         IF WEXIST(gaTbsets(lnCnt,1))
	           gaTbsets(lnCnt,2)=.T.
	           Hide Window (gaTbsets(lnCnt,1))
	         ELSE
	           gaTbsets(lnCnt,2)=.F.
	         ENDIF
	       ENDFOR
	
	     RETURN
	
	     *******************************************************
	     * PROGRAM NAME: TBREST.PRG                            *
	     *-----------------------------------------------------*
	     * This routine restores the system toolbars to        *
	     * their saved state as defined in the array gaTbsets. *
	     * Save this as TBREST.PRG                             *
	     *******************************************************
	     PROCEDURE TBREST
	
	       PRIVATE lnCnt
	
	       FOR lnCnt=1 TO ALEN(gaTbsets,1)
	         IF gaTbsets(lnCnt,2)
	           Show WINDOW (gaTbsets(lnCnt,1))
	         ENDIF
	       ENDFOR
	     RETURN
	
	3. Save the Program, and run it.
	
	When you run TBSAVE, all toolbars are hidden. You need to run TBREST to restore
	(unhide) them to make them visible.
	
	Additional query words: toolbar tool bar standard hide
	
	======================================================================
	Keywords          : kbcode kbDesigner kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
