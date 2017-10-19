---
layout: page
title: "Q259772: Visual FoxPro 6.0 Sample: Calculates the Number of Business Days"
permalink: /kb/259/Q259772/
---

## Q259772: Visual FoxPro 6.0 Sample: Calculates the Number of Business Days

	Article: Q259772
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbvfp600 kbXBase kbGrpDSFox kbDSupport
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Bizdays.exe file is a sample that provides Microsoft Visual FoxPro 6.0 code
	to calculate the number of business days that occur between two user-defined
	dates. The calculation process excludes weekends. In addition, it also excludes
	holidays, which are defined by rules that are contained in an accompanying
	table/dbf files.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Bizdays.exe
	  (http://download.microsoft.com/download/vfox60/sample/600/w9x2k/en-us/Bizdays.exe)
	
	Release Date: Apr-25-2000
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The Bizdays.exe file contains the following files:
	
	+---------------------+
	| File Name    | Size | 
	+---------------------+
	| Busidays.prg | 3533 | 
	+---------------------+
	| Holidays.dbf | 926  | 
	+---------------------+
	| Readme.txt   | 5095 | 
	+---------------------+
	
	The Busidays.prg file is a program that is written specifically for Microsoft
	Visual FoxPro 6.0. A portion of the program utilizes StrictDateEntry formats
	that were introduced in Visual FoxPro 6.0.
	
	The Busidays.prg file calculates the number of business days that occur between
	two dates. It requires that the following parameters are passed:
	
	- In a situation where the current system date is being used, only one
	  parameter must be passed. It can be either a future or a past date and it
	  must be in a valid DATE FORMAT command as shown in the following two
	  examples:
	
	  =BUSIDAYS(DATE(2000,1,1)) && or another method
	
	  =BUSIDAYS({^2000-01-01})
	
	- In a situation where the current system date is not used, both dates must be
	  passed as shown in the following two examples:
	
	  =BUSIDAYS(DATE(2000,1,1),DATE(2000,2,1)) & or another method
	
	  =BUSIDAYS({^2000-01-01},{^2000-02-01})
	
	By default, the programming considers the occurrence of a Saturday or a Sunday
	not to be business days.
	
	Ignoring Holidays When Calculating Business Days
	------------------------------------------------
	
	One feature of the program is the use of a Holidays.dbf file that is a table of
	rules that apply to the occurrence of holidays. The Holidays.dbf file table
	consists of five fields, as follows:
	
	Name:
	
	This is the name of the given holiday. There are some coded references to one
	holiday (New Year's Day) in a procedure of the Busidays.prg file. That procedure
	is called HolidayFilter.
	
	Monthnum:
	
	This is the numeric value of the specific Month in which a given holiday occurs.
	The order is from 1 to 12, from January to December. These are consistent with
	the return values of the MONTH() function.
	
	Daynum:
	
	This is the numeric value of the specific Day of the Month on which a given
	holiday occurs. This should be used to indicate that a holiday always falls on a
	specific date. If this value is anything other than zero, then the following
	Dayoccur and Dayofweek fields must be zero.
	
	Dayoccur:
	
	This should be used only in cases where the holiday does not fall on a specific
	date. For example, Thanksgiving Day always occurs on the 4th Thursday in
	November. Here, the Dayoccur value should be 4. In the event that a holiday
	falls on the last occurrence of a day of the week, then the Dayoccur value
	should be 9. An example of this is Memorial Day, as this occurs on the last
	Monday in the month of May.
	
	Dayofweek:
	
	This, similar to the Dayoccur field, should be used only in cases where the
	holiday does not fall on a specific date. Here, the values should correspond to
	the return values of the DOW() function (where no parameter other than the date
	is passed). The order of the days of the week runs from Sunday to Saturday, from
	1 to 7.
	
	The holiday table is originally populated with the ten holidays which, as of
	April 14, 2000, are observed by the United States of America Federal Government.
	These affect Government Offices, Financial Institutions, and the Stock Market,
	among many others. They are:
	
	1. New Year's Day: January 1
	
	2. Martin Luther King, Jr. Birthday: January, 3rd Monday
	
	3. Presidents Day: February, 3rd Monday
	
	4. Memorial Day: May, final Monday
	
	5. Independence Day: July 4
	
	6. Labor day: September, 1st Monday
	
	7. Columbus Day: October, 2nd Monday
	
	8. Veterans Day: November 11
	
	9. Thanksgiving Day: November, 4th Thursday
	
	10. Christmas Day: December 25
	
	The above holiday information translates to the following holidays table:
	
	+-----------------------------------------------------------------------------+
	| Name                             | Monthnum | Daynum | Dayoccur | Dayofweek | 
	+-----------------------------------------------------------------------------+
	| New Year's Day                   | 1        | 1      | 0        | 0         | 
	+-----------------------------------------------------------------------------+
	| Martin Luther King, Jr. Birthday | 1        | 0      | 3        | 2         | 
	+-----------------------------------------------------------------------------+
	| Presidents Day                   | 2        | 0      | 3        | 2         | 
	+-----------------------------------------------------------------------------+
	| Memorial Day                     | 5        | 0      | 9        | 2         | 
	+-----------------------------------------------------------------------------+
	| Independence Day                 | 7        | 4      | 0        | 0         | 
	+-----------------------------------------------------------------------------+
	| Labor Day                        | 9        | 0      | 1        | 2         | 
	+-----------------------------------------------------------------------------+
	| Columbus Day                     | 10       | 0      | 2        | 2         | 
	+-----------------------------------------------------------------------------+
	| Veterans Day                     | 11       | 11     | 0        | 0         | 
	+-----------------------------------------------------------------------------+
	| Thanksgiving Day                 | 11       | 0      | 4        | 5         | 
	+-----------------------------------------------------------------------------+
	| Christmas Day                    | 12       | 25     | 0        | 0         | 
	+-----------------------------------------------------------------------------+
	
	General policy with regard to the observance of holidays that fall on a weekend
	is as follows:
	
	If a holiday falls on Saturday, the previous Friday is taken off.
	
	If a holiday falls on Sunday, the following Monday is taken off.
	
	The exception to this is New Year's Day. This must be observed in the same year
	in which it occurs. Therefore, if it falls on any weekend day, it is always
	observed on the following Monday.
	
	Holidays may be added to or removed from the Holidays.dbf file rules table as
	necessary. The HolidayFilter procedure ignores records that are marked for
	deletion.
	
	With the Holidays.dbf file table, the Busidays.prg file offers additional
	intelligence in determining the number of Business Days that occur within a
	specified time frame.
	
	Using the Busidays.prg File
	---------------------------
	
	The Busidays.prg and Holidays.dbf files should be located in the same folder. If
	this folder is neither the DEFAULT nor the CURRENT folder, then it should be
	along the path as determined by a SET PATH statement.
	
	The following example demonstrates how to store the number of work days that have
	occurred between January 1, 2000 and April 14, 2000 to a variable:
	
	  nBizDays = BUSIDAYS({^2000-01-01},{^2000-04-14})
	
	The actual number of days between these dates is 104. Given the rules that are
	contained in the Holidays.dbf file, the value stored to nBizDays is 72. The
	excluded 32 dates are comprised of:
	
	14 Saturdays (January 1, which is a Saturday, is not included)
	
	15 Sundays
	
	Three Holidays, consisting of: New Year's Day (observed on January 3, 2000),
	Martin Luther King, Jr. Birthday (observed on January 17, 2000), and Presidents
	Day (observed on February 21, 2000)
	
	Additional query words: Bizdays
	
	======================================================================
	Keywords          : kbfile kbSample kbvfp600 kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	
	=============================================================================
	
