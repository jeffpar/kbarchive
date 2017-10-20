---
layout: page
title: "Q194124: PRB: Excel Values Returned as NULL Using DAO OpenRecordset"
permalink: /kb/194/Q194124/
---

## Q194124: PRB: Excel Values Returned as NULL Using DAO OpenRecordset

{% raw %}

	Article: Q194124
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When connecting to an Excel Spreadsheet using the DAO OpenRecordset method, some
	values in an Excel column may be returned as Null when the underlying value is
	not a Null. This typically occurs when numeric and text datatypes are intermixed
	within the same Excel column.
	
	CAUSE
	=====
	
	This problem is caused by a limitation of the Excel ISAM driver in that once it
	determines the datatype of an Excel column, it will return a Null for any value
	that is not of the datatype the ISAM driver has defaulted to for that Excel
	column. The Excel ISAM driver determines the datatype of an Excel column by
	examining the actual values in the first few rows and then chooses a datatype
	that represents the majority of the values in its sampling.
	
	RESOLUTION
	==========
	
	There are two workarounds for this behavior:
	
	1. Insure that the data in Excel is entered as text. Just reformatting the Excel
	  column to Text will not accomplish this. You must re-enter the existing
	  values after reformatting the Excel column. In Excel, you can use F5 to
	  re-enter existing values in the selected cell.
	
	2. You can add the option IMEX=1; to the Excel connect string in the
	  OpenDatabase method. For example:
	
	        Set Db = OpenDatabase("C:\Temp\Book1.xls", _
	              False, True, "Excel 8.0; HDR=NO; IMEX=1;")
	
	  NOTE: Setting IMEX=1 tells the driver to use Import mode. In this state, the
	  registry setting ImportMixedTypes=Text will be noticed. This forces mixed
	  data to be converted to text. For this to work reliably, you may also have to
	  modify the registry setting, TypeGuessRows=8. The ISAM driver by default
	  looks at the first eight rows and from that sampling determines the datatype.
	  If this eight row sampling is all numeric, then setting IMEX=1 will not
	  convert the default datatype to Text; it will remain numeric.
	
	  You must be careful that IMEX=1 not be used indiscriminately. This is IMPORT
	  mode, so the results may be unpredictable if you try to do appends or updates
	  of data in this mode.
	
	  The possible settings of IMEX are:
	
	       0 is Export mode
	       1 is Import mode
	       2 is Linked mode (full update capabilities)
	
	  The registry key where the settings described above are located is:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Jet\3.5\Engines\Excel
	
	  See the REFERENCES section of this article for information on when the Excel
	  spreadsheet has text column headers with numeric data.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To duplicate this problem, first create an Excel Workbook with a default Sheet1
	spreadsheet. In the first column of Sheet1, enter the following values - 123,
	aaa, 456, bbb, 789. Save this Workbook in your C:\Temp directory, and name it
	Book1.XLS.
	
	In Visual Basic, create a new Standard EXE project and follow these steps:
	
	1. Make a reference to Microsoft DAO 3.5 Object Library. In Visual Basic 6.0,
	  this will be Microsoft DAO 3.51 Object Library.
	
	2. Add a CommandButton to the new Form.
	
	3. Place the following code in the Form's General Declarations section:
	
	        Dim Db As Database
	        Dim Rs As Recordset
	
	        Private Sub Command1_Click()
	            Set Rs = Db.OpenRecordset("Sheet1$")
	            'This will print the spreadsheet Text values as Nulls.
	
	            Do While Not Rs.EOF
	                Debug.Print Rs(0)
	                Rs.MoveNext
	            Loop
	
	        End Sub
	
	        Private Sub Form_Load()
	            'HDR refers to the Excel header row.
	        Set Db = OpenDatabase("C:\Temp\Book1.xls", _
	                 False, True, "Excel 8.0; HDR=NO;")
	
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	            Db.Close
	            Set Db = Nothing
	
	        End Sub
	
	  Run the Project by pressing the F5 key and note that in the Debug window the
	  text values are printed as Null. If the majority of the values in the Excel
	  Spreadsheet were text, then the result from the code above would be reversed.
	  That is, the numeric values would come back as Nulls.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	Q190195 : HOWTO: Extract Information From Excel Sheet with DAO
	
	
	Additional query words: kbDSupport kbdse spreadsheet workbook kbDAO350 kbDAO300 kbDAO250 kbIISAM kbExceL kbVBp400 kbVBp500 kbVBp600 kbVBp kbRegistry
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
