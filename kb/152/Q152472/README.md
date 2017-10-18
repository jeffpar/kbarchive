---
layout: page
title: "Q152472: XADM: How to Specify a Tab or Space as Separator in .csv File"
permalink: kb/152/Q152472/
---

## Q152472: XADM: How to Specify a Tab or Space as Separator in .csv File

	Article: Q152472
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Directory Import and Directory Export on the Tools menu in the
	Microsoft Exchange Administrator program, it is possible to use a space or tab
	as the separator for the .csv file.
	
	MORE INFORMATION
	================
	
	If you are performing a command line import or export (ADMIN /i or ADMIN /e),
	you will need to specify the separators in the Options file.
	
	The options are as follows:
	
	If you are using a space delimited .csv file,
	
	  ColumnSeparator=32
	  QuoteCharacter=32
	  MVSeparator=32
	
	If you are using a TAB delimited .csv file,
	
	  ColumnSeparator=09
	  QuoteCharacter=09
	  MVSeparator=09
	
	For example, if you are performing a command line import, your command line
	should be the following:
	
	  admin /i user.csv /o import.ini
	
	where the IMPORT.INI file has the following:
	
	  [Import]
	  ColumnSeparator=09
	
	If you are exporting to an existing .csv file that contains a separator other
	than what is specified by ColumnSeparator, the columnseparator will be ignored.
	In this case, you should export to a new file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
