---
layout: page
title: "Q187670: HOWTO: Use RDO and ODBC Text Driver to Open a Delimited Text"
permalink: /kb/187/Q187670/
---

## Q187670: HOWTO: Use RDO and ODBC Text Driver to Open a Delimited Text

	Article: Q187670
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	RDO may be used with the ODBC Text driver to open and browse a delimited text
	file.
	
	MORE INFORMATION
	================
	
	The Text ODBC driver relies on the Microsoft Jet 32-bit IISAM driver
	(MSText35.dll) that provides the services required for accessing text files. You
	can either link/attach to a Microsoft Access database or directly open text
	files. Because RDO must use Jet to access the text file, you will incur the
	additional overhead associated with loading Jet.
	
	NOTE: This requires a Schema.ini file in the same path as the delimited text
	file. You must change the columns in the Schema.ini file to correspond to your
	delimited file. Also, you must change the path in the connect string to the
	correct path for your file.
	
	To create a schema.ini file, use a simple text editor such as Notepad. Below are
	the schema.ini entries for the SAMPLE2.TXT file listed at the bottom of this
	article:
	
	     [SAMPLE2.TXT]
	     ColNameHeader = False
	     Format = CSVDelimited
	     CharacterSet = ANSI
	     Col1=ProductID short
	     Col2=ProductName char width 30
	     Col3=QuantityPerUnit char width 30
	     Col4=UnitPrice currency
	     Col5=Discontinued bit
	
	For more information on Schema.ini, see the REFERENCES section of this article.
	
	Step-by-Step Example
	--------------------
	
	1. Open Visual Basic, and create a new Project. Form1 is created by default.
	
	2. Set a reference to Microsoft Remote Data Object 2.0 with the
	  Project-References menu selection.
	
	3. Paste the following code in the Form-Load event:
	
	        Dim cn As New RDO.rdoConnection
	        Dim en As RDO.rdoEnvironment
	        Dim rs As RDO.rdoResultset
	        Dim fld As RDO.rdoColumn
	
	        Set en = rdoEngine.rdoEnvironments(0)
	
	        With cn
	            .CursorDriver = rdUseOdbc
	            'The DBQ parameter below, is the path to your
	            'Comma Delimited file(s). You may open multiple files
	            'on the same connection in this path.
	            .Connect = "DRIVER={Microsoft Text Driver (*.txt;" & _
	                    " *.csv)};DBQ=E:\Samples\Text\CommaDelimited;"
	            .EstablishConnection rdDriverNoPrompt, False
	        End With
	
	        'Jet uses '.' internally as an identifier for table names,
	        'such as database.table. Jet eliminates ambiguity by mapping '#'
	        'as the delimiter for external files.
	        Set rs = cn.OpenResultset("select * from [sample2#txt]")
	
	        While Not rs.EOF
	            For Each fld In rs.rdoColumns
	                Debug.Print fld.Name & "=" & fld.Value
	            Next fld
	            rs.MoveNext
	        Wend
	
	NOTE: In the example above, DBQ is not a valid parameter of the RemoteData
	control or the rdoConnection object's Connect property. It is supported by the
	Microsoft Jet database engine, and not by the ODBC driver.
	
	You could copy and paste the following delimited file example into Notepad and
	save it as Sample2.txt. You could then modify the DBQ path, above, to point to
	the comma delimited file Sample2.txt.
	
	1,Chai,10 boxes x 20 bags,$18.00,False
	2,Chang,24 - 12 oz bottles,$19.00,False
	3,Aniseed Syrup,12 - 550 ml bottles,$10.00,False
	4,Chef Anton's Cajun Seasoning,48 - 6 oz jars,$22.00,False
	5,Chef Anton's Gumbo Mix,36 boxes,$21.35,True
	6,Grandma's Boysenberry Spread,12 - 8 oz jars,$25.00,False
	7,Uncle Bob's Organic Dried Pears,12 - 1 lb pkgs.,$30.00,False
	
	(This will give you seven records to test with in the sample code.)
	
	NOTE: Make sure when you paste it in Notepad that you do not leave any blank
	lines at the top of the file.
	
	You may choose an alternative to the comma delimiter by indicating the delimiter
	in the Schema.ini file e.g. Format = Delimited(*). You can use any character for
	the delimiter except the double (") quotation mark.
	
	This same technique can be applied to fixed-width files by indicating
	'FixedLength' for the Format, such as Format = FixedLength.
	
	REFERENCES
	
	"Working with Text Files", MSDN
	
	"Using DAO to Connect to ODBC Data Sources", MSDN.
	
	"RDO Compared to Microsoft Jet/DAO", MSDN.
	
	"Text Data Source Initialization Settings", MSDN.
	
	"External ISAM Driver Components", MSDN.
	
	"Understanding Schema.ini Files", MSDN.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q155512 : ACC: How to Create a Schema.ini File Programmatically.
	
	
	Additional query words: kbdse kbDSupport kbVBp500 kbvbp kbRDO kbODBC kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
