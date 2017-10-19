---
layout: page
title: "Q172120: BUG: Pressing TAB Key Does Not Move Focus on SSTab Control"
permalink: /kb/172/Q172120/
---

## Q172120: BUG: Pressing TAB Key Does Not Move Focus on SSTab Control

	Article: Q172120
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to use the TAB key to navigate through controls on a Sheridan
	Tab Control, the cursor appears to "stick" in one control. This occurs when the
	SetFocus method is used in the Tab Control's Click or GotFocus event to shift
	focus to one of the constituent controls. Download the most recent version of
	the Tab Control from the address listed below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual Basic version
	4.0. Microsoft is researching this problem and will post new information here as
	it becomes available.
	
	This problem has been corrected in version 4.01 (or greater) of the SSTab
	control. Please note that the following file is for Visual Basic 4.0 32-bit
	only. TABCTL32.ZIP (version 4.02)is available at:
	
	  http://www.shersoft.com/download/miscfile.htm
	
	MORE INFORMATION
	================
	
	This occurs on Win95, NT 4.0, and Windows 2000 but does not occur in NT 3.51 or
	Visual Basic 16-bit.
	
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new Project.
	
	2. Add an SSTAB control to the default form
	
	3. Adjust the following properties on SSTAB1:
	
	     TABSTOP = False
	
	4. Add two Textboxes to each page of the Tab control (for a total of six).
	
	5. In the SSTAB's CLICK or GOTFOCUS method, add the following code:
	
	        On Error Resume Next
	        IF SSTAB1.TAB = 0 THEN
	           Text1.setfocus
	        ELSEIF SSTAB1.TAB = 1 THEN
	           Text3.SetFocus
	        ELSE
	           Text5.SetFocus
	        END IF
	
	6. Save the project and run the form.
	
	7. When the form displays, the focus is on Tab0. Press the TAB key several times
	  and notice that tabbing occurs normally.
	
	8. Now click on Tab1 (the 2nd page), and note that the I-Beam is in the first
	  Textbox (Text3). Press the TAB key repeatedly and note that the focus does
	  not leave the Textbox.
	
	Additional query words: kbVBp400BUG kbVBp kbDSupport KBDSE
	
	======================================================================
	Keywords          : kbVBp400 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	
