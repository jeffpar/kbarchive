---
layout: page
title: "Q142340: WD97: Date, Currency Results Incorrect Merging from Access"
permalink: /kb/142/Q142340/
---

## Q142340: WD97: Date, Currency Results Incorrect Merging from Access

{% raw %}

	Article: Q142340
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbualink97 word97 kbmergekbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you perform a mail merge using ODBC with a Microsoft Access or Microsoft
	Excel data source, the merge results for Date, Phone Number, and Currency fields
	are incorrect. For example, the Date field appears in the following format:
	
	  1995-10-22 00:00:00
	
	The Currency field appears in the following format:
	
	  12.00
	
	The Phone Number field from Microsoft Access appears in the following format:
	
	  -7081234567.00
	
	CAUSE
	=====
	
	The data appears in its native, stored format in Microsoft Access or Microsoft
	Excel. When you use DDE to convert the Microsoft Access or Microsoft Excel data
	instead of ODBC, the data is "masked" to display the correct format.
	
	RESOLUTION
	==========
	
	Method 1: Use DDE to connect to the Microsoft Access or Excel database
	----------------------------------------------------------------------
	
	To do this, select the Select Method (Confirm Conversion) check box in the Open
	Data Source dialog box, locate and select your Access/Excel database, and then
	click Open. In the Confirm Data Source dialog box, select Microsoft Access or
	Microsoft Excel Database via DDE (*.mdb) and click OK.
	
	NOTE: If DDE is not available, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q137076 WD: Can't Use Microsoft Access Files (.mdb or DDE) with Word
	
	Method 2: Use MyDateFieldToLong
	-------------------------------
	
	In the Access database, type the following statement for the date column
	
	  MyDateFieldToLong: Format([MyDateField],"Long Date")
	
	where MyDateFieldToLong is the actual name of the field being used to label the
	date column.
	
	Method 3: Use ODBC and add a picture switch to the Date/Currency fields
	-----------------------------------------------------------------------
	
	Include a numeric picture switch (\#) in the Currency field, so that the Currency
	field looks like this:
	
	  {mergefield number \# $####,0.0}
	
	NOTE: The {mergefield number \# $####,0.0} string works for SQL Server 6 as
	well.
	
	Include a numeric picture switch (\#) in the Phone Number field, so that the
	Phone Number field looks like this:
	
	  (mergefield phone \# ###'-'###'-'####}
	
	NOTE: The hyphen inside the mergefield is in quotation marks. Also, the quotation
	marks are single quotation marks.
	
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q121938 WD: Hyphens Don't Display Correctly with Numeric Picture Switch
	
	Include a date-time picture switch (\@) in the Date field, so that the Date field
	looks like this:
	
	  {mergefield date \@ "MMMM d, yyyy"}
	
	NOTE: The picture switch is case-sensitive; also, you must use quotation marks
	around the picture string.
	
	Additional query words: winword access database data source odbc dde mail merge print merging merged records results fields mergefield currency money dollars $ date time wrong incorrect change how to switch picture numeric number decimal thousandths telephone word97 access97 excel97 excel8
	
	======================================================================
	Keywords          : kbualink97 word97 kbmerge kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
