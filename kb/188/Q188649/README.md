---
layout: page
title: "Q188649: XADM: Error 291 with Exchange Bulk Import"
permalink: /kb/188/Q188649/
---

## Q188649: XADM: Error 291 with Exchange Bulk Import

{% raw %}

	Article: Q188649
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you edit an Exchange directory export .CSV file, some or all of the
	objects may fail re-import into Exchange with the following error message:
	
	  Event ID: 291
	  Source: MSExchangeDSImp
	  Type: Error
	  Category: None
	  Description: Unable to process object <alias name> because the import
	  line must contain the same number of fields as the header line.
	  <number>
	  were expected. <different number> were found.
	
	There will be one such error message for every object in the file that failed in
	this way.
	
	CAUSE
	=====
	
	The application in which the file was edited did not correctly preserve all
	fields in the original file. The most common cause of this problem is that the
	last column of the .CSV file contains blank values for some or all objects
	exported.
	
	For example, an Exchange export file may look like this:
	
	  Obj-Class,First Name,Last name,Hide from AB
	  Mailbox,Angela,Barbariol,1
	  Mailbox,Kim,Yoshida,
	
	The second mailbox has no value defined for "Hide from AB."
	
	After being imported to and then exported from an application for editing, the
	file may look like:
	
	  Obj-Class,First Name,Last name,Hide from AB
	  Mailbox,Angela,Barbariol,1
	  Mailbox,Kim,Yoshida
	
	Observe that the final comma delimiting the blank field for the second mailbox
	line has been removed from the edited file.
	
	NOTE: The export header example shown here has had several required fields
	omitted for readability and is not actually a valid header.
	
	Unusual characters can also cause an editor's export parser to incorrectly break
	fields into pieces or combine them incorrectly, thus corrupting the .CSV file.
	
	WORKAROUND
	==========
	
	In most cases where trailing blank fields have been dropped, the problem can be
	resolved by moving a field that has populated values for all objects to the end
	of the export header.
	
	For example, you can make the "Directory Name" column the final one. Or you can
	populate the "Hide from AB" column with zeroes for all users.
	
	NOTE: "Hide from AB" is the final field in a default Exchange mailbox export, and
	this field often has unpopulated values for most users. A zero value for "Hide
	from AB" leaves a mailbox visible in the Address Book; a 1 hides the mailbox.
	
	If you are already experiencing this problem with a file, using the workaround
	described above usually corrects the problem without requiring creation of a
	fresh export file.
	
	Another solution that often works is to add a comma to the end of each problem
	line.
	
	MORE INFORMATION
	================
	
	To further troubleshoot .CSV files that fail in this way, choose an object line
	that failed and create a new file containing only this line and the header line.
	Use Notepad or a similar simple editor that reads and saves .CSV files without
	format conversion.
	
	Export the object again from Exchange, and, using Notepad, create another file
	that contains only the header line and the object line.
	
	Careful side-by-side comparison of the two files usually reveals where the
	problem lies.
	
	Techniques such as the following examples can make it easier to see problems and
	differences in long export lines.
	
	Numbering Fields
	----------------
	
	Each comma in a line designates a new field, with the exception of commas that
	come between double quotes (","). Therefore, you should place a number after
	each comma, and the highest number on each line should match.
	
	  1 Obj-Class,2 First Name,3 Last name,4 Display Name,5 Hide from AB
	  1 Mailbox,2 Angela,3 Barbariol,4 "Barbariol, Angela",5 1
	  1 Mailbox,2 Kim,3 Yoshida,4 "Yoshida, Kim"
	
	Columnar Comparison
	-------------------
	
	When comparing by columns, preserve all characters from each original line in
	each column, especially commas.
	
	  Obj-Class,        Mailbox,                 Mailbox,
	  First Name,       Angela,                  Kim,
	  Last name,        Barbariol,               Yoshida,
	  Display Name,     "Barbariol, Angela",     "Yoshida, Kim"
	  Hide from AB      1
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
