---
layout: page
title: "Q72441: WD97: Suppressing Blank Spaces in a Print Merge (Mail Merge)"
permalink: /kb/072/Q72441/
---

## Q72441: WD97: Suppressing Blank Spaces in a Print Merge (Mail Merge)

{% raw %}

	Article: Q72441
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbusage kbfield word97 kbmergekbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you perform a print merge (or mail merge) in Word for Windows, a blank
	space appears and is printed if one field on a line is blank. A common example
	of this situation is a line with three name fields, such as the following:
	
	  {FNAME} {MI} {LNAME}
	
	In a record where all three fields are filled, the merged record spacing is
	correct, as in the following example:
	
	  Steven B. Levy
	
	In a record where the middle initial field {MI} is blank, an extra space occurs
	in the merged record, as in the following example:
	
	  Fukiko Ogisu
	
	Note: There are two spaces between the {FNAME} and {LNAME} results.
	
	RESOLUTION
	==========
	
	You can eliminate this extra space by using the conditional IF statements as in
	the following examples:
	
	The following conditional IF field will eliminate a blank space caused by an
	empty middle initial field:
	
	  {FNAME} {IF {MI} <> "" "{MI} "}{LNAME}
	
	The following conditional MERGEFIELD field will remove blank spaces in any field.
	For example, given the following fields,
	
	  {Prefix} {FirstName} {LastName}
	
	the following conditional statements will properly suppress the space normally
	included for any blank fields:
	
	  {IF {MERGEFIELD Prefix}<>"" "{MERGEFIELD Prefix} "}
	  {IF {MERGEFIELD FirstName}<>"" "{MERGEFIELD FirstName} "}
	  {IF {MERGEFIELD LastName}<>"" "{MERGEFIELD LastName}"}
	
	NOTE: To enter the field characters ({}), choose Field from the Insert menu (or
	press CTRL+F9).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbualink97 kbusage kbfield word97 kbmerge kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
