---
layout: page
title: "Q178051: FIX: Dialog Box Appears Many Times When Changing Alias Property"
permalink: /kb/178/Q178051/
---

## Q178051: FIX: Dialog Box Appears Many Times When Changing Alias Property

	Article: Q178051
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the Alias property of a cursor in the Data Environment of a
	report or form that was created with the Quick Report or Quick Form command, a
	dialog box appears many times with the following:
	
	  Outstanding references to <old alias name> exist.
	  Would you like them automatically changed to <new alias name>.
	
	  <Yes> <No> <Cancel>
	
	Unless the dialog box is moved, it may appear that the command buttons are not
	functioning since multiple dialog boxes appear one on top of the other.
	
	RESOLUTION
	==========
	
	Continue to click the command button until the dialog box closes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The problem occurs in both forms and reports, but the dialog box appears more
	times in reports. The instructions below are for reproducing the problem in a
	report. The steps for reproducing the behavior in a form are basically the
	same.
	
	1. Run the following lines of code from the Visual FoxPro Command window to open
	  a table and create a new report:
	
	        USE HOME()+"samples\data\employee"
	        CREATE REPORT
	
	2. From the Report menu, select the Quick Report command. After verifying that
	  the Add alias and Add table to data environment check boxes are selected,
	  click OK.
	
	3. Open the Data Environment for the report. To do this, select Data Environment
	  from the View menu or right-click the report and select Data Environment.
	
	4. In the Data Environment, select the employee table. Right-click the table and
	  select Properties.
	
	5. The Alias property should be selected when the Properties sheet appears, with
	  Employee as the value. Change the Alias property to TEST or anything else
	  reasonable and press Enter.
	
	6. The dialog box described above in the SYMPTOMS section should appear. Click
	  the title bar and move it. Another copy of the title bar should be visible
	  underneath the first copy. Click Cancel in the active copy of the dialog box.
	  Repeat the selection until the dialog box closes. The number of times the
	  dialog box appears varies. Similar behavior happens if either Yes or No is
	  clicked instead of Cancel.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
