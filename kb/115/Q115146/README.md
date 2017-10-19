---
layout: page
title: "Q115146: WD97: &quot;Too Many Data Fields&quot; Managing Mail Merge in Source View"
permalink: /kb/115/Q115146/
---

## Q115146: WD97: &quot;Too Many Data Fields&quot; Managing Mail Merge in Source View

	Article: Q115146
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In a mail merge main document, if you click the Edit Data Source button on the
	Mail Merge toolbar, click the View Source button, click the Manage Fields button
	on the Database toolbar, and then click OK, one of the following error messages
	may occur:
	
	  Record 1 contained too many data fields.
	
	  -or-
	
	  Record 1 contained too few data fields.
	
	These errors only occur if you switch to source view. They do not occur if you
	modify your data source in data form view.
	
	CAUSE
	=====
	
	This happens if you are using a separate header source. When you click the
	Manage Fields button on the Database toolbar, Word opens the data source file
	rather than the header source file and treats the first data row as the header
	row.
	
	Word stores any changes you make in the data source instead of the header source
	file. Then, when you click OK to close the Manage Fields dialog box, Word
	displays the "...too many data fields" error message.
	
	The same error message also occurs each time you open your data source; for
	example, it occurs when you click the View Merged Data button on the Mail Merge
	toolbar and switch from one record to another.
	
	NOTE: If you notice that the first record in your data source contains field
	names instead of data, you may have edited your data file in Source view, or you
	may not have a separate header source file attached after all.
	
	WORKAROUND
	==========
	
	NOTE: Once you receive the error message, the data file will not be usable
	unless you open the file and compare the number of columns to the number of
	columns in your data header file. More than likely, the number of columns in the
	data source will be greater than the number of columns in the header file. You
	will need to delete the columns from the data file that should not be there, and
	you will need to make sure that the column information matches up with the
	column information from the data header source. Otherwise, you will need to
	create a new data file.
	
	When you use a mail merge header source file, perform all your data management
	tasks in Data Form view, not in Source view. In other words, do not click the
	View Source button in the Data Form dialog box.
	
	If you want to manage your mail merge data source in Source view, you cannot use
	a separate header source file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the versions of Word listed at
	the beginning of this article.
	
	
	Additional query words: disappeared records switched gone
	
	======================================================================
	Keywords          : word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
