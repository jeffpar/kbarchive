---
layout: page
title: "Q103815: PC WFW: Template Truncation in Extensions Upgrade"
permalink: /kb/103/Q103815/
---

## Q103815: PC WFW: Template Truncation in Extensions Upgrade

	Article: Q103815
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail and Schedule+ Extensions for Windows for Workgroups, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may need to edit the template information fields for version 3.0 of
	Microsoft Mail and Schedule+ Extensions for Windows for Workgroups to reflect
	the 55-character limit that is the maximum the MS-DOS-based programs can
	display.
	
	The templates may require editing to ensure synchronization between Microsoft
	Mail 3.0 and the Windows for Workgroups postoffice. You should edit the
	templates before you perform the upgrade or the templates may become truncated.
	
	
	MORE INFORMATION
	================
	
	The template file is an ASCII file that can be created and edited with an ASCII
	editor such as the MS-DOS EDIT program. The template file consists of lines that
	each represent a line in the Administrator program template window. Each line
	must follow the format
	
	  <field_prompt>:~<entry_1>~<entry_2>~<entry_3>~<entry_4>~
	
	where:
	
	  Entry          Description
	  -------------------------------------------------------------------
	
	  Field prompt   Describes the line
	  Entry_1        Specifies the column at which the field data will
	                 appear
	  Entry_2        Number of columns wide the field data will be
	  Entry_3        Specifies the type of data
	  Entry_4        Specifies the default field data
	
	Each entry must be separated by a tilde (~). There must be five tildes on each
	line.
	
	The entire line in the Administrator program template file cannot exceed 55
	characters. The following is an example of a line in the template file:
	
	  Name:~7~48~AP~Name goes here~
	
	This will create a data field in the template for the field prompt "Name." The
	data will begin at column 7 and cannot exceed 55 columns. "AP" specifies any
	characters and punctuation. "Name goes here" contains the default data for the
	field. The total number of columns is determined by the number of characters in
	the field prompt, plus any spaces left before the starting position, plus the
	field data width.
	
	For a complete explanation of the template file and its function, refer to the
	following sources:
	
	- Chapter 8 in the version 3.2 Microsoft Mail for PC Networks "Administrator's
	  Guide"
	
	-or-
	
	- Chapter 9 in the version 3.0 Microsoft Mail for PC Networks "Administrator's
	  Guide"
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbScheduleSearch kbWFWSearch kbZNotKeyword3 kbMailScheduleX300
	Version           : :3.0
	
	=============================================================================
	
