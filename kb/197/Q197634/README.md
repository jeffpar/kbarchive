---
layout: page
title: "Q197634: How to Create Pushpins by Importing Addresses from a Text File"
permalink: /kb/197/Q197634/
---

## Q197634: How to Create Pushpins by Importing Addresses from a Text File

	Article: Q197634
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbtool kbui kbimu
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets 98 
	- Microsoft Expedia Trip Planner 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create new pushpins in Expedia Streets 98 or
	Expedia Trip Planner 98 by importing addresses from a text file.
	
	MORE INFORMATION
	================
	
	The information in this article is divided into the following sections:
	
	- Address List File Requirements
	
	- Importing a Pushpin Set from an Address List File
	
	- Creating an Address List File
	
	- Using Latitude and Longitude
	
	Address List File Requirements
	------------------------------
	
	To import addresses from a text file, the file must meet the following
	requirements:
	
	- The file must be a plain-text (ASCII) file. Comma delimited (.csv) text files
	  are also acceptable.
	
	- The file must use a reserved character to separate the fields in each line.
	  Usually, the reserved character is a comma or a TAB character.
	
	- The file can contain a maximum of 1,000 lines.
	
	- Each line in the file must end with a paragraph mark.
	
	- Each line in the file can contain a maximum of 1,500 characters.
	
	- Each line in the file must contain the same number of fields and list the
	  fields in the same order.
	
	- Each line in the file must contain enough geographic information to locate a
	  unique address using one of the following combinations of fields, listed from
	  highest to lowest accuracy:
	   - Name, Latitude, and Longitude
	
	   - Name, Street Address, City, State, and ZIP Code
	
	   - Name and ZIP Code (State optional)
	
	   - Name and City (State optional)
	
	   - Name and State
	
	  NOTE: Streets and Trip Planner cannot import ZIP+4 postal codes. The ZIP Code
	  field must contain only 5-digit ZIP codes.
	
	- Each line in the file may also include a Name 2 field, an Altitude field, or
	  special additional fields for specific types of pushpins.
	   - The value in the Altitude field must be expressed in kilometers.
	
	   - If you want to create Text Balloon pushpins, each line in the file may
	     also include a Text field containing additional text to include in the
	     pushpin.
	
	   - If you want to create Web Link pushpins, each line in the file may also
	     include a Web Link field containing the address of a Web site you want to
	     associate with the pushpin.
	
	   - If you want to create Full-Sized Attachment pushpins, each line in the
	     file may also include a Rich Text File field, containing the path to and
	     name of the .rtf file you want to associate with the pushpin.
	
	     NOTE: Each line may also include Text and Web Link fields.
	
	NOTE: For the best results, enclose each field within standard quotation marks
	("). Do not use curly quotation marks.
	
	Importing a Pushpin Set from an Address List File
	-------------------------------------------------
	
	To import a pushpin set from an address list file, follow these steps:
	
	1. Confirm that the address list file you want to import is properly formatted.
	  For information about how to do this, refer to the "Address List File
	  Requirements" section earlier in this article.
	
	2. On the File menu, click Import Pushpins, and then click From Text File.
	
	3. In the File Name box, type the path to and name of the text file you want to
	  import, and then click Open.
	
	4. Under Select A Pushpin Type, click the type of pushpin you want to create.
	
	5. In the Symbol box, click the symbol you want to use for the pushpins you are
	  importing.
	
	6. To add the new pushpins to an existing set, click the pushpin set you want to
	  use in the Set box, and then click Next.
	
	  To create a new pushpin set, click New Set, type a name for the new pushpin
	  set, click OK, and then click Next.
	
	7. Under Separator, click the appropriate separator for the text file.
	
	8. If the first line in the text file contains header information, click to
	  select the First Row Contains Column Headings check box.
	
	9. Click Next.
	
	10. Under Data Preview, click to select the appropriate heading for each column,
	  and then click Next.
	
	11. Click Next, and then click Finish.
	
	12. If you are prompted to resolve an ambiguous address, use one of the
	  following methods:
	   - Click the correct address in the list of found addresses.
	
	   - Click Skip to skip the entry.
	
	   - Click Automatic to have the program select the best match.
	
	Creating an Address List File
	-----------------------------
	
	For the best results, use a spreadsheet or database program to create the address
	list file. Use one of the following combinations of geographic information,
	listed from highest to lowest accuracy:
	
	- Name, Latitude, Longitude
	
	- Name, Street Address, City, State, ZIP Code
	
	- Name, ZIP Code
	
	- Name, City, State
	
	- Name, State
	
	When you finish creating the address table, save it to a tab-delimited or
	comma-delimited text file, or copy the entire table, paste it into Notepad, and
	then save the text file in Notepad.
	
	If a spreadsheet or database program is not installed on your computer, follow
	these steps to create an address list file in Notepad:
	
	1. Start Notepad.
	
	2. Type the following line, and then press ENTER
	
	  " Name<TAB>Street Address<TAB>City<TAB>State<TAB>ZIP
	  Code" (without the quotation marks)
	
	  where <TAB> is the TAB key on the keyboard.
	
	3. Follow these steps to type the name and address for each pushpin you want to
	  create:
	  a. Type a name for the pushpin, and then press the TAB key.
	
	  b. Type the street address, and then press the TAB key.
	
	  c. Type the city, and then press the TAB key.
	
	  d. Type the state, and then press the TAB key.
	
	  e. Type the five digit ZIP code, and then press ENTER.
	
	4. When you finish typing the address list, save the file, and then quit
	  Notepad.
	
	To create an address list file using a different set of fields, follow the steps
	described above, substituting one of the following sets of fields:
	
	- Name<TAB>Latitude<TAB>Longitude
	
	- Name<TAB>ZIP Code
	
	- Name<TAB>City<TAB>State
	
	- Name<TAB>State
	
	Using Latitude and Longitude
	----------------------------
	
	Latitude measures how far north or south of the Equator a place is located.
	
	The Equator is at 0 degrees, the North Pole is at 90 degrees North latitude, and
	the South Pole is at 90 degrees South latitude.
	
	Longitude measures how far east or west of the Prime (Greenwich) Meridian a place
	is located, from 0 degrees to 180 degrees East or West.
	
	NOTE: The Prime Meridian runs through Greenwich, England.
	
	When you import a text file as a Pushpin set, you must use decimal degrees for
	latitude and longitude values.
	
	Use positive numbers for North or East values, and negative numbers for South or
	West values. To calculate the decimal degrees for a value expressed in degrees,
	minutes, and seconds, use the following formula:
	
	  Decimal degrees = Degrees + (Minutes/60) + (Seconds/360)
	
	NOTE: Streets and Trip Planner truncate latitude and longitude values longer than
	15 decimal places.
	
	Additional query words: multi multi-media media mm auto-map amap push pins
	
	======================================================================
	Keywords          : kbtool kbui kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch
	Version           : WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	
