---
layout: page
title: "Q142756: WD97: How to Design and Set Up Mail Merge Data Sources"
permalink: /kb/142/Q142756/
---

## Q142756: WD97: How to Design and Set Up Mail Merge Data Sources

	Article: Q142756
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta winword word97 kbmergekbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes the acceptable format for a mail merge data source along
	with suggestions and questions you should ask yourself as you create a data
	source.
	
	The easiest data source format to work with is a Word table; however, you can use
	any database-like format such as a text file in which fields are separated by
	commas or tabs, and records are separated by paragraph marks. For details on
	using a Word table as the data source, see the "Organizing Data in Tables or
	Paragraphs" section later in this article.
	
	In a data source, each category of information, such as "last name," is called a
	"field." The set of fields that make up information about one person is called a
	record.
	
	MORE INFORMATION
	================
	
	How to Plan and Organize Your Data Source
	-----------------------------------------
	
	Before creating a data source, decide what information you want to include and
	how you want to use that information, and then design the database. In the long
	run, this will save you time and work. Ask yourself the following questions as
	you prepare your data source.
	
	  Q. Will some records have more information than others?
	
	  A. Some of your data records may have more information than other records. For
	  example, some entries may have a business name, a department title, and up to
	  three lines for the address. Other entries may have only a name, a one-line
	  street address, and a third line with the city, state, and ZIP code. In the
	  data source, however, each data record must have the same number of data
	  fields. Design the data source so that it has enough data fields to
	  correspond to the record with the most fields. You do not need to fill in
	  every field in the data record; you can leave some fields blank. Word will
	  automatically suppress blank records.
	
	  Q. Do you plan to sort the data?
	
	  A. If you intend to sort your data, you need to arrange it so that you can
	  sort the data based on some criteria. For example, the city, state, and ZIP
	  code are usually printed on the same line of a mailing label, so you might
	  want to include all of this information in the same field. If you do this,
	  you will not be able to sort your records based on the state or the ZIP code.
	  In this case, you should separate each piece of information into a separate
	  field. The same is true if you want to sort your data by the addressees' last
	  names. In this case, you need to separate the last names and the first names
	  into separate fields.
	
	  Q. Do you want to use a POSTNET bar code?
	
	  A. To speed mail delivery in the United States, you can print a POSTNET bar
	  code on mailing labels and envelopes. To use the bar code, both the
	  addressee's ZIP code and the delivery address (street name and number or post
	  office box) must be in their own data fields, separate from all other parts
	  of the address.
	
	  Q. Will you use information in a particular field in different ways?
	
	  A. In a form letter, the first line of the inside address usually contains a
	  title and the recipient's complete name, for example, Mr. Gerard LaSalle. The
	  salutation, on the other hand, may contain only the title and last name (Dear
	  Mr. LaSalle) or only the first name (Dear Gerald). If you place the title,
	  first name, and last name in separate fields, you can use the same field to
	  print the last name in both the address and the salutation. Alternatively,
	  you can use one field for the complete title and name in the inside address,
	  and a second field for the title and last name in the salutation.
	
	  Q. Will you use the data source for several merge documents?
	
	  A. You can merge a single data source with any type and number of main
	  documents. In setting up a data source for printing form letters, plan the
	  addressee information so that you can use the same data source to print the
	  addresses on mailing labels or envelopes.
	
	  Q. How many fields (pieces of information) will you have for each record (the
	  collection of the pieces of information)?
	
	  A. If you have a few pieces of information for each record, you can use the
	  Mail Merge Helper (Tools menu) in Word. In Word 97 for Windows, there is a
	  limitation of 63 fields in the Mail Merge Helper. If your number of fields
	  will exceed this value, then you should not use the Mail Merge Helper.
	  Instead, create the data source as a tab- or comma-delimited text file, in a
	  Microsoft Excel spreadsheet, or in a Microsoft Access database.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q96243 Print Merge Data Document Can Contain More Than 2000 Fields
	
	Organizing Data in Tables or Paragraphs
	---------------------------------------
	
	When you create a data source through the Mail Merge Helper, Word sets up the
	data source in a table. The table contains a column for each field name you
	specify in the Create Data Source dialog box. The first row of the table is your
	header row; each subsequent row contains the information for one data record.
	
	Although text might wrap in each cell, it will be printed correctly. If you use
	an existing data source or set up the data source in Word without using the Mail
	Merge Helper, you need to organize the data as follows:
	
	1. Unless you use a separate header source, make sure that the header record is
	  the first record (row of cells) in the data source. Make sure that there are
	  no spaces, text, or blank lines before the header record. The header record
	  can not contain any spaces. Each header field is limited to 40 characters and
	  must start with a letter. Each subsequent character must be a letter, a
	  number, or the underscore character. All header fields must be filled in.
	
	2. Make sure that each data record has the same number of data fields as there
	  are field names in the header record. If a record doesn't have information
	  for a certain field, leave the cell for that field blank.
	
	3. Arrange information in the data records in the same order, left to right, as
	  the corresponding field names in the header record. The order of your columns
	  in the data source is not important because you will control the placement of
	  your data in the mail merge main document.
	
	Designing a Data Source That Contains Many Fields
	-------------------------------------------------
	
	The Mail Merge Helper creates a table for the datafile. In Microsoft Word 97 for
	Windows the maximum number of fields (table columns) is 63. If you need more
	data fields in your data source, Word cannot organize the data in a table.
	Instead, you can set up your information as separate paragraphs in a Word
	document. The header record and each data record must end with a paragraph mark,
	which is the data record delimiter. Each field name in the header record and
	each field in the data record must be separated by a tab character or comma,
	which is the data field delimiter. If any of the data fields are empty, you will
	need to include a field delimiter to identify the empty field.
	
	If you are using a data source from a database or spreadsheet program, you can
	either export this data to an ASCII text format, separated by commas or tabs, or
	you may be able to attach the database using ODBC, DDE, or a converter. If you
	export your data to an ASCII format and Word doesn't automatically recognize the
	field and record delimiters, Word prompts you to select the delimiters when you
	first use the data source. When you set up a data source in this format in Word,
	you should use a paragraph mark as the data record delimiter and a tab character
	or comma as the data field delimiter.
	
	In addition to the general rules for organizing a data source, the following
	rules also apply to data sources set up as regular text:
	
	1. Press ENTER to end each data record with a paragraph mark. Make sure that
	  there are no extra paragraph marks between or following the data records.
	  Word interprets any empty paragraphs (blank lines) as empty records.
	
	2. Use the same field delimiter in both the header record and the data record.
	  For example, you cannot use tab characters in the header record and commas in
	  the data records. Because text in data fields may include commas, its better
	  to use tab characters.
	
	3. If a data record does not include information for a specific data field,
	  insert two tab characters or two commas to indicate the empty field. Do not
	  insert a second field delimiter if the data field is the last one in the data
	  record.
	
	4. Enclose the data field in quotation marks if the data field contains any one
	  of the following characters:
	
	   - A tab character or comma, if you are using that same character to separate
	     the fields.
	   - A line break or a paragraph mark.
	   - A character you specified as the list separator character in the
	     International section of Control Panel.
	
	5. If information in a data field contains quotation marks (" "), type the
	  characters twice ("" ""). When information from the data field is merged,
	  only one pair of quotation marks will be printed.
	
	Deciding When to Use a Separate Header Source
	---------------------------------------------
	
	In most cases, it's convenient to list the field name for each data field in the
	first row, or record, of the data source. However, you may want to list the
	field names in a separate header source for the following reasons:
	
	- You can use the same header row and field names to merge data from various
	  sources without having to repeat or change the header row in each data source
	  or change the merge field names in the main document.
	
	- Sometimes a data source from another program does not include a header
	  record, or field names in the header record do not match the merge field
	  names in your main document. If you cannot modify or add a header record in
	  the data source, for example, because the data source is read-only, you can
	  use a separate header source that contains the field names you specify.
	
	If you use a separate header source, you must specify both the header source and
	the data source before you can merge the main document with the data source.
	
	Designing a Header Source
	-------------------------
	
	When you specify a header source, keep the following rules in mind:
	
	1. The header source must contain the same number of field names as there are
	  data fields in the data source.
	
	2. Field names in the header source must be listed in the same order as the
	  corresponding information in the data source.
	
	3. Use the same field delimiter (either a tab character or a comma) for both the
	  header source and the data source.
	
	4. If your main document already contains merge fields, use the same merge
	  fields in your header source. If you don't, then you will need to replace the
	  merge fields in the main document to match the field names in the header
	  source. Once you specify a header source, you can edit it just as you do the
	  data source.
	
	Using a Header Record from Another Data Source
	----------------------------------------------
	
	If you have a data source that contains a header record, you can use it as a
	header source. For example, if you've broken up your data source into several
	documents, you can specify the field names in the header record of the first
	data source. When you merge from other data sources that don't have a header
	record, specify the first data source as the header source. Then, specify each
	of the remaining data sources in turn.
	
	Word ignores the data records from the first data source and uses only the header
	record.
	
	Types of Data You Can Use with Mail Merge
	-----------------------------------------
	
	You can merge virtually any type of information from a mail merge data source,
	including:
	
	- Any text or numbers.
	
	- Graphics for which you have a graphics filter installed. For a list of
	  graphics filters that come with Word, see Importing and Creating Graphics in
	  the "Microsoft Word User's Guide." For information about how to install
	  graphics filters and file converters, see Installing and Starting Word in
	  "Microsoft Word Quick Results."
	
	- If the graphics are contained in a data source from a program other than
	  Word, you must convert the file by using a file format converter.
	
	- Objects created in programs that support object linking and embedding (OLE),
	  such as Equation Editor.
	
	- Word fields that display a result, such as an {=} (Formula) field.
	
	To add information other than text or numbers to a data source you created in
	Word, you must display the data source in a document window. To do this, click
	the View Source button in the Data Form dialog box. You can also use the Open
	command on the File menu to open a Word data source. Then, insert the
	information in the appropriate column and row of the data source table.
	
	Types of Data You Cannot Use
	----------------------------
	
	You cannot merge text or graphics contained in a frame in the data source.
	However, you can position merge fields inside frames. When you merge the
	documents, the text and graphics from the data source are positioned in the
	frame.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta winword word97 kbmerge kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
