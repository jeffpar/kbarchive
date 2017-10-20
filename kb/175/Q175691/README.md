---
layout: page
title: "Q175691: BUG: VFP CDX with EMPTY Function Is Not Recognized in VB"
permalink: /kb/175/Q175691/
---

## Q175691: BUG: VFP CDX with EMPTY Function Is Not Recognized in VB

{% raw %}

	Article: Q175691
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	FoxPro indexes that contain the function EMPTY or ISBLANK will not be recognized
	in Visual Basic. Indexes with this function are recognized by Visual Basic 4.0.
	The following error will be generated under NT and Windows 2000:
	
	  An application error has occurred
	  and an application error log is being generated.
	
	  VB5.exe
	  Exception Access Violation (0xc0000005),Address .........
	
	Visual Basic is terminated by this error.
	
	In Windows 95 and Windows 98, no error is returned because the index is not seen.
	
	RESOLUTION
	==========
	
	Compare field to " " instead of using EMPTY. The same results are achieved.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Visual Basic project and choose DAO 3.5 under project references.
	
	2. In FoxPro 2.5, use the customer table and set up some indexes on cno, state
	  and ono. The CDX file with the same name as the table file will contain the
	  indexes.
	
	3. Place 2 CommandButtons on the form, and paste in the following code:
	
	        Option Explicit
	
	        Dim FoxDataDB As Database
	        Dim RS As Recordset
	        Dim myidx As Index
	
	        Private Sub Command1_Click()
	          RS.Close
	          FoxDataDB.Close
	          Set RS = Nothing
	          Set FoxDataDB = Nothing
	          Unload Me
	        End Sub
	
	        Private Sub Command2_Click()
	           For Each myidx In FoxDataDB.TableDefs("customer").Indexes
	              Debug.Print myidx.Name
	              RS.Index = myidx.Name
	           Next
	        End Sub
	
	        Private Sub Form_Load()
	
	        Set FoxDataDB = Workspaces(0).OpenDatabase( _
	                           "d:\fpw26\tutorial", _
	                           False, False, "FoxPro 2.5;")
	           Set RS = FoxDataDB.OpenRecordset("customer", dbOpenTable)
	
	        End Sub
	
	4. Run the code above and note that the index names are printed.
	
	5. Delete some phone numbers from the database above and add the following index
	  by choosing Database Setup from the menu in FoxPro:
	
	  IIF(EMPTY(phone), state, phone)
	
	6. Run the code above and note that you get the error above under NT and Windows
	  2000. Under Windows 95 and Windows 98, the index will not be recognized.
	
	7. Remove the phone index, and the program will run successfully if the index
	  has not become corrupted.
	
	Additional query words: Dr. Watson function complex immediate inline kbVBp500bug kbVBp kbWinOS98 kbDSupport kbdse kbVBp600 kbDAO350 kbVFP250
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
