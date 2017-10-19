---
layout: page
title: "Q256260: MapPoint 2001: How to Prepare Data for Importing or Linking"
permalink: /kb/256/Q256260/
---

## Q256260: MapPoint 2001: How to Prepare Data for Importing or Linking

	Article: Q256260
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbtool kbui kbimukbfaq
	Last Modified: 07-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2001 
	- Microsoft Streets and Trips 2001 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to prepare data for importing or linking to a map in
	Microsoft MapPoint 2001.
	
	MORE INFORMATION
	================
	
	To prepare data for importing or linking to a map in MapPoint 2001:
	
	- Make sure that at least one column of data (the same field in each record)
	  contains location information, such as city, state, or ZIP Code information.
	
	  When you map data in MapPoint 2001, the program searches for a column of data
	  that contains location information, and then, based on this location
	  information, the program maps your data.
	
	  For example, if one field contains the name of a county, and another field
	  contains the average income of residents in each county, MapPoint 2001 first
	  locates the column of county names (the location information), and then maps
	  the average income of residents in each county to each county that is listed
	  in the County column.
	
	- Make sure that the data is entered in a consistent fashion.
	
	  For example, if you import a set of addresses, make sure that the street
	  address for each record is in the same field throughout the data set.
	
	- Select or create relevant column headings for each field.
	
	  The Link Data Wizard and the Import Data Wizard in MapPoint 2001 recognize
	  certain standard column headings, such as Address1, City, Information, Total
	  Sales, and ZIP Code. When you use a standard column heading, you ensure that
	  MapPoint 2001 can identify your data correctly.
	
	- Make sure that your address data is as complete as possible.
	
	  For example, if you include the name of the state in the address information,
	  MapPoint 2001 requires less time to map your data.
	
	- Organize your data so that each field or column is designated as a discrete
	  category of information, such as street address, city, ZIP/Postal Code,
	  state/province, or country. Do not place more than one category of
	  information into a single field.
	
	  For example, do not include an entire address in a single field.
	
	- If your data contains different types of location information, create a
	  different data file for each type of location information, and then link or
	  import the data from each data file to your MapPoint 2001 map.
	
	  For example, if your data contains records with complete addresses and records
	  with only ZIP Codes, create two separate data files, one file for complete
	  addresses and the other for ZIP Codes. Then link or import the data from each
	  data file to your MapPoint 2001 map.
	
	- Use the "Information" column heading for a field in which you want the
	  field's data to be displayed in either the information balloon of the
	  record's corresponding pushpin, or in the shaded or sized circles that you
	  may use to identify a point on the map.
	
	- Use the "Name1" or the "Name2" column heading for a field in which you want
	  the field's data to be displayed in either the gray area of the information
	  balloon of the record's corresponding pushpin, or in the shaded or sized
	  circles that you may use to identify a point on the map.
	
	- If the data that you want to link or import to a MapPoint 2001 map contains
	  the name of more than one country, make sure that the data includes a Country
	  field or column.
	
	- If you want to link or import data to a MapPoint 2001 map, your data must
	  contain a field that serves as a "primary key."
	
	  A primary key is database term for a field that uniquely identifies each
	  record in a data set. The primary key makes it possible to
	  identify and update a record, even if you change the name of the record. For
	  data that you want to import or link to MapPoint 2001, the primary key can be
	  a name, an address, or another category of information that serves as a
	  unique identifier.
	
	  If your data does not contain a primary key, add a field or a column to your
	  data, and then enter a unique number in each field.
	
	  To conveniently enter a primary key in a Microsoft Access database, create a
	  field for this purpose, and then format the field as AutoNumber.
	
	  To conveniently enter a primary key in a Microsoft Excel spreadsheet, select a
	  column for this purpose, and then use the Autofill feature to automatically
	  enter unique numbers in each cell in that column.
	
	  NOTE: Avoid five-digit primary keys, because MapPoint 2001 identifies
	  five-digit numeric data as ZIP Codes.
	
	- If your data file is a text (*.txt, *.csv, *.asc, or *.tab) file, use the TAB
	  key, a semicolon, or a comma to separate each field in your data.
	
	- When you import data from an Excel spreadsheet in which cells in a certain
	  column are formatted as currency, you must format the entire column as
	  currency.
	
	Additional query words: mp2001 st2001 map point preparation mapping formats
	
	======================================================================
	Keywords          : kbinterop kbtool kbui kbimu kbfaq
	Technology        : kbHomeProdSearch kbExpediaSearch kbMapptSearch kbMapPoint2001 kbExpediaStreets2001
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
