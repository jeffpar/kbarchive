---
layout: page
title: "Q261233: Changing or Adding a Record Selection Formula in Crystal Reports"
permalink: /kb/261/Q261233/
---

## Q261233: Changing or Adding a Record Selection Formula in Crystal Reports

	Article: Q261233
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbinterop kbConfig kbMMC kbServer kbsms200 kbsms200bug kbQuery kbReport kbsmsAdmin
	Last Modified: 21-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to modify the record selection for a report when you
	are using the Crystal Info for Systems Management Server (SMS) snap-in.
	
	MORE INFORMATION
	================
	
	To modify the record selection of a report, use one of the following methods.
	
	Method 1
	--------
	
	Right-click the report name, click All Tasks, and then click Modify Report. The
	Info Report Designer tool starts and you can edit the report.
	
	To edit the selection formula, click Report, click Edit Selection Formula on the
	File menu, and then click Record. For record selection syntax, refer to the Info
	Report Designer Help.
	
	NOTE: If you modify the record selection formula and save the report without
	renaming it, you permanently modify the report file. If you want to save the
	original file, save the modified file with a different file name and then add a
	new report object to the Crystal Info for SMS snap-in. For more information
	about adding reports to the Crystal Info for SMS snap-in, refer to the SMS
	Help.
	
	Method 2
	--------
	
	To reschedule the report, right-click the report name in the Crystal Info for SMS
	snap-in, click All Tasks, and then click Schedule Report. On the Selection
	Formula tab, click Edit Selection Formula to type a selection statement.
	
	Sample Record Selection Formula 
	-------------------------------
	
	A record selection is composed of a field name, an operator, and a value. For
	example, if a report contains a customer name table and you want records that
	contain only the customer name John Smith, the record selection formula is:
	
	  {TableName.CustomerName} = "John Smith"
	
	In this sample selection formula:
	
	- {TableName.CustomerName} is the field name
	
	- = (equal sign) is the operator
	
	- "John Smith" is the value you want to include
	
	For more detailed information about all the operators and functions available,
	refer to the Info Report Designer Help.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbConfig kbMMC kbServer kbsms200 kbsms200bug kbQuery kbReport kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
