---
layout: page
title: "Q105888: WD97: How to Merge Conditional Number of Records to Same Page"
permalink: /kb/105/Q105888/
---

## Q105888: WD97: How to Merge Conditional Number of Records to Same Page

	Article: Q105888
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbfield word97 kbmerge
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Word, you can merge a conditional number of records to the same
	page.
	
	MORE INFORMATION
	================
	
	To merge a conditional number of records to the same page, use a combination of
	SET, IF, and NEXTIF fields. For example, you could use this method to merge all
	records with the same name to one page in the merge and create a new page in the
	merge when a new name is encountered in the data file.
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The following example uses a data file with employee names (Employee) and
	projects they are working on (Projects). The Check field is used in the data
	file to mark the last record of a particular name.
	
	Sample Data File:
	
	  Employee     Project     Check
	  John Doe     4578j
	  John Doe     86785x
	  John Doe     543p          1
	  Jane Doe     87x
	  Jane Doe     89976m        1
	  Sam Smith    7897r
	  Sam Smith    857t
	  Sam Smith    78974x
	  Sam Smith    7868p         1
	
	The main document should be set up as follows, with a copy of the conditional
	statements equal to the maximum number of projects for each employee (four in
	the above example).
	
	NOTE: To type field brackets ( { } ) in a Word document, press CTRL+F9. To turn
	field codes on or off, press ALT+F9.
	
	  Employee     Project
	  {MERGEFIELD Employee}     {MERGEFIELD Project}{set duplicate {if
	  {MERGEFIELD Check}="1" "off" "on"} }{nextif {mergefield check}=""}{if
	  {duplicate}="on" "P
	  t{MERGEFIELD Project}"}{set duplicate {if {MERGEFIELD Check}="1"
	  "off" "on"} }{nextif {mergefield check}=""}{if {duplicate}="on" "P
	  t{MERGEFIELD Project}"}{set duplicate {if {MERGEFIELD Check}="1"
	  "off" "on"} }{nextif {mergefield check}=""}{if {duplicate}="on" "P
	  t{MERGEFIELD Project}"}{set duplicate {if {MERGEFIELD Check}="1"
	  "off" "on"} }{nextif {mergefield check}=""}{if {duplicate}="on" "P
	  t{MERGEFIELD Project}"}
	
	Where "P" represents a paragraph mark that pushes the next Project to a new line,
	and "t" represents a tab character that aligns the next project under the
	previous project.
	
	The resulting merge document appears as follows:
	
	  Employee     Project
	  John Doe     4578j
	               86785x
	               5436435p
	
	  --- Page Break ---
	  Jane Doe     87x
	               89976m
	
	  --- Page Break ---
	  Sam Smith    7897r
	               857t
	               78974x
	               7868p
	
	Additional query words: catalog index list table print merge mail group variable different
	
	======================================================================
	Keywords          : kbualink97 kbfield word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
